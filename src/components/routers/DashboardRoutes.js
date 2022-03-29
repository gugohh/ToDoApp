import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "../nav/NavBar";
import DcScreen from "../dc/DcScreen";
import MarvelScreen from "../marvel/MarvelScreen";
import SearchScreen from "../search/SearchScreen";
import HeroScreen from "../hero/HeroScreen";

const DashboardRoutes = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="dc" element={<DcScreen />} />
        <Route path="marvel" element={<MarvelScreen />} />
        <Route path="hero" element={<HeroScreen />} />

        <Route path="search" element={<SearchScreen />} />

        <Route path="/" element={<MarvelScreen />} />
      </Routes>
    </>
  );
};

export default DashboardRoutes;
