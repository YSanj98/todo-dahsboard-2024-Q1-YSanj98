import React from "react";
import Box from "@mui/material/Box";
import SideNavigation from "./SideNavigation";
import NavBar from "./NavBar";
import GreetingCard from "./GreetingCard";
import Task from "../components/Task";
import { TaskProvider } from "../utils/TaskContext";
// import Container from '@mui/material/Container';

const Dashboard: React.FC = () => {
  return (
    <Box>
      <SideNavigation />
      <Box
        sx={{
          display: "block",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "2px",
        }}
      >
        <NavBar />
        <GreetingCard />
        <TaskProvider>
          <Task />
        </TaskProvider>
      </Box>
    </Box>
  );
};

export default Dashboard;
