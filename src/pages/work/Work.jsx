import Grid from "@mui/material/Grid";
import WorkCard from "./components/WorkCard";
import projectsData from "./projects.json";

export default function Work() {
  return (
    <Grid
      container
      spacing={3}
      columns={{ sm: 2, md: 8, xl: 12 }}
      sx={{ flex: "auto", padding: "1.5rem" }}
    >
      {projectsData.map((project, index) => (
        <Grid key={index} size={{ sm: 2, md: 4, xl: 4 }}>
          <WorkCard
            title={project.title}
            description={project.description}
            imageName={project["image-name"]}
            tags={project.tags}
            backgroundColor={project.backgroundColor}
            link={project.link}
          />
        </Grid>
      ))}
    </Grid>
  );
}
