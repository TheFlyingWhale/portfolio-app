import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
	baseURL: `http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`,
});

export default api;
