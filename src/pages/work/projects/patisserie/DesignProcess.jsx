import { Grid, Stack } from "@mui/material";
import Personas from "./Personas";
import desktop_wireframes from "./assets/desktop_wireframes.png";
import mobile_wireframes from "./assets/mobile_wireframes.png";
import site_map from "./assets/site_map.png";

export default function DesignProcess({ isSmallScreen }) {
  return (
    <Stack spacing={4}>
      <h3>Design Process</h3>
      <h5>User Persona</h5>
      <Personas />
      <h5>Wireframes</h5>
      <Grid container spacing={2} sx={{ marginBottom: "2rem" }}>
        <Grid size={isSmallScreen ? 12 : 8}>
          <img
            src={desktop_wireframes}
            alt="Desktop Wireframes"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </Grid>
        <Grid size={isSmallScreen ? 12 : 4}>
          <img
            src={mobile_wireframes}
            alt="Mobile Wireframes"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </Grid>
      </Grid>
      <h5>Sitemap</h5>
      <img
        src={site_map}
        alt="Site Map"
        style={{ width: "100%", borderRadius: "10px" }}
      />
    </Stack>
  );
}
