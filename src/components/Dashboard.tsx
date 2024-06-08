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
  const isLessThanXl = useMediaQuery(theme.breakpoints.down("xl"));

  return (
    <Box>
      <SideNavigation />
      <NavBar />
      <Box
        sx={{
          display: "block",
          alignItems: "center",
        }}
      >
        <GreetingCard />
        <Box
          sx={{
            display: isLessThanXl ? "block" : "flex",
            flexDirection: "row",
            justifyContent: isLessThanXl ? "center" : "space-between",
            alignItems: "center",
            marginRight: "25px",
          }}
        >
          <TaskProvider>
            <Task />
          </TaskProvider>
          <Box
            sx={{
              display: isMobile ? "block" : isLessThanXl ? "flex" : "block",
              marginLeft: isMedium ? "25px" : isLessThanXl ? "350px" : "25px",
              justifyContent: isLessThanXl ? "space-evenly" : "center",
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
