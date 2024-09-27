import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Paper from "@mui/material/Paper";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import { Typography } from "@mui/material";

export default function FixedBottomNavigation({
  children,
  setTabIndex,
}: {
  children: any;
  setTabIndex: (index: number) => void;
}) {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ pb: 7 }}>
      <CssBaseline />
      {children}
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          sx={{ backgroundColor: "#2F3036" }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setTabIndex(newValue);
          }}
        >
          <BottomNavigationAction
            sx={{ color: "#fff", fontFamily: "Gilroy-Regular" }}
            label={
              <Typography fontFamily={"Gilroy-Regular"} fontSize="10px">
                Hanabi
              </Typography>
            }
            icon={<SelfImprovementIcon />}
          />
          <BottomNavigationAction
            sx={{ color: "#fff" }}
            label={
              <Typography fontFamily={"Gilroy-Regular"} fontSize="10px">
                Annat
              </Typography>
            }
            icon={<EditOutlinedIcon />}
          />
          <BottomNavigationAction
            sx={{ color: "#fff" }}
            label={
              <Typography fontFamily={"Gilroy-Regular"} fontSize="10px">
                Statistik
              </Typography>
            }
            icon={<AssessmentOutlinedIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
