import React, { useContext, useEffect } from "react";
import { PlayCircle } from "@mui/icons-material";
import { Box, Typography, Button, BoxProps, CssBaseline } from "@mui/material";
import { movies } from "../data";
import NavBar from "./components/NavBar";
import { AppContext } from "../App";
import RateBadge from "./components/RateBadge";
import PopularCarousel from "./components/PopularCarousel";

const FlexBox: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box display="flex" {...props}>
      {React.Children.map(children, (child, idx) => [
        child,
        idx !== React.Children.count(children) - 1 && <Typography>|</Typography>,
      ])}
    </Box>
  );
};

const Landing: React.FC = () => {
  const { setBg } = useContext(AppContext);
  const { genres, name, description, director, episodes, image, rate, year } = movies[0];

  const getSeasons = () => {
    const ssCount = Object.keys(episodes).length;
    const epCount = Object.values(episodes).reduce((r, s) => r + s, 0);

    return `${ssCount} (${epCount} Episodes)`;
  };

  useEffect(() => {
    setBg(image);
  }, [image]);

  return (
    <Box>
      <CssBaseline />
      <NavBar />

      <Box id="movie-info" maxWidth="50%" my={6}>
        <FlexBox columnGap={1}>
          {genres.map((genre) => (
            <>
              <Typography fontWeight="medium">{genre.toUpperCase()}</Typography>
            </>
          ))}
        </FlexBox>
        <Typography variant="h2" fontWeight="bold" my={2} color="textPrimary">
          {name}
        </Typography>
        <FlexBox justifyContent="space-between" my={2}>
          <Typography fontWeight="medium">{year}</Typography>
          <Typography fontWeight="medium">
            DIRECTOR:{" "}
            <Typography color="grey.600" component="span">
              {director.join(", ")}
            </Typography>
          </Typography>
          <Typography fontWeight="medium">
            SEASON:{" "}
            <Typography color="grey.600" component="span">
              {getSeasons()}
            </Typography>
          </Typography>
        </FlexBox>

        <Typography variant="body2" color="grey.600" my={2} lineHeight={1.7}>
          {description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          endIcon={<PlayCircle />}
          sx={{ borderRadius: "2px", mr: 2 }}
        >
          Stream now
        </Button>
        <Button
          variant="outlined"
          sx={{ borderRadius: "2px", color: "text.primary", borderColor: "text.primary" }}
        >
          All episodes
        </Button>
      </Box>
      <RateBadge label={rate} />
      <PopularCarousel />
    </Box>
  );
};

export default Landing;
