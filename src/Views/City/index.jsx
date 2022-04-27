/** @format */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCity } from "../../store/Actions/addDetailAction";
import "./city.scss";

const CityView = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state);
  const load = loading.loading;
  const err = error.error;

  const handleSubmit = () => {
    if (city || country || number) {
      const payload = {
        country,
        city,
        population: Number(number),
      };
      addCity(payload)(dispatch);
    } else {
      prompt("enter valid input");
    }
  };
  if (load) {
    return <div>loading......</div>;
  }
  if (err) {
    return <div>something went wrong......</div>;
  }
  return (
    <div className="cityContainer">
      <div className="cityInputField">
        <input
          type="text"
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Enter Country"
        />
        <input
          type="text"
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <input
          type="number"
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter population"
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
export default CityView;
