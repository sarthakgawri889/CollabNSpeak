import { Container } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <Container
      sx={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="src\images\loading-circle.svg"
        alt="Loading"
        width="100"
        height="100"
      />
    </Container>
  );
};

export default Loader;
