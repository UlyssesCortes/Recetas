import React, { useState } from "react"
// import IngredientsBtn from "./ingredientsBtn";





const Book = (props) => {

    const [isOpen, setIsOpen] = useState(false)
    const { img, title, ingredients } = props;
    const ingredientsArr = ingredients;


    const ingredientsMap = () => {
        ingredients.map((ingredient) => {
            return (
                <main>
                    <p>{ingredient}</p>
                    {console.log(ingredient)}
                    {console.log(typeof ingredient)}
                </main>
            )
        })
    }


    const ingredientsForEach = () => {
        ingredientsArr.forEach((ingredient) => {
            return (
                <div>
                    <p>Hello</p>
                    <p>{ingredient}</p>
                    {console.log(ingredient)}
                    {/* {console.log(typeof ingredient)} */}
                </div>
            )
        })
    }

    const forEachFunction = (arr) => {
        arr.forEach((ingredient) => {
            <p>{ingredient}</p>
        })
    }


    const testParagraph = () => {
        return (
            <div >
                <p>{ingredients}</p>
                {/* <p>{ingredients.forEach((ingredient) => { <p>{ingredient}</p> })}</p> */}
            </div >
        )

    }

    return (
        <article className="book">
            <h1>{title}</h1>
            <img src={img} alt="" />
            <button onClick={() => setIsOpen(!isOpen)} className="btn">Receta</button>
            {console.log(props)}
            <div>
                {ingredients.map((ingredient) => {
                    <p>{ingredient}</p>
                    // { console.log(ingredient) }
                })}

            </div>

            {/* {isOpen && <div className="content"> {ingredientsForEach()}</div>} */}

        </article >
    )
}
export default Book