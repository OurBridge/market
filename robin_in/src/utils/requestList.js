import axios from "axios";

// naver 블로그 API
const clientId = process.env.REACT_APP_NAVER_CLIENT_ID;
const clientSecret = process.env.REACT_APP_NAVER_CLIENT_SECRET;

export async function naverSearchData(query) {
    try {
        const response = await axios.get('http://localhost:3005/search/blog', {
            params: {
                query: query
            }
        });

        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}