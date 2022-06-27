import "./App.css";
import Header from "./Header";
import Search from "./Search";
import Results from "./Results";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="Container">
        <Search />
        <Results/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
