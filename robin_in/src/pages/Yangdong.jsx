import React, { useRef } from "react";
import { gwangju_store } from "../json/gwangju_store";
import { HOME_PATH } from "../config/config_home";

const Yangdong = () => {
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
          backgroundImage: "url('/img/market/양동시장.jpg')",
          height: "100vh",
        }}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
        >
          <div className="flex justify-center items-center h-full">
            <div className="text-center text-white px-6 md:px-12">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-5 title_a">
                광주 양동시장
              </h1>
              <p className="text-2xl">100년 역사, 이야기 가득한 먹거리 시장</p>
            </div>
          </div>
        </div>
      </div>

      {/* 시장 소개 */}
      <div ref={introRef} className="py-36 mx-4 sm:mx-24">
        <div className="md:mx-80 m-0 flex flex-col md:flex-row">
          <div className="w-1/2">
            <p className="text-4xl font-bold mb-2 title_a">양동시장</p>
            <p>
              100년 역사,
              <br />
              이야기 가득한 먹거리 시장
            </p>
          </div>
          <div className="md:w-3/4 w-full leading-7 tracking-wide md:ml-4">
            <p className="mb-6">
              광주 양동시장은 광주와 전라남도에서 가장 큰 규모를 자랑하는
              전통시장으로 알려져 있다. 100년의 역사를 자랑하며, 광주의
              명물이자 호남 지역에서 가장 큰 재래시장이다.
            </p>
            <p className="mb-6">
              양동시장은 1910년부터 광주교 아래의 백사장에서
              매달 2일과 7일에 오일장이 열린 것으로 시작했다. 1940년에는 일본인들의 신사
              주변 정리 사업으로 인해 현재의 위치로 시장이 이전되었다. 이후
              1946년 동명 변경 과정에서 '어질게 살라는 뜻'에 양동(良洞)이라는
              이름이 사용되기 시작했다.
            </p>
            <p className="mb-6">
              양동시장은 전국에서 소비되는 홍어의 90%가 거래되는 곳으로
              유명하며, 전국 우수시장으로 선정되어 있다. 약 300여 곳의
              점포가 4개 동으로 구성되어 있으며, 농산물, 수산물, 공산품 등
              다양한 품목을 취급한다.
            </p>
            <p>
              양동시장은 전통적인 재래시장의 매력과 현대적인 시설과 경영
              시스템의 조화를 갖춘 멋진 시장으로, 지역 주민들과 방문객들에게
              사랑받고 있다. 쇼핑과 음식을 즐기는 사람들에게 다양하고
              흥미로운 경험을 제공하고 있다.
            </p>
          </div>
        </div>
        <div className="md:w-3/4 w-18/20 mx-auto flex flex-col md:flex-row justify-between mt-16 h-full">
          <div style={{ height: "240px" }} className="relative md:mx-4 rounded-lg">
            <img
              className="rounded-lg"
              src={`${HOME_PATH}/img/market/old_양동시장_1.jpg`}
              style={{ objectFit: "contain", height: "100%" }}
              alt="Image 1"
            />
            <div className="rounded-lg absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <p className="text-white text-xl font-bold">Data 1</p>
            </div>
          </div>
          <div style={{ height: "240px" }} className="relative md:mx-4 rounded-lg">
            <img
              className="rounded-lg"
              src={`${HOME_PATH}/img/market/old_양동시장_2.jpg`}
              style={{ objectFit: "contain", height: "100%" }}
              alt="Image 2"
            />
            <div className="rounded-lg absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <p className="text-white text-xl font-bold">Data 2</p>
            </div>
          </div>
          <div style={{ height: "240px" }} className="relative md:mx-4 rounded-lg">
            <img
              className="rounded-lg"
              src={`${HOME_PATH}/img/market/old_양동시장_3.jpg`}
              style={{ objectFit: "contain", height: "100%" }}
              alt="Image 3"
            />
            <div className="rounded-lg absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <p className="text-white text-xl font-bold">Data 3</p>
            </div>
          </div>
        </div>
      </div>
      {/* 시장 정보 */}
      <div ref={storesRef}>
        <div className="md:py-20">
          <div className="mx-4 md:mx-48">
            {/*  01  */}
            <div className="flex flex-col-reverse md:flex-row justify-between mb-10">
              <div className="w-full md:w-1/3">
                <p className="text-prigray-400">#양동시장 #통닭 #노포맛집</p>
                <p className="text-2xl font-semibold my-2">
                  추억을 간직한 맛, 양동 통닭집
                </p>
                <p className="leading-6 mt-5">
                  세월이 흘렀어도 새로운 전성시대를 구가하는 것은 시장 초입
                  닭전머리의 양동통닭이다. 브랜드 치킨 사이에서도 '양동통닭'은
                  옛날식 튀김닭을 좋아하는 마니아들의 사랑에 힘입어 진화를
                  거듭하고 있다. 시멘봉투라 불리던 누런 종이포장은 산뜻한
                  종이박스로 바뀌고, 똥집이나 발, 고구마를 튀겨서 담아주는
                  옛날식 서비스는 새로운 생존전략으로 평가받는다.
                </p>
              </div>
              <div className="flex flex-wrap justify-center items-center">
                {gwangju_store?.slice(0, 2)?.map((store, idx) => {
                  const name = store["점포명"];
                  const location = store["소재지도로명주소"];
                  return (
                    <div
                      className="border border-gray-200 w-full md:w-80 h-80 mx-2 md:mx-5 my-5 md:my-0 rounded-lg relative bg-no-repeat bg-cover"
                      key={idx}
                      style={{
                        backgroundImage: `url(${store.img_url})`,
                      }}
                    >
                      <div
                        className="rounded-lg absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                      >
                        <div className="p-4 text-white">
                          <p className="font-semibold text-2xl mb-2">{name}</p>
                          <p>{location}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/*  02  */}
            <div className="flex flex-col-reverse md:flex-row justify-between mb-10">
              <div className="w-full md:w-1/3">
                <p className="text-prigray-400">#양동시장 #빵집 #소금빵</p>
                <p className="text-2xl font-semibold my-2">
                  소금빵 맛집, 양동시장 소금빵집
                </p>
                <p className="leading-6 mt-5">
                  양동시장에서 오래 전해져 내려오는 소금빵의 향기와 맛을 그대로
                  담았다. 기름기가 없고 소금으로 어우러진 부드러운 맛이
                  일품이다. 양동시장 소금빵집은 그간의 전통을 지키며, 진리를
                  꿰뚫어 낸 맛을 선보인다.
                </p>
              </div>
              <div className="flex flex-wrap justify-center items-center">
                {gwangju_store?.slice(2, 4)?.map((store, idx) => {
                  const name = store["점포명"];
                  const location = store["소재지도로명주소"];
                  return (
                    <div
                      className="border border-gray-200 w-full md:w-80 h-80 mx-2 md:mx-5 my-5 md:my-0 rounded-lg relative bg-no-repeat bg-cover"
                      key={idx}
                      style={{
                        backgroundImage: `url(${store.img_url})`,
                      }}
                    >
                      <div
                        className="rounded-lg absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                      >
                        <div className="p-4 text-white">
                          <p className="font-semibold text-2xl mb-2">{name}</p>
                          <p>{location}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/*  03  */}
            <div className="flex flex-col-reverse md:flex-row justify-between mb-10">
              <div className="w-full md:w-1/3">
                <p className="text-prigray-400">#양동시장 #가성비 #분식</p>
                <p className="text-2xl font-semibold my-2">
                  시장 인심이 가득한 노포 맛집
                </p>
                <p className="leading-6 mt-5">
                  양동시장에서 오래 전해져 내려오는 소금빵의 향기와 맛을 그대로
                  담았다. 기름기가 없고 소금으로 어우러진 부드러운 맛이
                  일품이다. 양동시장 소금빵집은 그간의 전통을 지키며, 진리를
                  꿰뚫어 낸 맛을 선보인다.
                </p>
              </div>
              <div className="flex flex-wrap justify-center items-center">
                {gwangju_store?.slice(4, 6)?.map((store, idx) => {
                  const name = store["점포명"];
                  const location = store["소재지도로명주소"];
                  return (
                    <div
                      className="border border-gray-200 w-full md:w-80 h-80 mx-2 md:mx-5 my-5 md:my-0 rounded-lg relative bg-no-repeat bg-cover"
                      key={idx}
                      style={{
                        backgroundImage: `url(${store.img_url})`,
                      }}
                    >
                      <div
                        className="rounded-lg absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                      >
                        <div className="p-4 text-white">
                          <p className="font-semibold text-2xl mb-2">{name}</p>
                          <p>{location}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 스크롤 이동 버튼 */}
      <div className="fixed bottom-0 right-0 m-4">
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded mr-2 shadow-md"
          onClick={() => scrollToSection(introRef)}
        >
          시장 소개
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded shadow-md"
          onClick={() => scrollToSection(storesRef)}
        >
          시장 정보
        </button>
      </div>
    </div>
  );
};

export default Yangdong;
