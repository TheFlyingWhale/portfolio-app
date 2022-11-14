import axios from "axios";

const api = axios.create({
	baseURL: `${process.env.NEXT_PUBLIC_VERCEL_URL}/api`,
});

export default api;
