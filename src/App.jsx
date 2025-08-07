import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ScrollingEffects from "./pages/ScrollingEffects";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-amber-50 overflow-hidden">
        <Navbar />
        <main style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scolling-effects" element={<ScrollingEffects/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
