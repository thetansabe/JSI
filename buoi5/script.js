import { db } from "./firebase-init.js";
import {
  collection,
  addDoc,
  doc,
  getDocs,
  deleteDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

async function addPokemon(pokemon) {
  try {
    const pokemonRef = await addDoc(collection(db, "pokemons"), pokemon);
    console.log("Document written with ID: ", pokemonRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const newPokemon = {
  name: "Charmander",
  attack: 100,
  defense: 100,
  hp: 100,
};

await addPokemon(newPokemon)

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

// const pokemons = await getPokemons();
// console.log(pokemons);

async function deletePokemon(docId) {
  try {
    await deleteDoc(doc(db, "pokemons", docId));
    console.log("Pokemon deleted with id", docId);
  } catch (e) {
    console.log("Error delete document: ", e);
  }
}

// await deletePokemon("mBI7oYDxvDT1xND98Fnq");
// const pokemons = await getPokemons();
// console.log(pokemons);

async function updatePokemon(docId, newPokemon){
    try{
        const pokemonRef = doc(db, "pokemons", docId);
        await updateDoc(pokemonRef, newPokemon);
        console.log("Pokemon updated with id", docId);
    }catch(e){
        console.log("Error update document: ", e);
    }
}

// await updatePokemon("rwwA0jJFb3V9IQOmkcGw", {name: "hello world3"});
// const pokemons = await getPokemons();
// console.log(pokemons);