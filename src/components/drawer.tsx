"use client";

import { PropsWithChildren } from "react";

export default function Drawer() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed right-5 top-[50%] z-50 flex -translate-y-1/2 flex-col gap-5">
      <DrawerBtn>
        {/* Icon */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_4265_12658)">
            <path
              d="M10.6673 19.9987C10.6673 18.5259 9.47341 17.332 8.00065 17.332C6.52789 17.332 5.33398 18.5259 5.33398 19.9987V22.6654C5.33398 24.1381 6.52789 25.332 8.00065 25.332C9.47341 25.332 10.6673 24.1381 10.6673 22.6654V19.9987Z"
              stroke="#00427A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M26.6673 19.9987C26.6673 18.5259 25.4734 17.332 24.0007 17.332C22.5279 17.332 21.334 18.5259 21.334 19.9987V22.6654C21.334 24.1381 22.5279 25.332 24.0007 25.332C25.4734 25.332 26.6673 24.1381 26.6673 22.6654V19.9987Z"
              stroke="#00427A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M5.33398 19.9987V15.9987C5.33398 13.1697 6.45779 10.4566 8.45818 8.45623C10.4586 6.45584 13.1717 5.33203 16.0007 5.33203C18.8296 5.33203 21.5427 6.45584 23.5431 8.45623C25.5435 10.4566 26.6673 13.1697 26.6673 15.9987V19.9987"
              stroke="#00427A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M24 25.332C24 26.3929 23.1571 27.4103 21.6569 28.1605C20.1566 28.9106 18.1217 29.332 16 29.332"
              stroke="#00427A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_4265_12658">
              <rect width="32" height="32" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>

        {/* Text */}
        <span className="text-sm">주요문의처</span>
      </DrawerBtn>

      <DrawerBtn>
        {/* Icon */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_4265_12666)">
            <path
              d="M21.334 7.9987H25.334C25.6876 7.9987 26.0267 8.13917 26.2768 8.38922C26.5268 8.63927 26.6673 8.97841 26.6673 9.33203V23.9987C26.6673 24.7059 26.3864 25.3842 25.8863 25.8843C25.3862 26.3844 24.7079 26.6654 24.0006 26.6654C23.2934 26.6654 22.6151 26.3844 22.115 25.8843C21.6149 25.3842 21.334 24.7059 21.334 23.9987V6.66536C21.334 6.31174 21.1935 5.9726 20.9435 5.72256C20.6934 5.47251 20.3543 5.33203 20.0007 5.33203H6.66732C6.3137 5.33203 5.97456 5.47251 5.72451 5.72256C5.47446 5.9726 5.33398 6.31174 5.33398 6.66536V22.6654C5.33398 23.7262 5.75541 24.7436 6.50556 25.4938C7.2557 26.2439 8.27312 26.6654 9.33398 26.6654H24.0006"
              stroke="#00427A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M10.666 10.668H15.9993"
              stroke="#00427A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M10.666 16H15.9993"
              stroke="#00427A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M10.666 21.332H15.9993"
              stroke="#00427A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_4265_12666">
              <rect width="32" height="32" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>

        {/* Text */}
        <span className="text-sm">임대문의</span>
      </DrawerBtn>

      <DrawerBtn>
        {/* Icon */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.6667 9.33333V4M21.3333 9.33333V4M9.33333 14.6667H22.6667M6.66667 28H25.3333C26.8061 28 28 26.8061 28 25.3333V9.33333C28 7.86057 26.8061 6.66667 25.3333 6.66667H6.66667C5.19391 6.66667 4 7.86057 4 9.33333V25.3333C4 26.8061 5.19391 28 6.66667 28Z"
            stroke="#00427A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>

        {/* Text */}
        <span className="text-sm">방문예약</span>
      </DrawerBtn>

      <button
        onClick={handleClick}
        aria-label="Scroll to top"
        className="flex h-20 w-20 transform flex-col items-center justify-center rounded-xl border-[1px] border-blue-900 bg-white text-blue-900 shadow-lg transition-transform hover:scale-110 focus:outline-none active:scale-90"
      >
        {/* Icon */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3.9"
            y="3.9"
            width="24.2"
            height="24.2"
            rx="12.1"
            stroke="#00427A"
            stroke-width="1.8"
          ></rect>
          <path
            d="M16.6364 9.3636C16.2849 9.01213 15.7151 9.01213 15.3636 9.3636L9.63604 15.0912C9.28457 15.4426 9.28457 16.0125 9.63604 16.364C9.98751 16.7154 10.5574 16.7154 10.9088 16.364L16 11.2728L21.0912 16.364C21.4426 16.7154 22.0125 16.7154 22.364 16.364C22.7154 16.0125 22.7154 15.4426 22.364 15.0912L16.6364 9.3636ZM15.1 22C15.1 22.4971 15.5029 22.9 16 22.9C16.4971 22.9 16.9 22.4971 16.9 22L15.1 22ZM15.1 10L15.1 22L16.9 22L16.9 10L15.1 10Z"
            fill="#00427A"
          ></path>
        </svg>

        {/* Text */}
        <span className="text-sm">Top</span>
      </button>
    </div>
  );
}

function DrawerBtn(props: PropsWithChildren) {
  return (
    <button
      aria-label="Scroll to top"
      className="flex h-20 w-20 transform flex-col items-center justify-center rounded-xl border-[1px] border-blue-900 bg-white text-blue-900 shadow-lg transition-transform hover:scale-110 focus:outline-none active:scale-90"
    >
      {props.children}
    </button>
  );
}
