import "./App.css";

import movies from "./movie.json";
import React, { useState } from "react";
import Movie from "./components/Movie";
import Header from "./components/Header";
import { func } from "prop-types";

function App() {
  const [element, setElement] = useState(1);

  function inc(n) {
    setElement(element + n);
  }

  function dec() {
    setElement(element - 1);
  }

  return (
    <div className="App">
      <Header />
      <div className="main">
        {/* {movies.map((element, index) => {
          return (
            <Movie
              key={index}
              title={element.title}
              year={element.year}
              img={element.poster}
            />
          );
        })} */}

        <h1 className="heading">{element}</h1>
        <div className="buttons">
          <button className="btn" onClick={() => inc(2)}>
            Increment
          </button>
          <button className="btn" onClick={dec}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
