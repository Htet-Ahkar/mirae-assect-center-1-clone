// import Swiper core and required modules
"use client";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Environment from "../../public/environment.jpeg";
import Building from "../../public/building.jpeg";
import Impression from "../../public/impression.jpeg";
import Service from "../../public/world.jpeg";
import Logo from "../../public/1st logo.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

export default function CarouselSection() {
  const slides = [
    {
      title: "The first enviroment you would imagine",
      text: ["Enviroment you", "would imagine"],
      image: Environment,
      description: `
        서울 청계천은 자연 그대로의 휴식과 재충전 공간이며, 점심시간과 퇴근길에 만나는 청계천의 여유로움은
        CENTER1 입주자 및 이용객이 누릴 수 있는 특권입니다.
        이용자를 위한 감성적인 요소뿐만 아니라, 국내 최고 수준의 친환경 기준을 실천하여 국내외에서 친환경 건축물로 인증받았습니다.
      `,

      link: "/",
    },
    {
      title: "The first building you would prefer",
      text: ["Building you", "would prefer"],

      image: Building,
      description: `
        Center1은 약 170,000m²의 건축 연면적으로 서울 도심 최대 규모의 빌딩입니다. 
        안정적 구조, 효율적 공간설계, 친환경 건축, 반영구적 자재, 최첨단 기술을 바탕으로 시간이 지나도 그 가치가 높아질 것입니다.
        또한 편리한 접근성, 빌딩 앞 공원, 개방된 아트리움 공간 등을 통해 대중과 소통하는 새로운 시대 가치를 담고 있습니다. 
      `,
      link: "/",
    },
    {
      title: "The first impression you would have",
      text: ["Impression you", "would have"],

      image: Impression,
      description: `
        Center1의 건축 모티브는 음과 양 (Yin & Yang)입니다. 하나의 매스에서 분리된 두 동은 음각과 양각 형태로 마주 보고 있습니다. 
        외부 마감재는 자연과 조화를 이루며 주변 건물들과 차별화된 자재를 사용하였고, 
        알루미늄 환기창은 외기를 도입하면서도 개폐 시 외관 변화가 없도록 세심하게 설계되었습니다.
      `,
      link: "/",
    },
    {
      title: "The first service you would experience",
      text: ["Service you would", "experience"],
      image: Service,
      description: `
        Center1은 입주사들을 위한 철저한 보안 관리와 사고 예방을 위한 통합 시스템을 도입하여, 
        보안과 경비 현황을 한 곳에서 효과적으로 관리합니다.
        아트리움 2층 로비에서는 방문객 출입을 관리하며, 최첨단 보안 시설을 통해 임차인들에게 높은 수준의 보안 서비스를 제공합니다.
        또한, 입주사를 위한 차별화된 서비스를 제공하며, 입주사와 외부 이용객 모두가 이용할 수 있는 다양한 편의 시설을 갖추고 있습니다.
      `,
      link: "/",
    },
  ];

  return (
    <section className="bg-transparen flex h-screen w-screen items-center justify-center overflow-clip">
      <Swiper
        modules={[Autoplay, Pagination, A11y]}
        spaceBetween={5}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        loop={true}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.title}>
            {/* Body */}

            <div className="relative z-30 flex h-screen flex-col justify-between px-20 pb-24 pt-64">
              {/* Title */}
              <h1 className="max-w-[1000px] text-2xl font-bold leading-[80px] md:text-[80px]">
                <span className="flex items-baseline">
                  The
                  <Image
                    className="mx-5 h-20 w-fit md:h-20"
                    alt="The 1st Logo"
                    src={Logo}
                    quality={100}
                    // height={100}
                    style={{ objectFit: "contain" }}
                  />
                  {slide.text[0]}
                </span>

                <span>{slide.text[1]}</span>
              </h1>

              {/* Description */}
              <div className="relative max-w-[1000px] border-t-2 border-gray-400">
                {/* Progress Line */}
                <div
                  className={`absolute left-0 top-[-2px] z-40 h-[3px] bg-white ${i === 0 ? "w-[25%]" : "w-full"} ${i === 1 ? "w-[50%]" : "w-full"} ${i === 2 ? "w-[75%]" : "w-full"}`}
                />

                <p className="whitespace-pre-line py-7 text-xl font-bold leading-8">
                  {slide.description}
                </p>

                {/* View more Btn */}
                <button className="custom-btn-outline">
                  view more
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_8624_17"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_8624_17)">
                      <path
                        d="M12.9463 12L8.34625 7.4L9.4 6.34625L15.0538 12L9.4 17.6537L8.34625 16.6L12.9463 12Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </div>

            {/* Overlay */}
            <div className="absolute top-0 z-20 h-screen w-screen bg-black bg-opacity-20" />

            {/* Background Image */}
            <Image
              className="absolute z-10"
              alt={slide.title}
              src={slide.image}
              placeholder="blur"
              quality={100}
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
