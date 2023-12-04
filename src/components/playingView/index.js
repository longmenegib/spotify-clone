import {
  Close,
  FavoriteBorder,
  MoreHoriz,
  MoreVert,
} from "@mui/icons-material";
import { Avatar, Box, IconButton } from "@mui/material";
import React from "react";
import { colors } from "../../constants/colors";
import music from "../../assets/asset 16.jpeg";
import ArtistCard from "../artistCard";
import NextQueue from "../nextQueue";

export default function PlayingView() {
  const [showScrollbar, setShowScrollbar] = React.useState(false);

  return (
    <div
      style={{ overflowY: "hidden",  }}
      onMouseEnter={() => setShowScrollbar(true)}
      onMouseLeave={() => setShowScrollbar(false)}
    >
      <Box
        pt={1}
        px={2}
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
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent={"space-between"}
        >
          <span className="text-style" style={{ color: colors.white }}>
            Anywhere for You
          </span>
          <IconButton>
            <Close sx={{ color: colors.white2 }} />
          </IconButton>
        </Box>
        <Box mt={2}>
          <Avatar
            variant="rounded"
            sx={{
              width: "100%",
              height: 300,
              marginRight: 2,
              backgroundColor: colors.white3,
            }}
            src={music}
          ></Avatar>
        </Box>
        <Box
          mt={2}
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Box textAlign={"left"}>
            <div
              className="text-bold"
              style={{ color: colors.white, fontSize: 21 }}
            >
              Anywhere for You
            </div>
            <div style={{ color: colors.white }}>BANNERS</div>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent={"space-between"}
          >
            <IconButton>
              <FavoriteBorder sx={{ color: colors.white2, fontSize: 21 }} />
            </IconButton>
            <IconButton>
              <MoreHoriz sx={{ color: colors.white2, fontSize: 21 }} />
            </IconButton>
          </Box>
        </Box>
        <Box mt={2}>
          <ArtistCard />
        </Box>
        <Box mt={2}>
          <NextQueue />
        </Box>
      </Box>
    </div>
  );
}
