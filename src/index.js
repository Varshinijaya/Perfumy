import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css"

import Navbar from "./components/Navbar"
import Search from "./components/Search"
import Products from "./components/Products"
import About from "./components/About"
import Footer from "./components/Footer"
import {component} from "react"

const root=ReactDOM.createRoot(document.getElementById("root"))






root.render(
<>
<Navbar></Navbar>
<Search></Search>
<Products></Products>
<About></About>
<Footer></Footer>
</>
)