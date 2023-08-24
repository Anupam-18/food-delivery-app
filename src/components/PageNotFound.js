import { Typography } from "@mui/material";
import React from "react";
import { useRouteError } from "react-router-dom";

function PageNotFound() {
  const err = useRouteError();
  return (
    <>
      <Typography>OOPS! Something went wrong</Typography>
      <Typography>PageNotFound</Typography>
      <Typography>
        Issue with server is {err.status} {err.statusText}
      </Typography>
    </>
  );
}

export default PageNotFound;
