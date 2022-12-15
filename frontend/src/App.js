import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />} />
        {/* 
        <Route path="/register" element={ <Register/> } />
        <Route path="/home" element={ <Home/> } />
        */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
