import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TopBar from "./TopBar.tsx";
import Home from "./Home.tsx";
import Destination from "./Destination.tsx";
import Crew from "./Crew.tsx";
import Technology from "./Technology.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/destination" element={<Destination />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
