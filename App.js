import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import RestaurantShowScreen from "./src/screens/RestaurantShowScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    RestaurantShow: RestaurantShowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Manchester Restaurants",
      headerTitleAlign: "center",
    },
  }
);

export default createAppContainer(navigator);
