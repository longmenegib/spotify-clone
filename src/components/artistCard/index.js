import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import artist from "../../assets/asset 8.jpeg";
import { colors } from "../../constants/colors";
import { Box } from "@mui/material";

export default function ArtistCard() {
  return (
    <Card sx={{ width: "100%", backgroundColor: colors.black4 }}>
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          image={artist}
        />
        <Box
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgcolor={"rgba(0, 0, 0, 0.5)"}
          zIndex={1}
        />
        <Typography
          textAlign={"left"}
          color={colors.white}
          gutterBottom
          className="text-bold"
          position={"absolute"}
          top={0}
          left={10}
          fontSize={16}
          zIndex={2}
        >
          About the artist
        </Typography>
      </Box>
      <CardContent>
        <Typography
          textAlign={"left"}
          color={colors.white}
          gutterBottom
          variant="h5"
          component="div"
        >
          BANNERS
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent={"space-between"}
          mb={2}
        >
          <span
            className=""
            style={{ color: colors.white2, textAlign: "left", fontSize: 14 }}
          >
            6,928,018 monthly listeners
          </span>
          <Button
            variant="outlined"
            size="small"
            sx={{ borderRadius: 50, borderColor: colors.white }}
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
              Follow
            </span>
          </Button>
        </Box>
        <Typography textAlign={"left"} color={colors.white2} variant="body2">
          BANNERS’ songs have a mysterious, anthemic quality. They’re haunting
          and inspiring, effervescent and relatable. In the space between piano
          chords, sweeping...
        </Typography>
      </CardContent>
    </Card>
  );
}
