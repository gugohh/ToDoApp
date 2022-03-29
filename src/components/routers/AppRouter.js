import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Navbar } from "../nav/NavBar";

import DcScreen from "../dc/DcScreen";
import LoginScreen from "../login/LoginScreen";
import MarvelScreen from "../marvel/MarvelScreen";
import SearchScreen from "../search/SearchScreen";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/dc" element={<DcScreen />} />
        <Route exact path="/marvel" element={<MarvelScreen />} />
        <Route exact path="/search" element={<SearchScreen />} />
        <Route exact path="/login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
