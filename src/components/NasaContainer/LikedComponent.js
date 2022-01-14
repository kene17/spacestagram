import React, { useContext } from "react";
import { MyContext } from "../../context";
import LikedCard from "../Card/LikedCard";
const LikedComponent = () => {
  const { likedData } = useContext(MyContext);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {likedData.map((data, idx) => (
        <LikedCard
          key={idx}
          id={Math.floor(Math.random() * 100)}
          url={data.url}
          title={data.title}
          explanation={data.explanation}
          date={data.date}
        />
      ))}
    </div>
  );
};

export default LikedComponent;
