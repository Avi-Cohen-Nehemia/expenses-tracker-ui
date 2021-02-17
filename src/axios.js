// import the axios library
import axios from "axios";

// return a new version of axios with useful settings applied
export default axios.create({
        // comment out for development
        baseURL: "https://evening-crag-12776.herokuapp.com/api",

        // uncomment for development
        // baseURL: "http://localhost:8000/api",
        headers: {
        Accept: "application/json",
    },
});
