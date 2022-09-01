import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Receipe from "./components/Receipe";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import axios from "axios";

function App() {

  const [receipe, setReceipe] = useState([]);
  useEffect(() => {
    axios({
      url: "http://localhost:4040/getReceipeData",
      method: "GET",
      headers: { "Content-type": "Application/json" }
    }).then((response) => {
      console.log(response.data)
      setReceipe(response.data.receipe);

    });
  }, []);

  return (
    <div className="App">

      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Receipe receipe={receipe} />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
