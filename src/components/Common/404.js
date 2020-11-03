import React from "react";
import cat from "../../assets/404.png";
import Box from "@material-ui/core/Box";

const Error404 = () => {
  return (
    <>
      <Box textAlign="center">
        <h1 textAlign="center">404</h1>
        <h2>Esta página no existe</h2>
      </Box>
      <img
        src={cat}
        alt="404 error mimimi"
        style={{ margin: "auto", display: "block", height: "81vh" }}
      />
    </>
  );
}

export default Error404;