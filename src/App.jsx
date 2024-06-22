import Navbar from "./_components/Navbar";
import Home from "./_components/Home";
import Recipe from "./_components/Recipe";
import Pricing from "./_components/Pricing";
import About from "./_components/About";

function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="recipe">
        <Recipe />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="about">
        <About />
      </div>
    </div>
  );
}

export default App;
