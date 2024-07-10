import axios from "axios";

const instans = axios.create({
    withCredentials: true,
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {
        "Access-Control-Allow-Origin": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
});

export const testAPI = {
    getTest() {
        return instans.get(`todos`).then((response) => {
            return response?.data;
        });
    },
};
