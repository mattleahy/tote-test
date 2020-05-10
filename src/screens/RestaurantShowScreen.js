import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import yelp from "../api/yelp";

const RestaurantShowScreen = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState(null);
  const id = navigation.getParam("id");

  const getRestaurant = async (id) => {
    const response = await yelp.get(`/${id}`);
    setRestaurant(response.data);
  };

  useEffect(() => {
    getRestaurant(id);
  }, []);

  if (!restaurant) {
    return null;
  }

  return (
    <ScrollView>
      <Text style={styles.name}>{restaurant.name}</Text>
      <View style={styles.address}>
        <Text style={styles.address}>{restaurant.location.address1}</Text>
        <Text style={styles.address}>{restaurant.location.city}</Text>
        <Text style={styles.address}>{restaurant.location.zip_code}</Text>
      </View>
      <View>
        <Text style={styles.title}>Photos</Text>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={restaurant.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    margin: 10,
  },
  address: {
    marginLeft: 5,
    marginTop: 5,
    fontSize: 20,
  },
  name: {
    fontWeight: "bold",
    fontSize: 25,
    margin: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    margin: 10,
  },
});

export default RestaurantShowScreen;
