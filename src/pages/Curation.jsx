import React, { useRef } from "react";
import { gwangju_store } from "../json/gwangju_store";

const Curation = () => {
  const introRef = useRef(null);
  const storesRef = useRef(null);

  // 특정 ID가 있는 위치로 스크롤 이동 함수
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div
        id="main"
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

      {/* 시장 소개 */}
      <div ref={introRef} className="py-48 mx-24 border h-screen">
        <div className="mx-96 flex">
          <div className="w-1/4">
            <p className="text-4xl font-semibold">양동시장</p>
            <p>키워드</p>
          </div>
          <div className="w-3/4">
            <p className="mb-6">
              양동시장은 시장이 자리하고 있는 지역인 양동이라는 지명에서
              유래했다. 이 지역은 조선시대까지 늪지대로 갈대밭이었다. 100년
              전쯤부터 제방이 생기고 사람들이 모여 살게 되면서 마을이
              형성되었다. 과거에는 큰 샘이 있어서 샘몰이라고 불렸다. 해방 이후
              이곳이 유명한 장터였기 때문에 이익을 추구하기보다 어질게 살라는
              의미로 양동(良洞)이라는 이름이 붙었다.
            </p>
            <p className="mb-6">
              광주 양동시장은 광주뿐만 아니라 전라남도에서 가장 큰 규모를
              자랑하는 전통시장입니다. 전국에서 소비되는 홍어의 90%가
              양동시장에서 거래되고 있으며 판매제품의 원산지표시 전국
              우수시장으로 선정되었습니다. 산지에서 직송하는 신선한 제품을
              저렴하게 판매하여 백화점보다 소비자 만족도가 높은 전통시장으로
              사랑 받고 있습니다.
            </p>
            <p className="mb-6">
              역사가 오래된 시장이라고 해서 시설이 낙후됐을 것이라 생각하면
              오산이다. 광주 양동시장은 현대적인 시설을 갖춘 '세련된 시장'이다.
              세련된 것은 시설 뿐만이 아니다. 끊임없이 변화하는 시장 환경에
              발맞춰 시장의 경영 시스템도 꾸준히 변화했다. 시장 측에서는 통합
              로고사업을 벌이는가 하면, 온라인 쇼핑몰을 구축하고 상인대학을
              개설하는 등 경영 부문에 있어서도 현대화를 추진해왔다. 그 결과,
              지난 2006년에는 '전국우수시장 박람회'에서 최우수상을 받기도 했다.
              세월이 흐르며 재래시장의 규모나 파급력이 이전보다 많이
              약해졌다고는 하나, 양동시장은 여전히 호남 지역에서도 손꼽히는
              거래량을 자랑한다.
            </p>
            <p>
              양동시장의 건물은 총 4개 동으로 구성돼 있다. 이곳에는 농산물,
              수산물, 공산품 등 다양한 품목을 취급하는 점포가 300여 곳 이상 성업
              중이다. 이 중 제사용품과 혼수품을 판매하는 점포들이 가장
              유명하다. 먹거리 중에서는 전남 지역의 대표 음식인 홍어가 널리
              판매되고 있다. 양동시장은 '후덕한 인심의 표상'이라는 평가를 받을
              만큼, 제 이름처럼 '어진 인심'을 가진 곳으로 유명하다.
            </p>
          </div>
        </div>
      </div>

      {/* 시장 정보 */}
      <div className="h-screen " ref={storesRef}>
        <div className="py-20">
          <div className="mx-48">
            <p className="font-prigray-400">광주</p>
            <p className="text-2xl font-semibold">양동시장</p>
            {/* <div className="mt-2">
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
            </div> */}
            {/* <div className="border-b">
              <ul className="mt-8 flex w-1/3 justify-between text-lg font-semibold mb-2">
                <li>전체</li>
                <li>Best</li>
                <li>맛집</li>
                <li>기타</li>
              </ul>
            </div> */}

            <div className="flex flex-wrap justify-center items-center mx-48">
              {gwangju_store?.map((store, idx) => {
                const name = store["점포명"];
                const type = store["취급품목"];
                const location = store["소재지도로명주소"];
                return (
                  <div
                    className="border border-gray-200 w-80 h-80 my-10 mt-4 mx-5 rounded-lg"
                    key={idx}
                  >
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
      {/* 스크롤 이동 버튼 */}
      <div className="fixed bottom-0 right-0 m-4">
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded"
          onClick={() => scrollToSection(introRef)}
        >
          시장 소개로 이동
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded"
          onClick={() => scrollToSection(storesRef)}
        >
          시장 정보로 이동
        </button>
      </div>
    </div>
  );
};

export default Curation;
