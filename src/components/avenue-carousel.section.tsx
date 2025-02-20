"use client";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import One from "../../public/avenueOne.jpeg";
import Two from "../../public/avenueTwo.png";
import Three from "../../public/avenueThree.jpeg";
import Four from "../../public/avenueFour.jpeg";
import Five from "../../public/avenueFive.png";
import Six from "../../public/avenueSix.jpeg";
import Seven from "../../public/avenueSeven.png";
import Eight from "../../public/avenueEight.png";
import Logo from "../../public/certer 1 logo.svg";
import StripeLeft from "../../public/stripe-left.svg";

import Image from "next/image";

import { Pagination, A11y, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";

// 640 - 50

export default function AvenueCarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null); // Explicitly type useRef

  useEffect(() => {
    if (swiperRef.current) {
      setActiveIndex(0);

      swiperRef.current.on("autoplayTimeLeft", (_, timeLeft, duration) => {
        setProgress(Math.round((1 - duration) * 100));
      });
    }
  }, []);

  const cards = [
    {
      title: "아티제",
      image: One,
    },
    {
      title: "리나스",
      image: Two,
    },
    {
      title: "봉우리 한정식",
      image: Three,
    },
    {
      title: "솔솥",
      image: Four,
    },
    {
      title: "뚝심한우",
      image: Five,
    },
    {
      title: "차이797",
      image: Six,
    },
    {
      title: "이춘복 참치",
      image: Seven,
    },
    {
      title: "매드 포 갈릭",
      image: Eight,
    },
  ];

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center overflow-clip bg-[#242424]">
      {/* Avenue Logo */}
      <div className="mb-5 md:my-20">
        <div className="flex flex-col items-center">
          {/* logo */}
          <Image
            className="mx-2 h-7 w-fit md:mx-5 md:h-10"
            alt="Center 1 logo"
            src={Logo}
            quality={100}
            style={{ objectFit: "contain" }}
          />

          <div className="flex items-end">
            {/* left */}
            <span className="hidden h-7 md:block">
              <Image
                className="mx-5 h-full w-auto"
                alt="stripe left"
                src={StripeLeft}
                quality={100}
                style={{ objectFit: "contain" }}
              />
            </span>

            <h1 className="flow-row mt-4 flex text-lg font-bold md:text-3xl">
              미래에셋센터원 <span className="text-orange-400">AVENUE</span>
            </h1>

            {/* right */}
            <span className="hidden h-7 md:block">
              <Image
                className="mx-5 h-full w-auto scale-x-[-1]"
                alt="stripe left"
                src={StripeLeft}
                quality={100}
                style={{ objectFit: "contain" }}
              />
            </span>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        slidesPerView={"auto"}
        centeredSlides={true}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
      >
        {cards.map((card, i) => (
          <SwiperSlide className="avenue-swiper" key={i}>
            <div className="avenue-card card card-compact w-full rounded-md">
              <figure className="relative">
                <Image
                  className={`h-[300px] w-[200px] md:h-[650px] md:w-[325px] ${activeIndex === i ? "border-b-[5px] border-gray-600" : ""}`}
                  src={card.image}
                  alt={card.title}
                  quality={100}
                  style={{
                    objectFit: "cover",
                  }}
                />

                {activeIndex === i && (
                  <progress
                    className="progress-custom progress absolute bottom-0 h-[5px] w-full"
                    value={progress}
                    max="100"
                  ></progress>
                )}
              </figure>

              <div className="card-body m-0 mt-5 !p-0">
                <h2 className="card-title text-lg font-bold md:text-3xl">
                  {card.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
