import Grid from "@mui/material/Grid";
import WorkCard from "./components/WorkCard";
import projectsData from "./projects.json";

export default function Work() {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        flex: "auto",
        padding: "1.5rem",
        maxWidth: "1300px",
        margin: "0 auto",
      }}
    >
      {projectsData.map((project, index) => (
        <Grid key={index} size={{ xs: 12, sm: 6 }}>
          <WorkCard
            title={project.title}
            description={project.description}
            imageName={project.imageName}
            tags={project.tags}
            backgroundColor={project.backgroundColor}
            link={project.link}
          />
        </Grid>
      ))}
    </Grid>
  );
}
