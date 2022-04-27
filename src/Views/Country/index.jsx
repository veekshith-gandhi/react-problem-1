/** @format */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCountry } from "../../store/Actions/addCountryAction";
import "../Country/country.scss";

const CountryView = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const { error, loading } = useSelector((state) => state);
  const load = loading.loading;
  const err = error.error;

  const handleSubmit = () => {
    addCountry(text)(dispatch);
  };

  if (load) {
    return <div>loading......</div>;
  }
  if (err) {
    return <div>something went wrong......</div>;
  }
  return (
    <div className="countryContainer">
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Country"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
export default CountryView;
