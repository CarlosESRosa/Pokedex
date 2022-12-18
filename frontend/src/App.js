import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import PokeInfo from "./pages/PokeInfo";
import Favorites from "./pages/Favorites";

import "./pages/Home/Home.css";
import "./pages/PokeInfo/PokeInfo.css";
import "./pages/Login/Login.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokeInfo />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
