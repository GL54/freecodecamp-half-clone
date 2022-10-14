import React from "react";
import "./App.css";

//libraries

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Test from "./components/Home";
import SignIn from "./components/SignIn";
import GoogleLogin from "./components/GoogleLogin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <div className="contianer">
          <Header />

          <Routes>
            <Route path="/" element={<Test />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/g" element={<GoogleLogin />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
