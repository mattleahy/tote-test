import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantList from "../components/RestaurantList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  const filterRestaurantsByPrice = (price) => {
    return restaurants.filter((restaurant) => {
      return restaurant.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {restaurants.length} restaurants</Text>
      <RestaurantList
        restaurants={filterRestaurantsByPrice("£")}
        title="Cheap"
      />
      <RestaurantList
        restaurants={filterRestaurantsByPrice("££")}
        title="Mid Range"
      />
      <RestaurantList
        restaurants={filterRestaurantsByPrice("£££")}
        title="Wallet Killer"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
