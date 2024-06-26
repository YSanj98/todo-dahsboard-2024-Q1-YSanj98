import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { useMediaQuery, useTheme } from "@mui/material";
import UserPic from "../imgs/profilePic.svg";
import DownIcon from "../imgs/Chevron-down.svg";
import BellIcon from "../imgs/Bell-off.svg";

const NavBar: React.FC = () => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "72px",
        backgroundColor: "white",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        padding: "0 20px",
        zIndex: 10,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          variant="h6"
          component="h1"
          sx={{
            marginLeft: isMedium ? "0px" : "350px",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Dashboard
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", marginRight: "20px" }}>
        {/* Bell Icon  */}
        <IconButton sx={{ marginLeft: "20px" }}>
          <Avatar
            src={BellIcon}
            alt="BellIcon"
            sx={{ width: 24, height: 24, cursor: "pointer" }}
          />
        </IconButton>

        {/* User Profile and Down Icon */}
        <IconButton sx={{ marginLeft: "20px" }}>
          <Avatar src={UserPic} alt="User" sx={{ width: 40, height: 40 }} />
          <Avatar
            src={DownIcon}
            alt="DownIcon"
            sx={{ width: 24, height: 8, cursor: "pointer" }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default NavBar;
