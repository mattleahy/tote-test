import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import image from "../../assets/No_image_available.png";

const RestaurantsDetail = ({ restaurant }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={restaurant.image_url ? { uri: restaurant.image_url } : image}
      />
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text>
        {restaurant.rating} Stars, {restaurant.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
});

export default RestaurantsDetail;
