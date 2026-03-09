import BrandIdentity from "./BrandIdentity";
import Intro from "./Intro";
import Overview from "./Overview";
import Logo from "./Logo";
import PackagingDevelopment from "./PackagingDevelopment";
import VideoPitch from "./VideoPitch";
import Reflection from "./Reflection";
import { Stack } from "@mui/material";

export default function Mow() {
  return (
    <Stack
      spacing={12}
      sx={{ padding: "1.5rem", maxWidth: 1500, margin: "0 auto" }}
    >
      <Intro />
      <Overview />
      <BrandIdentity />
      <Logo />
      <PackagingDevelopment />
      <VideoPitch />
      <Reflection />
    </Stack>
  );
}
