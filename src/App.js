import React, { useState, useEffect } from "react";
import style from "./App.module.css";
import Header from "./components/Header/Header";

import Category from "./components/Category/Category";
import { FaPlusCircle } from "react-icons/fa";
import List from "./components/List/List";
import Modal from "./components/Modal/Modal";
import { IoIosCloseCircle } from "react-icons/io";
import firebase from "./firebase";
function App() {
  const [showmodal, setShowmodal] = useState(false);
  const addNewItem = () => {
    setShowmodal(!showmodal);
  };
  const [category, setCategory] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    var db = firebase.firestore();
    db.collection("kb").onSnapshot(snapshot => {
    
      const newTitle = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setItems(newTitle);
    });
  }, []);

  const [filterItems, setFilterItems] = useState([
    { title: "wybierz kategorię" }
  ]);
  const onChangecat = category => {
    setCategory(category);
    setFilterItems(items.filter(it => it.category === category));
  };
  return (
    <div className={style.app}>
      <Modal show={showmodal} />
      <Header />
      <Category category={category} changeCat={onChangecat} />
      <List cat={category} items={filterItems} />

      {showmodal ? (
        <IoIosCloseCircle className={style.closeIcon} onClick={addNewItem} />
      ) : (
        <FaPlusCircle className={style.plusIcon} onClick={addNewItem} />
      )}
    </div>
  );
}

export default App;
