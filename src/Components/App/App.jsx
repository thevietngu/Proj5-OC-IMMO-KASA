import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "../../Pages/Home/Home";
import Error from "../../Pages/Error/Error";
import About from "../../Pages/About/About";
import Logements from '../../Pages/Logement/Logement';

// Components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:logementId" element={<Logements />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
