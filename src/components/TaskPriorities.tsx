import { Box, Typography, List, ListItemText, ListItem } from "@mui/material";
import chartImage from "../imgs/chart.svg";

function TaskPriorities() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "auto",
        marginTop: "50px",
        marginBottom: "20px",
      }}
    >
      <List
        sx={{
          border: "2px solid #D0D5DD",
          borderRadius: "8px",
        }}
      >
        <ListItem>
          <ListItemText
            primary={
              <Typography sx={{ fontWeight: "bold" }}>
                Task Priorities
              </Typography>
            }
          />
        </ListItem>
        <hr color="#D0D5DD" />

        <ListItem
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
         {/* Add a chart image  */}
          <Box
            component="img"
            sx={{
              height: "auto",
              width: "100%",
              maxWidth: "400px",
            }}
            alt="Task Priorities Chart"
            src={chartImage}
          />
        </ListItem>
      </List>
    </Box>
  );
}

export default TaskPriorities;
