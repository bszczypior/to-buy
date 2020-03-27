import React, { useState, useEffect } from "react";
import style from "./List.module.css";
import firebase from "../../firebase";

const List = ({ items, cat }) => {
  var db = firebase.firestore();
  const [newList, setNewList] = useState([]);

  useEffect(() => {
    setNewList(items);
  }, [items]);
  const deleteItem = id => {
    console.log(id);

    db.collection("kb")
      .doc(id)
      .delete()
      .then(function() {
        setNewList(newList.filter(item => item.id !== id));
      })
      .catch(function(error) {
        alert("Błąd!");
      });
  };

  return (
    <div className={style.listWrapper}>
      <ul>
        {newList.length > 0 ? newList.map(item => (
          <li
            key={item.title}
            category={item.category}
            className={style.itemList}
            onClick={deleteItem.bind(null, item.id)}
          >
            {item.title}
          </li>
        )): 
        <li className={style.itemNoList}>Brak produktów w tej kategorii</li>
        }
      </ul>
    </div>
  );
};

export default List;
