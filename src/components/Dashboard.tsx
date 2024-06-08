import React from "react";
import Box from "@mui/material/Box";
import SideNavigation from "./SideNavigation";
import NavBar from "./NavBar";
import GreetingCard from "./GreetingCard";
import Task from "../components/Task";
import { TaskProvider } from "../utils/TaskContext";
import TaskPriorities from "./TaskPriorities";
import ActivityFeed from "./ActivityFeed";
import { useMediaQuery, useTheme } from "@mui/material";

//Main Component of the Dashboard
const Dashboard: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isLarge = useMediaQuery(theme.breakpoints.down("lg"));
  const isXl = useMediaQuery(theme.breakpoints.down("xl"));

  return (
    <Box>
      <SideNavigation />
      <NavBar />
      <Box
        sx={{
          display: "block",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <GreetingCard />
        <Box
          sx={{
            display: isXl ? "block" : "flex",
            flexDirection: "row",
            justifyContent: isXl ? "center" : "space-between",
            alignItems: "center",
            marginRight: "25px",
          }}
        >
          <TaskProvider>
            <Task />
          </TaskProvider>
          <Box
            sx={{
              display: isMobile ? "block" : isLarge ? "block" : isXl ? "flex" : "block",
              marginLeft: isMedium ? "25px" : isXl ? "350px" : "25px",
              justifyContent: isXl ? "space-between" : "center",
              alignItems: "center",
            }}
          >
            <ActivityFeed />
            <TaskPriorities />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
