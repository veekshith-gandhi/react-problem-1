/** @format */

import { useDispatch } from "react-redux";
import {
  sortingPopulationAsc,
  sortingPopulationDesc,
} from "../../store/Actions/sortingPopulationAction";

const FilterPopulation = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <span>FilterPopulation</span>
      <button onClick={() => sortingPopulationAsc()(dispatch)}>Asc</button>
      <button onClick={() => sortingPopulationDesc()(dispatch)}>Desc</button>
    </div>
  );
};

export default FilterPopulation;
