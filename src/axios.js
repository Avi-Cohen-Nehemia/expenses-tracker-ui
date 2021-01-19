// import the axios library
import axios from "axios";

// return a new version of axios with useful settings applied
export default axios.create({
        baseURL: "http://localhost:8000/api",
        headers: {
        Accept: "application/json",
    },
});
