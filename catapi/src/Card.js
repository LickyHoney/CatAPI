import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

function Card({ name, image, id, description }) {
  return (
    <ImageList
      sx={{
        width: 500,
        height: 450,
        display: "inline-flex"
      }}
    >
      <ImageListItem key={id}>
        <img
          src={`${image}?w=248&fit=crop&auto=format`}
          srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={name}
          loading="lazy"
        />
        <ImageListItemBar title={name} subtitle={description} />
      </ImageListItem>
    </ImageList>
  );
}

export default Card;
