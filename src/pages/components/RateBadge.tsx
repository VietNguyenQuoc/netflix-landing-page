import { Box } from "@mui/system";
import React from "react";

const RateBadge: React.FC<{ label: string }> = ({ label }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "50px",
        right: 0,
        py: 0.5,
        pl: 2,
        pr: 5,
        bgcolor: "rgba(255,255,255,0.1)",
        backgroundClip: "padding-box",
        backdropFilter: "blur(10px)",
        boxShadow: "2px 2px 10px rgba(211, 47, 47, 0.3)",
        ":after": {
          position: "absolute",
          content: "''",
          left: 0,
          top: 0,
          height: "100%",
          width: "15%",
          bgcolor: "red",
          zIndex: 1,
        },
      }}
    >
      {label}
    </Box>
  );
};

export default RateBadge;
