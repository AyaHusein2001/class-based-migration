import React from "react";
const { Button } = require("@mui/material");

class Tag extends React.Component {
  render() {
    return (
      <Button
        sx={{
          borderRadius: "10rem",
          border: "1px solid",
          gap: "15px",
          cursor: "default",
          fontSize: "1.3rem",
          fontWeight: 400,
          paddingX:'0.6rem',
          paddingY:'0.3rem',
          marginRight:'0.8rem',
          lineHeight: 1.8,
          letterSpacing: 0.16
        }}
        variant="outlined"
        color="secondary"
      >
        {this.props.text}
      </Button>
    );
  }
}
export default Tag;
