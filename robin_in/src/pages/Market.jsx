import React from "react";
import { useLocation } from "react-router-dom";
import { HOME_PATH } from "../config/config_home";

const Market = ({ mapInit }) => {
  const location = useLocation();
  const data = location.state?.data;
  const { naver } = window;

  return (
    <>
      <div className="w-1/4 h-screen absolute z-50 bg-prigray-100">
        <div className="h-full border border-gray-200 shadow-md box-border overflow-y-auto">
          <div className="">
            {/* 시장 정보 */}
            <div>
              <div className="border border-prigray-200 m-4 rounded-lg bg-white">
                <div className="p-2 pb-0">
                  <img
                    className="rounded-lg"
                    src={`${HOME_PATH}/img/test_img.jpg`}
                  />
                </div>

                {/* 설명 */}
                <div className="px-8 py-4">
                  <p className="text-prigray-400">{data["시도군"]}</p>
                  <p className="font-semibold text-2xl">{data["시장정보"]}</p>
                  <div className="text-lg mt-1">
                    <p>{data["도로명 주소"]}</p>
                    <p>{data["시장유형"]}</p>
                    <p>{data["시장개설주기"]}</p>
                    <p>{data["취급품목"]}</p>
                  </div>

                  <div className="border border-prigray-200 mt-2 p-2 rounded-lg">
                    <p>
                      서울의 대표적인 전통 시장인 남대문시장은 600여 년의 역사를
                      자랑하는 장소입니다. 그 중심에는 현대적인 쇼핑몰과 골목
                      시장이 조화롭게 어우러져 있습니다. 이곳에서는 의류,
                      액세서리, 가방, 신발 등 다양한 상품을 구매할 수 있으며,
                      한국 전통 공예품과 문화적인 소품들도 찾아볼 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 네이버 블로그 */}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Market;
