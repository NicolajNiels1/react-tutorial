import axios from "axios";

const KEY = "AIzaSyB03Wk5aIqzNQRGHFq5bIQ6A68bfKSJsXU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
