import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    body1: {
      letterSpacing: 2.5,
      lineHeight: 1.65
    },
    body2: {
      letterSpacing: 1.5,
      fontSize: "16px"
    },
    subtitle1: {
      fontSize: "14px",
      letterSpacing: 2.35
    },
    subtitle2: {
      fontSize: "16px",
      letterSpacing: 2.7
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1124,
      xl: 1440
    }
  }
});

export default theme;
