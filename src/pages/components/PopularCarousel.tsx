import { NavigateNextOutlined, NavigateBeforeOutlined } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";

const movies = [
  {
    name: "13 Reasons Why",
    imgUrl:
      "https://resizing.flixster.com/99vk3J80giu7OEfTaJLuHk3MuU8=/ems.ZW1zLXByZC1hc3NldHMvdHZzZXJpZXMvUlRUVjI5NTc2Ni53ZWJw",
  },
  {
    name: "Breaking Bad",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
  },
  {
    name: "Peaky Blinders",
    imgUrl:
      "https://i.guim.co.uk/img/media/b4671b518cf9f81e4343c5921a6210141fd9f8fa/0_92_4284_2570/master/4284.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=75205a6a967abc32d73fc80b7b23b52a",
  },
  {
    name: "Peaky Blinders",
    imgUrl:
      "https://i.guim.co.uk/img/media/b4671b518cf9f81e4343c5921a6210141fd9f8fa/0_92_4284_2570/master/4284.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=75205a6a967abc32d73fc80b7b23b52a",
  },
  {
    name: "Peaky Blinders",
    imgUrl:
      "https://i.guim.co.uk/img/media/b4671b518cf9f81e4343c5921a6210141fd9f8fa/0_92_4284_2570/master/4284.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=75205a6a967abc32d73fc80b7b23b52a",
  },
  {
    name: "Peaky Blinders",
    imgUrl:
      "https://i.guim.co.uk/img/media/b4671b518cf9f81e4343c5921a6210141fd9f8fa/0_92_4284_2570/master/4284.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=75205a6a967abc32d73fc80b7b23b52a",
  },
  {
    name: "Peaky Blinders",
    imgUrl:
      "https://i.guim.co.uk/img/media/b4671b518cf9f81e4343c5921a6210141fd9f8fa/0_92_4284_2570/master/4284.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=75205a6a967abc32d73fc80b7b23b52a",
  },
];

const StyledIconButton = styled(IconButton)(
  {
    fontSize: "1rem",
    lineHeight: 0,
    "> svg": {
      fontSize: "1rem",
    },
  },
  (props) => {
    console.log(props);
    return {
      border: `1px solid ${props.disabled ? "gray" : "white"}`,
    };
  }
);

const StyledImage = styled("img")({
  width: "120px",
  height: "150px",
  objectFit: "cover",
});

const MediaItem: React.FC<{ imgUrl: string; name: string }> = ({ name, imgUrl }) => {
  return (
    <Box>
      <StyledImage src={imgUrl} />
      <Typography variant="subtitle2" textAlign="center">
        {name}
      </Typography>
    </Box>
  );
};

const PopularCarousel: React.FC = () => {
  return (
    <Box maxWidth="50%" overflow="hidden" position="relative">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography component="h2" fontWeight="bold" sx={{ textTransform: "uppercase" }}>
          Popular this week
        </Typography>
        <Box id="carousel-btn-group" sx={{ display: "flex", top: 0, right: 0, gap: 1 }}>
          <StyledIconButton disabled>
            <NavigateBeforeOutlined />
          </StyledIconButton>
          <StyledIconButton>
            <NavigateNextOutlined />
          </StyledIconButton>
        </Box>
      </Box>
      <Box display="flex" gap={3}>
        {movies.map(({ imgUrl, name }) => (
          <MediaItem imgUrl={imgUrl} name={name} />
        ))}
      </Box>
    </Box>
  );
};

export default PopularCarousel;
