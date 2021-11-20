import { Avatar, Grid, Icon, Link, LinkProps, List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment";
import React, { useState } from "react";
import emotion from "@emotion/styled";
import { KeyboardArrowDown, SearchOutlined } from "@mui/icons-material";

const StyledList = emotion(List)({
  display: "flex",
  padding: 0,
  justifyContent: "space-around",
});

const StyledListItem = emotion(ListItem)({
  justifyContent: "center",
  padding: 0,
});

interface StyledLinkProps extends LinkProps {
  active?: boolean;
}

const StyledLink = emotion(Link)<StyledLinkProps>(
  {
    textDecoration: "none",
    paddingBottom: "1em",
    display: "block",
    textAlign: "center",
    cursor: "pointer",
    color: "white",
    position: "relative",
  },
  (props) => ({
    ":after": {
      content: '""',
      width: "100%",
      position: "absolute",
      bottom: "-2px",
      left: 0,
      borderBottom: props.active ? "solid 3px white" : "none",
      borderRadius: "2px",
    },
  })
);

const getFormattedDate = () => moment().format("dddd, MMMM D • hh:mm");

const navItems = [
  { name: "home", label: "Home" },
  { name: "movies", label: "Movies" },
  { name: "tvShows", label: "TV Shows" },
  { name: "myList", label: "My List" },
];

const NavBar: React.FC = () => {
  const [selected, setSelected] = useState("home");

  return (
    <Grid container>
      <Grid item xs={3}>
        <Box display="flex" gap={2}>
          <img src="icons/netflix.png" height="31px" width="100px" />
          <Typography>|</Typography>
          <Typography variant="caption">{getFormattedDate()}</Typography>
        </Box>
      </Grid>

      <Grid
        item
        xs={6}
        sx={{
          position: "relative",
          ":after": {
            content: '""',
            position: "absolute",
            width: "100%",
            bottom: "-1px",
            height: "1px",
            background: "linear-gradient(to right, transparent, 10%, #ffffffcc, 90%, transparent)",
          },
        }}
      >
        <StyledList>
          {navItems.map((item) => (
            <StyledListItem>
              <StyledLink active={selected === item.name} onClick={() => setSelected(item.name)}>
                {item.label}
              </StyledLink>
            </StyledListItem>
          ))}
        </StyledList>
      </Grid>

      <Grid item xs={3}>
        <Box display="flex" justifyContent="end">
          <Icon>
            <SearchOutlined />
          </Icon>
          <Box display="flex">
            <Icon>
              <KeyboardArrowDown />
            </Icon>
            <Avatar
              variant="rounded"
              src="icons/my.jpeg"
              sx={{ position: "relative", top: "-.5rem" }}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default NavBar;
