import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

function Card({ name, image, id, description }) {
  return (
    <div className="grid-container">
      <div className="grid-item" key={id}>
        <img src={image} alt={name} width="180" height="180" />
        <p>{name}</p>
      </div>
    </div>
  );
}

export default Card;
