import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Loading from "./Loading";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [callInProgress, setCallInProgress] = useState(false);
  useEffect(() => {
    setCallInProgress(true);
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING"
    )
      .then(async (data) => {
        let json = await data.json();
        console.log(
          "====> ",
          json,
          json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setRestaurants(
          json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setCallInProgress(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const filterRestaurants = (searchText) => {
    let filteredArr = restaurants.filter((item) =>
      item?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredArr);
  };
  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    let timer;
    const debounce = (fn, delay) => {
      return function (...args) {
        let context = this;
        timer = setTimeout(() => {
          fn.apply(context, args);
        }, delay);
      };
    };
    const betterFunction = debounce(filterRestaurants, 1000);
    betterFunction(searchText);
    return () => clearTimeout(timer);
  }, [searchText]);

  return (
    <Box style={{ padding: "24px", display: "flex", flexWrap: "wrap" }}>
      {(!restaurants?.length || callInProgress) && <Loading />}
      {restaurants?.length > 0 && (
        <>
          <Box
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <TextField
              id="input-with-icon-textfield"
              label="Search"
              value={searchText}
              onChange={handleSearch}
              // onChange={handleSearchBetter}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
            <Typography body="h1">Start Exploring and Ordering</Typography>
            <Button>Top Rated Restaurants</Button>
          </Box>
          <Box style={{ display: "flex", flexWrap: "wrap" }}>
            {!searchText.length ? (
              restaurants.map((item, index) => {
                return (
                  <Link
                    to={`/restaurant/${item.info.id}`}
                    key={item.info.id}
                    style={{ textDecoration: "none", color: "brown" }}
                  >
                    <RestaurantCard data={item.info} />
                  </Link>
                );
              })
            ) : (
              <>
                {filteredRestaurants.map((item, index) => {
                  return (
                    <Link
                      to={`/restaurant/${item.info.id}`}
                      key={item.info.id}
                      style={{ textDecoration: "none", color: "brown" }}
                    >
                      <RestaurantCard data={item.info} />
                    </Link>
                  );
                })}
              </>
            )}
          </Box>
        </>
      )}
    </Box>
  );
}

export default RestaurantList;
