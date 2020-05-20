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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [curuser, setUser] = useState("");
  const [username , setUserName]=useState("")
  const [isLogin, setLogin] = useState(false);
  const [showmodal, setShowmodal] = useState(false);
  const addNewItem = () => {
    setShowmodal(!showmodal);
  };
  const [category, setCategory] = useState("");
  const [items, setItems] = useState([]);
  const [filterItems, setFilterItems] = useState([
    { title: "wybierz kategorię" },
  ]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        var uid = user.uid;
        var email = user.email;
       
        setUser(uid);
        setUserName(email)
        var db = firebase.firestore();

        db.collection(`${uid}`).onSnapshot((snapshot) => {
        
          const newTitle = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setItems(newTitle);
        });
      } else {
        // User is signed out.
        // ...
      

      }
    });
  }, []);

  
  const onChangecat = (category) => {
    setCategory(category);
    setFilterItems(items.filter((it) => it.category === category));
  };

  const logoutFunc = (isLogin) => {
   
   firebase.auth().signOut().then(()=>{
     setLogin(isLogin)
     setUser('')
     setUserName('')
     setCategory('')
     setFilterItems([{ title: "wybierz kategorię" }])
    })
  };

  const regFun = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };
  const logFun = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(setLogin(true))
      .then(setEmail(''), setPassword(''))
      .catch(function (error) {
        setLogin(false)
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

      
  };
  return (
    <div className={style.app}>
      <Modal show={showmodal} user={curuser} />
      <Header logoutFun={logoutFunc} name={username} login={isLogin} />
      {isLogin ? (
        <div>
          <Category category={category} changeCat={onChangecat} />
          <List cat={category} items={filterItems} user={curuser} />
        </div>
      ) : (
        <div className={style.loginForm}>
          <input
            placeholder={"Email"}
            onChange={(e) => setEmail(e.target.value)}
            className={style.inputPlace}
          ></input>
          <input
            placeholder={"Password"}
            onChange={(e) => setPassword(e.target.value)}
            className={style.inputPlace}
          ></input>
           <button onClick={logFun} className={style.inputPlaceButton}>logowanie</button>
           <h4>Jeśli nie masz konta po wprowadzeniu danych zarejestruj się</h4>
          <button onClick={regFun} className={style.inputPlaceButton}>rejestracja</button>
         
         
        </div>
      )}
      {showmodal ? (
        <IoIosCloseCircle className={isLogin? style.closeIcon: style.iconnone} onClick={addNewItem}  />
      ) : (
        <FaPlusCircle className={isLogin ? style.plusIcon : style.iconnone} onClick={addNewItem} />
      )}
    </div>
  );
}

export default App;
