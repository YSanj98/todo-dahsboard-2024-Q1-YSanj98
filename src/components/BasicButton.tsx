import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';

export default function BasicButton() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button
        variant="contained"
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Go To Dashboard
      </Button>
    </Box>
  );
}
