import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HOME_PATH } from "../config/config_home";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { handleNextClick, handlePrevClick } from "../utils/events";

const Home = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const prevButton = document.querySelector(".swiper-button-prev");
    const nextButton = document.querySelector(".swiper-button-next");
    prevButton.addEventListener("click", handlePrevClick);
    nextButton.addEventListener("click", handleNextClick);

    return () => {
      prevButton.removeEventListener("click", handlePrevClick);
      nextButton.removeEventListener("click", handleNextClick);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
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
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Link to="/map">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover"
              style={{
                backgroundPosition: "50%",
                backgroundImage: `url('${HOME_PATH}/img/main_banner_no.jpg')`,
                height: "600px",
              }}
            >
              <div className="absolute w-full h-full">
                <div className="flex justify-center items-center h-full flex-col">
                  <p className="mb-1 text-3xl md:text-4xl tracking-tight">
                    전국 1,000여 개 시장정보
                  </p>
                  <p className="mb-52 text-3xl md:text-4xl font-semibold tracking-tight">
                    시장275에서 만나보세요!
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative overflow-hidden bg-no-repeat bg-cover"
            style={{
              backgroundPosition: "50%",
              backgroundImage: `url('${HOME_PATH}/img/main_banner_01.jpg')`,
              height: "600px",
            }}
          >
            <div
              className="absolute top-10 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed title_a"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
              <div className="flex justify-center items-center h-full">
                <div className="text-center px-6 md:px-12">
                  <div className="text-white mb-5">
                    <p className="text-3xl md:text-4xl font-bold tracking-tight mb-2.5">
                      광주
                    </p>
                    <p className="text-5xl md:text-6xl font-bold tracking-tight">
                      양동시장
                    </p>
                  </div>
                  <Link
                    to="/curation/yangdong"
                    className="inline-block px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase 
                    rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    큐레이션 바로가기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-navigation">
        <button
          className="swiper-button-prev main-btn-prev w-10"
          onClick={handlePrevClick}
        >
          <img src={`${HOME_PATH}/img/prev_arrow.png`} alt="Previous" />
        </button>

        <button
          className="swiper-button-next main-btn-next w-10"
          onClick={handleNextClick}
        >
          <img src={`${HOME_PATH}/img/next_arrow.png`} alt="Next" />
        </button>
      </div>
      {/* 큐레이션 미리보기 */}
      <div className="w-full mb-10">
        <div className="mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          <div className="border-b border-prigray-300 mt-10">
            <p className="text-2xl font-semibold mb-3 md:ml-0 ml-3">
              이달의 큐레이션
            </p>
          </div>
          <div className="">
            {/* 큐레이션 아이템 01 */}
            <Link to="/curation/gwangju">
              <div className="mt-8 text-white transition ">
                <div
                  className="relative overflow-hidden bg-no-repeat bg-cover"
                  style={{
                    backgroundPosition: "50%",
                    backgroundImage: "url('/img/gwangju.jpg')",
                    height: "300px",
                  }}
                >
                  <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black/25 hover:bg-black/50 transition">
                    <div className="flex justify-center items-center h-full">
                      <div className="text-center px-6 md:px-12">
                        <div className="title_a">
                          <p className="text-3xl md:text-4xl font-bold tracking-tight mb-2.5">
                            6월의 시장
                          </p>
                          <p className="text-5xl md:text-6xl font-bold tracking-tight">
                            광주
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            {/* 큐레이션 아이템 02 */}
            <div className="mt-10">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover"
                style={{
                  backgroundPosition: "50%",
                  backgroundImage: "url('/img/busan.jpg')",
                  height: "300px",
                }}
              >
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
                >
                  <div className="flex justify-center items-center h-full">
                    <div className="text-center text-white px-6 md:px-12">
                      <div className="title_a">
                        <p className="text-3xl md:text-4xl font-bold tracking-tight mb-2.5">
                          7월의 시장
                        </p>
                        <p className="text-5xl md:text-6xl font-bold tracking-tight">
                          coming soon
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mb-10">
        <div className="mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          <div className="border-b border-prigray-300 mt-10">
            <p className="text-2xl font-semibold mb-3 md:ml-0 ml-3">
              시장 미리보기
            </p>
          </div>
          <div className="flex w-full mt-8">
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
                        <p className="font-semibold text-2xl mb-2">양동시장</p>
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
                <Link to="/curation/daein">
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
                        <p className="font-semibold text-2xl mb-2">대인시장</p>
                        <p>예술과 청년이 모이는 전통 시장</p>
                      </div>
                    </div>
                  </div>
                </Link>
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
    </>
  );
};

export default Home;
