import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import { colors } from "../../constants/colors";
import { Box, Grid, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import ListIcon from "@mui/icons-material/List";
import liked from "../../assets/asset 0.png";
import adele from "../../assets/asset 1.jpeg";
import all from "../../assets/asset 2.jpeg";
import media from "../../assets/asset 3.jpeg";
import p1 from "../../assets/asset 4.jpeg";
import helo from "../../assets/asset 5.jpeg";
import hi from "../../assets/asset 6.jpeg";
import love from "../../assets/asset 7.jpeg";

const arr = [
  {
    name: "Liked Songs",
    image: liked,
  },
  {
    name: "Adele",
    image: adele,
  },
  {
    name: "My playlist #6",
    image: null,
  },
  {
    name: "Melancholic playlist",
    image: all,
  },
  {
    name: "African Love",
    image: media,
  },
  {
    name: "Different World",
    image: p1,
  },
  {
    name: "Alan Walker",
    image: helo,
  },
  {
    name: "My best song",
    image: hi,
  },
  {
    name: "Old songs",
    image: love,
  },
  {
    name: "Celine Dion",
    image: null,
  },
];

export default function LibraryList() {
  const [showScrollbar, setShowScrollbar] = React.useState(false);
  return (
    <div
      style={{ paddingBottom: 10, overflowY: 'hidden' }}
      onMouseEnter={() => setShowScrollbar(true)}
      onMouseLeave={() => setShowScrollbar(false)}
    >
      <Box
        sx={{
          overflowY: "scroll",
          margin: 0,
          padding: 0,
          listStyle: "none",
          height: "calc(100vh - 320px)",
          position: "relative",
          "&::-webkit-scrollbar": {
            width: 10,
            display: showScrollbar ? "flex" : "none",
            position: "absolute",
          },
          "&::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
            webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: colors.white2,
          },
        }}
      >
        <Grid
          container
          justifyContent={"space-between"}
          alignItems={"center"}
          pl={4}
          pr={1}
        >
          <Grid>
            <Search sx={{ fontSize: 24, color: colors.white2 }} />
          </Grid>
          <Grid>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography color={colors.white2} pr={1} fontSize={14}>
                Recents
              </Typography>
              <ListIcon sx={{ fontSize: 24, color: colors.white2 }} />
            </Box>
          </Grid>
        </Grid>
        <List style={{ paddingLeft: 10 }}>
          {arr.map((ele, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  sx={{
                    width: 48,
                    height: 48,
                    marginRight: 2,
                    backgroundColor: colors.white3,
                  }}
                  src={ele.image || null}
                >
                  {ele.image ? null : "M"}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    variant="body2"
                    style={{ color: colors.white, fontSize: 16 }}
                  >
                    {ele?.name}
                  </Typography>
                }
                secondary={
                  <Typography
                    variant="body2"
                    style={{ color: colors.white2, fontSize: 14, marginTop: 4 }}
                  >
                    Playlist - Longmene Gibril
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}
