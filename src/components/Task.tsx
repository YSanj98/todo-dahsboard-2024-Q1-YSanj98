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
import Pagination from "./Pagination";

// Function to format the date
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
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isLarge = useMediaQuery(theme.breakpoints.down("lg"));
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
        return "#EB5757";
      case "MEDIUM":
        return "#F2C94C";
      case "LOW":
        return "#2F80ED";
      default:
        return "gray";
    }
  };

  // Total number of pages
  const totalPages = Math.ceil(tasks.length / itemsPerPage);

  return (
    <Box
      sx={{
        display: "block",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: isMobile ? "25px" : "350px",
        border: "2px solid #D0D5DD",
        borderRadius: "8px",
        marginTop: "50px",
        marginBottom: "20px",
        backgroundColor: "white",
      }}
    >
      <List
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
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
              justifyContent: "space-between",
              flexDirection: isLarge ? "column" : "row",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                width: "100%",
              }}
            >
              {/* Bell Icon Button */}
              <IconButton
                aria-label="notifications"
                sx={{
                  color: "white",
                  borderRadius: "5px",
                  backgroundColor: getIconButtonColor(task.priority),
                  padding: "5px",
                  marginBottom: "10px",
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
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      width: "100%",
                      marginLeft: "15px",
                    }}
                  >
                    {task.todo}
                  </Typography>
                }
                secondary={
                  <span
                    style={{
                      color: !task.completed ? "#BC006D" : "inherit",
                      marginLeft: "15px",
                    }}
                  >
                    {!task.completed ? "Mark as done" : ""}
                  </span>
                }
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: isLarge ? "center" : "flex-end",
                flexDirection: "row",
                width: "100%",
              }}
            >
              {/* Mark as done */}
              <Typography
                sx={{
                  padding: "5px 30px",
                  borderRadius: "15px",
                  color: task.completed ? "#219653" : "#F2C94C",
                  backgroundColor: task.completed
                    ? "rgba(33, 150, 83, 0.5)"
                    : "rgba(245, 236, 211, 0.8)",
                  fontWeight: "bold",
                  cursor: "pointer",
                  marginLeft: isLarge ? "10px" : "10px",
                  marginRight: isLarge ? "10px" : "10px",
                }}
              >
                {task.completed ? "Done" : "In-Progress"}
              </Typography>

              {/* Formatted Date */}
              <Typography sx={{ color: "#757575" }}>
                {formatDate(task.createdAt)}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>

      {/* Pagination component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </Box>
  );
};

export default Task;
