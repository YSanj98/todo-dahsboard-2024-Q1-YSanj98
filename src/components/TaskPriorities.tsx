import { Box, Typography, List, ListItemText, ListItem, useTheme, useMediaQuery } from "@mui/material";
import chartImage from "../imgs/chart.svg";

function TaskPriorities() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

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
         {/* Because of time constraint added a chart image from figma file */}
          <Box
            component="img"
            sx={{
              width: !isMobile ? "350px" : isMedium ? "300px" : "350px",
              height: !isMobile ? "250px" : isMedium ? "200px" : "250px",
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
