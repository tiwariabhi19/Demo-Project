import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import { FaSun, FaMoon } from "react-icons/fa";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      <Header />
      <div className="mode-toggle-container">
        <button className="mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
      <main>
        <Slider />
      </main>
      <Footer />
    </div>
  );
}

export default App;
