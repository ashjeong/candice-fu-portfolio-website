import { Chip, Stack } from "@mui/material";

export default function Intro() {
  return (
    <>
      <Stack direction="row" spacing={15} alignItems="center">
        <Stack spacing={2} sx={{ maxWidth: 500 }}>
          <Stack direction="row" spacing={1} sx={{ marginBottom: "1rem" }}>
            <Chip variant="outlined" label="Illustration" />
            <Chip variant="outlined" label="Brand Design" />
            <Chip variant="outlined" label="Product Design" />
          </Stack>
          <h2>Le Petit Patisserie</h2>
          <h5 style={{ maxWidth: 400 }}>
            A whimsical brand identity bringing French pastries into a storybook
            world
          </h5>
        </Stack>
        <div>
          <img
            src="/src/pages/work/projects/patisserie/assets/intro_image.png"
            alt="Intro Image"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>
      </Stack>
    </>
  );
}
