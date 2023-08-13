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

// const newPokemon = {
//   name: "abc",
//   attack: 100,
//   defense: 100,
//   hp: 100,
// };

// await addPokemon(newPokemon);

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

// deletePokemon("4gP039g0T4mrwbGsUhyd");
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

await updatePokemon("ANb6eW5TvdXqlilFyfD6", {name: "hello world", hp: 1000});
const pokemons = await getPokemons();
console.log(pokemons);