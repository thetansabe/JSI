import { db } from "./firebase-init.js";
import {
  collection,
  addDoc,
  doc,
  getDocs,
  deleteDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

async function addFirestore(item, collectionName) {
  try {
    const itemRef = await addDoc(collection(db, collectionName), item);
    console.log("Document written with ID: ", itemRef.id);
  } catch (error) {
    console.log("Error when add item: ", error);
  }
}

async function getAllFirestore(collectionName) {
  try {
    const items = [];
    const snapShots = await getDocs(collection(db, collectionName));
    snapShots.forEach((doc) => {
      const item = { docId: doc.id, ...doc.data() };
      items.push(item);
    });

    return items;
  } catch (e) {
    console.error("Error get document: ", e);
  }
}

async function deleteFirestore(docId, collectionName) {
  try {
    await deleteDoc(doc(db, collectionName, docId));
    console.log("Item deleted with id", docId);
  } catch (e) {
    console.log("Error delete document: ", e);
  }
}

async function updateFirestore(docId, newItem, collectionName) {
  try {
    const itemRef = doc(db, collectionName, docId);
    await updateDoc(itemRef, newItem);
    console.log("Item updated with id", docId);
  } catch (e) {
    console.log("Error update document: ", e);
  }
}

// const pokemons = [
//   {
//     img: "https://images-na.ssl-images-amazon.com/images/I/41x1%2BoeHThL.jpg",
//     name: "Charmander",
//     price: 12.99,
//   },
//   {
//     img: "https://media.karousell.com/media/photos/products/2019/08/22/pokemon_detective_pikachu_plush_claw_machine_1566455788_35b0c58f_progressive.jpg",
//     name: "Pikachu",
//     price: 14.99,
//   },
//   {
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQojdquQD0VjhkyXMXTutZ3WCELv31hbRQf1GOL7BKiyqHRAhn_YuQWtzQ57c2La6WeVnQ&usqp=CAU",
//     name: "Bulbasaur",
//     price: 15.99,
//   },
//   {
//     img: "https://i.ebayimg.com/images/g/MCYAAOSwUndkBtyc/s-l1200.jpg",
//     name: "Meow Two",
//     price: 10.99,
//   },
// ];

// let count = 2;

// async function addCart(index) {
//   console.log(pokemons[index]);
//   count = count + 1;
//   document.getElementById("counter").innerHTML = count;
//   //add pokemon len firebase
//   await addFirestore(pokemons[index], "cart");
// }

// window.addCart = addCart;
