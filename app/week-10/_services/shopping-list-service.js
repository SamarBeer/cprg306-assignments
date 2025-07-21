import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../_utils/firebase";




export async function getItems(userId) {
  const itemsRef = collection(db, "users", userId, "items");
  const snapshot = await getDocs(itemsRef);
  const items = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
  return items;
}

export async function addItem(userId, item) {
  const itemsRef = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsRef, item);
  return docRef.id;
}



