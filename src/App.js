import "./App.css";
import Header from "./Header";
import Search from "./Search";
import Results from "./Results";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="Container">
        <Search />
        <Results/>
      </div>
    </div>
  );
}

export default App;
