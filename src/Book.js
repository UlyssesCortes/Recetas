import React, { useState } from "react"


const Book = (props) => {

    const [isOpen, setIsOpen] = useState(false)
    const { img, title, ingredients } = props;

    const ingredient = () => {
        return (
            <div className="ingredientContainer">
                <ul className="ingredientList">{ingredients.map((ingredient) => {
                    return (
                        <li className="ingredientItem"> {ingredient}</li>
                    )
                })}</ul>
            </div >
        )
    }

    return (
        <article className="book">
            <h1 className="title">{title}</h1>
            <img src={img} alt="" />
            <button onClick={() => setIsOpen(!isOpen)} className="btn">Receta</button>
            <div>
                <p>{isOpen && ingredient()}</p>
            </div>
        </article >
    )
}
export default Book