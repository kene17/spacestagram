import Modal from "../Modal/ModalComponent";
import "./card.css";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const LikedCard = (props) => {
  return (
    <Card
      sx={{ width: 500, margin: 2, height: 600 }}
      className="image-container"
    >
      <CardMedia
        component="img"
        height="40%"
        image={props.url}
        alt={props.title}
      />

      <CardContent>
        <h3>{props.title}</h3>
        <Typography variant="body2" color="text.secondary">
          This impressive picture is a gotten from the Nasa API, One of the most
          popular websites at NASA is the Astronomy Picture of the Day. you can
          see all the information about this picture below.
        </Typography>
        <br />
        <p>{props.date}</p>

        <Modal explanation={props.explanation} title={props.title} />

        <div className="overlay d-flex align-items-center justify-content">
          {" "}
        </div>
      </CardContent>
    </Card>
  );
};

export default LikedCard;
