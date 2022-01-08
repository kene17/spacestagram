import Modal from "../Modal/ModalComponent";
import "./card.css";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button } from "react-bootstrap";
const NasaCard = (props) => {
  const [like, setLike] = React.useState(false);

  const handleLiked = () => {
    setLike(!like);
  };
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

      <CardContent sx={{ px: 4, height: "20%" }}>
        <h3 classname="card_header">{props.title}</h3>
        <p>{props.date}</p>

        <Modal explanation={props.explanation} title={props.title} />
        <div className="like-button">
          <Button variant="secondary" onClick={handleLiked}>
            {!like ? "Like" : "Liked"}
          </Button>
        </div>
        <div className="overlay d-flex align-items-center justify-content">
          {" "}
        </div>
      </CardContent>
    </Card>
  );
};

export default NasaCard;
