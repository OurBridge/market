import axios from "axios";

// const defaultUrl = process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL_DEV
const defaultUrl = "http://localhost:3000/";

export const URL = {
  store: "store",
  naver: "naver",
  company: "company",
  erp_setting: "erp_setting",
  etc: "etc",
  login: "login",
  member: "member",
};

export const requestPost = async (url_path, parameter) => {
  const params = new URLSearchParams(parameter);
  const url = defaultUrl + url_path;
  const headers = {
    // access_token: sessionStorage.getItem("access_token"),
    // refresh_token: sessionStorage.getItem("refresh_token"),
  };

  let result = await axios
    .post(url, params, {
      headers: headers,
      timeout: 0,
    })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
    });

  return result;
};

export const requestGet = async (url_path, parameter) => {
  const url = `${defaultUrl + url_path}?${parameter}`;
  const headers = {
    // access_token: sessionStorage.getItem("access_token"),
    // refresh_token: sessionStorage.getItem("refresh_token"),
  };
  let result = await axios
    .get(url, {
      headers: headers,
      timeout: 0,
    })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
    });

  return result;
};
