"use client";
import PregnantWoman from "../../public/pregnant.jpeg";
import Mother from "../../public/mother.jpeg";
import ChargingStation from "../../public/charging station.jpeg";
import Charging from "../../public/charging.jpeg";
import Parking from "../../public/parking.jpeg";
import CarParking from "../../public/car parking.jpeg";
import Logo from "../../public/certer 1 logo.svg";
import Image from "next/image";
import { useState } from "react";

export default function FourthSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(0);

  const cards = [
    {
      title: "프라임 서비스",
      description:
        "임산부 휴게실/수유실 운영, 세차 서비스, 우편 배달 서비스 등입주사 임직원을 위한 차별화된 서비스를 제공합니다.",

      image: PregnantWoman,
      image_hover: Mother,
      link: "/",
    },
    {
      title: "E-pit 전기차 충전소",
      description:
        "미래에셋센터원 주차장에는 전기차 이용자들을 위해 일반 충전소 외에도 E-pit 전기차 충전소가 마련되어 있습니다.",

      image: ChargingStation,
      image_hover: Charging,
      link: "/",
    },
    {
      title: "주차요금 할인",
      description:
        "오피스,에비뉴 방문시 주차할인 혜택을 드리며 주말에는 최대 만원으로 부담없이 미래에셋센터원을 즐길 수 있습니다.",

      image: Parking,
      image_hover: CarParking,
      link: "/",
    },
  ];
  return (
    <section className="flex w-screen items-center justify-center overflow-clip bg-[#242424] md:h-screen">
      <div className="flex h-full w-full flex-col justify-between p-3 md:p-10">
        {/* Text */}
        <div className="my-20 md:mt-32">
          <h1 className="text-2xl font-bold tracking-tight md:text-4xl md:leading-[50px]">
            <span className="flex">
              ONLY
              <Image
                className="mx-2 h-7 w-fit md:mx-5 md:h-10"
                alt="Center 1 logo"
                src={Logo}
                quality={100}
                style={{ objectFit: "contain" }}
              />
            </span>
            <span className="text-xl font-normal md:text-4xl">
              미래에셋센터원에서만 누리는
              <span className="font-bold text-[#F58220]">특별한 혜택</span>
            </span>
          </h1>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-10 md:mb-28 md:grid-cols-3">
          {cards.map((card, i) => (
            <a key={card.title} href={card.link}>
              <div
                className="card card-compact relative rounded-sm transition-all duration-700 md:hover:-translate-y-28"
                onMouseEnter={() => {
                  setHoverIndex(i);
                  setIsHovered(true);
                }}
                onMouseLeave={() => {
                  setHoverIndex(0);
                  setIsHovered(false);
                }}
              >
                <figure className="h-72">
                  <Image
                    className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${
                      hoverIndex === i && isHovered
                        ? "opacity-0"
                        : "opacity-100"
                    }`}
                    src={card.image}
                    alt={card.title}
                    quality={100}
                    style={{
                      objectFit: "cover",
                      height: 300,
                    }}
                  />

                  <Image
                    className={`absolute inset-0 h-72 w-full transition-opacity duration-700 ${
                      hoverIndex === i && isHovered
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                    src={card.image_hover}
                    alt={card.title}
                    quality={100}
                    style={{
                      objectFit: "cover",
                      height: 300,
                    }}
                  />
                </figure>
                <div className="card-body mt-5">
                  <h2 className="card-title text-3xl font-bold tracking-tight">
                    {card.title}
                  </h2>
                  <p className="text-lg tracking-tight text-gray-400">
                    {card.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
