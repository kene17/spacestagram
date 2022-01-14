import React, { useContext } from "react";
import LikedComponent from "../components/NasaContainer/LikedComponent";
import "./LikedPage.css";
import { MyContext } from "../context";
const LikePage = () => {
  const { likedData, like } = useContext(MyContext);
  return (
    <div>
      <div className="like-page">
        <h1>View Liked Images</h1>
      </div>
      <div>
        {likedData.length > 0 && !like ? (
          <LikedComponent />
        ) : (
          <h1 className="centered">No Liked Photos</h1>
        )}
      </div>
    </div>
  );
};

export default LikePage;
