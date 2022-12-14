import React, { useState } from "react"


const Book = (props) => {

    const [isOpen, setIsOpen] = useState(false)
    const { img, title, ingredients, cookTime } = props;

    const ingredient = () => {
        return (
            <div className="ingredientContainer">
                {/* <ul className="ingredientList">{ingredients.map((ingredient) => {
                    return (
                        <li className="ingredientItem"> {ingredient}</li>
                    )
                })}</ul> */}
                <ul className="ingredientList">{ingredients && ingredients.map((elem) => <li li className="ingredientItem">{elem}</li>)}</ul>
            </div >
        )
    }

    return (
        <article className="book">
            <h1 className="title">{title} <div><i class="gg-timer"></i> <p>{cookTime}</p></div></h1>
            <img src={img} alt="" />
            <button onClick={() => setIsOpen(!isOpen)} className="btn">Receta</button>
            <div>
                <p>{isOpen && ingredient()}</p>
            </div>
        </article >
    )
}
export default Book