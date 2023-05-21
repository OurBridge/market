import axios from "axios";
import { comment } from "../json/comment";

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

// 댓글 데이터 필터
export async function getCommentData(query) {
    const data = comment.filter((item) => item["시장정보"] === query);
    return data;
}