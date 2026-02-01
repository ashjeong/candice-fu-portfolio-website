import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Stack,
} from "@mui/material";
import Lottie from "lottie-react";
import "./WorkCard.css";
import { Link } from "react-router-dom";

// Map of JSON filenames to their animation data
const images = import.meta.glob("../assets/*.{png,jpg,svg}", {
  eager: true,
});
const lottieAnimations = import.meta.glob("../assets/*.json", { eager: true });

function getCardMediaComponent(imageName, title) {
  const isLottie = imageName.endsWith(".json");
  const key = `../assets/${imageName}`;

  if (isLottie) {
    const key = `../assets/${imageName}`;
    const animation = lottieAnimations[key]?.default;

    if (animation) {
      return (
        <Lottie
          animationData={animation}
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      );
    }
  }

  const image = images[key]?.default;
  return <CardMedia component="img" image={image} alt={title} />;
}

// TODO(ashjeong): Fix sizing
export default function WorkCard({
  title,
  description,
  imageName,
  tags,
  backgroundColor,
  link,
}) {
  return (
    <CardActionArea component={Link} to={link}>
      <Card
        className="card"
        sx={{
          backgroundColor: { backgroundColor },
          borderRadius: "10px",
          boxShadow: "none",
        }}
      >
        {getCardMediaComponent(imageName, title)}
        <CardContent className="overlay-content">
          <Stack direction="row" spacing={1}>
            {tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                sx={{ fontSize: "12px", borderColor: "#33333388" }}
                variant="outlined"
              />
            ))}
          </Stack>
          <h1>{title}</h1>
          <p>{description}</p>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}
