import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

function RestuarantMenu() {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const restaurantId = useParams().id;
  const fetchMenuData = async () => {
    await fetch(
      `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${restaurantId}`
    )
      .then(async (data) => {
        let json = await data.json();
        setRestaurantInfo(json.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchMenuData();
  }, []);
  if (restaurantInfo === null) return <Loading />;
  const { name, cuisines, costForTwoMessage } =
    restaurantInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  return (
    <Box>
      <Typography>{name}</Typography>
      <Typography>
        {cuisines.join(", ")} - {costForTwoMessage}
      </Typography>
      <Typography>Menu</Typography>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default RestuarantMenu;
