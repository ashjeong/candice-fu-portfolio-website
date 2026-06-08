import { createTheme } from "@mui/material/styles";

const websiteTheme = createTheme({
  palette: {
    primary: {
      main: "#646cff",
    },
    secondary: {
      main: "#FF5115",
    },
    info: {
      main: "#4847ED",
    },
    background: {
      default: "#FFF8EE",
    },
    text: {
      primary: "#212121",
    },
  },
  typography: {
    fontFamily: "Outfit, system-ui, Avenir, Helvetica, Arial, sans-serif",
    fontWeightBold: 700,
    fontWeightRegular: 400,
    h6: {
      fontSize: "18px",
      fontWeight: 700,
    },
    h3: {
      fontSize: "50px",
      fontWeight: 400,
    },
  },
});

export default websiteTheme;
