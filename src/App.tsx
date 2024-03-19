import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CurrentDateContext } from "./context";

import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import EnterPage from "./pages/EnterPage/EnterPage";
// import AddImage from "./pages/AddImage/AddImage";
import moment from "moment";
import "animate.css";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
  const [toDay] = useState(moment().format("DD.MM.YYYY"));

  return (
    <CurrentDateContext.Provider value={toDay}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/enter" element={<EnterPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/f" element={<Footer />}>
          <Route path="/f/h" element={<Header/>} >
            <Route path="/f/h/order" element={<OrderPage />} />
          </Route>
          
        </Route>

        {/* <Route path="/add" element={<AddImage/>}/> */}
      </Routes>
    </CurrentDateContext.Provider>
  );
};

export default App;
