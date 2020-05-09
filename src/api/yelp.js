import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer ixLcwJTS1CkBhfLYWM1OwxgfJVlV7xaBZqRFWsPWWkURsjQEZIkou3OnQVGB5dSmUm4D1usyvdwsX9OUDS1VFerXd7BajuNnwPBkokV46a56BNwsiB4HV49jtmK2XnYx",
  },
});
