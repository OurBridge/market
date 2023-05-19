import React from "react";

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
          <p className="text-xl">양동시장</p>
          <p>
            서울의 대표적인 전통 시장인 남대문시장은 600여 년의 역사를 자랑하는
            장소입니다. 그 중심에는 현대적인 쇼핑몰과 골목 시장이 조화롭게
            어우러져 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Curation;
