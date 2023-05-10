import { URL } from "./HttpConnect";

export const requestGetBoard = async (params) => {
  const response = await requestGet(`${URL.board}`, params);
  return response;
};
