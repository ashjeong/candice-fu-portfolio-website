import { Stack, Chip, useMediaQuery } from "@mui/material";
import CDGHero from "./assets/cdg.jpg";
export default function Intro({ isSmallScreen }) {
  return (
    <>
      <Stack
        direction={isSmallScreen ? "column" : "row"}
        spacing={isSmallScreen ? 4 : 15}
        alignItems={isSmallScreen ? "flex-start" : "center"}
      >
        <Stack spacing={2} sx={{ maxWidth: 500 }}>
          <Stack direction="row" spacing={1} sx={{ marginBottom: "1rem" }}>
            <Chip size="small" variant="outlined" label="Illustration" />
          </Stack>
          <h2>Conran Design Group – New York Illustrations Series</h2>
          <h5>
            Illustrations capturing the energy and personality of Conran Design
            Group’s NYC office.
          </h5>
        </Stack>
        <img
          src={CDGHero}
          alt="CDG Hero"
          style={{ width: "100%", borderRadius: "16px" }}
        />
      </Stack>
    </>
  );
}
