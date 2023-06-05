import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation]);

const Gwangju = () => {
  const [slidesPerView, setSlidesPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(2);
      }
    };

    handleResize(); // Call it initially
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {/* 시장 소개 */}
      <div className="pt-28 mx-4 sm:mx-36 ">
        <div className="md:mx-48 m-0">
          <div className="md:flex-col flex-row mb-6">
            <p className="rounded-full bg-prigray-200 font-semibold inline-block p-2 px-3 mb-3">
              월간 시장 - 6월호
            </p>
            <p className="text-4xl font-bold mb-4 title_a">
              호남의 중심, 다양한 먹거리의 고장
            </p>
            <p className="text-4xl font-bold mb-4 title_a">
              &lt;광주&gt; 시장 탐방
            </p>
          </div>
          <div className="w-full leading-7 tracking-wide">
            <p className="mb-4">
              서울과 부산, 인천에 이어 국내 제6위를 차지하고 있는 도시, 호남지방
              중추 역할을 하고 있는 도시, 바로 광주광역시다. 예로부터 호남은
              우리나라 최대의 곡창지대인 호남평야의 다양한 농산물과 무등산에서
              채취한 산나물, 그리고 서쪽과 남쪽의 해안에서 생산되는 신선한
              해산물이 조화를 이루는 곳으로 알려져 있다.
            </p>
            <p className="mb-4">
              호남 각지에서 생산되는 풍요로운 농수산품은 호남의 중심인 광주로
              모이기 시작했다. 광주천 다리 아래에서 시작되어 현대식 전통시장으로
              탈바꿈한 양동시장, 노점상들이 모여 만들기 시작해 유일하게 남아
              있는 오일장인 말바우시장 등 오랜 역사를 자랑하는 시장들이 그
              산물이다.
            </p>
            <p className="mb-4">
              역사가 깊은 만큼 광주 시민들에게 시장은 다양한 의미를 갖고 있다.
              일제강점기 때 시장은 시민들의 애환을 함께 하였고, 1980년 5.18 광주
              민주화운동 때 시장은 주먹밥을 비롯한 먹을 것을 제공하며 시민들과
              함께하였다. 시장은 언제나 시민 곁에서 공존하는 곳이었다.
            </p>
            <p>
              지금도 여전히 광주 시민들의 사랑을 받으며 이제는 하나의 브랜드가
              되어 가는 여러 시장들, 그 속으로 들어가 광주 시장들의 북적거림을
              느껴보자.
            </p>
          </div>
        </div>

        {/* 시장들 */}
        <div className="my-12">
          <div className="md:mx-48 m-0 flex flex-col md:flex-row ">
            <div className="w-full md:w-1/3 mb-3">
              <p className="text-3xl font-bold mb-2 title_a">광주의 시장들</p>
            </div>
            {/* market info */}
            <div className="flex w-full md:w-2/3">
              <Swiper slidesPerView={slidesPerView} navigation>
                <SwiperSlide>
                  <Link to="/curation/yangdong">
                    <div
                      className="border border-gray-200 mx-auto w-full md:w-80 h-80 rounded-lg relative bg-no-repeat bg-cover"
                      style={{
                        backgroundImage: `url("/img/market/lg/광주양동시장.jpg")`,
                      }}
                    >
                      <div
                        className="rounded-lg absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                      >
                        <div className="p-4 text-white">
                          <p className="font-semibold text-2xl mb-2">
                            양동시장
                          </p>
                          <p>100년 역사, 이야기 가득한 먹거리 시장</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to="/curation/malbau">
                    <div
                      className="border border-gray-200 mx-auto w-full md:w-80 h-80 rounded-lg relative bg-no-repeat bg-cover"
                      style={{
                        backgroundImage: `url("/img/market/lg/말바우시장.jpg")`,
                      }}
                    >
                      <div
                        className="rounded-lg absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                      >
                        <div className="p-4 text-white">
                          <p className="font-semibold text-2xl mb-2">
                            말바우시장
                          </p>
                          <p>전통 5일장의 옛 모습이 남아있는 시장</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div
                      className="border border-gray-200 mx-auto w-full md:w-80 h-80 rounded-lg relative bg-no-repeat bg-cover"
                      style={{
                        backgroundImage: `url("/img/market/lg/대인시장.jpg")`,
                      }}
                    >
                      <div
                        className="rounded-lg absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                      >
                        <div className="p-4 text-white">
                          <p className="font-semibold text-2xl mb-2">
                            대인시장
                          </p>
                          <p>예술과 청년이 모이는 전통 시장</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div to="/curation/daein">
                    <div
                      className="border border-gray-200 mx-auto w-full md:w-80 h-80 rounded-lg relative bg-no-repeat bg-cover"
                      style={{
                        backgroundImage: `url("/img/market/lg/1913송정역시장.jpg")`,
                      }}
                    >
                      <div
                        className="rounded-lg absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                      >
                        <div className="p-4 text-white">
                          <p className="font-semibold text-2xl mb-2">
                            송정역시장
                          </p>
                          <p>역사와 현대가 공존하는 시장</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gwangju;
