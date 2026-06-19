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

const mediaAssets = import.meta.glob(
  "../assets/*.{png,jpg,jpeg,svg,webp,json}",
  { eager: true },
);

function getCardMediaComponent(imageName, title) {
  const key = `../assets/${imageName}`;
  const asset = mediaAssets[key]?.default;
  const isLottie = imageName.endsWith(".json");

  if (!asset) {
    return null;
  }

  if (isLottie) {
    return (
      <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
        <Lottie
          animationData={asset}
          loop
          autoplay
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    );
  }

  return (
    <CardMedia
      component="img"
      image={asset}
      alt={title}
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
      }}
    />
  );
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
  // Determine if background is dark or light
  const isDarkBackground = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance < 0.5;
  };

  const textColor = isDarkBackground(backgroundColor) ? "white" : "#333333";

  return (
    <CardActionArea component={Link} to={link}>
      <Card
        className="card"
        sx={{
          backgroundColor: { backgroundColor },
          borderRadius: "25px",
          boxShadow: "none",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          "--text-color": textColor,
          overflow: "hidden",
        }}
      >
        {getCardMediaComponent(imageName, title)}
        <CardContent className="overlay-content">
          <Stack direction="row" spacing={1}>
            {tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                sx={{
                  fontSize: "12px",
                  borderColor: textColor,
                  color: textColor,
                }}
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
