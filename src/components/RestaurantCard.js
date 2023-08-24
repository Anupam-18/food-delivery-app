import { Box, Typography } from "@mui/material";
import React from "react";

function RestaurantCard({ data }) {
  //   console.log("====> ", data,Number(data?.avgRating));
  return (
    <Box
      style={{
        width: "220px",
        height: "280px",
        padding: "12px",
        margin: "12px",
        border: "1px solid aliceblue",
      }}
    >
      <img
        style={{ width: "100%" }}
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${data.cloudinaryImageId}`}
      />
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography body="h2">{data?.name}</Typography>
        <Typography body="h3">{data.cusines}</Typography>
        <Typography body="h3">
          Delivery within {data?.sla?.deliveryTime} minutes
        </Typography>
        <Typography body="h3">{data?.costForTwo}</Typography>
        <Typography body="h3">
          {Array(Math.floor(data?.avgRating)).fill("⭐️")}
        </Typography>
      </Box>
    </Box>
  );
}

export default RestaurantCard;
