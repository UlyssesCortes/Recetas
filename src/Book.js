import React, { useState } from "react"
// import IngredientsBtn from "./ingredientsBtn";

const Book = (props) => {

    const [isOpen, setIsOpen] = useState(false)
    const { img, title, ingredients } = props;

    const testParagraph = () => {
        return (
            <div >
                <p>{ingredients.map((ingredient) => {
                    return (
                        <p> {"* " + ingredient}</p>
                    )
                })}</p>
            </div >
        )

    }

    return (
        <article className="book">
            <h1>{title}</h1>
            <img src={img} alt="" />
            <button onClick={() => setIsOpen(!isOpen)} className="btn">Receta</button>
            <div>
                <p>{isOpen && testParagraph()}</p>
            </div>
        </article >
    )
}
export default Book