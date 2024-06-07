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
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";

const SideNavigation: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {!isMobile && (
        <Drawer variant="permanent">
          <Toolbar
            sx={{
              width: "272px", 
              backgroundColor: "#451d5f",
              height: "80px",
            }}
          >
            {/* <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
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
              button
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
                {/* dashboard icon */}
                <DashboardIcon />
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
