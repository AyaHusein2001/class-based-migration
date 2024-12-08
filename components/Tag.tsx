import React from "react";
import { Button } from "@mui/material";

const Tag:React.FC<{text:string}>= ({text}) => {
  return (
    <Button
      sx={{
        borderRadius: "10rem",
        border: "1px solid",
        gap: "15px",
        cursor: "default",
        fontSize: "1.3rem",
        fontWeight: 400,
        paddingX: "0.6rem",
        paddingY: "0.3rem",
        marginRight: "0.8rem",
        lineHeight: 1.8,
        letterSpacing: 0.16,
      }}
      variant="outlined"
      color="secondary"
    >
      {text}
    </Button>
  );
};

export default Tag;
