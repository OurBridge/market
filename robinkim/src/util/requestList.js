import { HOME_PATH } from "@/src/config/config_home";
import axios from "axios";

// naver 블로그 API
export const naverSearchData = async (query) => {
    try {
        const res = await axios.get(`${HOME_PATH}/api/naver?display=5&query=${query}`);
        return res.data;
    } catch (error) {
        console.error(error.message);
        throw new Error('네이버 검색 데이터를 가져오는 도중에 오류가 발생하였습니다.');
    }
};

// store 정보
export const getStoreData = async (query) => {
    try {
        const res = await axios.get(`${HOME_PATH}/api/store?market=${query}`);
        return res.data;
    } catch (error) {
        console.error(error.message);
        throw new Error('네이버 검색 데이터를 가져오는 도중에 오류가 발생하였습니다.');
    }
}

// map 정보
export const getMapData = async (query) => {
    try {
        const res = await axios.get(`${HOME_PATH}/api/map?city=${query}`);
        return res.data;
    } catch (error) {
        console.error(error.message);
        throw new Error('네이버 검색 데이터를 가져오는 도중에 오류가 발생하였습니다.');
    }
}