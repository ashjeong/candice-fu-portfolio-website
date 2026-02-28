import { Stack, Box } from "@mui/material";
export default function Overview() {
  return (
    <>
      <Stack direction="row" spacing={4}>
        <Stack spacing={2} sx={{ flex: 1 }}>
          <h3>Overview</h3>
          <h5>
            Le Petit Patisserie blends French pastry traditions with whimsical,
            storybook charm, creating a magical world where pastries become an
            enchanting experience.
          </h5>
          <Box
            sx={{
              width: 524,
              height: 52,
              bgcolor: "rgb(244, 237, 227)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              px: 3,
              boxSizing: "border-box",
            }}
          >
            <p>
              <strong className="strong">Role</strong>: Digital Design Lead
            </p>
          </Box>
        </Stack>

        <Stack spacing={2} sx={{ flex: 1 }}>
          <h4>The Challenge</h4>
          <p className="p2">
            Le Petit Patisserie aimed to create a magical, storybook-inspired
            bakery brand without feeling overly childish. The brand design
            needed to balance sophistication and playful charm, and blend
            storytelling throughout the customer journey, while being able to
            connect physical and digital touchpoints seamlessly. Above all, the
            digital experience had to offer a clear, intuitive checkout flow for
            users to place orders with ease.
          </p>

          <h4>The Approach</h4>
          <p className="p2">
            Le Petit Patisserie’s storybook brand was translated into a digital
            experience that balanced whimsy with usability. Pastel tones,
            refined typography, and celestial motifs created charm, while
            structured grids, clear menus, and a streamlined checkout ensured
            clarity. Branding elements were adapted for accessibility and
            intuitive interaction across the platform.
          </p>
        </Stack>
      </Stack>
      <img
        src="/src/pages/work/projects/patisserie/assets/restaurant_window_psd_mockup.png"
        alt="Restaurant Window PSD Mockup"
        style={{ width: "100%", borderRadius: "10px" }}
      />
    </>
  );
}
