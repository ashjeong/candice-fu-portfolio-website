import BrandIdentity from "./BrandIdentity";
import Intro from "./Intro";
import Overview from "./Overview";
import ProductExperience from "./ProductExperience";
import DesignProcess from "./DesignProcess";
import { Stack } from "@mui/material";

export default function Patisserie() {
  return (
    <Stack
      spacing={12}
      sx={{ padding: "1.5rem", maxWidth: 1200, margin: "0 auto" }}
    >
      <Intro />
      <Overview />
      <BrandIdentity />
      <DesignProcess />
      <ProductExperience />
    </Stack>
  );
}
