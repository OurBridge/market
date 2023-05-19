import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HOME_PATH } from "../config/config_home";

const Market = ({ mapInit }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.data;
  const markerData = location.state?.markerData?.items;

  const { naver } = window;

  return (
    <>
      <div className="w-1/4 h-87/100 absolute z-50 bg-prigray-100">
        <div className="h-full border border-gray-200 shadow-md box-border overflow-y-auto">
          <div className="">
            {/* 시장 정보 */}
            <div className="border border-prigray-200 m-4 rounded-lg bg-white">
              <div className="relative">
                <button className="absolute top-4 left-4" type="button" onClick={() => navigate(-1)}>
                  <img
                    className="w-5 h-5"
                    src={`${HOME_PATH}/img/back_white_50.png`}
                    alt="Back"
                  />
                </button>

                <img
                  className="rounded-tr-lg rounded-tl-lg"
                  src={`${HOME_PATH}/img/test_img.jpg`}
                />
              </div>

              {/* 설명 */}
              <div className="px-6 py-4">
                <p className="text-prigray-400">{data["시도군"]}</p>
                <p className="text-tblack font-semibold text-2xl">
                  {data["시장정보"]}
                </p>
                <div className="mt-1 text-tblack">
                  <p>{data["도로명 주소"]}</p>
                  <p>{data["시장유형"]}</p>
                  <p>{data["시장개설주기"]}</p>
                  <p>{data["취급품목"]}</p>
                </div>

                <div className="border-t border-prigray-200 my-4 pt-4 rounded-lg">
                  <p className="text-tblack">
                    서울의 대표적인 전통 시장인 남대문시장은 600여 년의 역사를
                    자랑하는 장소입니다. 그 중심에는 현대적인 쇼핑몰과 골목
                    시장이 조화롭게 어우러져 있습니다. 이곳에서는 의류,
                    액세서리, 가방, 신발 등 다양한 상품을 구매할 수 있으며, 한국
                    전통 공예품과 문화적인 소품들도 찾아볼 수 있습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 네이버 블로그 */}
            <div className="border border-prigray-200 m-4 rounded-lg bg-white px-6 py-4">
              <div>
                <span className="font-semibold text-tblack text-xl">
                  네이버 블로그
                </span>
              </div>

              {markerData?.splice(0, 6)?.map((dt, idx) => {
                const text = String(dt.description).slice(0, 35) + "...";
                return (
                  <div key={idx} className="border-t my-3 border-prigray-200">
                    <a href={dt.link} target="_blank">
                      <div className="my-3">
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-prigray-100 shadow-md flex justify-center items-center mr-1 rounded-full">
                            <img
                              className="w-4 h-4"
                              src={`${HOME_PATH}/img/user_30.png`}
                            />
                          </div>
                          <p className="">{dt.bloggername}</p>
                        </div>

                        <p
                          className="text-lg text-primary-500 font-semibold"
                          dangerouslySetInnerHTML={{ __html: dt.title }}
                        />
                        <p dangerouslySetInnerHTML={{ __html: text }} />
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Market;
