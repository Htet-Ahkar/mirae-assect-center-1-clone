export default function Footer() {
  return (
    <footer className="t footer w-screen bg-[#242424] px-3 py-10 text-white md:p-10 md:px-10 md:py-10">
      <div className="h-full w-full">
        <div className="mb-3 flex w-full justify-between">
          {/* Left */}
          <h1 className="mb-4 font-bold not-italic tracking-[-0.16px] md:mb-[14px] md:text-[28px] md:leading-[33.41px] md:tracking-[-0.56px]">
            Mirae Asset Center1
          </h1>

          {/* Right */}
          <div className="flex flex-col items-center justify-center md:flex-row">
            {/* Title */}
            <span className="my-3 font-normal tracking-[-0.12px] md:mr-3 md:mt-3 md:text-[16px] md:leading-[19.09px] md:tracking-[-1.2px]">
              개인정보처리방침
            </span>

            {/* select */}
            <select className="select select-bordered max-w-xs rounded-3xl">
              <option>FAMILY SITE</option>
              <option>가족이 앉아</option>
            </select>
          </div>
        </div>

        <p className="mb-2 font-normal not-italic tracking-[-0.12px] md:mb-[4px] md:text-[18px] md:leading-normal md:tracking-[-1px]">
          주소 : 서울특별시 중구 을지로5길 26 미래에셋 센터원
        </p>

        <p className="font-normal not-italic tracking-[-0.12px] md:text-[16px] md:leading-normal md:tracking-[1px]">
          대표번호 : 02-6030-0100
        </p>

        <h2 className="text-xs font-normal not-italic leading-[21px] md:mt-5 md:text-base md:leading-[18px] md:-tracking-[-0.1px]">
          COPYRIGHT(C) 2011 MIRAE ASSET COPORATION. CO., Ltd. ALL RIGHT
          RESERVED.
        </h2>
      </div>
    </footer>
  );
}
