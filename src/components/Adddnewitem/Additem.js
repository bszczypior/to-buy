import React,{useState} from "react";
import style from "./Additem.module.css";
import { FaRegCheckSquare, } from "react-icons/fa";
import { GiSandwich,GiChemicalDrop, GiBroom, GiPerfumeBottle} from "react-icons/gi";
import firebase from "../../firebase";

const Additem = () => {
const [title,setTitle]=useState("")
const [category,setCategory]=useState("")
  const addFun = () =>{
    const db = firebase.firestore();
    db.collection("kb").doc().set({
     title:title,
     category:category
  })
  .then(function() {
      setTitle("")
       
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
  }



  return (
    <div className={style.additem}>
       <input  value={title} onChange={(e)=>setTitle(e.target.value)} />
        <form>
            <span>
            <GiSandwich className={style.food} onClick={()=>setCategory("food")}/>
            </span>
            <span>
               <GiChemicalDrop className={style.food} onClick={()=>setCategory("chemisty")}/>
            </span>
            <span>
               <GiBroom className={style.food} onClick={()=>setCategory("homeeq")}/>
            </span>
            <span>
                <GiPerfumeBottle className={style.food} onClick={()=>setCategory("drugstore")}/>
            </span>
            
        </form>
        <FaRegCheckSquare className={style.addButton} onClick={addFun}></FaRegCheckSquare>

    </div>
  );
};
export default Additem;
