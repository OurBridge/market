import React, { useRef } from "react";
import { HOME_PATH } from "../../config/config_home";
import { requestStoreData } from "../../utils/requestList";

const Malbau = () => {
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

  const gwangju_store = requestStoreData("말바우시장");

  return (
    <div>
      <div
        id="main"
        className="relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundPosition: "50%",
          backgroundImage: "url('/img/main_banner_01.jpg')",
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
                광주 말바우시장
              </h1>
              <p className="text-2xl">전통 5일장의 옛 모습이 남아있는 시장</p>
            </div>
          </div>
        </div>
      </div>

      {/* 시장 소개 */}
      <div ref={introRef} className="py-20 md:py-20 mx-4 sm:mx-24">
        <div className="md:mx-80 m-0 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex md:flex-col flex-row mb-3">
            <p className="text-4xl font-bold mb-2 md:mr-0 mr-4 title_a">
              말바우시장
            </p>
            <p>
              전통 5일장의 재미와
              <br />옛 모습이 남아있는 시장
            </p>
          </div>
          <div className="md:w-3/4 w-full leading-7 tracking-wide md:ml-4">
            <p className="mb-6">
              광주 말바우시장은 광주에서 5일장의 명맥을 이어가고 있는 대표적인
              전통시장이다. 2, 4, 7, 9일, 한 달에 12번 장이 서는데, 장이 열리는
              날엔 수많은 사람들이 시장으로 몰린다. 매일 열리는 상설장과 달리
              오일장만의 고유한 매력을 말바우시장은 여전히 간직하고 있다.
            </p>
            <p className="mb-6">
              말바우시장이라는 정겨운 이름은 옛 장터에 있던 바위에서 유래한다.
              김덕령 장군의 천리마가 바위에 발굽을 힘차게 내디뎠는데, 발굽
              모양으로 발자국이 찍혀서 그 바위를 말바우라고 불렀다. 또 하나는 옛
              장터에 말처럼 큰 바위가 있었는데, 아이들이 바위에 걸터앉아 말 타는
              시늉을 하며 놀았다고 해서 말바우로 불렸다는 이야기다. 안타깝게도
              두 개의 바위는 지금 남아있지 않다.
            </p>
            <p className="mb-6">
              오일장은 대개 5일마다 열리기 때문에 5일장이라고 하는데, 예부터
              지역 주민들과 농민들이 모여 물건을 사고파는 장터기 때문에, 신선한
              농산물은 물론 다른 시장에서는 보기 힘든 지역 특산품을 저렴한
              가격에 구입할 수 있다. 뿐만 아니라, 지역 주민들이 오일장에 모여
              교류하는 역할도 하여 다양한 볼거리와 시장 특유의 먹거리도 즐길 수
              있다.
            </p>
            <p>
              2000년 대에 이후에 정식으로 허가를 받은 시장이 된 말바우 시장은
              현대화 과정을 거쳐 지붕도 생긴 어엿한 현대적 전통 시장의 모습이다.
              하지만 여전히 말바우 시장의 골목길엔 정겨운 옛 시장의 모습이 남아
              있는데, 바로 골목길에 나란히 앉아 직접 키운 농산물을 파는
              할머니들의 노점이다. 작은 노점에서 엿볼 수 있는 한국인의 정과 후한
              인심을 보는 것도 시장의 재미 요소 중 하나다.
            </p>
          </div>
        </div>
        <div className="md:w-3/4 w-18/20 mx-auto flex flex-col md:flex-row justify-between mt-16">
          <div className="relative md:mx-4">
            <img
              src={`${HOME_PATH}/img/market/old_말바우시장_1.jpg`}
              style={{ objectFit: "contain" }}
              alt="old_말바우시장_1"
            />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <p className="text-white text-xl font-bold">
                @광주 100년 사진 - 말바우 시장 일대
              </p>
            </div>
          </div>
          <div className="relative md:mx-4 ">
            <img
              src={`${HOME_PATH}/img/market/old_말바우시장_2.jpg`}
              style={{ objectFit: "contain" }}
              alt="old_말바우시장_2"
            />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <p className="text-white text-xl font-bold">
                @광주 100년 사진 - 말바우 시장 일대
              </p>
            </div>
          </div>
          <div className="relative md:mx-4">
            <img
              src={`${HOME_PATH}/img/market/old_말바우시장_3.jpg`}
              style={{ objectFit: "contain" }}
              alt="old_말바우시장_3"
            />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <p className="text-white text-xl font-bold">
                @광주 100년 사진 - 광주역
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 시장 정보 */}
      <div ref={storesRef} className="bg-gray-100">
        {/* <div className="flex justify-center">
          <p className="text-3xl title_a my-16 font-bold">대표 먹거리</p>
        </div> */}
        <div className="md:py-20">
          <div className="mx-4 md:mx-48">
            {/*  01  */}
            <div className="flex flex-col-reverse md:flex-row justify-between mb-10">
              <div className="w-full md:w-1/3">
                <p className="text-prigray-600">
                  #말바우시장 #팥죽 #저렴한맛집
                </p>
                <p className="text-2xl font-semibold my-2">
                  장날이면 생각나는 달달한 팥죽
                </p>
                <p className="leading-6 mt-5">
                  어렸을 때 시장에서 한 번쯤은 먹어 봤던 팥죽, 겨울이면 특히 더
                  생각나는 별미다. 요즘엔 많이 사라졌지만 이곳 말바우 시장에는
                  여전히 시골 장터 팥죽 가게가 곳곳에 자리 잡고 있다. 광주는
                  특이하게 팥칼국수를 팥죽이라고 하는데, 물론 새알을 넣은 팥죽을
                  좋아하는 사람을 위한 동지죽도 있다. 장날이 아니더라도 팥죽을
                  먹으로 오는 사람이 있을 정도로 달달한 맛이 일품인 말바우
                  시장의 팥죽, 맛도 건강도 챙길 음식으로 아주 좋다.
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
                <p className="text-prigray-600">
                  #말바우시장 #횟집 #가성비맛집
                </p>
                <p className="text-2xl font-semibold my-2">
                  저렴한 가격과 푸짐한 양, 말바우 횟집
                </p>
                <p className="leading-6 mt-5">
                  평일에도 웨이팅이 있을 정도로 유명한 시장 횟집들이 있다. 여기
                  시장 횟집은 항상 앞에 ‘가성비 좋은’이라는 수식어가 붙는데,
                  싱싱한 회를 저렴한 가격에 나름 푸짐하게 먹을 수 있다는 장점이
                  있다. 무엇보다 여전히 소주는 2,000원, 맥주는 3,000원의 가격을
                  유지하고 있어 더욱 유명해졌다. 제철 회를 시장 물가로 술과
                  매운탕까지 모두 먹을 수 있는 곳이라니, 그냥 지나치기가 더
                  어렵지 않을까.
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
                <p className="text-prigray-600">#말바우시장 #족발 #노포맛집</p>
                <p className="text-2xl font-semibold my-2">
                  단골들이 찾는 노포맛집, 족발과 국밥
                </p>
                <p className="leading-6 mt-5">
                  오래된 시장만큼, 오래된 노포 맛 집들이 있다. 말바우 시장의
                  족발&국밥집이 그렇다. 10년째 단골들이 이곳을 찾는 만큼 맛도
                  가격도 10년 전과 느낌이 그대로다. 특히 족발이 유명한데 족발만
                  주문해도 나오는 뜨끈한 탕과 순대, 반찬들로 푸짐한 한 상 차림이
                  잊히지 않아 여러 번 방문하게 만든다. 광주는 족발을 초장과
                  들깨가루가 들어간 양념장에 찍어 먹는데, 외지인들은 낯설 수
                  있지만 한 번 맛보면 별미라 광주에 여행 온 사람들이 자주 찾기도
                  한다.
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

export default Malbau;
