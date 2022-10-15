import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Csrf from "./pages/Csrf";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const API_HOST = "http://localhost:8000/api";

  const [xcsrf, setXcsrf] = useState("");

  async function getCsrfToken() {
    const response = await fetch(`${API_HOST}/csrf/`, {
      credentials: "include",
    });
    const data = await response.json();
    setXcsrf(data.csrfToken);
  }

  useEffect(() => {
    getCsrfToken();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login xcsrftoken={xcsrf} />} />
          <Route path="/testing" element={<Csrf />} />
        </Routes>
      </Router>
      <ToastContainer autoClose={2000} />
    </>
  );
}

export default App;
