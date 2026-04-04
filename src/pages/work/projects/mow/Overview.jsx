import { Stack, Box } from "@mui/material";
import MowCorner from "./assets/Mow_Corner.jpg";

export default function Overview({ isSmallScreen }) {
  return (
    <>
      <Stack
        spacing={isSmallScreen ? 3 : 10}
        direction={isSmallScreen ? "column" : "row"}
      >
        <Stack spacing={3}>
          <h3>Overview</h3>
          <p>
            Mow is a sustainable shaving kit that offers a luxury shaving
            experience. With 100% paperboard packaging, mow is committed to
            reducing the environmental impact of traditional shaving products.
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
              <strong className="strong">Role</strong>: Illustrator, Designer
            </p>
          </Box>
        </Stack>

        <Stack spacing={3}>
          <h4>The Challenge</h4>
          <p>
            The task was to redesign packaging for a personal care product
            traditionally sold in plastic, focusing on sustainability,
            recyclability, and a premium user experience. The solution needed to
            be fully paper-based, structurally secure for shipping and handling,
            functionally innovative to enhance usability and presentation,
            memorable in its unboxing experience, and aligned with the brand to
            appeal to eco-conscious consumers.
          </p>
          <h4>The Approach</h4>
          <p>
            We created Mow, a sustainable shaving kit that offers a luxury
            shaving experience while prioritizing the care of your skin and the
            environment. Every element, from eco-friendly materials to
            thoughtfully engineered packaging, was created to enhance the
            shaving experience while minimizing environmental impact. The kit
            balances high-quality performance, skin-friendly design, and
            sustainable practices, delivering a ritual that feels premium,
            intentional, and responsible.{" "}
          </p>
        </Stack>
      </Stack>
      <img src={MowCorner} alt="Mow Shaving Kit" />
    </>
  );
}
