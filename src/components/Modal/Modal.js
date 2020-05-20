import React from "react";
import style from "./Modal.module.css";
import Additem from "../Adddnewitem/Additem";


const Modal = ({ show,user }) => {
  return (
    <div className={show ? style.modal : style.modalunshow}>
      <Additem user={user}/>
    </div>
  );
};

export default Modal;
