import React from "react"
import {Router, Routes, Route} from "react-router-dom"

//pages
import Home from "./components/Home/Home"

//components
import Nav from "./components/Nav/Nav"

//styles
import "./index.css"

function App() {
  return (
    <Router>
      <>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />


        </Routes>
      
      </>
    </Router>
  );
}

export default App;