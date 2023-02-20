import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer VjJMS0pla6egqk-3Qaj3FPiKB3i7FDg6wOXmvJZy7EtLvUtfyFikk8q3F56bWrSuQOy5oYS6QziDxF52gSMkOnDrNNeMmFVk1SGb8SFvaOSdi8r_NdAGSkBlFqjxY3Yx",
  },
});
