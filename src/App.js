import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { languages } from "./pages/language";

function App() {
  // useState to keep track of the current language
  const [activeLang, setActiveLang] = useState("English");
  // Current language is passed in to lang to get data from languages.js
  // It works by matching the current state to the Id in language.js and then returns it as data
  const lang = languages.find((p) => p.id.toString() === activeLang.toString());

  // Handle Language change
  // It's in App.js due to resets to original state if put in Landing
  const handleLang = () => {
    if (activeLang === "English") {
      setActiveLang("Indonesian");
    } else {
      setActiveLang("English");
    }
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Landing handleLang={handleLang} lang={lang} />}
          />
          <Route
            path="/register"
            element={<Register handleLang={handleLang} lang={lang} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
