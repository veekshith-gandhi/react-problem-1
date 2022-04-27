/** @format */

import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterCountry } from "../../store/Actions/filterCountryAction";
import { getData } from "../../store/Actions/getDetailsAction";

const FilterCountry = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handlesubmit = () => {
    if (name) {
      filterCountry(name)(dispatch);
    }
  };
  return (
    <div>
      <span>FilterCountry</span>
      <input
        placeholder="enter country"
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handlesubmit}>Filter</button>
      <button onClick={() => getData()(dispatch)}>NoFilter</button>
    </div>
  );
};

export default FilterCountry;
