import React from "react";
import { BrowserRouter as Router,
     Routes, 
     Route } from "react-router-dom";
     
import { Home } from "./pages/home/home";


export function AppRoutes() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path="/home" element={<Home/>}/>
              
          </Routes>
      </Router>
    </div>
  );
}