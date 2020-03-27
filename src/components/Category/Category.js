import  React from 'react'
import style from './Category.module.css'
import { GiSandwich,GiChemicalDrop, GiBroom, GiPerfumeBottle} from "react-icons/gi";

const Category = ({changeCat}) => {
   
    return(
        <div className={style.categoryWrapper}>
        <div className={style.categoryItem} onClick={changeCat.bind(null,"food")}><GiSandwich/></div>
        <div className={style.categoryItem}  onClick={changeCat.bind(null,"chemisty")}><GiChemicalDrop/></div>
        <div className={style.categoryItem} onClick={changeCat.bind(null,"homeeq")}><GiBroom/></div>
        <div className={style.categoryItem} onClick={changeCat.bind(null,"drugstore")}><GiPerfumeBottle/></div>

    </div>
    )
   
}
export default Category;