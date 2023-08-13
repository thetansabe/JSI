import { db } from "./firebase-init.js";
import {
  collection,
  addDoc,
  doc,
  getDocs,
  deleteDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

async function addPokemon(pokemon) {
  try {
    const pokemonRef = await addDoc(collection(db, "pokemons"), pokemon);
    console.log("Document written with ID: ", pokemonRef.id);
  } catch (error) {
    console.log("Error when add pokemon: ", error);
  }
}

async function getPokemons() {
  try {
    const pokemons = [];
    const snapShots = await getDocs(collection(db, "pokemons"));
    snapShots.forEach((doc) => {
      const pokemon = { docId: doc.id, ...doc.data() };
      pokemons.push(pokemon);
    });

    return pokemons;
  } catch (e) {
    console.error("Error get document: ", e);
  }
}

async function deletePokemon(docId) {
  try {
    await deleteDoc(doc(db, "pokemons", docId));
    console.log("Pokemon deleted with id", docId);
  } catch (e) {
    console.log("Error delete document: ", e);
  }
}

async function updatePokemon(docId, newPokemon) {
  try {
    const pokemonRef = doc(db, "pokemons", docId);
    await updateDoc(pokemonRef, newPokemon);
    console.log("Pokemon updated with id", docId);
  } catch (e) {
    console.log("Error update document: ", e);
  }
}

const pokemons = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/41x1%2BoeHThL.jpg",
    name: "Charmander",
    price: 12.99,
  },
  {
    img: "https://media.karousell.com/media/photos/products/2019/08/22/pokemon_detective_pikachu_plush_claw_machine_1566455788_35b0c58f_progressive.jpg",
    name: "Pikachu",
    price: 14.99,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQojdquQD0VjhkyXMXTutZ3WCELv31hbRQf1GOL7BKiyqHRAhn_YuQWtzQ57c2La6WeVnQ&usqp=CAU",
    name: "Bulbasaur",
    price: 15.99,
  },
  {
    img: "https://i.ebayimg.com/images/g/MCYAAOSwUndkBtyc/s-l1200.jpg",
    name: "Meow Two",
    price: 10.99,
  },
];

function addCart(index) {
  console.log(pokemons[index]);
}

window.addCart = addCart;