import { Box, createTheme, makeStyles, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Landing from "./pages/Landing";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#d32f2f",
    },
  },
});

function App() {
  const [bg, setBg] = useState<string>(null);

  return (
    <ThemeProvider theme={theme}>
      <Box
        id="App"
        p={3}
        minHeight="100vh"
        sx={
          bg
            ? {
                backgroundImage: `linear-gradient(to right, black 30%, transparent), url(${bg})`,
                backgroundSize: "cover",
                backgroundPositionX: "0px, 200px",
              }
            : {}
        }
      >
        <Landing setBg={setBg} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
