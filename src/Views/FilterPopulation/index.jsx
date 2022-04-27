/** @format */

import { useDispatch } from "react-redux";
import {
  sortingPopulationAsc,
  sortingPopulationDesc,
} from "../../store/Actions/sortingPopulationAction";

import "./filterpopulation.scss";
const FilterPopulation = () => {
  const dispatch = useDispatch();
  return (
    <div className="pop-Container">
      <span>FilterPopulation</span>
      <div>
        <button onClick={() => sortingPopulationAsc()(dispatch)}>Asc</button>
        <button onClick={() => sortingPopulationDesc()(dispatch)}>Desc</button>
      </div>
    </div>
  );
};

export default FilterPopulation;
