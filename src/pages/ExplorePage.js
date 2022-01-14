import React, { useState, useEffect, useContext } from "react";
import NasaCard from "../components/Card/NasaCard";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import LoadingSpiner from "../components/SpinnerComponent/LoadingSpiner";
import { MyContext } from "../context";

const API_KEY = "ZldqG22JYDiIcUn1zmsWTATk46A1ZuRGqEbGByPd";

const ExplorePage = () => {
  const { fetchedData, setFetchData } = useContext(MyContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDataHandler() {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?count=6&api_key=${API_KEY}`
        );
        const data = await response.json();
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        setFetchData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    }
    fetchDataHandler();
  }, [setFetchData]);

  return (
    <div className="explorer">
      <Jumbotron />
      {!isLoading && fetchedData.length > 0 && (
        <ul>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {fetchedData.map((data, idx) => (
              <NasaCard
                key={idx}
                id={Math.floor(Math.random() * 100)}
                url={data.url}
                title={data.title}
                explanation={data.explanation}
                date={data.date}
              />
            ))}
          </div>
        </ul>
      )}
      {!isLoading && fetchedData.length === 0 && !error && (
        <p>Found No Pictures</p>
      )}
      {!isLoading && error && <p>{error}</p>}
      <div className="spinner-container">{isLoading && <LoadingSpiner />}</div>
    </div>
  );
};

export default ExplorePage;
