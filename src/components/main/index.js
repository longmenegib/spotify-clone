import {
  ChevronLeft,
  ChevronRight,
  Close,
  Notifications,
  PersonOutline,
} from "@mui/icons-material";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../constants/colors";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import liked from "../../assets/asset 0.png";
import adele from "../../assets/asset 1.jpeg";
import all from "../../assets/asset 2.jpeg";
import media from "../../assets/asset 3.jpeg";
import p1 from "../../assets/asset 4.jpeg";
import helo from "../../assets/asset 26.jpeg";
import hi from "../../assets/asset 27.jpeg";
import love from "../../assets/asset 32.jpeg";

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
];

export default function MainView() {
  const [showScrollbar, setShowScrollbar] = React.useState(false);
  return (
    <div
      style={{ overflowY: "hidden" }}
      onMouseEnter={() => setShowScrollbar(true)}
      onMouseLeave={() => setShowScrollbar(false)}
    >
      <Box
        px={2}
        pt={2}
        sx={{
          overflowY: "scroll",

          listStyle: "none",
          height: "calc(100vh - 110px)",
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
        <Grid container justifyContent={"space-between"}>
          <Grid item>
            <Box
              width={"100%"}
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent={"space-between"}
            >
              <IconButton
                sx={{
                  backgroundColor: colors.black3,
                  height: 32,
                  width: 32,
                  marginRight: 1,
                }}
              >
                <ChevronLeft sx={{ color: colors.white2 }} />
              </IconButton>
              <IconButton
                sx={{
                  backgroundColor: colors.black3,
                  height: 32,
                  width: 32,
                  marginRight: 1,
                }}
              >
                <ChevronRight sx={{ color: colors.white2 }} />
              </IconButton>
            </Box>
          </Grid>
          <Grid item>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent={"space-between"}
            >
              <Button
                variant="contained"
                size="small"
                sx={{
                  borderRadius: 50,
                  borderColor: colors.white,
                  backgroundColor: colors.white,
                  marginRight: 1,
                }}
              >
                <span
                  className="text-bold"
                  style={{
                    color: colors.black,
                    textAlign: "left",
                    fontSize: 12,
                    textTransform: "initial",
                  }}
                >
                  Explore Premium
                </span>
              </Button>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  borderRadius: 50,
                  borderColor: colors.black3,
                  backgroundColor: colors.black3,
                  marginRight: 1,
                }}
              >
                <span
                  className="text-bold"
                  style={{
                    color: colors.white,
                    textAlign: "left",
                    fontSize: 12,
                    textTransform: "initial",
                  }}
                >
                  Install App
                </span>
              </Button>
              <IconButton
                sx={{
                  backgroundColor: colors.black3,
                  height: 32,
                  width: 32,
                  marginRight: 1,
                }}
              >
                <Notifications sx={{ color: colors.white2 }} />
              </IconButton>
              <IconButton
                sx={{
                  backgroundColor: colors.black3,
                  height: 32,
                  width: 32,
                  marginRight: 1,
                }}
              >
                <PersonOutline sx={{ color: colors.white2 }} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box mt={2}>
          <Typography
            color={colors.white}
            className="text-bold"
            fontSize={32}
            textAlign={"left"}
          >
            Good morning
          </Typography>
        </Box>
        <Box>
          <Grid container>
            {arr.map((ele, index) => (
              <Grid item xs={6} key={index}>
                <List style={{ display: "flex", paddingLeft: 5 }}>
                  <ListItem
                    sx={{
                      backgroundColor: colors.white4,
                      padding: 0,
                      margin: 0,
                      borderRadius: 1,
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar
                        variant="square"
                        sx={{
                          width: 50,
                          height: 52,
                          marginRight: 1,
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
                          className="text-bold"
                          style={{ color: colors.white, fontSize: 14 }}
                        >
                          {ele?.name}
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box mt={2}>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent={"space-between"}
          >
            <Typography
              color={colors.white}
              className="text-bold"
              fontSize={24}
              textAlign={"left"}
            >
              Made for Longmene Gibril
            </Typography>
            <Typography
              color={colors.white2}
              className=""
              fontSize={14}
              textAlign={"left"}
            >
              Show all
            </Typography>
          </Box>
          <Grid mt={0} container spacing={2} justifyContent={"space-between"}>
            <Grid item xs={4}>
              <Box
                bgcolor={colors.black4}
                borderRadius={2}
                p={1}
                justifyContent={"center"}
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
              >
                <Avatar
                  variant="rounded"
                  sx={{
                    width: "95%",
                    height: 160,
                    backgroundColor: colors.white3,
                  }}
                  src={helo}
                ></Avatar>
                <Box sx={{ width: "95%" }} mt={2}>
                  <Typography
                    color={colors.white}
                    className="text-bold"
                    fontSize={18}
                    textAlign={"left"}
                  >
                    Daily Mix 1
                  </Typography>
                  <Typography
                    color={colors.white2}
                    className=""
                    fontSize={14}
                    textAlign={"left"}
                  >
                    Adele, Akon, Amber Run and more
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                bgcolor={colors.black4}
                borderRadius={2}
                p={1}
                justifyContent={"center"}
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
              >
                <Avatar
                  variant="rounded"
                  sx={{
                    width: "95%",
                    height: 160,
                    backgroundColor: colors.white3,
                  }}
                  src={hi}
                ></Avatar>
                <Box sx={{ width: "95%" }} mt={2}>
                  <Typography
                    color={colors.white}
                    className="text-bold"
                    fontSize={18}
                    textAlign={"left"}
                  >
                    Daily Mix 1
                  </Typography>
                  <Typography
                    color={colors.white2}
                    className=""
                    fontSize={14}
                    textAlign={"left"}
                  >
                    Adele, Akon, Amber Run and more
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                bgcolor={colors.black4}
                borderRadius={2}
                p={1}
                justifyContent={"center"}
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
              >
                <Avatar
                  variant="rounded"
                  sx={{
                    width: "95%",
                    height: 160,
                    backgroundColor: colors.white3,
                  }}
                  src={love}
                ></Avatar>
                <Box sx={{ width: "95%" }} mt={2}>
                  <Typography
                    color={colors.white}
                    className="text-bold"
                    fontSize={18}
                    textAlign={"left"}
                  >
                    Daily Mix 1
                  </Typography>
                  <Typography
                    color={colors.white2}
                    className=""
                    fontSize={14}
                    textAlign={"left"}
                  >
                    Adele, Akon, Amber Run and more
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
