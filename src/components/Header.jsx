import React from "react";
import Logo from "../static/images/troll-face.png"
function Header() {
    return (
        <header className="header">
        <img 
            src={Logo}
            className="header--image"
        />
        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--project">React App</h4>
        </header>
    )
}

export default Header