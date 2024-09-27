import { Box, Typography } from "@mui/material";
import HanappiAppBar from "./features/Appbar/Appbar";
import "./index.css";
import FixedBottomNavigation from "./features/BottomNavigation/BottomNavigation";
import { useState } from "react";

function App() {
  const [currentTab, setCurrentTab] = useState(0);

  const TabConnector = (tabIndex: number) => {
    setCurrentTab(tabIndex);
  };

  const TabSelector = () => {
    switch (currentTab) {
      case 0:
        return <Typography>Tab 1</Typography>;
      case 1:
        return <Typography>Tab 2</Typography>;
      case 2:
        return <Typography>Tab 3</Typography>;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <HanappiAppBar />
      <Box sx={{ height: "100%" }}></Box>
      <FixedBottomNavigation setTabIndex={TabConnector}>
        <Box sx={{ mt: "56px" }}>{TabSelector()}</Box>
      </FixedBottomNavigation>
    </Box>
  );
}

export default App;
