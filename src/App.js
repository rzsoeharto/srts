import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/testingpurposes/Login";
import Csrf from "./pages/testingpurposes/Csrf";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/testing" element={<Csrf />} />
        </Routes>
      </Router>
      <ToastContainer autoClose={2000} />
    </>
  );
}

export default App;
