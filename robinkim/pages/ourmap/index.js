import { HOME_PATH } from "@/src/config/config_home";
import NaverMap from "@/src/components/NaverMap";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { generateClickedMarkerHtml, generateMarkerHtml, getCommentData, getMapData, getStoreData, naverSearchData } from "@/src/util/requestList";
import Link from "next/link";

export default function MapPage({ data }) {
    // console.log(data)
    const geoCode = data?.geocode;
    const [clickedData, setClickedData] = useState({});
    const [mapInit, setMapInit] = useState(null);
    console.log(clickedData)
    const [myLocation, setMyLocation] = useState({});
    const mapElement = useRef(null);

    let selectedMarker = null; // 선택한 마커 상태를 저장하는 변수

    const getMarkerData = async (item, name) => {
        // naver 블로그 API
        const res = await naverSearchData(name);

        // 시장 정보
        // const store = await getStoreData(name);

        // 댓글 정보
        const comment = await getCommentData(name);

        setClickedData({ ...item, ['네이버 블로그']: res?.data?.items, comment: comment });

    }

    const moveToMarket = (item, map) => {
        const geo = item["지리정보"];
        const mapLatLng = new naver.maps.LatLng(
            Number(geo.latitude),
            Number(geo.longitude)
        );

        map.panTo(mapLatLng);
    }

    // 마커 클릭 이벤트 핸들러 함수
    const markerClickEvent = (marker, item, map) => {
        naver.maps.Event.addListener(marker, "click", async () => {
            const name = item["시장정보"];
            // map.setZoom(16);

            moveToMarket(item, map)

            // 선택한 마커가 이미 선택되어 있는 경우 클릭 해제 처리
            if (selectedMarker === marker) {
                marker.setIcon({
                    content: generateMarkerHtml(name),
                    size: new naver.maps.Size(10, 10),
                });

                selectedMarker = null; // 선택한 마커 상태 초기화
            } else {
                // 선택한 마커가 없거나 다른 마커를 선택한 경우
                if (selectedMarker) {
                    selectedMarker.setIcon({
                        content: generateMarkerHtml(name),
                        size: new naver.maps.Size(10, 10),
                    });

                }

                marker.setIcon({
                    content: generateClickedMarkerHtml(name),
                    size: new naver.maps.Size(10, 10),
                });

                selectedMarker = marker; // 선택한 마커 설정
            }


            marker.name = name; // 선택한 마커의 이름을 설정합니다.

            getMarkerData(item, name)

        });
    };

    const handleMapClick = () => {
        // 지도 클릭 시 선택한 마커 클릭 해제 처리
        if (selectedMarker) {
            selectedMarker.setIcon({
                content: generateMarkerHtml(selectedMarker.name),
                size: new naver.maps.Size(10, 10),
            });

            selectedMarker = null; // 선택한 마커 상태 초기화
        }
    };

    // map 저장
    const saveMap = (map) => {
        setMapInit(map)
    }

    useEffect(() => {
        const { naver } = window;
        if (!mapElement.current || !naver) return;

        const mapOptions = {
            center: new naver.maps.LatLng(35.1600320, 126.8513380),
            zoom: 16,
            zoomControl: true,
            mapTypeControl: true,
            mapDataControl: false,
            zoomControlOptions: {
                position: naver.maps.Position.TOP_RIGHT,
                style: naver.maps.ZoomControlStyle.SMALL,
            },
        };

        // map 초기화
        const map = new naver.maps.Map(mapElement.current, mapOptions);
        saveMap(map)


        // 커스텀 컨트롤
        const locationBtnHtml = '<button type="button"><span>현재 위치 아이콘</span></button>';
        naver.maps.Event.once(map, 'init', function () {
            //customControl 객체 이용하기
            var customControl = new naver.maps.CustomControl(locationBtnHtml, {
                position: naver.maps.Position.TOP_RIGHT
            });

            customControl.setMap(map);

            naver.maps.Event.addDOMListener(customControl.getElement(), 'click', function () {
                map.setCenter(new naver.maps.LatLng(37.3595953, 127.1053971));
            });
        });



        naver.maps.Event.addListener(map, "click", handleMapClick);

        // 마커 표시하기
        data?.data?.forEach((item) => {
            const geo = item["지리정보"];
            const name = item["시장정보"];

            const marker = new naver.maps.Marker({
                position: new naver.maps.LatLng(geo.latitude, geo.longitude),
                map: map,
                icon: {
                    content: generateMarkerHtml(name),
                    size: new naver.maps.Size(10, 10),
                },
            });

            markerClickEvent(marker, item, map);
        });
    }, []);

    // 현재 위치 추적
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        }

        // 위치추적에 성공했을때 위치 값을 넣어줍니다.
        function success(position) {
            setMyLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            });
        }

        // 위치 추적에 실패 했을때 초기값을 넣어줍니다.
        function error() {
            setMyLocation({ latitude: 37.4979517, longitude: 127.0276188 });
        }
    }, []);

    const handleGeoClick = async (item) => {
        // map 이동
        const geo = item["지리정보"];
        const name = item.name;
        const mapLatLng = new naver.maps.LatLng(
            Number(geo.latitude),
            Number(geo.longitude)
        );

        mapInit.panTo(mapLatLng);

        // 정보 불러오기
        const market = await getMapData(name);
        setClickedData({ market: market });
    }

    return (
        <>
            <div className="sidebar">
                <input type="text" placeholder="Search" />

                <div className="geo_info">
                    {geoCode?.map((item, idx) => {
                        const name = item.name;
                        const lat = item['지리정보'].latitude;
                        const lon = item['지리정보'].longitude;
                        return (
                            <Link key={idx} href={`/ourmap/${name}?lat=${lat}&lon=${lon}`}>
                                <span>
                                    {item.name}
                                </span>
                            </Link>
                        )
                    })}
                </div>

                <div>
                    <div>
                        <p>{clickedData?.["시장정보"]}</p>
                        <p>{clickedData?.["도로명 주소"]}</p>
                        <p>{clickedData?.["지번 주소"]}</p>
                        <p>{clickedData?.["시장유형"]}</p>
                        <p>{clickedData?.["시장정보"]}</p>
                        <p>{clickedData?.["점포수"]}</p>
                        <p>{clickedData?.["취급품목"]}</p>
                        <p>{clickedData?.["홈페이지주소"]}</p>
                    </div>
                    {clickedData?.["네이버 블로그"] && (
                        <div className="m-3 border">
                            <p>네이버 블로그</p>
                            {clickedData?.["네이버 블로그"]?.map((blog, idx) => (
                                <a className="block my-1" key={idx} href={blog?.link} target="_blank" dangerouslySetInnerHTML={{ __html: blog?.title }} />
                            ))}
                        </div>
                    )}
                    {clickedData?.comment && (
                        <div className="m-3 border">
                            <p>댓글</p>
                            {clickedData?.comment?.map((com, idx) => (
                                <div key={idx}>
                                    <p>{com.comment}</p>
                                    <img src={com.img_url} />
                                </div>
                            ))}
                        </div>
                    )}

                </div>


                <div>
                    {clickedData?.market?.map((item, idx) => {
                        return (
                            <p className="cursor-pointer my-2" onClick={() => {
                                moveToMarket(item, mapInit)
                            }} key={idx}>{item?.['시장정보']}</p>
                        )
                    })}
                </div>

            </div>
            <NaverMap mapElement={mapElement} />
        </>
    );
}

export async function getServerSideProps() {
    const response = await axios.get(`${HOME_PATH}/api/map`);
    const data = response.data;

    const geocode = await axios.get(`${HOME_PATH}/api/geocode`);
    const geocode_ = geocode.data;

    return {
        props: {
            data: {
                data: data,
                geocode: geocode_
            },
        },
    };
}
