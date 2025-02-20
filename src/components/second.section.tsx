import KFG from "../../public/KF Gallery.jpeg";
import Gym from "../../public/Wellness.jpeg";
import Sparkplus from "../../public/Sparkplus.jpeg";
import Image from "next/image";

export default function SecondSection() {
  const cardsData = [
    {
      title: "KF GALLERY",
      description:
        "국내외 방문객에게 전시회, 문화 행사, 교육 프로그램 등 개최 국제 교류를 촉진하는 다양한 전시와 행사에 참여해보세요.",
      image: KFG,
    },
    {
      title: "센터원 Wellness",
      description:
        "피트니스, 골프GDR+, 필라테스, GX,스피닝, 사우나, PT(퍼스널트레이닝) 등 운영 바쁜 일상과 업무에서 잠시 휴식을 취해보세요",
      image: Gym,
    },
    {
      title: "SPARKPLUS",
      description:
        "원하는 인원만큼 사용할 수 있는 맞춤형 오피 스 일에만 집중할 수 있는 완벽한 공유 오피스를 만나보세요.",
      image: Sparkplus,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-start overflow-clip bg-[#242424] pb-16 text-white md:h-screen">
      {/* Promotion Text */}
      <div className="ml-5 mt-20 w-full md:ml-32 md:mt-40">
        <h2 className="font-extrabold md:text-4xl">Convenience</h2>

        <h2 className="mt-3 text-lg md:text-4xl">
          미래에셋센터원에서 경험하는
          <span className="font-bold text-[#F58220]">특별한 서비스</span>
        </h2>
      </div>

      {/* Promotion Cards */}
      <div className="mx-5 mt-10 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-20">
        {cardsData.map((card, index) => (
          <a
            key={card.title}
            href="/"
            className={`group relative block ${index === 0 ? "md:mt-[120px]" : ""} ${index === 1 ? "md:mt-[60px]" : ""}`}
          >
            <div className="card card-compact rounded-none border-b-2 border-r-0 border-gray-400 md:w-96">
              <figure>
                <Image
                  className="h-72"
                  src={card.image}
                  alt={card.title}
                  quality={100}
                  style={{
                    objectFit: "cover",
                    height: 300,
                  }}
                />
              </figure>

              <div className="card-body my-5">
                {/* Title */}
                <h3 className="card-title text-3xl font-extrabold transition-colors duration-300 group-hover:text-orange-400">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-lg text-gray-400">{card.description}</p>
              </div>
            </div>

            {/* Red border starting from the left on hover */}
            <div
              className={`absolute bottom-0 left-0 h-[3px] w-0 bg-orange-400 transition-all duration-300 group-hover:w-[60%] ${index === 2 ? "md:mb-[120px]" : ""} ${index === 1 ? "md:mb-[60px]" : ""} `}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
