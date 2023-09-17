import { db } from './firebase-init.js';
import {
  collection,
  addDoc,
  doc,
  getDocs,
  deleteDoc,
  updateDoc,
} from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js';

async function addFirestore(item, collectionName) {
  try {
    const itemRef = await addDoc(collection(db, collectionName), item);
    console.log('Document written with ID: ', itemRef.id);
  } catch (error) {
    console.log('Error when add item: ', error);
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
    console.error('Error get document: ', e);
  }
}

async function deleteFirestore(docId, collectionName) {
  try {
    await deleteDoc(doc(db, collectionName, docId));
    console.log('Item deleted with id', docId);
  } catch (e) {
    console.log('Error delete document: ', e);
  }
}

async function updateFirestore(docId, newItem, collectionName) {
  try {
    const itemRef = doc(db, collectionName, docId);
    await updateDoc(itemRef, newItem);
    console.log('Item updated with id', docId);
  } catch (e) {
    console.log('Error update document: ', e);
  }
}
