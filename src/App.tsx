import { Box, createTheme, makeStyles, ThemeProvider } from "@mui/material";
import React, { createContext, useState } from "react";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import "pure-react-carousel/dist/react-carousel.es.css";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#d32f2f",
    },
  },
});

export enum PageId {
  SignIn = "signIn",
  Landing = "landing",
}

const Pages: Record<PageId, React.FC> = {
  [PageId.SignIn]: SignIn,
  [PageId.Landing]: Landing,
};

interface AppContextProps {
  setBg: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<PageId>>;
  redirect: (pageId: PageId) => void;
  resume: () => void;
}

export const AppContext = createContext<AppContextProps>(null);

function App() {
  const [bg, setBg] = useState<string>(null);
  const [page, setPage] = useState<PageId>(PageId.Landing);
  const [pausePage, setPausePage] = useState<PageId>(null);
  const PageComponent = Pages[page];

  const redirect = (pageId: PageId): void => {
    setPausePage(page);
    setPage(pageId);
  };

  const resume = () => {
    setPausePage(null);
    setPage(pausePage);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        id="App"
        py={3}
        px={6}
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
        <AppContext.Provider value={{ setBg, setPage, redirect, resume }}>
          <PageComponent />
        </AppContext.Provider>
      </Box>
    </ThemeProvider>
  );
}

export default App;
