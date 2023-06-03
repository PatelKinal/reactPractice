import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import movies from "./movie.json";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        {movies.map((element, index) => {
          return (
            <Movie
              key={index}
              title={element.title}
              year={element.year}
              img={element.poster}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
