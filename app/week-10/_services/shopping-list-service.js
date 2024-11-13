// Import statements for Week 10 Assignment
import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
  try {
    // Creating the query reference
    const itemsRef = collection(db, `users/${userId}/items`);

    // Executing the query
    const itemsSnapshot = await getDocs(itemsRef);

    // Using map to process the documents
    const mappedItems = itemsSnapshot.docs.map((itemsDoc) => ({
      id: itemsDoc.id,
      ...itemsDoc.data(),
    }));

    // Returning the results
    return mappedItems;
  } catch (fetchItemsError) {
    console.error("Error in getItems: ", fetchItemsError);
  }
};

export const addItem = async (userId, item) => {
  try {
    const docRef = await addDoc(collection(db, `users/${userId}/items`), item);
    return docRef.id;
  } catch (error) {
    console.error("Error in addItem: ", error);
  }
};
