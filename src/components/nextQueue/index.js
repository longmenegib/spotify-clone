import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import artist from "../../assets/asset 8.jpeg";
import { colors } from "../../constants/colors";
import {
  Avatar,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

export default function NextQueue() {
  return (
    <Card sx={{ width: "100%", backgroundColor: colors.black4 }}>
      <CardContent>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent={"space-between"}
          mb={2}
        >
          <span
            className="text-bold"
            style={{ color: colors.white, textAlign: "left", fontSize: 14 }}
          >
            Next in queue
          </span>
          <span className="" style={{ color: colors.white2, fontSize: 14 }}>
            Open queue
          </span>
        </Box>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              variant="rounded"
              sx={{
                width: 48,
                height: 48,
                marginRight: 2,
                backgroundColor: colors.white3,
              }}
              src={artist}
            ></Avatar>
          </ListItemAvatar>
          <ListItemText
            disableTypography
            primary={
              <Typography
                variant="body2"
                style={{ color: colors.white, fontSize: 16 }}
              >
                Broken Hearted
              </Typography>
            }
            secondary={
              <Typography
                variant="body2"
                style={{ color: colors.white2, fontSize: 14, marginTop: 4 }}
              >
                BANNERS
              </Typography>
            }
          />
        </ListItem>
      </CardContent>
    </Card>
  );
}
