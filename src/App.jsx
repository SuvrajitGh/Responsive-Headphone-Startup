import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Lastest from "./Components/Lastest";
import { Overview } from "./Components/Overview";
import Products from "./Components/Products"
import Review from "./Components/Review";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Lastest />
      <Overview/>
      <Products/>
      <Review/>
      <Footer/>
    </>
  );
}

export default App;
