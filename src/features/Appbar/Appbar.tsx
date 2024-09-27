import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Switch } from "@mui/material";

export default function HanappiAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#2F3036" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            color="primary"
            sx={{ flexGrow: 1, fontFamily: "Gilroy-Regular" }}
          >
            HanAppi
          </Typography>
          <Switch color="default" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
