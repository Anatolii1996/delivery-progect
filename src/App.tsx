import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CurrentDateContext } from "./context";

import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import OrderPage from "./pages/OrderPage/OrderPage";
// import AddImage from "./pages/AddImage/AddImage";
import moment from "moment";
import 'animate.css';
import "./App.css";
import Footer from "./components/Footer/Footer";


const App = () => {
  const [toDay] = useState(moment().format("DD.MM.YYYY"));

  return(
    <CurrentDateContext.Provider value={toDay}>
       <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/admin" element={<AdminPage/>}/>
      <Route path="/f" element={<Footer/>} >
         <Route path="/f/order" element={<OrderPage/>}/>
      </Route>
     
      {/* <Route path="/add" element={<AddImage/>}/> */}
    </Routes>
    </CurrentDateContext.Provider>
   
    
  )
};

export default App;
