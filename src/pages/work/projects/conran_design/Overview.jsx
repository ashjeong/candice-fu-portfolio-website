import { Stack, Box } from "@mui/material";

export default function Overview({ isSmallScreen }) {
  return (
    <>
      <Stack spacing={6} direction={isSmallScreen ? "column" : "row"}>
        <Stack>
          <h3>Overview</h3>
          <p>
            Conran Design Group is a global brand and design consultancy within
            the Havas network, with offices in London, Mumbai, New York, and
            Paris. While the global brand provides consistency across markets,
            each office has the opportunity to shape its own personality and
            culture.
          </p>

          <Box
            sx={{
              width: "100%",
              height: 52,
              bgcolor: "rgb(244, 237, 227)",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              px: 3,
              boxSizing: "border-box",
            }}
          >
            <p>
              <strong className="strong">Role</strong>: Lead Illustrator
            </p>
          </Box>
        </Stack>
        <Stack>
          <h4>The Challenge</h4>
          <p>
            In New York, the team sought a way to develop its identity,
            celebrate local culture, and create visual assets that felt
            distinctly representative of the city. The challenge was to expand
            on the global brand while carving out a persona that felt true to
            New York.
          </p>
          <h4>The Approach</h4>
          <p>
            We gather inspiration rooted in the city itself: cultural icons,
            local food, and personal experiences contributed by the team. This
            pool of references became the foundation for illustrations that felt
            both authentic and personal.
          </p>
        </Stack>
      </Stack>
    </>
  );
}
