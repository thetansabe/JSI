import { db } from "./firebase-init.js";
import {
  collection,
  addDoc,
  doc,
  getDocs,
  deleteDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

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

async function renderCart() {
  //B1: lay duoc data tu firestore
  const items = await getAllFirestore("cart");
  console.log("From cart: ", items);
  //B2: render DOM
  for (let item of items) {
    const content = `
        <div class="row">
          <img src="${item.img}" alt="">
  
          <div class="content">
              <p>Name: ${item.name}</p>
              <p>Price: $${item.price}</p>
          </div>
  
          <input type="number" value="1" min="1" max="50">
          
          <i class="fa-solid fa-check"></i>
        </div>
      `;

    document.getElementById("container").innerHTML += content;
  }
}

await renderCart();
