import axios from "axios";

const BASE_URL = "http://localhost:7000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTFlYjY0YzY5NjI4YjQxNzY1NWM4YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MjU1NzQyOSwiZXhwIjoxNjYyODE2NjI5fQ.bo8m3_yWaOh-6Snf5n5BH4EMcVwdjNVi5ViwCqFd2RY";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  herder: { token: `Bearer ${TOKEN}` },
});
