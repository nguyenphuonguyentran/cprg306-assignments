"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import { addItem, getItems } from "../_services/shopping-list-service";
import MealIdeas from "./meal-ideas";
import Link from "next/link";
import { useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState(null);
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const login = async () => {
    await gitHubSignIn();
  };

  const logout = async () => {
    await firebaseSignOut();
  };

  const handleAddItem = async (item) => {
    try {
      const userId = user.uid;
      const newItemId = await addItem(userId, item);
      setItems([...items, { ...item, id: newItemId }]);
    } catch (error) {
      console.error("Error in handleAddItem: ", error);
    }
  };

  const handleItemSelect = (item) => {
    console.log(item);
    const cleanedName = item.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      ""
    );

    setSelectedItemName(cleanedName.split(",")[0].trim());
  };

  const loadItems = async () => {
    try {
      const userId = user.uid;
      const fetchedItems = await getItems(userId);
      setItems(fetchedItems);
    } catch (error) {
      console.error("Error in loadItems: ", error);
    }
  };

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  return (
    <main className="flex bg-center bg-cover bg-gradient-to-r from-cyan-700 to-violet-200 w-full h-full">
      <div className="flex w-full">
        <div className="w-1/2 pr-4">
          <div className="flex flex-col justify-center items-center">
            <h1 className="p-5 text-7xl text-transparent font-bold font-sans bg-clip-text bg-gradient-to-r from-slate-200 to-white justify-center items-center flex">
              Shopping List
            </h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
            <div className="flex flex-col gap-3 justify-center items-center font-sans font-semibold">
              <button>
                <Link
                  href="/week-10"
                  className="flex no-underline hover:underline text-slate-700 bg-white p-3 rounded-3xl hover:shadow-md hover:shadow-cyan-900"
                >
                  Go back to Main Page ⬅️
                </Link>
              </button>
              <button>
                <Link
                  href="/week-10/profile-page"
                  className="flex no-underline hover:underline text-slate-700 bg-white p-3 rounded-3xl hover:shadow-md hover:shadow-cyan-900"
                >
                  Go to Profile Page ➡️
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 pl-4 mt-40 bg-white w-80 h-fit rounded-md">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
