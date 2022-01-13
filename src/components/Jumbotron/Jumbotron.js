import React, { useState, useContext } from "react";
import "./Jumbotron.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { MyContext } from "../../context";

const API_KEY = "ZldqG22JYDiIcUn1zmsWTATk46A1ZuRGqEbGByPd";
const Jumbotron = () => {
  const [searchInput, setSearchInput] = useState("");
  const { setFetchData, setLoading, setError } = useContext(MyContext);

  async function handleSearch() {
    setSearchInput("");
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?count=${searchInput}&api_key=${API_KEY}`
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      setFetchData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  }

  return (
    <div className="jumbotron">
      <h1>Welcome!</h1>
      <h2>Search for awesome pictures from NASA</h2>
      <div className="input-button">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter A Number of Images you would like to be displayed"
            aria-label="search by Number"
            aria-describedby="Nasa-search-by-number"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Button variant="danger" id="button-addon2" onClick={handleSearch}>
            Search
          </Button>
        </InputGroup>
      </div>
    </div>
  );
};

export default Jumbotron;
