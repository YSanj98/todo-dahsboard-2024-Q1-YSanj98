import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
} from "@mui/material";
import { useTaskContext } from "../utils/TaskContext";
import { useMediaQuery, useTheme } from "@mui/material";
import Bell from "../imgs/bell-in-task.svg";

// Utility function to format the date
const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options).replace(",", "");
};

const Task: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { tasks, currentPage, setCurrentPage } = useTaskContext();
  const itemsPerPage = 8;

  // Calculate the start and end index for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedTasks = tasks.slice(startIndex, endIndex);

  // Function to get background color based on priority
  const getIconButtonColor = (priority: string) => {
    switch (priority) {
      case "HIGH":
        return "red";
      case "MEDIUM":
        return "yellow";
      case "LOW":
        return "blue";
      default:
        return "gray";
    }
  };

  return (
    <Box
      sx={{
        display: "block",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: isMobile ? "25px" : "350px",
        marginRight: "25px",
        border: "2px solid #D0D5DD",
        borderRadius: "8px",
        backgroundColor: "white",
      }}
    >
      <List
        sx={{
          width: "100%",
        }}
      >
        <ListItem>
          <ListItemText
            primary={<Typography sx={{ fontWeight: "bold" }}>Tasks</Typography>}
          />
        </ListItem>
        {displayedTasks.map((task) => (
          <ListItem
            sx={{
              border: "1px solid #D0D5DD",
              display: "flex",
              alignItems: "center",
            }}
            key={task.id}
          >
            {/* Bell Icon Button */}
            <IconButton
              aria-label="notifications"
              sx={{
                color: "white",
                borderRadius: "5px",
                backgroundColor: getIconButtonColor(task.priority),
                padding: "5px",
                marginRight: "10px",
                "&:hover": {
                  backgroundColor: getIconButtonColor(task.priority),
                },
              }}
            >
              <img
                src={Bell}
                alt="Bell icon"
                style={{ width: "20px", height: "20px" }}
              />
            </IconButton>

            {/* Todo Item */}
            <ListItemText
              primary={
                <Typography sx={{ fontWeight: "bold", width: "600px", }}>{task.todo}</Typography>
              }
              secondary={
                <span
                  style={{ color: !task.completed ? "#BC006D" : "inherit" }}
                >
                  {!task.completed ? "Mark as done" : ""}
                </span>
              }
            />

            {/* Mark as done */}
            <Typography
              sx={{
                padding: "5px 10px",
                borderRadius: "15px",
                color: task.completed ? "#219653" : "#F2C94C",
                backgroundColor: task.completed
                  ? "rgba(33, 150, 83, 0.5)"
                  : "rgba(245, 236, 211, 0.8)",
                fontWeight: "bold",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              {task.completed ? "Done" : "In-Progress"}
            </Typography>

            {/* Date */}
            <Typography sx={{
                color:"#757575"
            }}>{formatDate(task.createdAt)}</Typography>
          </ListItem>
        ))}
      </List>
      {/* Pagination component */}
      <div>
        {Array.from(
          { length: Math.ceil(tasks.length / itemsPerPage) },
          (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              disabled={currentPage === index + 1}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </Box>
  );
};

export default Task;
