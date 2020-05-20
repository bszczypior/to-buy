import React from 'react'
import style from './Header.module.css'
import { FiLogOut } from "react-icons/fi";
const Header = ({logoutFun,login}) =>{
    return(
        <div className={style.header}>
          <h1>ToBuy</h1> 
        <FiLogOut onClick={logoutFun.bind(null,false)} className={login ? style.iconLogOut : style.iconNone}></FiLogOut>
          
        </div>
    )
}
export default Header;