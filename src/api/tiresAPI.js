import axios from "axios";

const instans = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:8080/api/",
    headers: {
        "Access-Control-Allow-Origin": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
});

export const tiresAPI = {
    getTires() {
        return instans.get(`tires`).then((response) => {
            return response.data;
        });
    },
};
