import { Box, Typography, List, ListItemText, ListItem } from "@mui/material";


function ActivityFeed() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid #D0D5DD",
        borderRadius: "8px",
        backgroundColor: "white",
        marginTop: "50px",
        marginBottom: "20px",
      }}
    >
      <List>
        <ListItem>
          <ListItemText
            primary={
              <Typography sx={{ fontWeight: "bold" }}>Activity Feed</Typography>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
}

export default ActivityFeed;
