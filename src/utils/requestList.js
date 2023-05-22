import axios from "axios";
import { comment } from "../json/comment";

// naver 블로그 API
const clientId = process.env.REACT_APP_NAVER_CLIENT_ID;
const clientSecret = process.env.REACT_APP_NAVER_CLIENT_SECRET;

// export async function naverSearchData(query) {
//     try {
//         const response = await axios.get('http://localhost:3005/search/blog', {
//             params: {
//                 query: query
//             }
//         });

//         return response.data;
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// }

export async function naverSearchData(query) {
    const client_id = '8HL0Kde0BuIxCob_IWH7';
    const client_secret = 'KXphtnevh0';
    var api_url = 'https://openapi.naver.com/v1/search/blog?query=' + query + " 맛집"; // JSON 결과
    var options = {
      headers: { 'X-Naver-Client-Id': client_id, 'X-Naver-Client-Secret': client_secret }
    };

    const res = await axios.get(api_url, options)
    console.log(res)
}

// 댓글 데이터 필터
export async function getCommentData(query) {
    const data = comment.filter((item) => item["시장정보"] === query);
    return data;
}