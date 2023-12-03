import { ThemeProvider, createTheme } from "@mui/material/styles";
import Desktop3 from "./Haricharan/Desktop3";
import Desktop8 from "./Haricharan/Desktop8";

const theme = createTheme({
  palette: {
    bg: {
      main: "#C8D8F0",
    },
    pri: {
      main: "#2D8CFF",
    },
    sec: {
      main: "#EEAF8B",
    },
    gray: {
      main: "#747487",
    },
  },

  typography: {
    header1: {
      fontFamily: "Roboto",
      fontWeight: "700",
      fontSize: "36px",
      lineHeight: "20px",
      letterSpacing: "1.8px",
    },
    header2: {
      fontFamily: "Roboto",
      fontWeight: "700",
      fontSize: "30px",
      lineHeight: "18px",
      letterSpacing: "1.5px",
    },
    regular: {
      fontFamily: "Montserrat",
      fontWeight: "400",
      fontSize: "18px",
      lineHeight: "30px",
      letterSpacing: "0.5px",
    },
    medium: {
      fontFamily: "Montserrat",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "10px",
      letterSpacing: "1.2px",
    },
    small: {
      fontFamily: "Montserrat",
      fontWeight: "300",
      fontSize: "12px",
      lineHeight: "8px",
      letterSpacing: "1px",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Desktop8></Desktop8>
    </ThemeProvider>
  );
}

export default App;
