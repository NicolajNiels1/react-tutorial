import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 464894d0831ed8db99b2c8a54ae9b2b9ae034e21ac4a94829e9f66ad3eae166b"
  }
});
