import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage/LoginPage";
import 'animate.css';
import "./App.css";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
    </Routes>
    
  )
};

export default App;
