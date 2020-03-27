import React from "react";
import style from "./Modal.module.css";
import Additem from "../Adddnewitem/Additem";

const Modal = ({ show }) => {
  return (
    <div className={show ? style.modal : style.modalunshow}>
      <Additem/>
    </div>
  );
};

export default Modal;
