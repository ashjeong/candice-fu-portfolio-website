import { Grid, Stack, Box } from "@mui/material";
import mowTrash from "./assets/Mow_Trash.svg";
import mowSustainability from "./assets/Mow_Sustainability.svg";
import mowTime from "./assets/Mow_Time.svg";
import mowRazor from "./assets/Mow_Icons_Razor.svg";

export default function MowInfographics() {
  return (
    <Grid
      container
      spacing={4}
      justifyContent="center"
      sx={{
        marginTop: "2rem",
        marginBottom: "2rem",
        padding: "0 1rem",
        maxWidth: "100vw",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Grid item xs={3}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            width: 330,
            height: 330,
            bgcolor: "#3C8A55",
            borderRadius: "16px",
          }}
        >
          <Stack spacing={1} alignItems="center">
            <img
              src={mowRazor}
              alt="Mow Razor"
              style={{ width: 80, height: 80 }}
            />
            <p style={{ color: "white", textAlign: "center", maxWidth: 250 }}>
              A standard disposable plastic razor is good for 3 to 10 shaves
              before it get blunt, and clogged – then off to the landfill it
              goes.
            </p>
          </Stack>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            width: 330,
            height: 330,
            bgcolor: "#2F4A3A",
            borderRadius: "16px",
          }}
        >
          <Stack spacing={1} alignItems="center">
            <img
              src={mowTrash}
              alt="Mow Trash"
              style={{ width: 80, height: 80 }}
            />
            <p style={{ color: "white", textAlign: "center", maxWidth: 250 }}>
              The EPA has estimated that there are at least 2 billion disposable
              razor which are thrown into the landfill every year.
            </p>
          </Stack>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            width: 330,
            height: 330,
            bgcolor: "#C4C646",
            borderRadius: "16px",
          }}
        >
          <Stack spacing={1} alignItems="center">
            <img
              src={mowSustainability}
              alt="Mow Sustainability"
              style={{
                width: 80,
                height: 80,
                filter:
                  "invert(41%) sepia(34%) saturate(600%) hue-rotate(90deg)",
              }}
            />
            <p style={{ color: "white", textAlign: "center", maxWidth: 250 }}>
              In Gillete’s new initiative to create sustainable cardboard
              packaging, they will eliminate an estimated 300 tons of plastic a
              year
            </p>
          </Stack>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            width: 330,
            height: 330,
            bgcolor: "#355E3B",
            borderRadius: "16px",
          }}
        >
          <Stack spacing={1} alignItems="center">
            <img
              src={mowTime}
              alt="Mow Time"
              style={{ width: 80, height: 80 }}
            />
            <p style={{ color: "white", textAlign: "center", maxWidth: 250 }}>
              With the bulk of disposable razors being non-biodegradable, it
              could take up to 1,000 years to break down from the single-use
              plastic found in landfills every year
            </p>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}
