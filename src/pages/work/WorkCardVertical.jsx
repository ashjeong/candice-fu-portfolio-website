import { Chip, Stack, Button, CardMedia, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import projectsData from "./projects_vertical.json";
import Lottie from "lottie-react";

const mediaAssets = import.meta.glob(
  "./assets/*.{png,jpg,jpeg,svg,webp,json}",
  { eager: true },
);

function ProjectInfo({ project, isSmallScreen }) {
  const navigate = useNavigate();
  return (
    <Stack spacing={2} direction="column">
      <Stack direction="row" spacing={1}>
        {project.tags.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            sx={{ fontSize: "12px", borderColor: "#33333388" }}
            variant="outlined"
          />
        ))}
      </Stack>
      <h2>{project.title}</h2>
      <p style={{ maxWidth: "600px" }}>{project.description}</p>
      <Button
        variant="contained"
        color="info"
        size="small"
        sx={{
          maxWidth: isSmallScreen ? "500px" : "150px",
          height: "40px",
          borderRadius: "20px",
          fontFamily: "Outfit, sans-serif",
          textTransform: "none",
        }}
        endIcon={<ArrowForwardIcon />}
        onClick={() => {
          if (project.link) {
            navigate(project.link);
          }
        }}
      >
        Let's go
      </Button>
    </Stack>
  );
}

function getCardMediaComponent(project) {
  const key = `./assets/${project.imageName}`;
  const asset = mediaAssets[key]?.default;
  const isLottie = project.imageName.endsWith(".json");

  if (!asset) {
    return null;
  }

  if (isLottie) {
    return (
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "500px",
          borderRadius: "16px",
          overflow: "hidden",
          background: "#fff",
        }}
      >
        <Lottie
          animationData={asset}
          loop
          autoplay
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    );
  }

  return (
    <CardMedia
      component="img"
      image={asset}
      alt={project.title}
      sx={{
        borderRadius: "16px",
        width: "100%",
        maxWidth: "500px",
        maxHeight: "500px",
      }}
    />
  );
}

export function MobileFormat({ project, isSmallScreen }) {
  return (
    <Stack spacing={2} direction="column" alignItems="center">
      {getCardMediaComponent(project)}
      <ProjectInfo project={project} isSmallScreen={isSmallScreen} />
    </Stack>
  );
}

export function WebFormat({ project, isSmallScreen, index }) {
  return index % 2 === 0 ? (
    <Stack spacing={10} direction="row" alignItems="center">
      <ProjectInfo project={project} isSmallScreen={isSmallScreen} />
      {getCardMediaComponent(project)}
    </Stack>
  ) : (
    <Stack spacing={10} direction="row" alignItems="center">
      {getCardMediaComponent(project)}
      <ProjectInfo project={project} isSmallScreen={isSmallScreen} />
    </Stack>
  );
}

export default function WorkCardVertical() {
  const isSmallScreen = useMediaQuery("(max-width:800px)");
  return (
    <>
      {projectsData.map((project, index) => (
        <div
          className="project-row"
          key={project.id}
          style={{ marginBottom: "2rem" }}
        >
          <Stack
            key={`grid-${index}`}
            direction={isSmallScreen ? "column" : "row"}
            spacing={20}
            sx={{ marginBottom: "2rem" }}
            id={project.id}
          >
            {isSmallScreen ? (
              <MobileFormat project={project} isSmallScreen={isSmallScreen} />
            ) : (
              <WebFormat
                project={project}
                isSmallScreen={isSmallScreen}
                index={index}
              />
            )}
          </Stack>
        </div>
      ))}
    </>
  );
}
