import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  );
}
