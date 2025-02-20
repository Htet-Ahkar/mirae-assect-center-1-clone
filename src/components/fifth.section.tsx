"use client";

import Image from "next/image";
import { PropsWithChildren } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import Event_1 from "../../public/event 1.png";
import Event_2 from "../../public/event 2.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function FifthSection() {
  const leftEventCards = [
    {
      title: "미래에셋센터원 크리스마스 작은 음악회",
      image: Event_1,
      body: [
        "공연 주제 : 재즈 공연",
        "장소 : 1층 계단 앞(연주), 1층 크리스마스 트리 앞(다과 및 커피 배포)",
      ],
      date: "2024.12.20(금)~2024.12.20(금)",
    },
    {
      title: "가정의 달 EVENT",
      image: Event_2,
      body: [
        "판매상품 : 와인 및 꽃박스",
        "토브의 카네이션은 행사 기간 동안 50개 판매 (한정판매)",
      ],
      date: "2024.05.07(화)~2024.05.08(목)",
    },
  ];

  const rightCards = [
    {
      title: "미래에셋센터원 크리스마스 작은 음악회 2233",
      body: "클래씨바버샵은 서울의 중심에 1호 르메이에르점 2호 센트로폴리스점 3호 센터원점을 운영하고 있습니다.신체의 가장 높은 곳에서 제일 먼저 눈에 띄는 곳 남자들에게 헤어스타일이란 본인을 표현하는 것 중 가장 중요하고 특별한 방법입니다. 그 특별함을 찾는 멋을 아는 남자들에게 바버샵은 스타일링과 힐링의 복합 문화 공간으로 자리잡고 있습니다. 클래씨바버샵은 국내 탑클래스 바버샵 근무 경력의 바버가 개개인의 두상과 모질, 커트 후의 스타일링까지 고려하여 한 분 한 분 세심한 컨설팅 후 집중 케어를 해드리고 있습니다. 프라이빗하고 클래식한 공간에서 최선을 다해 시술해드리겠습니다.",
      date: "2024.12.20(금)~2024.12.20(금)",
    },
    {
      title: "미래에셋센터원 크리스마스 작은 음악회 2233",
      body: "클래씨바버샵은 서울의 중심에 1호 르메이에르점 2호 센트로폴리스점 3호 센터원점을 운영하고 있습니다.신체의 가장 높은 곳에서 제일 먼저 눈에 띄는 곳 남자들에게 헤어스타일이란 본인을 표현하는 것 중 가장 중요하고 특별한 방법입니다. 그 특별함을 찾는 멋을 아는 남자들에게 바버샵은 스타일링과 힐링의 복합 문화 공간으로 자리잡고 있습니다. 클래씨바버샵은 국내 탑클래스 바버샵 근무 경력의 바버가 개개인의 두상과 모질, 커트 후의 스타일링까지 고려하여 한 분 한 분 세심한 컨설팅 후 집중 케어를 해드리고 있습니다. 프라이빗하고 클래식한 공간에서 최선을 다해 시술해드리겠습니다.",
      date: "2024.12.20(금)~2024.12.20(금)",
    },
  ];

  return (
    <div className="flex w-screen items-center justify-center overflow-clip bg-white text-black md:h-screen">
      <div className="grid h-full w-full grid-cols-1 gap-5 px-5 pt-24 md:grid-cols-2 md:p-10 md:pt-36">
        {/* Left */}
        <div className="flex flex-col gap-10 md:gap-16">
          {/* Title */}
          <TopSection>지금 살펴봐야할 이벤트</TopSection>

          {/* Body */}
          <div className="w-full">
            <Swiper
              modules={[Navigation, A11y, Autoplay]}
              slidesPerView={1}
              navigation
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
            >
              {leftEventCards.map((event) => (
                <SwiperSlide className="w-full" key={event.title}>
                  <div className="card-compactw-full card mb-5 rounded-md text-gray-400 md:mb-20">
                    <figure>
                      <Image
                        className="h-44 md:h-[444px]"
                        src={event.image}
                        alt={event.title}
                        quality={100}
                        style={{
                          objectFit: "fill",
                        }}
                      />
                    </figure>

                    <div className="card-body p-0">
                      <Heading2>{event.title}</Heading2>

                      <ul className="mt-[6px] w-full list-inside list-disc whitespace-pre-line text-sm md:text-xl">
                        {event.body.map((text, i) => (
                          <li key={i}>{text}</li>
                        ))}
                      </ul>

                      {/* Date */}
                      <DateText>{event.date}</DateText>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-5 md:gap-16">
          {/* Title */}
          <TopSection>센터원 소식</TopSection>

          {/* Body */}
          <div className="mb-1">
            {rightCards.map((card, i) => (
              <div
                key={i}
                className="card-compactw-full group card cursor-pointer rounded-md border-b pb-5 text-gray-400 hover:text-blue-900"
              >
                <div className="card-body p-0">
                  <Heading2>{card.title}</Heading2>

                  <p className="mt-2 line-clamp-2 w-full whitespace-pre-line text-sm md:line-clamp-1 md:text-xl">
                    {card.body}
                  </p>

                  {/* Date */}
                  <DateText>{card.date}</DateText>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Heading2(props: PropsWithChildren) {
  return (
    <h2 className="card-title mt-4 text-lg font-bold tracking-tight text-black group-hover:text-blue-900 md:mt-5 md:text-3xl">
      {props.children}
    </h2>
  );
}

function DateText(props: PropsWithChildren) {
  return (
    <p className="mt-5 text-sm md:mt-9 md:text-[16px]">{props.children}</p>
  );
}

function TopSection(props: PropsWithChildren) {
  return (
    <div className="flex justify-between">
      <h1 className="text-2xl font-bold tracking-tight md:text-4xl">
        {props.children}
      </h1>

      <span className="h-8 w-8 cursor-pointer md:!h-12 md:!w-12">
        <CircleSVG></CircleSVG>
      </span>
    </div>
  );
}

function CircleSVG() {
  return (
    <svg
      className="h-full w-full fill-indigo-900"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="AddCircleOutlineOutlinedIcon"
    >
      <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"></path>
    </svg>
  );
}
