import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TermsConditions from "./pages/terms-conditions";
import PrivacyPolicy from "./pages/privacy-policy";
import Resource from "./pages/Resource";
import Mission from "./pages/Mission";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />{" "}
          <Route path="/terms-conditions" element={<TermsConditions />} />{" "}
          <Route path="/misson" element={<Mission />} />{" "}
          <Route path="/resources" element={<Resource />} />{" "}
          <Route path="/contact" element={<Contact />} />{" "}
          <Route path="/about" element={<About />} />{" "}
          <Route path="/" element={<Home />} />{" "}
        </Routes>{" "}
      </div>{" "}
    </BrowserRouter>
  );
}

export default App;
