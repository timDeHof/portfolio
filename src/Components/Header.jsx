import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import DrawerComp from "./DrawerComp";
const PAGES = ["About Me", "My Experience", "My Projects", "My Skills"];
function Header() {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar color="primary">
      <Toolbar>
        <Typography
          component="span"
          variant="h5"
          sx={{
            fontsize: "1rem",
            paddingLeft: "2.5%",
          }}
        >
          Timothy DeHof
        </Typography>
        {isMatch ? (
          <>
            <DrawerComp />
          </>
        ) : (
          <>
            <Tabs
              sx={{ marginLeft: "auto" }}
              textColor="inherit"
              value={value}
              onChange={(event, value) => setValue(value)}
              indicatorColor="secondary"
            >
              {PAGES.map((page, index) => (
                <Tab key={index} label={page} />
              ))}
            </Tabs>
            <Button sx={{ marginLeft: "auto" }} variant="contained">
              Contact
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
