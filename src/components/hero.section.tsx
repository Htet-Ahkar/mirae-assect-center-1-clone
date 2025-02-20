import Image from "next/image";
import heroImage from "../../public/hero-image.png";
import heroLogo from "../../public/hero-logo.svg";

export default function HeroSection() {
  return (
    <div className="flex h-screen items-center justify-center overflow-clip bg-transparent text-black">
      {/* All Component need have z-index greater than 10 */}
      <div className="z-20 ml-6 mt-64 w-full md:mb-24 md:ml-24">
        <Image
          className="h-24 w-fit md:h-36"
          alt="The 1st Building"
          src={heroLogo}
          quality={100}
          // height={100}
          style={{ objectFit: "contain" }}
        />

        <div className="mt-8 text-white md:mt-20">
          <h1 className="font-extrabold md:mb-4 md:text-3xl">
            최고의 공간을 경험하세요
          </h1>

          <p className="text-xs md:text-lg">
            국내를 넘어 세계의 무대를 준비하는 여러분들과 함께 합니다.
          </p>
        </div>
      </div>

      {/* Background Image */}
      <Image
        className="absolute z-10"
        alt="Mirae Asset Center 1"
        src={heroImage}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "66%" }} // Adjust position
      />
    </div>
  );
}
