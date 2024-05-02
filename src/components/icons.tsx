import React from "react";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";

export const TaspLogo = () => (
  <Image
    as={NextImage}
    width={128}
    height={50}
    src="/logo.svg"
    alt="Logo"
    priority
    className=" w-auto h-auto"
  />
);

export const HeroImg = () => (
  <Image
    as={NextImage}
    width={1100}
    height={1280}
    src="/hero-img.svg"
    alt="hero-img"
    radius="none"
    isZoomed={true}
    loading="eager"
    className=" w-auto h-auto"
  />
);

export const HighlightCard1Img = () => (
  <Image
    as={NextImage}
    width={139}
    height={100}
    src="/hero-highlightcard1.jfif"
    alt="hero-img"
    radius="none"
    className=" w-[139px] h-[110px] object-cover"
  />
);

export const HighlightCard2Img = () => (
  <Image
    as={NextImage}
    width={139}
    height={110}
    src="/hero-highlightcard2.jfif"
    alt="hero-img"
    radius="none"
    className=" w-[139px] h-[110px] object-cover"
  />
);

export const HighlightCard3Img = () => (
  <Image
    as={NextImage}
    width={139}
    height={110}
    src="/hero-highlightcard3.jfif"
    alt="hero-img"
    radius="none"
    className=" w-[139px] h-[110px] object-cover"
  />
);

export const HeroimgLines = () => (
  <>
    {" "}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="382"
      viewBox="0 0 22 382"
      fill="none"
    >
      <path
        d="M19.0387 379.8C10.1307 331.659 -5.01301 188.804 5.67663 2.51391"
        stroke="#FF3F01"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="280"
      viewBox="0 0 17 280"
      fill="none"
    >
      <path
        d="M14.7001 277.154C8.33716 242.058 -2.47975 137.912 5.15571 2.10042"
        stroke="#FF3F01"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="364"
      viewBox="0 0 21 364"
      fill="none"
    >
      <path
        d="M18.8526 361.327C10.3687 315.567 -4.05382 179.778 6.1268 2.70255"
        stroke="#FF3F01"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  </>
);

export const HeroimgLines2 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="117"
    height="102"
    viewBox="0 0 117 102"
    fill="none"
  >
    <path
      d="M103.085 74.2195C88.4487 78.6964 74.3908 80.2098 59.7941 83.2571"
      stroke="#FF3F01"
      strokeWidth="4.47"
      strokeLinecap="round"
    />
    <path
      d="M75.7222 42.3073L43.7102 57.8019"
      stroke="#FF3F01"
      strokeWidth="4.47"
      strokeLinecap="round"
    />
    <path
      d="M46.8835 7.34712C39.6902 17.1681 26.0014 32.8263 25.9392 45.7075"
      stroke="#FF3F01"
      strokeWidth="4.47"
      strokeLinecap="round"
    />
  </svg>
);

export const HeroimgLines3 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="263"
    height="125"
    viewBox="0 0 263 125"
    fill="none"
  >
    <path
      d="M2.03857 5.50399C37.6198 3.47431 242.957 -1.2616 259.507 5.50399C280.193 13.961 57.8926 30.1984 46.7217 36.2875C37.7851 41.1587 221.318 52.1866 232.075 53.5397C242.832 54.8928 104.231 76.3398 105.886 122.887"
      stroke="#FF3F01"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
    />
  </svg>
);

export const ProfileIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
    <path
      fillRule="evenodd"
      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
    />
  </svg>
);

export const BoxList = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="31"
    viewBox="0 0 30 31"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 4.54999C4.30964 4.54999 3.75 5.10963 3.75 5.79999V10.8C3.75 11.4904 4.30964 12.05 5 12.05H25C25.6904 12.05 26.25 11.4904 26.25 10.8V5.79999C26.25 5.10963 25.6904 4.54999 25 4.54999H5ZM1.25 5.79999C1.25 3.72892 2.92893 2.04999 5 2.04999H25C27.0711 2.04999 28.75 3.72892 28.75 5.79999V10.8C28.75 12.8711 27.0711 14.55 25 14.55H5C2.92893 14.55 1.25 12.8711 1.25 10.8V5.79999Z"
      fill="#0C2D48"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 19.55C4.30964 19.55 3.75 20.1096 3.75 20.8V25.8C3.75 26.4904 4.30964 27.05 5 27.05H25C25.6904 27.05 26.25 26.4904 26.25 25.8V20.8C26.25 20.1096 25.6904 19.55 25 19.55H5ZM1.25 20.8C1.25 18.7289 2.92893 17.05 5 17.05H25C27.0711 17.05 28.75 18.7289 28.75 20.8V25.8C28.75 27.8711 27.0711 29.55 25 29.55H5C2.92893 29.55 1.25 27.8711 1.25 25.8V20.8Z"
      fill="#0C2D48"
    />
  </svg>
);

export const UserVerified = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="31"
    viewBox="0 0 30 31"
    fill="none"
  >
    <path
      d="M15 19C15 16.7909 12.3137 15 9 15C5.68629 15 3 16.7909 3 19M21 10L17 14L15 12M9 12C6.79086 12 5 10.2091 5 8C5 5.79086 6.79086 4 9 4C11.2091 4 13 5.79086 13 8C13 10.2091 11.2091 12 9 12Z"
      stroke="#FF3F01"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Star = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="31"
    viewBox="0 0 30 31"
    fill="none"
  >
    <g clipPath="url(#clip0_169_158)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.73 0.669983C15.2057 0.669983 15.6403 0.940073 15.8509 1.3667L19.4228 8.60306L27.4108 9.77062C27.8815 9.83942 28.2723 10.1694 28.419 10.622C28.5658 11.0745 28.4429 11.571 28.1021 11.9029L22.3231 17.5317L23.687 25.4837C23.7674 25.9527 23.5746 26.4267 23.1896 26.7063C22.8047 26.986 22.2943 27.0228 21.8732 26.8013L14.73 23.0448L7.58683 26.8013C7.16568 27.0228 6.65532 26.986 6.27035 26.7063C5.88538 26.4267 5.69257 25.9527 5.773 25.4837L7.13686 17.5317L1.35785 11.9029C1.01708 11.571 0.894237 11.0745 1.04096 10.622C1.18768 10.1694 1.57853 9.83942 2.04923 9.77062L10.0372 8.60306L13.6091 1.3667C13.8197 0.940073 14.2542 0.669983 14.73 0.669983ZM14.73 4.74405L11.9884 10.2983C11.8064 10.6668 11.455 10.9224 11.0483 10.9819L4.91553 11.8783L9.35218 16.1996C9.64702 16.4867 9.7816 16.9006 9.71203 17.3063L8.66524 23.4096L14.1482 20.5262C14.5124 20.3346 14.9476 20.3346 15.3118 20.5262L20.7947 23.4096L19.748 17.3063C19.6784 16.9006 19.813 16.4867 20.1078 16.1996L24.5445 11.8783L18.4117 10.9819C18.005 10.9224 17.6535 10.6668 17.4716 10.2983L14.73 4.74405Z"
        fill="#FFB800"
      />
    </g>
    <defs>
      <clipPath id="clip0_169_158">
        <rect
          width="28"
          height="27"
          fill="white"
          transform="translate(0.72998 0.419983)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const StarSymbol = () => (
  <Image
    as={NextImage}
    width={100}
    height={100}
    src="/StarSymbol.svg"
    alt="hero-img"
    radius="none"
    className=" w-[8.5px] h-[7.5px]"
  />
);

export const HalfStarSymbol = () => (
  <Image
    as={NextImage}
    width={100}
    height={100}
    src="/HalfStarSymbol.svg"
    alt="hero-img"
    radius="none"
    className=" w-[8.5px] h-[7.5px]"
  />
);

export const CheckedSymbol = () => (
  <Image
    as={NextImage}
    width={100}
    height={100}
    src="/CheckedSymbol.svg"
    alt="hero-img"
    radius="none"
    className=" w-[10px] h-[10px]"
  />
);
