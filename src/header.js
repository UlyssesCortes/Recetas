import React from 'react'
import './header.css'

const Header = () => {


    return (
        <header>
            <a href='#'>
                <p class='fas fa-carrot'></p>
            </a>
            <ul class='headerLinks'>
                <li>Home</li>
                <li>Recepies</li>
                <li>Easy cook</li>
            </ul>
        </header >
    )

}

export default Header