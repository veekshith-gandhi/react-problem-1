/** @format */

import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterCountry } from "../../store/Actions/filterCountryAction";
import { getData } from "../../store/Actions/getDetailsAction";
import "./filtercountry.scss";
const FilterCountry = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handlesubmit = () => {
    if (name) {
      filterCountry(name)(dispatch);
    }
  };
  return (
    <div className="country-container">
      <span>FilterCountry</span>
      <input
        placeholder="enter country"
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <button onClick={handlesubmit}>Filter</button>
        <button onClick={() => getData()(dispatch)}>NoFilter</button>
      </div>
    </div>
  );
};

export default FilterCountry;
