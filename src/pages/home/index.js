import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { colors } from "../../constants/colors";
import { Add, ArrowForward, Home, Search } from "@mui/icons-material";
import { Typography } from "@mui/material";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import LibraryList from "../../components/libraryList";
import PlayingView from "../../components/playingView";
import Player from "../../components/player";
import MainView from "../../components/main";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: colors.black2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "100%",
  margin: "10px 4px",
  borderRadius: 10,
}));

const Item3 = styled(Paper)(({ theme }) => ({
  backgroundColor: colors.black3,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "100%",
  margin: "10px 10px 0px 10px",
  borderRadius: 10,
}));

export default function Homepage() {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Grid
        container
        spacing={0}
        sx={{ height: "100%" }}
        alignItems={"stretch"}
      >
        <Grid xs={3}>
          <Grid container direction={"column"}>
            <Grid>
              <Item3>
                <Box>
                  <Box px={3} py={2}>
                    <Grid spacing={2} container alignItems={"center"} mb={1}>
                      <Grid>
                        <Home sx={{ fontSize: 24, color: colors.white }} />
                      </Grid>
                      <Grid>
                        <Typography color={colors.white} className="text-style">
                          Home
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid spacing={2} container alignItems={"center"}>
                      <Grid>
                        <Search sx={{ fontSize: 24, color: colors.white2 }} />
                      </Grid>
                      <Grid>
                        <Typography
                          color={colors.white2}
                          className="text-style"
                        >
                          Search
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Item3>
            </Grid>
            <Grid>
              <Item3>
                <Box>
                  <Box px={3} pt={2}>
                    <Grid
                      container
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Grid>
                        <Grid spacing={2} container alignItems={"center"}>
                          <Grid>
                            <LibraryMusicIcon
                              sx={{ fontSize: 24, color: colors.white2 }}
                            />
                          </Grid>
                          <Grid>
                            <Typography
                              color={colors.white2}
                              className="text-style"
                            >
                              Your Library
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid>
                        <Grid spacing={2} container alignItems={"center"}>
                          <Grid>
                            <Add sx={{ fontSize: 21, color: colors.white2 }} />
                          </Grid>
                          <Grid>
                            <ArrowForward
                              sx={{ fontSize: 21, color: colors.white2 }}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid mt={2} container spacing={1} alignItems={"center"}>
                      <Grid>
                        <div className="item-rouded">Playlists</div>
                      </Grid>
                      <Grid>
                        <div className="item-rouded">Artists</div>
                      </Grid>
                      <Grid>
                        <div className="item-rouded">Albums</div>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box width={"100%"} mt={2}>
                    <LibraryList />
                  </Box>
                </Box>
              </Item3>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={6}>
          <Item>
            <MainView />
          </Item>
        </Grid>
        <Grid xs={3}>
          <Item>
            <PlayingView />
          </Item>
        </Grid>
        <Grid xs={12}>
          <Player />
        </Grid>
      </Grid>
    </Box>
  );
}
