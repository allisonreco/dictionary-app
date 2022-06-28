import "./App.css";
import Header from "./Header";
import Search from "./Search";
import Results from "./Results";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      
        <div className="Container">
          <Header />
          <Search />
          <Results />
          <Footer />
        </div>
      
    </div>
  );
}

export default App;
