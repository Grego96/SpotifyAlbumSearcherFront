import "./App.css";
import { Routes, Route } from "react-router-dom";
import Searcher from "./pages/Searcher";
import Home from "./pages/Home";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="containter">
      <div className="row">
        <div className="col-md-2 spotiNav">
          <Link to="/search">Search</Link>
          <Link to="/">Home</Link>
        </div>
        <div className="col-md-10 spotiMain">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Searcher />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
