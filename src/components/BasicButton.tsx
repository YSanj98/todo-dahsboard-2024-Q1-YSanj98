import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

export default function BasicButton() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Button
        sx={{
          color: "#ffffff",
          padding: "15px 20px",
          borderRadius: "10px",
        }}
        variant="contained"
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Go To The Dashboard
      </Button>
    </Box>
  );
}
