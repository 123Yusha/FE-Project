import React from "react"
import "../App.css"
import logo from "../assets/ncnewslogo.png"
import { Nav } from "./Nav"

export function Header() {
return(
    <header className="header">
      <img src={logo} alt="Northcoders News Logo" className="header-logo" />  
      <Nav />
    </header>
);
}