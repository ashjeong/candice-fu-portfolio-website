import BrandIdentity from "./BrandIdentity";
import Intro from "./Intro";
import Overview from "./Overview";
import Logo from "./Logo";
import PackagingDevelopment from "./PackagingDevelopment";
import VideoPitch from "./VideoPitch";
import Reflection from "./Reflection";
import { Stack, useMediaQuery } from "@mui/material";

export default function Mow() {
  const isSmallScreen = useMediaQuery("(max-width:1000px)");

  return (
    <Stack
      spacing={isSmallScreen ? 4 : 12}
      sx={{ padding: "1.5rem", maxWidth: 1500, margin: "0 auto" }}
    >
      <Intro isSmallScreen={isSmallScreen} />
      <Overview isSmallScreen={isSmallScreen} />
      <BrandIdentity isSmallScreen={isSmallScreen} />
      <Logo isSmallScreen={isSmallScreen} />
      <PackagingDevelopment isSmallScreen={isSmallScreen} />
      <VideoPitch isSmallScreen={isSmallScreen} />
      <Reflection isSmallScreen={isSmallScreen} />
    </Stack>
  );
}
