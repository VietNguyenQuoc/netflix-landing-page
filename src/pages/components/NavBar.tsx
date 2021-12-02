import { Avatar, Grid, Icon, Link, LinkProps, List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment";
import React, { useContext, useState } from "react";
import emotion from "@emotion/styled";
import { KeyboardArrowDown, SearchOutlined } from "@mui/icons-material";
import { AppContext, PageId } from "../../App";
import useTimer from "../../hooks/useTimer";

const StyledList = emotion(List)({
  display: "flex",
  padding: 0,
  justifyContent: "center",
  columnGap: "4em",
});

const StyledListItem = emotion(ListItem)({
  justifyContent: "center",
  padding: 0,
  width: "inherit",
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

const getFormattedDate = (time: moment.Moment | Date) =>
  moment(time).format("dddd, MMMM D • hh:mm");

const navItems = [
  { name: "home", label: "Home" },
  { name: "movies", label: "Movies" },
  { name: "tvShows", label: "TV Shows" },
  { name: "myList", label: "My List" },
];

const NavBar: React.FC = () => {
  const [selected, setSelected] = useState("home");
  const { redirect } = useContext(AppContext);
  const time = useTimer(1000 * 60); // update every minute

  return (
    <Grid container>
      <Grid item xs={3}>
        <Box display="flex" gap={1}>
          <img src="icons/netflix.png" height="31px" width="100px" />
          <Typography fontSize={12} alignSelf="center">
            |
          </Typography>
          <Typography variant="caption" fontSize={12} alignSelf="center">
            {getFormattedDate(time)}
          </Typography>
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
              onClick={() => redirect(PageId.SignIn)}
              sx={{ position: "relative", top: "-.5rem" }}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default NavBar;
