import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme, Link } from "@mui/material";
import Elipse1 from "../imgs/Elipses/Ellipse 1.svg";
import Elipse2 from "../imgs/Elipses/Ellipse 2.svg";
import Elipse3 from "../imgs/Elipses/Ellipse 3.svg";
import Elipse4 from "../imgs/Elipses/Ellipse 4.svg";
import Elipse5 from "../imgs/Elipses/Ellipse 5.svg";

const GreetingCard: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: isMobile ? "25px" : "350px",
        marginRight: "25px",
        border: "2px solid #D0D5DD",
        borderRadius: "8px",
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          display: "block",
          alignItems: "center",
          padding: "30px",
        }}
      >
        <Typography
          variant="h6"
          component="h1"
          sx={{
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Welcome back, John Doe
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "16px",
            marginTop: "8px",
          }}
        >
          The end of the year is coming. Are you planning your performance
          interviews? You can do this super efficiently with Acmy.
        </Typography>

        <Link
          href="#"
          color={"#BC006D"}
          sx={{ marginTop: "8px", display: "inline-block" }}
        >
          Look here for more information
        </Link>
      </Box>

      <Box
        sx={{
          alignItems: "center",
          paddingBottom: 0,
        }}
      >
        <Box
          component="img"
          src={Elipse1}
          alt="ElipseGroup"
          sx={{
            width: "20px",
            height: "20px",
            top: "26px",
            left: "889px",
          }}
        />
        <Box
          component="img"
          src={Elipse2}
          alt="Ellipse2"
          sx={{
            top: "83px",
            left: "1px",
            width: "66px",
            height: "66px",
          }}
        />
        <Box
          component="img"
          src={Elipse3}
          alt="Ellipse3"
          sx={{
            top: "71px",
            left: "994px",
            width: "20px",
            height: "20px",
          }}
        />
        <Box
          component="img"
          src={Elipse4}
          alt="Ellipse4"
          sx={{
            top: "-30px",
            left: "956px",
            width: "80px",
            height: "80px",
          }}
        />
        <Box
          component="img"
          src={Elipse5}
          alt="Ellipse5"
          sx={{
            top: "39px",
            left: "1026px",
            width: "30px",
            height: "30px",
          }}
        />
      </Box>
    </Box>
  );
};

export default GreetingCard;
