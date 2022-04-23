/** @format */

import { Route, Routes } from "react-router-dom";
import HomePage from "../Views/Home";
import CityView from "../Views/City";
import CountryView from "../Views/Country";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/addcountry" element={<CountryView />} />
      <Route path="/addcity" element={<CityView />} />
    </Routes>
  );
};

export default Router;
