import React from "react";
import { gwangju_store } from "../json/gwangju_store";

const Curation = () => {
  return (
    <div>
      <div
        className="relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundPosition: "50%",
          // backgroundImage: "url('/img/market/양동시장.jpg')",
          height: "100vh",
        }}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
        >
          <div className="flex justify-center items-center h-full">
            <div className="text-center text-white px-6 md:px-12">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                {/* 광주 양동시장 */}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="my-20">
        <div className="mx-48">
          <p className="font-prigray-400">광주</p>
          <p className="text-2xl font-semibold">양동시장</p>
          <div className="mt-2">
            <p>
              서울의 대표적인 전통 시장인 남대문시장은 600여 년의 역사를
              자랑하는 장소입니다. 그 중심에는 현대적인 쇼핑몰과 골목 시장이
              조화롭게 어우러져 있습니다.
            </p>
            <p>
              서울의 대표적인 전통 시장인 남대문시장은 600여 년의 역사를
              자랑하는 장소입니다. 그 중심에는 현대적인 쇼핑몰과 골목 시장이
              조화롭게 어우러져 있습니다.
            </p>
          </div>
          {/* 메뉴 */}
          <div className="border-b">
            <ul className="mt-8 flex w-1/3 justify-between text-lg font-semibold mb-2">
              <li>전체</li>
              <li>Best</li>
              <li>맛집</li>
              <li>기타</li>
            </ul>
          </div>

          {/* 시장 정보 */}
          <div className="flex w-full flex-wrap justify-between items-center">
            {gwangju_store.splice(0, 9).map((store, idx) => {
              const name = store["점포명"];
              const type = store["취급품목"];
              const location = store["소재지도로명주소"];
              return (
                <div className="border border-gray-200 w-96 h-96 mt-4 my-10" key={idx}>
                  <p>{name}</p>
                  <p>{type}</p>
                  <p>{location}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curation;
