import Image from "next/image";

import Building from "../../public/building-front.jpeg";
import Logo from "../../public/certer 1 logo.svg";

export default function SeventhSection() {
  return (
    <div className="relative flex h-screen items-center justify-center overflow-clip bg-transparent text-black">
      {/* All Component need have z-index greater than 10 */}
      <div className="z-30 flex h-full w-full flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white md:text-[134px] md:leading-[200px]">
          MIRAE ASSET
        </h1>

        <Image
          className="h-12 w-fit md:h-36"
          alt="The 1st Building"
          src={Logo}
          quality={100}
          // height={100}
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute top-0 z-20 h-screen w-screen bg-black bg-opacity-10" />

      {/* Background Image */}
      <Image
        className="absolute z-10"
        alt="Mirae Asset Center 1 front"
        src={Building}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "50%" }}
      />
    </div>
  );
}
