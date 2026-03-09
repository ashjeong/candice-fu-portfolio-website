import { Grid, Stack } from "@mui/material";
import Personas from "./Personas";

export default function DesignProcess() {
  return (
    <Stack spacing={4}>
      <h3>Design Process</h3>
      <h5>User Persona</h5>
      <Personas />
      <h5>Wireframes</h5>
      <Grid container spacing={2} sx={{ marginBottom: "2rem" }}>
        <Grid size={8}>
          <img
            src="/src/pages/work/projects/patisserie/assets/desktop_wireframes.png"
            alt="Desktop Wireframes"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </Grid>
        <Grid size={4}>
          <img
            src="/src/pages/work/projects/patisserie/assets/mobile_wireframes.png"
            alt="Mobile Wireframes"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </Grid>
      </Grid>
      <h5>Sitemap</h5>
      <img
        src="/src/pages/work/projects/patisserie/assets/site_map.png"
        alt="Site Map"
        style={{ width: "100%", borderRadius: "10px" }}
      />
    </Stack>
  );
}
