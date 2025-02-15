import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import PatientAdmission from "./Pages/PatientAdmission";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}>
            Home
          </Route>
          <Route path="/PatientAdmission" exact element={<PatientAdmission />}>
            Patient Admission
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
