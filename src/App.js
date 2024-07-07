
import './App.css';
import { Route, Routes } from "react-router-dom";
import Register from "./Register"
import Home from './Home';
function App() {
  return (
    <>
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Register/>} />
      </Routes>
    </>
  );
}

export default App;
