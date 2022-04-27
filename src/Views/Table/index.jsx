/** @format */

import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../store/Actions/getDetailsAction";
import Portal from "../../Components/portal";
import "../Table/table.scss";
import { deleteCountryAction } from "../../store/Actions/deleteCountryAction";
import { editAction } from "../../store/Actions/editAction";
const TableContent = () => {
  const [isDispatched, setIsdDispatched] = useState(false);
  const dispatch = useDispatch();
  const { detail, loading, error } = useSelector((state) => state);
  const [isOpen, setIsOpen] = useState(false);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [number, setNumber] = useState("");
  const [editId, setEditId] = useState();

  useEffect(() => {
    if (!isDispatched) {
      setIsdDispatched(true);
      getData()(dispatch);
    }
  }, [isDispatched, dispatch]);

  const handleDelete = (id) => {
    deleteCountryAction(id)(dispatch);
  };

  const handleSubmit = () => {
    const payload = {};
    if (city) {
      payload.city = city;
    }
    if (country) {
      payload.country = country;
    }
    if (number) {
      payload.population = Number(number);
    }
    editAction(editId, payload)(dispatch);
  };

  if (loading.loading) {
    return <div>Loading.....</div>;
  }
  if (error.error) {
    return <div>something went wrong.....</div>;
  }
  return (
    <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Country</th>
            <th>City</th>
            <th>Population</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {detail?.map((country, i) => {
            return (
              <tr key={i}>
                <td> {country.id}</td>
                <td> {country.country}</td>
                <td> {country.city}</td>
                <td> {country.population}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => {
                      setIsOpen(true);
                      setEditId(country.id);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  {" "}
                  <button onClick={() => handleDelete(country.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Portal show={isOpen}>
        <div className="modal-container">
          <div className="input-container">
            <button onClick={() => setIsOpen(false)}>close </button>
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
            <button onClick={handleSubmit}>Submit </button>
          </div>
        </div>
      </Portal>
    </div>
  );
};

export default TableContent;
