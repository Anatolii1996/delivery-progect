import { Routes, Route } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AdminPage from "./pages/AdminPage/AdminPage";


import 'animate.css';
import "./App.css";


const App = () => {
  return(
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/admin" element={<AdminPage/>}/>
    </Routes>
    
  )
};

export default App;
