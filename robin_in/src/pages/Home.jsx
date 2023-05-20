import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        className="relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundPosition: "50%",
          backgroundImage:
            "url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp')",
          height: "600px",
        }}
      >
        <div
          className="absolute top-10 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
        >
          <div className="flex justify-center items-center h-full">
            <div className="text-center text-white px-6 md:px-12">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12"></h1>
              {/* <button
             type="button"
             className="inline-block px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
             data-mdb-ripple="true"
             data-mdb-ripple-color="light"
           >
Get started
</button> */}
            </div>
          </div>
        </div>
      </div>
      {/* 큐레이션 미리보기 */}
      <div className="w-full mb-20">
        <div className="mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          <div className="border-b border-prigray-300 mt-10">
            <p className="text-2xl font-semibold mb-3">큐레이션</p>
          </div>
          {/* 큐레이션 아이템 01 */}
          <Link to="/curation/yangdong">
            <div className="mt-8">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover"
                style={{
                  backgroundPosition: "50%",
                  backgroundImage: "url('/img/market/양동시장.jpg')",
                  height: "300px",
                }}
              >
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
                >
                  <div className="flex justify-center items-center h-full">
                    <div className="text-center text-white px-6 md:px-12">
                      <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                        광주 양동시장
                      </h1>
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
                backgroundImage: "url('/img/market/말바우시장.jfif')",
                height: "300px",
              }}
            >
              <div
                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
              >
                <div className="flex justify-center items-center h-full">
                  <div className="text-center text-white px-6 md:px-12">
                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                      광주 말바우시장
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
