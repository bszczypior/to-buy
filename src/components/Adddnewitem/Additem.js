import React,{useState} from "react";
import style from "./Additem.module.css";
import { FaRegCheckSquare, } from "react-icons/fa";
import { GiSandwich,GiChemicalDrop, GiBroom, GiPerfumeBottle} from "react-icons/gi";
import firebase from "../../firebase";

const Additem = ({user}) => {
const [title,setTitle]=useState("")
const [category,setCategory]=useState("")
const [categoryTitle,setCategoryTitle]=useState("")
  const addFun = () =>{
    const db = firebase.firestore();
    db.collection(`${user}`).doc().set({
     title:title,
     category:category
  })
  .then(function() {
      setTitle("")
      setCategory("")
      setCategoryTitle("") 
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
  }



  return (
    <div className={style.additem}>
       <input  value={title} onChange={(e)=>setTitle(e.target.value.toLocaleUpperCase())} />
       
        <div className={style.icons}>
           
            <GiSandwich className={style.categoryIcon} onClick={()=>{
            setCategory("food") 
            setCategoryTitle("Jedzenie")}}/>
            
     
               <GiChemicalDrop className={style.categoryIcon} onClick={()=>{
                 setCategoryTitle("Chemia gospodarcza")
                 setCategory("chemisty")}}/>
            
            
               <GiBroom className={style.categoryIcon} onClick={()=>{
                 setCategory("homeeq")
                 setCategoryTitle("Produkty gospodarstwa domowego")
              }}/>
            
            
                <GiPerfumeBottle className={style.categoryIcon} onClick={()=>{
                  setCategoryTitle("Produkty drogeryjne")
                  setCategory("drugstore")}}/>
           
           
        </div>
        <div className={style.textOutput}>
  <h2>{categoryTitle}</h2>
        </div>
       
        <FaRegCheckSquare className={style.addButton} onClick={addFun}></FaRegCheckSquare>

    </div>
  );
};
export default Additem;
