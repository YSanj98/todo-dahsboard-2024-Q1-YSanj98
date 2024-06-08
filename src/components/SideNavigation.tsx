import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import DashboardICon from "../imgs/dashboard-icon.svg";

const SideNavigation: React.FC = () => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {!isMedium && (
        <Drawer variant="permanent">
          <Toolbar
            sx={{
              width: "272px",
              backgroundColor: "#451d5f",
              height: "80px",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                color: "white",
                textAlign: "center",
                width: "100%",
                fontSize: "24px",
              }}
            >
              Acmy Solutions
            </Typography>
          </Toolbar>

          <List
            sx={{
              backgroundColor: "#33074F",
              color: "white",
              height: "calc(100% - 80px)",
              paddingTop: "80px",
            }}
          >
            <ListItem
              sx={{
                alignItems: "center",
                textAlign: "justify",
                backgroundColor: "#451d5f",
                left: "16px",
                width: "calc(100% - 32px)",
                borderRadius: "50px",
              }}
            >
              <ListItemIcon
                sx={{
                  color: "white",
                }}
              >
                <Box
                  component="img"
                  src={DashboardICon}
                  alt="Dashboard Icon"
                  sx={{ width: 24, height: 24 }}
                />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </List>
        </Drawer>
      )}
    </>
  );
};

export default SideNavigation;
