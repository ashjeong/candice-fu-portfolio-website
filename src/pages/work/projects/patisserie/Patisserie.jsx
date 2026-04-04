import BrandIdentity from "./BrandIdentity";
import Intro from "./Intro";
import Overview from "./Overview";
import ProductExperience from "./ProductExperience";
import DesignProcess from "./DesignProcess";
import { Stack, useMediaQuery } from "@mui/material";

export default function Patisserie() {
  const isSmallScreen = useMediaQuery("(max-width:1000px)");

  return (
    <Stack
      spacing={isSmallScreen ? 4 : 12}
      sx={{ padding: "1.5rem", maxWidth: 1200, margin: "0 auto" }}
    >
      <Intro isSmallScreen={isSmallScreen} />
      <Overview isSmallScreen={isSmallScreen} />
      <BrandIdentity isSmallScreen={isSmallScreen} />
      <DesignProcess isSmallScreen={isSmallScreen} />
      <ProductExperience isSmallScreen={isSmallScreen} />
    </Stack>
  );
}
