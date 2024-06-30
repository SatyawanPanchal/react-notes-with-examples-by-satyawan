import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import "./components/style.css"
import Contactus from "./components/Contactus";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul className="navbar-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contactus/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
