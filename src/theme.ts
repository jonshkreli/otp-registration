import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Inter', sans-serif",
    allVariants: {
      color: "#333",
    },
  },
  palette: {
    primary: {
      main: "#1E3A34",
    },
    background: {
      default: "#F8F8F8",
    },
    text: {
      primary: "#333",
      secondary: "#555",
    },
  },
});

export default theme;
