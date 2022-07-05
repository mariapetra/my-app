import React from "react"

// components
import ReactLogo from "./react.png"

export default function Nav() {
    return (
        <>
         <ReactLogo />
        <nav>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>     
        </nav>       
        </>


    )
}