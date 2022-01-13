import Modal from "../Modal/ModalComponent";
import "./card.css";
import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from '@mui/material/Typography';
import CardMedia from "@mui/material/CardMedia";
import { pink } from '@mui/material/colors';
import { Button } from "react-bootstrap";
import { MyContext } from "../../context";
import FavoriteIcon from '@mui/icons-material/Favorite';
const NasaCard = (props) => {
  const [like, setLike] = React.useState(false);
  const { likedData, setLikedData } = useContext(MyContext);
  const handleLiked = () => {
    setLike(!like);
    const card = {
      title: props.title,
      explanation: props.explanation,
      date: props.date,
      url: props.url,
    }
    const arr = [...likedData, card]
    console.log(arr);
    setLikedData(arr);
    
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

      <CardContent>
        
        <h3>{props.title}</h3>
        <Typography variant="body2" color="text.secondary">
          This impressive picture is a gotten from the Nasa API, One of the most popular websites at NASA is the Astronomy Picture of the Day.
          you can see all the information about this picture below.
        </Typography>
        <br />
        <p>{props.date}</p>

        <Modal explanation={props.explanation} title={props.title} />
        <div className="like-button">
          <button  onClick={handleLiked}>
          {!like ? <FavoriteIcon color= "primary" /> : <FavoriteIcon sx={{ color: pink[500] }} />}
            
          </button>
        </div>
        <div className="overlay d-flex align-items-center justify-content">
          {" "}
        </div>
      </CardContent>
    </Card>
  );
};

export default NasaCard;
