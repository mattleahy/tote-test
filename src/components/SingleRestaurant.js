import React from "react";
import { View, Image, Text, StyleSheet, FlatList } from "react-native";

const SingleRestaurant = ({ restaurant }) => {
  return (
    <FlatList
      data={restaurant.photos}
      keyExtractor={(photo) => photo}
      renderItem={({ item }) => {
        return <Image style={styles.image} source={{ uri: item }} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 200,
  },
});

export default SingleRestaurant;
