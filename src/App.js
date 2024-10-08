import React, { useEffect, useState } from "react";
import "./App.css";
import Admin from "./components/Admin";
import UserRaiseTicket from "./components/UserRaiseTicket";
import UserAllTicket from "./components/UserAllTicket";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import ProtectedRoute from "./components/ProtectedRoute";
import AllTickets from "./components/AllTickets";
import { AuthProvider } from "./components/AuthContext";

function App() {
  const [message, setMessage] = useState("");
  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
            <Route path="/userraiseticket" element={<ProtectedRoute><UserRaiseTicket /></ProtectedRoute>} />
            <Route path="/userallticket" element={<ProtectedRoute><UserAllTicket /></ProtectedRoute>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/allqueries" element={< AllTickets/>}/> 
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
