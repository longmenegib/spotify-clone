import React from 'react'
import {
    Add,
    ArrowForward,
    Devices,
    Lyrics,
    OndemandVideo,
    PlayCircle,
    QueueMusic,
    Repeat,
    Search,
    Shuffle,
    SkipNext,
    SkipPrevious,
    VolumeUp,
  } from "@mui/icons-material";
  import {
    Avatar,
    LinearProgress,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
  } from "@mui/material";
  import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { colors } from '../../constants/colors';
import music from "../../assets/asset 15.jpeg";

export default function Player() {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
            <Grid
              container
              sx={{ width: "100%" }}
              alignItems={"center"}
              flexGrow={1}
              justifyContent={"space-between"}
            >
              <Grid xs={3}>
                <Box mt={1}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        variant="rounded"
                        sx={{
                          width: 50,
                          height: 50,
                          marginRight: 2,
                          backgroundColor: colors.white3,
                        }}
                        src={music}
                      >
                        
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography
                          variant="body2"
                          style={{ color: colors.white, fontSize: 14 }}
                        >
                          Anywhere for you
                        </Typography>
                      }
                      secondary={
                        <Typography
                          variant="body2"
                          style={{
                            color: colors.white2,
                            fontSize: 14,
                            marginTop: 0,
                          }}
                        >
                          BANNERS
                        </Typography>
                      }
                    />
                  </ListItem>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box mb={1} mt={2} flex={1}>
                  <Grid container direction={"column"}>
                    <Grid xs={12}>
                      <Box sx={{ width: "100%", height: "100%" }}>
                        <Grid
                          container
                          spacing={1}
                          sx={{ width: "90%" }}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          <Grid item>
                            <Shuffle
                              sx={{
                                fontSize: 24,
                                color: colors.white2,
                                marginLeft: 2,
                              }}
                            />
                          </Grid>
                          <Grid item>
                            <SkipPrevious
                              sx={{
                                fontSize: 32,
                                color: colors.white2,
                                marginLeft: 2,
                              }}
                            />
                          </Grid>
                          <Grid item>
                            <PlayCircle
                              sx={{
                                fontSize: 36,
                                color: colors.white,
                                marginLeft: 2,
                              }}
                            />
                          </Grid>
                          <Grid item>
                            <SkipNext
                              sx={{
                                fontSize: 32,
                                color: colors.white2,
                                marginLeft: 2,
                              }}
                            />
                          </Grid>
                          <Grid item>
                            <Repeat
                              sx={{
                                fontSize: 24,
                                color: colors.white2,
                                marginLeft: 2,
                              }}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                    <Grid mt={0} xs={12}>
                      <Box sx={{ width: "100%", height: "100%" }}>
                        <Grid
                          container
                          spacing={1}
                          sx={{ width: "90%" }}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          <Grid item>
                            <Typography fontSize={12} color={colors.white2}>
                              1:06
                            </Typography>
                          </Grid>
                          <Grid item xs={8}>
                            <Box sx={{ color: colors.white }}>
                              <LinearProgress
                                variant="determinate"
                                color="inherit"
                                value={33}
                              />
                            </Box>
                          </Grid>
                          <Grid item>
                            <Typography fontSize={12} color={colors.white2}>
                              3:16
                            </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid xs={3}>
                <Box mt={3} width={"100%"}>
                  <Grid
                    container
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Grid xs={1}>
                      <OndemandVideo
                        sx={{
                          fontSize: 21,
                          color: colors.white2,
                          marginLeft: 2,
                        }}
                      />
                    </Grid>
                    <Grid xs={1}>
                      <Lyrics
                        sx={{
                          fontSize: 21,
                          color: colors.white2,
                          marginLeft: 2,
                        }}
                      />
                    </Grid>
                    <Grid xs={1}>
                      <QueueMusic
                        sx={{
                          fontSize: 21,
                          color: colors.white2,
                          marginLeft: 2,
                        }}
                      />
                    </Grid>
                    <Grid xs={1}>
                      <VolumeUp
                        sx={{
                          fontSize: 21,
                          color: colors.white2,
                          marginLeft: 2,
                        }}
                      />
                    </Grid>
                    <Grid xs={5}>
                      <Box
                        sx={{ width: "100%", color: "white", marginLeft: 0 }}
                      >
                        <LinearProgress
                          color="inherit"
                          value={100}
                          variant="determinate"
                        />
                      </Box>
                    </Grid>
                    <Grid xs={1}>
                      <Devices
                        sx={{
                          fontSize: 21,
                          color: colors.white2,
                          // marginLeft: 3,
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
  )
}
