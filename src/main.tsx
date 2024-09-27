import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createTheme, ThemeProvider } from "@mui/material";
import { red } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    body1: {
      fontFamily: "Gilroy-Regular",
    },
  },
  palette: {
    primary: {
      main: "#FED3FF",
    },
    error: {
      main: red[500],
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
