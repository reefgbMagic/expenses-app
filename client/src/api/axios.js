import axios from "axios";

// export default axios.create({
//     baseURL: 'http://localhost:3500'
// });

export default axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
});
