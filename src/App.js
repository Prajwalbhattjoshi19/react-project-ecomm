import React, { useCallback, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/home";
import ViewCart from "./Pages/viewCart/viewCart";
import '../src/index.css';
import { getCartFromDB, getProductListFromDB } from "./Pages/viewCart/viewCartUtility";
import Login from "./Pages/Login/Login";
import { getLogedInUserName } from "./Pages/Login/LoginUtility";
const App = () => {
  var [userName,setUserName]=useState(getLogedInUserName());
  {console.log("App.js userName=",userName)}
  return (
    <Router>
       <div className="app-container">
      <Routes>
        <Route path="/" element={<Home userName={userName} setUserName={setUserName}/>} />
        <Route path="/login" element={<Login  userName={userName} setUserName={setUserName}/>}/>
        <Route path="/viewCart"  element={<ViewCart cart={getCartFromDB()} productList= {getProductListFromDB()} userName={userName} />}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
