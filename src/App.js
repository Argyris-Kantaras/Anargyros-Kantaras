import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import SayHi from "./Pages/Contact/SayHi";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        {/* <Route path="/contact" element={<SayHi />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
