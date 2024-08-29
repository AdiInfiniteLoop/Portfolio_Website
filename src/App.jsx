import "./app.scss";

import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>

      <section id="About">
        <Parallax type="about" />
      </section>

      <section id="Skills">
        <Services />
      </section>
      <section id="Projects">
        <Portfolio />
      </section>
    </div>
  );
};

export default App;
