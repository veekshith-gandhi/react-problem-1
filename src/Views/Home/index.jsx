/** @format */

import TableContent from "../Table";
import "../Home/homepage.scss";
import FilterCountry from "../FilterCountry";
import FilterPopulation from "../FilterPopulation";

const HomePage = () => {
  return (
    <div className="homeContainer">
      <FilterCountry />
      <TableContent />
      <FilterPopulation />
    </div>
  );
};

export default HomePage;
