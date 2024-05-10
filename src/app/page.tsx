"use client";
import { roboto } from "../config/fonts";
import { Button, Image, Input, Select, SelectItem } from "@nextui-org/react";
import {
  BasketBall,
  BlogImg1,
  BlogImg2,
  BlogImg3,
  BoxList,
  CheckedSymbol,
  CheckedSymbol2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  ExpertImg,
  ExpertImg2,
  ExpertImg3,
  ExpertImg4,
  FootBall,
  HalfStarSymbol,
  HeroImg,
  HeroimgLines,
  HeroimgLines2,
  HeroimgLines3,
  HighlightCard1Img,
  HighlightCard2Img,
  HighlightCard3Img,
  InformalLearning,
  MainReviewImage,
  MentalWellness,
  Mobility,
  OfferMainImg,
  ReviewImage1,
  ReviewImage2,
  Rugby,
  SeeHowItWorkImage1,
  SeeHowItWorkImage2,
  SeeHowItWorkLine,
  Service1Img,
  Star,
  StarSymbol,
  UserVerified,
  WeightLifting,
  WorkingStepsImg1,
  WorkingStepsImg2,
  WorkingStepsImg3,
  WorkingStepsImg4,
} from "@/components/icons";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

const animals = [
  {
    label: "Cat",
    value: "cat",
    description: "The second most popular pet in the world",
  },
  {
    label: "Dog",
    value: "dog",
    description: "The most popular pet in the world",
  },
  {
    label: "Elephant",
    value: "elephant",
    description: "The largest land animal",
  },
  { label: "Lion", value: "lion", description: "The king of the jungle" },
  { label: "Tiger", value: "tiger", description: "The largest cat species" },
  {
    label: "Giraffe",
    value: "giraffe",
    description: "The tallest land animal",
  },
  {
    label: "Dolphin",
    value: "dolphin",
    description: "A widely distributed and diverse group of aquatic mammals",
  },
  {
    label: "Penguin",
    value: "penguin",
    description: "A group of aquatic flightless birds",
  },
  {
    label: "Zebra",
    value: "zebra",
    description: "A several species of African equids",
  },
  {
    label: "Shark",
    value: "shark",
    description:
      "A group of elasmobranch fish characterized by a cartilaginous skeleton",
  },
  {
    label: "Whale",
    value: "whale",
    description: "Diverse group of fully aquatic placental marine mammals",
  },
  {
    label: "Otter",
    value: "otter",
    description: "A carnivorous mammal in the subfamily Lutrinae",
  },
  {
    label: "Crocodile",
    value: "crocodile",
    description: "A large semiaquatic reptile",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <div className="flex flex-wrap p-[5vw] pr-0 justify-around xl:justify-center gap-0 overflow-hidden ">
        <div className="flex flex-col h-full sm:h-[30rem] max-w-full w-[35rem] lg:mr-12 ">
          <h1 className=" text-[2rem] sm:text-[3rem] w-full font-bold leading-[2.5rem] sm:leading-[3.5rem] ">
            Find Your Edge.
            <br /> Athlete <span className=" text-[#FF3F01] ">
              Mentorship
            </span>{" "}
            & <br />
            <span className=" text-[#FF3F01] ">Pro</span> Services
          </h1>
          <h3
            className={` text-[1rem] mt-4 text-[#74788D]  ${roboto.className} `}
          >
            Unlock Your Potential with Athlete Mentors & Sporting Professionals.
            <br />
            We’ve helped over 10,000+ athletes achieve their goals.
            <br /> Find the perfect service for your journey.
          </h3>
          <form className="  flex items-center  flex-wrap sm:flex-nowrap p-2 mt-4 border-[2px] border-[#f0ecec7d] rounded-[30px] ">
            {" "}
            <Select
              items={animals}
              placeholder="Select Category"
              radius="full"
              size="lg"
              variant="bordered"
              aria-label="Select Category"
              isRequired
              startContent={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    d="M13.8125 2.73123C13.6771 2.59581 13.5208 2.52811 13.3438 2.52811C13.1667 2.52811 13.0104 2.59581 12.875 2.73123L6.67188 8.93436L5.14062 7.40311C5.00521 7.26769 4.84896 7.19998 4.67188 7.19998C4.49479 7.19998 4.33854 7.26769 4.20312 7.40311C4.06771 7.53852 4 7.69477 4 7.87186C4 8.04894 4.06771 8.20519 4.20312 8.34061L6.20312 10.3406C6.27604 10.4031 6.35677 10.45 6.44531 10.4812C6.53385 10.5125 6.60938 10.5281 6.67188 10.5281C6.73438 10.5281 6.8099 10.5125 6.89844 10.4812C6.98698 10.45 7.06771 10.4031 7.14062 10.3406L13.8125 3.66873C13.9375 3.53331 14 3.37706 14 3.19998C14 3.0229 13.9375 2.86665 13.8125 2.73123ZM12.6719 7.87186C12.474 7.87186 12.3125 7.93175 12.1875 8.05154C12.0625 8.17134 12 8.33019 12 8.52811V13.2C12 13.3979 11.9401 13.5594 11.8203 13.6844C11.7005 13.8094 11.5417 13.8719 11.3438 13.8719H2C1.80208 13.8719 1.64323 13.8094 1.52344 13.6844C1.40365 13.5594 1.34375 13.3979 1.34375 13.2V3.87186C1.34375 3.66352 1.40365 3.49946 1.52344 3.37967C1.64323 3.25988 1.80208 3.19998 2 3.19998H9.34375C9.54167 3.19998 9.70052 3.14009 9.82031 3.02029C9.9401 2.9005 10 2.73644 10 2.52811C10 2.33019 9.9401 2.17134 9.82031 2.05154C9.70052 1.93175 9.54167 1.87186 9.34375 1.87186H2C1.4375 1.87186 0.963542 2.06196 0.578125 2.44217C0.192708 2.82238 0 3.29894 0 3.87186V13.2C0 13.7625 0.192708 14.2364 0.578125 14.6219C0.963542 15.0073 1.4375 15.2 2 15.2H11.3438C11.9062 15.2 12.3802 15.0073 12.7656 14.6219C13.151 14.2364 13.3438 13.7625 13.3438 13.2V8.52811C13.3438 8.33019 13.2812 8.17134 13.1562 8.05154C13.0312 7.93175 12.8698 7.87186 12.6719 7.87186Z"
                    fill="#424242"
                  />
                </svg>
              }
              className="max-w-xs mr-2"
              classNames={{
                innerWrapper: " text-blue-500",
              }}
            >
              {(animal) => (
                <SelectItem key={animal.value}>{animal.label}</SelectItem>
              )}
            </Select>
            <Input
              type="text"
              size="lg"
              radius="full"
              aria-label="Enter location"
              startContent={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <g clipPath="url(#clip0_169_137)">
                    <path
                      d="M6.67188 0.528107C5.75521 0.528107 4.89062 0.70519 4.07812 1.05936C3.27604 1.41352 2.57292 1.89269 1.96875 2.49686C1.36458 3.10102 0.885417 3.80415 0.53125 4.60623C0.177083 5.41873 0 6.28331 0 7.19998C0 8.42915 0.317708 9.59582 0.953125 10.7C1.58854 11.8041 2.29167 12.7729 3.0625 13.6062C3.83333 14.4396 4.54688 15.1062 5.20312 15.6062C5.86979 16.1062 6.22396 16.3719 6.26562 16.4031C6.33854 16.4344 6.40885 16.463 6.47656 16.489C6.54427 16.5151 6.60938 16.5281 6.67188 16.5281C6.73438 16.5281 6.79948 16.5151 6.86719 16.489C6.9349 16.463 7.00521 16.4344 7.07812 16.4031C7.11979 16.3719 7.47396 16.1062 8.14062 15.6062C8.79688 15.1062 9.51042 14.4396 10.2812 13.6062C11.0521 12.7729 11.7552 11.8041 12.3906 10.7C13.026 9.59582 13.3438 8.42915 13.3438 7.19998C13.3438 6.28331 13.1667 5.41873 12.8125 4.60623C12.4583 3.80415 11.9792 3.10102 11.375 2.49686C10.7708 1.89269 10.0677 1.41352 9.26562 1.05936C8.45312 0.70519 7.58854 0.528107 6.67188 0.528107ZM6.67188 15.0594C6.35938 14.8302 5.90104 14.4604 5.29688 13.95C4.70312 13.4396 4.11458 12.8354 3.53125 12.1375C2.94792 11.4396 2.4375 10.6635 2 9.80936C1.5625 8.96561 1.34375 8.09581 1.34375 7.19998C1.34375 6.47081 1.48438 5.77811 1.76562 5.12186C2.04688 4.47602 2.42708 3.91352 2.90625 3.43436C3.38542 2.95519 3.94792 2.57498 4.59375 2.29373C5.25 2.01248 5.94271 1.87186 6.67188 1.87186C7.40104 1.87186 8.09375 2.01248 8.75 2.29373C9.39583 2.57498 9.95833 2.95519 10.4375 3.43436C10.9167 3.91352 11.2969 4.47602 11.5781 5.12186C11.8594 5.77811 12 6.47081 12 7.19998C12 8.09581 11.7812 8.96561 11.3438 9.80936C10.9062 10.6635 10.3958 11.4396 9.8125 12.1375C9.22917 12.8354 8.64062 13.4396 8.04688 13.95C7.44271 14.4604 6.98438 14.8302 6.67188 15.0594ZM6.67188 4.52811C5.94271 4.52811 5.3151 4.79113 4.78906 5.31717C4.26302 5.84321 4 6.47081 4 7.19998C4 7.92915 4.26302 8.55675 4.78906 9.08279C5.3151 9.60884 5.94271 9.87186 6.67188 9.87186C7.40104 9.87186 8.02865 9.60884 8.55469 9.08279C9.08073 8.55675 9.34375 7.92915 9.34375 7.19998C9.34375 6.47081 9.08073 5.84321 8.55469 5.31717C8.02865 4.79113 7.40104 4.52811 6.67188 4.52811ZM6.67188 8.52811C6.30729 8.52811 5.99479 8.3979 5.73438 8.13748C5.47396 7.87706 5.34375 7.56456 5.34375 7.19998C5.34375 6.8354 5.47396 6.5229 5.73438 6.26248C5.99479 6.00206 6.30729 5.87186 6.67188 5.87186C7.03646 5.87186 7.34896 6.00206 7.60938 6.26248C7.86979 6.5229 8 6.8354 8 7.19998C8 7.56456 7.86979 7.87706 7.60938 8.13748C7.34896 8.3979 7.03646 8.52811 6.67188 8.52811Z"
                      fill="#424242"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_169_137">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="matrix(1 0 0 -1 0 16.2)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              }
              placeholder="Location"
              variant="underlined"
              isClearable
              isRequired
            />
            <Button
              type="submit"
              size="lg"
              className=" m-2 bg-[#FF3F01] w-full "
              radius="full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
              >
                <path
                  d="M14.7832 15.7918L12.0059 13.032C12.4512 12.4695 12.8115 11.825 13.0869 11.0984C13.3623 10.3719 13.5 9.616 13.5 8.83084C13.5 7.89334 13.3242 7.01443 12.9727 6.19412C12.6211 5.37381 12.1406 4.65897 11.5312 4.04959C10.9219 3.44022 10.207 2.95975 9.38672 2.60818C8.56641 2.25662 7.6875 2.08084 6.75 2.08084C5.8125 2.08084 4.93359 2.25662 4.11328 2.60818C3.29297 2.95975 2.57812 3.44022 1.96875 4.04959C1.35938 4.65897 0.878906 5.37381 0.527344 6.19412C0.175781 7.01443 0 7.89334 0 8.83084C0 9.76834 0.175781 10.6472 0.527344 11.4676C0.878906 12.2879 1.35938 13.0027 1.96875 13.6121C2.57812 14.2215 3.29297 14.7019 4.11328 15.0535C4.93359 15.4051 5.8125 15.5808 6.75 15.5808C7.54688 15.5808 8.30566 15.4519 9.02637 15.1941C9.74707 14.9363 10.3887 14.5613 10.9512 14.0691L13.7285 16.8465C13.8105 16.9285 13.9014 16.9871 14.001 17.0222C14.1006 17.0574 14.1855 17.075 14.2559 17.075C14.3262 17.075 14.4111 17.0574 14.5107 17.0222C14.6104 16.9871 14.7012 16.9285 14.7832 16.8465C14.9355 16.6941 15.0117 16.5183 15.0117 16.3191C15.0117 16.1199 14.9355 15.9441 14.7832 15.7918ZM1.51172 8.83084C1.51172 8.09256 1.64648 7.40701 1.91602 6.7742C2.18555 6.12967 2.55762 5.57303 3.03223 5.10428C3.50684 4.63553 4.06055 4.26053 4.69336 3.97928C5.33789 3.70975 6.02344 3.57498 6.75 3.57498C7.48828 3.57498 8.17383 3.70975 8.80664 3.97928C9.45117 4.26053 10.0078 4.63553 10.4766 5.10428C10.9453 5.57303 11.3203 6.12967 11.6016 6.7742C11.8711 7.40701 12.0059 8.09256 12.0059 8.83084C12.0059 9.53397 11.8682 10.2078 11.5928 10.8523C11.3174 11.4969 10.957 12.0476 10.5117 12.5047C10.0195 12.9851 9.45996 13.3543 8.83301 13.6121C8.20605 13.8699 7.54102 13.9988 6.83789 13.9988C6.08789 14.0222 5.38477 13.8992 4.72852 13.6297C4.08398 13.3719 3.52148 13.0086 3.04102 12.5398C2.56055 12.0711 2.18555 11.5144 1.91602 10.8699C1.64648 10.2371 1.51172 9.5574 1.51172 8.83084Z"
                  fill="white"
                />
              </svg>
            </Button>
          </form>
          <div className="flex sm:w-[70%] m-4 justify-between">
            <div className=" flex flex-col">
              <BoxList /> <h5 className=" font-bold  mt-4">3000+</h5>{" "}
              <h6 className=" font-[300] ">Services</h6>
            </div>
            <div className=" flex flex-col">
              <UserVerified />
              <h5 className=" font-bold  mt-4">900+</h5>{" "}
              <h6 className=" font-[300] w-[3rem] sm:w-fit ">
                Athlete Mentors
              </h6>
            </div>
            <div className=" flex flex-col">
              <Star />
              <h5 className=" font-bold  mt-4">15k Review</h5>{" "}
              <h6 className=" font-[300] ">(4.8)</h6>
            </div>
          </div>
        </div>

        <div className=" flex justify-center h-[20rem] sm:h-fit w-[10rem] sm:w-fit md:w-[25rem] lg:w-fit max-w-full ">
          <div className=" w-[13.5rem] h-[25.6rem] relative ">
            <div className=" w-full h-full overflow-hidden ">
              <HeroImg />
            </div>
            <div className="flex  max-w-fit max-h-fit absolute top-[-20px] left-[-35px] ">
              <HeroimgLines />
            </div>
            <div className="  max-w-fit max-h-fit absolute top-[-65px] right-[-90px] ">
              <HeroimgLines2 />
            </div>
            <div className="  max-w-fit max-h-fit absolute left-[-10px] hidden md:flex z-10 ">
              <HeroimgLines3 />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center max-w-full ">
          <h1 className=" text-[2rem] sm:text-[3rem] h-[15rem ] font-[500] flex flex-col sm:leading-[3.6rem] relative ">
            <span className=" relative">
              <svg
                className=" absolute w-[200px] sm:w-[299px] sm:h-[93px] sm:top-[-10px] left-[-32px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 299 93"
              >
                <path
                  className="defensive-path "
                  d="M58.8896 81.3858C124.153 86.8119 197.369 85.2585 259.343 69.217C277.43 64.5351 301.403 56.8661 296.481 41.0733C290.679 22.4557 251.531 12.4679 228.076 8.10491C183.69 -0.151661 137.269 -0.665979 91.9016 3.76275C71.8729 5.71794 51.6575 8.65516 32.8608 13.8409C22.282 16.7594 0.754727 23.7725 1.91205 33.6755C2.77545 41.0635 18.0422 48.3599 26.1156 51.8483C47.7007 61.1751 73.9204 66.6721 98.4088 71.3077C151.105 81.2829 204.708 87.1219 258.866 92"
                />
              </svg>
              Defensive
            </span>{" "}
            Player
            <br /> of the
            <br /> Year
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="175"
              viewBox="0 0 25 188"
              fill="none"
              className=" absolute w-[18px] sm:w-[25px] right-[30px] sm:right-[50px] top-[40px] sm:top-[80px] "
            >
              <path
                d="M2.00001 2.50815C7.90801 30.679 20.2046 106.692 22.1271 185.379"
                stroke="#FF3F01"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </h1>
          <h1 className=" text-[1rem] sm:text-[2rem] font-[400] mt-[1rem] mr-[-25%] ">
            *it takes a team
          </h1>
          <div className=" flex justify-center overflow-x-auto ">
            <div className=" flex flex-col items-center sm:w-[10rem] h-[11.6rem] border-2 border-[rgba(0, 0, 0, 0.30)] rounded m-1 mb-0 p-2">
              <HighlightCard1Img />
              <div className=" text-[0.5rem] w-full  relative ">
                <h1 className="flex items-center font-bold mb-1 ">
                  Jo Smith{" "}
                  <span className=" m-2">
                    <CheckedSymbol />
                  </span>
                </h1>
                <p className=" absolute right-2 top-4">
                  $20.00<span>/hr</span>
                </p>
                <p className=" mb-1">Recovery Therapist</p>
                <div className="flex items-center h-3 w-[5rem] ">
                  <StarSymbol />
                  <StarSymbol />
                  <StarSymbol />
                  <StarSymbol />
                  <HalfStarSymbol />
                  (320)
                </div>
              </div>
            </div>
            <div className=" flex flex-col items-center w-[10rem] h-[11.6rem] border-2 border-[rgba(0, 0, 0, 0.30)] rounded m-1 mb-0 p-2">
              <HighlightCard2Img />
              <div className=" text-[0.5rem] w-full  relative  ">
                <h1 className="flex items-center font-bold mb-1 ">
                  Michael{" "}
                  <span className=" m-2">
                    <CheckedSymbol />
                  </span>
                </h1>
                <p className=" absolute right-2 top-4">
                  $50.00<span>/hr</span>
                </p>
                <p className=" mb-1">Ex Professional Athlete Mentor</p>
                <div className="flex items-center h-3 w-[5rem] ">
                  <StarSymbol />
                  <StarSymbol />
                  <StarSymbol />
                  <StarSymbol />
                  <HalfStarSymbol />
                  (228)
                </div>
              </div>
            </div>
            <div className=" flex flex-col items-center w-[10rem] h-[11.6rem] border-2 border-[rgba(0, 0, 0, 0.30)] rounded m-1 mb-0 p-2">
              <HighlightCard3Img />
              <div className=" text-[0.5rem] w-full  relative ">
                <h1 className="flex items-center font-bold mb-1 ">
                  Antoinette{" "}
                  <span className=" m-2">
                    <CheckedSymbol />
                  </span>
                </h1>
                <p className=" mb-1">Parent requiring expertise and support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" p-[10%] pt-0 pb-[2%] ">
        {/* Feature section */}

        <div className=" p-[2%] sm:p-[10%] pt-[6%] flex flex-col h-fit ">
          <div className=" flex justify-between items-center flex-wrap ">
            <div>
              <h1 className=" mb-4 sm:mb-[2rem]  h-[2.25rem] font-Poppins text-[1.95rem] sm:text-[3rem] font-[600] leading-[2.25rem] ">
                Featured Sports
              </h1>
              <p className=" text-[#74788D] ">what do you need to find?</p>
            </div>
            <Button
              size="lg"
              color="primary"
              radius="none"
              className=" rounded bg-[#FF3F01] pr-[4rem] "
            >
              View all
            </Button>
          </div>

          <div className="flex justify-center items-center lg:flex-nowrap flex-wrap p-2 ">
            <div className=" h-[ 8.8125rem] w-[14.34375rem] shadow-shadow-hero flex flex-col justify-center items-center m-4 ">
              <div className=" bg-[#F7F7FF] rounded-full ">
                <BasketBall />
              </div>
              <div className=" text-[1rem] font-bold m-3 ">BasketBall</div>
            </div>

            <div className=" h-[ 8.8125rem] w-[14.34375rem] shadow-shadow-hero flex flex-col justify-center items-center m-2 ">
              <div className=" p-1 bg-[#F7F7FF] rounded-full ">
                <FootBall />
              </div>
              <div className=" text-[1rem] font-bold m-3 ">Soccer/Football</div>
            </div>

            <div className=" h-[ 8.8125rem] w-[14.34375rem] shadow-shadow-hero flex flex-col justify-center items-center m-2 ">
              <div className=" p-2 bg-[#F7F7FF] rounded-full ">
                <Rugby />
              </div>
              <div className=" text-[1rem] font-bold m-3 ">Rugby League</div>
            </div>

            <div className=" h-[ 8.8125rem] w-[14.34375rem] shadow-shadow-hero flex flex-col justify-center items-center m-2 ">
              <div className=" bg-[#F7F7FF] rounded-full ">
                <WeightLifting />
              </div>
              <div className=" text-[1rem] font-bold m-3 ">Weight Lifting</div>
            </div>
          </div>
        </div>

        <div className=" p-[2%] sm:p-[10%] !pt-0 pb-[2%] flex flex-col h-fit ">
          <div className=" flex justify-between items-center flex-wrap ">
            <div>
              <h1 className=" mb-4 sm:mb-[2rem] font-Poppins text-[1.95rem] sm:text-[3rem] font-[600] leading-[2.25rem] ">
                Featured Services
              </h1>
              <p className=" text-[#74788D] ">what do you need to find?</p>
            </div>
            <Button
              size="lg"
              color="primary"
              radius="none"
              className=" rounded bg-[#FF3F01] pr-[4rem] "
            >
              View all
            </Button>
          </div>

          <div className="flex  justify-center items-center lg:flex-nowrap flex-wrap p-2 ">
            <div className=" p-2 px-0 h-[ 8.8125rem] w-[14.34375rem] shadow-shadow-hero flex flex-col justify-center items-center m-4 ">
              <div className=" bg-[#F7F7FF] rounded-full ">
                <InformalLearning />
              </div>
              <div className=" text-[0.8rem] text-center font-bold m-3 ">
                Athlete to Athlete Mentorship{" "}
              </div>
            </div>

            <div className=" p-3 h-[ 8.8125rem] w-[14.34375rem] shadow-shadow-hero flex flex-col justify-center items-center m-2 ">
              <div className="  bg-[#F7F7FF] rounded-full ">
                <Dumbbell />
              </div>
              <div className=" text-[0.8rem] font-bold m-3 ">Strength</div>
            </div>

            <div className=" p-1 h-[ 8.8125rem] w-[14.34375rem] shadow-shadow-hero flex flex-col justify-center items-center m-2 ">
              <div className=" bg-[#F7F7FF] rounded-full ">
                <Mobility />
              </div>
              <div className=" text-[0.8rem] font-bold m-3 ">Mobility</div>
            </div>

            <div className=" p-2 h-[ 8.8125rem] w-[14.34375rem] shadow-shadow-hero flex flex-col justify-center items-center m-2 ">
              <div className=" bg-[#F7F7FF] rounded-full ">
                <MentalWellness />
              </div>
              <div className=" text-[0.8rem] font-bold m-3 ">
                Mental Wellness
              </div>
            </div>
          </div>
        </div>

        <div className=" p-[2%] sm:p-[10%] !pt-0 pb-[5%] flex flex-col h-fit ">
          <div className=" flex justify-between flex-wrap ">
            <div>
              <h1 className=" mb-4 sm:mb-[2rem] font-Poppins text-[1.95rem] sm:text-[3rem] font-[600] leading-[2.25rem] ">
                Featured Services Near You
              </h1>
              <p className=" text-[#74788D] ">
                Explore the greates our services. You won’t be disappointed
              </p>
            </div>
            <div className=" flex justify-between ">
              <button className=" m-2 w-[1.5rem] h-[1.5rem] p-2 rounded-full shadow-hero-btn ">
                <ChevronLeft />
              </button>
              <button className=" m-2 w-[1.5rem] h-[1.5rem] p-2 rounded-full shadow-hero-btn ">
                <ChevronRight />
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center flex-wrap p-2  ">
            <div className=" w-[18.375rem] h-[19.67063rem] border-2 rounded-xl flex flex-col m-2 overflow-hidden ">
              <div className=" w-full ">
                <Service1Img />
              </div>
              <div className=" flex flex-col p-2 ">
                <div className=" w-[12.75]  leading-4 font-bold ">
                  Professional Soccer Player Video Analysis 30 mins
                </div>
                <div className=" flex justify-between h-8 ">
                  {" "}
                  <div className=" max-w-[7rem] h-[1.9375] pl-2 text-[#74788D] text-[0.75rem] ">
                    New Jersey, USA
                  </div>
                  <span className=" flex text-[0.75rem] h-[1rem] ">
                    <StarSymbol />
                    4.9
                  </span>
                </div>
                <div className="flex justify-between ">
                  <div className=" text-base font-bold ">
                    $25.00
                    <span className=" text-[0.7rem] font-light line-through ">
                      $35.00
                    </span>
                  </div>{" "}
                  <Button
                    radius="none"
                    size="sm"
                    className=" text-[#FF3F01] m-0 rounded p-2 max-w-[5rem] max-h-[2rem] "
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
            <div className=" w-[18.375rem] h-[19.67063rem] border-2 rounded-xl flex flex-col m-2 overflow-hidden ">
              <div className=" w-full ">
                <Service1Img />
              </div>
              <div className=" flex flex-col p-2 ">
                <div className=" w-[12.75] leading-4 font-bold ">
                  Professional Soccer Player Video Analysis 30 mins
                </div>
                <div className=" flex justify-between h-8 ">
                  {" "}
                  <div className=" max-w-[7rem] h-[1.9375] pl-2 text-[#74788D] text-[0.75rem] ">
                    New Jersey, USA
                  </div>
                  <span className=" flex text-[0.75rem] h-[1rem] ">
                    <StarSymbol />
                    4.9
                  </span>
                </div>
                <div className="flex justify-between ">
                  <div className=" text-base font-bold ">
                    $25.00
                    <span className=" text-[0.7rem] font-light line-through ">
                      $35.00
                    </span>
                  </div>{" "}
                  <Button
                    radius="none"
                    size="sm"
                    className=" text-[#FF3F01] m-0 rounded p-2 max-w-[5rem] max-h-[2rem] "
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
            <div className=" w-[18.375rem] h-[19.67063rem] border-2 rounded-xl flex flex-col m-2 overflow-hidden ">
              <div className=" w-full ">
                <Service1Img />
              </div>
              <div className=" flex flex-col p-2 ">
                <div className=" w-[12.75] leading-4 font-bold ">
                  Professional Soccer Player Video Analysis 30 mins
                </div>
                <div className=" flex justify-between h-8 ">
                  {" "}
                  <div className=" max-w-[7rem] h-[1.9375] pl-2 text-[#74788D] text-[0.75rem] ">
                    New Jersey, USA
                  </div>
                  <span className=" flex text-[0.75rem] h-[1rem] ">
                    <StarSymbol />
                    4.9
                  </span>
                </div>
                <div className="flex justify-between ">
                  <div className=" text-base font-bold ">
                    $25.00
                    <span className=" text-[0.7rem] font-light line-through ">
                      $35.00
                    </span>
                  </div>{" "}
                  <Button
                    radius="none"
                    size="sm"
                    className=" text-[#FF3F01] m-0 rounded p-2 max-w-[5rem] max-h-[2rem] "
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex w-full justify-center items-center ">
            <Button
              size="lg"
              color="primary"
              radius="none"
              className=" rounded bg-[#FF3F01] pr-[4rem] "
            >
              View all
            </Button>
          </div>
        </div>

        <div className=" p-[2%] sm:p-[10%] !pt-0 pb-[5%] flex flex-col h-fit ">
          <div className=" flex justify-between items-center flex-wrap ">
            <div>
              <h1 className="  mb-4 sm:mb-[2rem] font-Poppins text-[1.95rem] sm:text-[3rem] font-[600] leading-[2.25rem] ">
                Top Providers
              </h1>
              <p className=" text-[#74788D] ">Meet Our Experts</p>
            </div>
            <Button
              size="lg"
              color="primary"
              radius="none"
              className=" rounded bg-[#FF3F01] pr-[4rem] "
            >
              View all
            </Button>
          </div>
          <div className="flex justify-center items-center lg:flex-nowrap flex-wrap p-1 ">
            <div className=" flex flex-col items-center w-[14.3rem] h-[18.1rem] border-2 border-[rgba(0, 0, 0, 0.30)] rounded m-1 mb-0 p-2">
              <ExpertImg />
              <div className=" text-[0.5rem] w-full  relative ">
                <div className=" flex justify-between mb-2 mt-3 ">
                  <div>
                    <h1 className=" flex items-center text-base font-bold h-4 ">
                      Jo Smith{" "}
                      <span className="">
                        <CheckedSymbol />
                      </span>
                    </h1>
                    <p className=" text-[0.7rem] text-[#74788D] mt-1 mb-3 ">
                      Recovery Therapist
                    </p>
                  </div>

                  <p className=" mt-2 font-bold text-[0.8rem] ">
                    $20.00<span>/hr</span>
                  </p>
                </div>

                <div className="flex items-center text-sm h-3 w-[6rem] ">
                  <StarSymbol />
                  <StarSymbol />
                  <StarSymbol />
                  <StarSymbol />
                  <HalfStarSymbol />
                  (320)
                </div>
              </div>
            </div>
            <div className=" flex flex-col items-center w-[14.3rem] h-[18.1rem] border-2 border-[rgba(0, 0, 0, 0.30)] rounded m-1 mb-0 p-2">
              <ExpertImg2 />
              <div className=" text-[0.5rem] w-full  relative ">
                <div className=" flex justify-between mb-2 mt-3 ">
                  <div>
                    <h1 className="flex items-center text-base font-bold h-4 ">
                      Michael
                      <span className="">
                        <CheckedSymbol />
                      </span>
                    </h1>
                    <p className=" text-[0.7rem] text-[#74788D] mt-1 mb-3 ">
                      Mobility
                    </p>
                  </div>

                  <p className=" mt-2 font-bold text-[0.8rem] ">
                    $50.00<span>/hr</span>
                  </p>
                </div>

                <div className="flex items-center text-sm h-3 w-[6rem] ">
                  <StarSymbol />
                  <StarSymbol />
                  <StarSymbol />
                  <StarSymbol />
                  <HalfStarSymbol />
                  (228)
                </div>
              </div>
            </div>
            <div className=" flex flex-col items-center w-[14.3rem] h-[18.1rem] border-2 border-[rgba(0, 0, 0, 0.30)] rounded m-1 mb-0 p-2">
              <ExpertImg3 />
              <div className=" text-[0.5rem] w-full  relative ">
                <div className=" flex justify-between mb-2 mt-3 ">
                  <div>
                    <h1 className="flex items-center text-base font-bold h-4 ">
                      Antoinette
                      <span className="">
                        <CheckedSymbol />
                      </span>
                    </h1>
                    <p className=" text-[0.7rem] text-[#74788D] mt-1 mb-3 ">
                      Video Analysis
                    </p>
                  </div>

                  <p className=" mt-2 font-bold text-[0.8rem] ">
                    $25.00<span>/hr</span>
                  </p>
                </div>

                <div className="flex items-center text-sm h-3 w-[6rem] ">
                  <StarSymbol />
                  <StarSymbol />
                  <StarSymbol />
                  <StarSymbol />
                  <HalfStarSymbol />
                  (130)
                </div>
              </div>
            </div>
            <div className=" flex flex-col items-center w-[14.3rem] h-[18.1rem] border-2 border-[rgba(0, 0, 0, 0.30)] rounded m-1 mb-0 p-2">
              <ExpertImg4 />
              <div className=" text-[0.5rem] w-full  relative ">
                <div className=" flex justify-between mb-2 mt-3 ">
                  <div>
                    <h1 className="flex items-center text-base font-bold h-4 ">
                      Thompson
                      <span className="">
                        <CheckedSymbol />
                      </span>
                    </h1>
                    <p className=" text-[0.7rem] text-[#74788D] mt-1 mb-3 ">
                      Conditioning
                    </p>
                  </div>

                  <p className=" mt-2 font-bold text-[0.8rem] ">
                    $25.00<span>/hr</span>
                  </p>
                </div>

                <div className="flex items-center text-sm h-3 w-[6rem] ">
                  <StarSymbol />
                  <StarSymbol />
                  <StarSymbol />
                  <StarSymbol />
                  <HalfStarSymbol />
                  (95)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-end items-center w-full p-0 sm:p-8 md:p-16 bg-[#FFF9F9] ">
        <div className=" flex flex-col justify-center items-center mb-16 ">
          <h4 className=" text-base text-[#FF3F01] font-[400] ">
            OUR LATEST ARTICLES
          </h4>
          <h1
            className={`${poppins.className} text-[2.5rem] font-bold text-center `}
          >
            Customer Reviews
          </h1>
        </div>
        <div className=" flex w-[81rem] max-w-full h-fit sm:h-[25rem] flex-wrap sm:flex-nowrap ">
          <div className=" max-w-full h-full w-[18rem] md:flex hidden ">
            <ReviewImage1 />
          </div>
          <div className=" w-[45.25rem] h-fit max-w-full flex justify-center items-center ">
            <Splide aria-label="My Favorite Images">
              <SplideSlide>
                <MainReviewImage />
              </SplideSlide>
              <SplideSlide>
                <MainReviewImage />
              </SplideSlide>
            </Splide>{" "}
          </div>
          <div className=" max-w-full h-full w-[18rem] md:flex hidden ">
            <ReviewImage2 />
          </div>
        </div>
      </div>

      <div className=" flex justify-end items-center flex-wrap m-16 rounded-[50px] bg-[#FF3F01]  min-h-[25.6rem] relative ">
        <div className=" hidden sm:block absolute bottom-[0px] left-5 w-1/4 ">
          <OfferMainImg />
        </div>
        <div className=" w-[65%] p-6 ">
          <div className=" max-w-[40rem] ">
            <h1 className=" text-[2.375rem] font-[600] text-white ">
              We Are Offering 14 Days Free Trial
            </h1>
            <p className=" text-[1.125rem] font-[400] text-white ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore minim veniam, quis
              nostrud exercitation ullamco magna aliqua.
            </p>
            <Link href={"#"}>Try 14 Days Free Trial</Link>
          </div>
        </div>
      </div>

      <div className=" flex flex-col p-[3.75rem] ">
        <div className=" my-12 text-[2.5rem] font-[600] ">See How It Works</div>
        <div className=" flex justify-evenly items-center flex-wrap ">
          <div className=" flex flex-col items-center w-fit ">
            <div className=" w-[5rem] h-[5rem] relative rounded-xl bg-[#ff008a80] rotate-[14deg] ">
              <span className=" flex justify-center items-center text-[3.125rem] text-white font-semibold absolute w-[5rem] h-[5rem] rounded-xl bg-[#ff008a80] rotate-[-14deg] ">
                01
              </span>
            </div>
            <div className=" m-6 ">
              <SeeHowItWorkLine />
            </div>
            <SeeHowItWorkImage1 />
          </div>
          <div className=" flex flex-col items-center w-fit ">
            <div className=" w-[5rem] h-[5rem] relative rounded-xl bg-[#ff008a80] rotate-[14deg] ">
              <span className=" flex justify-center items-center text-[3.125rem] text-white font-semibold absolute w-[5rem] h-[5rem] rounded-xl bg-[#ff008a80] rotate-[-14deg] ">
                02
              </span>
            </div>
            <div className=" m-6  ">
              <SeeHowItWorkLine />
            </div>
            <div className=" w-fit h-fit ">
              <SeeHowItWorkImage2 />
            </div>
          </div>
          <div className=" flex flex-col items-center w-fit ">
            <div className=" w-[5rem] h-[5rem] relative rounded-xl bg-[#ff008a80] rotate-[14deg] ">
              <span className=" flex justify-center items-center text-[3.125rem] text-white font-semibold absolute w-[5rem] h-[5rem] rounded-xl bg-[#ff008a80] rotate-[-14deg] ">
                01
              </span>
            </div>
            <div className=" m-6 ">
              <SeeHowItWorkLine />
            </div>
            <SeeHowItWorkImage1 />
          </div>
        </div>
      </div>

      <div className=" flex flex-col items-center my-8 bg-[#F9F9F9] min-h-[37rem] py-[5rem] px-[3.75rem] ">
        <div className=" flex flex-col items-center ">
          <h6 className=" text-[#74788D] text-[1rem] font-normal ">
            Working Steps
          </h6>
          <h1 className=" text-[2rem] font-semibold text-black ">
            How we are Working
          </h1>
        </div>
        <div className=" flex justify-center items-center flex-wrap m-4 ">
          <div className=" w-[15rem] sm:w-[19rem] h-[16rem] sm:h-[20rem] flex flex-col justify-center items-center bg-[#FF3F01] rounded-[0.625rem] p-4 m-4 text-white ">
            <h5 className="  mb-7 ">Step 1</h5>
            <div className=" w-[6.375rem] p-[1.25rem] bg-white rounded-[0.625rem] mb-7 ">
              <WorkingStepsImg1 />
            </div>
            <div className=" bg-[#FFB800] h-1 w-[2.68rem] mb-7 " />
            <div className="   ">
              <h1 className=" text-[1.125rem] font-bold text-center ">
                choose a service category
              </h1>
              <p className=" text-[0.875rem] font-normal text-center ">
                Select the type of catering service you are looking for
              </p>
            </div>
          </div>
          <div className=" w-[15rem] sm:w-[19rem] h-[16rem] sm:h-[20rem] flex flex-col justify-center items-center bg-[#FF3F01] rounded-[0.625rem] p-4 m-4 text-white ">
            <h5 className="  mb-7 ">Step 2</h5>
            <div className=" w-[6.375rem] p-[1.25rem] bg-white rounded-[0.625rem] mb-7 ">
              <WorkingStepsImg2 />
            </div>
            <div className=" bg-[#FFB800] h-1 w-[2.68rem] mb-7 " />
            <div className="   ">
              <h1 className=" text-[1.125rem] font-bold text-center ">
                choose a service category
              </h1>
              <p className=" text-[0.875rem] font-normal text-center ">
                Select the type of catering service you are looking for
              </p>
            </div>
          </div>
          <div className=" w-[15rem] sm:w-[19rem] h-[16rem] sm:h-[20rem] flex flex-col justify-center items-center bg-[#FF3F01] rounded-[0.625rem] p-4 m-4 text-white ">
            <h5 className="  mb-7 ">Step 3</h5>
            <div className=" w-[6.375rem] p-[1.25rem] bg-white rounded-[0.625rem] mb-7 ">
              <WorkingStepsImg3 />
            </div>
            <div className=" bg-[#FFB800] h-1 w-[2.68rem] mb-7 " />
            <div className="   ">
              <h1 className=" text-[1.125rem] font-bold text-center ">
                choose a service category
              </h1>
              <p className=" text-[0.875rem] font-normal text-center ">
                Select the type of catering service you are looking for
              </p>
            </div>
          </div>
          <div className=" w-[15rem] sm:w-[19rem] h-[16rem] sm:h-[20rem] flex flex-col justify-center items-center bg-[#FF3F01] rounded-[0.625rem] p-4 m-4 text-white ">
            <h5 className="  mb-7 ">Step 4</h5>
            <div className=" w-[6.375rem] p-[1.25rem] bg-white rounded-[0.625rem] mb-7 ">
              <WorkingStepsImg4 />
            </div>
            <div className=" bg-[#FFB800] h-1 w-[2.68rem] mb-7 " />
            <div className="   ">
              <h1 className=" text-[1.125rem] font-bold text-center ">
                choose a service category
              </h1>
              <p className=" text-[0.875rem] font-normal text-center ">
                Select the type of catering service you are looking for
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing section */}
      <div className=" flex flex-col justify-center items-center text-[#F9F9F9] my-8  ">
        <div className=" text-center mb-8 ">
          {" "}
          <h1 className=" text-[1.875rem] text-[#28283C] font-bold ">
            Pricing Plans
          </h1>
          <p className=" text-[0.75rem] text-[#74788D] font-normal ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className=" flex flex-wrap justify-center items-center w-full h-full ">
          <div className=" h-[27rem] flex items-end ">
            <div className=" p-1 w-[19.5rem] h-[23rem] flex flex-col items-center text-black rounded-xl border-2 m-4 ">
              <div className=" p-2 flex flex-col items-center ">
                <h1 className=" text-[1.125rem] font-bold m-0.5 ">Basic</h1>
                <p className=" text-[0.65rem] font-[400] text-[#74788D] m-0.5 ">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
                <h1 className="  text-[1.125rem] font-bold m-0.5 ">
                  $50
                  <span className=" text-[0.609rem] text-[#C2C9D1] ">
                    /month
                  </span>
                </h1>
              </div>
              <div className=" h-0.5 w-[90%] bg-slate-100 m-3 "></div>
              <div className=" flex flex-col justify-center items-start p-3 ">
                <div className=" flex justify-center items-center my-0.5 ">
                  <CheckedSymbol2 />
                  <h1 className=" text-xs m-1 ">
                    Sed perspiciatis unde omnis natus error
                  </h1>
                </div>

                <div className=" flex justify-center items-center my-0.5 ">
                  <CheckedSymbol2 />
                  <h1 className=" text-xs m-1 ">
                    Sed perspiciatis unde omnis natus error
                  </h1>
                </div>

                <div className=" flex justify-center items-center my-0.5 ">
                  <CheckedSymbol2 />
                  <h1 className=" text-xs m-1 ">
                    Sed perspiciatis unde omnis natus error
                  </h1>
                </div>

                <div className=" flex justify-center items-center my-0.5 opacity-[0.2] ">
                  <CheckedSymbol2 />
                  <h1 className=" text-xs m-1 ">
                    Sed perspiciatis unde omnis natus error
                  </h1>
                </div>

                <div className=" flex justify-center items-center my-0.5 opacity-[0.2] ">
                  <CheckedSymbol2 />
                  <h1 className=" text-xs m-1 ">
                    Sed perspiciatis unde omnis natus error
                  </h1>
                </div>

                <div className=" flex justify-center items-center my-0.5 opacity-[0.2] ">
                  <CheckedSymbol2 />
                  <h1 className=" text-xs m-1 ">
                    Sed perspiciatis unde omnis natus error
                  </h1>
                </div>
              </div>
              <Button
                size="md"
                color="primary"
                radius="none"
                className=" rounded bg-[#FF3F01] pr-[3rem] "
              >
                Get Started
              </Button>
            </div>
          </div>

          <div className=" flex flex-col justify-center items-center w-fit h-[28rem]  ">
            <h1 className=" text-black text-base h-8 font-bold mt-4 ">
              Popular
            </h1>
            <div className=" p-1 w-[19.5rem] h-[23rem] flex flex-col items-center text-black rounded-xl border-2 mt-0 m-4 shadow-shadow-hero ">
              <div className=" p-2 flex flex-col items-center ">
                <h1 className=" text-[1.125rem] font-bold m-0.5 ">Standard</h1>
                <p className=" text-[0.65rem] font-[400] text-[#74788D] m-0.5 ">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
                <h1 className="  text-[1.125rem] font-bold m-0.5 ">
                  $100
                  <span className=" text-[0.609rem] text-[#C2C9D1] ">
                    /month
                  </span>
                </h1>
              </div>
              <div className=" h-0.5 w-[90%] bg-slate-100 m-3 "></div>
              <div className=" flex flex-col justify-center items-start p-3 ">
                <div className=" flex justify-center items-center my-0.5 ">
                  <CheckedSymbol2 />
                  <h1 className=" text-xs m-1 ">
                    Sed perspiciatis unde omnis natus error
                  </h1>
                </div>

                <div className=" flex justify-center items-center my-0.5 ">
                  <CheckedSymbol2 />
                  <h1 className=" text-xs m-1 ">
                    Sed perspiciatis unde omnis natus error
                  </h1>
                </div>

                <div className=" flex justify-center items-center my-0.5 ">
                  <CheckedSymbol2 />
                  <h1 className=" text-xs m-1 ">
                    Sed perspiciatis unde omnis natus error
                  </h1>
                </div>

                <div className=" flex justify-center items-center my-0.5  ">
                  <CheckedSymbol2 />
                  <h1 className=" text-xs m-1 ">
                    Sed perspiciatis unde omnis natus error
                  </h1>
                </div>

                <div className=" flex justify-center items-center my-0.5  ">
                  <CheckedSymbol2 />
                  <h1 className=" text-xs m-1 ">
                    Sed perspiciatis unde omnis natus error
                  </h1>
                </div>

                <div className=" flex justify-center items-center my-0.5 opacity-[0.2] ">
                  <CheckedSymbol2 />
                  <h1 className=" text-xs m-1 ">
                    Sed perspiciatis unde omnis natus error
                  </h1>
                </div>
              </div>
              <Button
                size="md"
                color="primary"
                radius="none"
                className=" rounded bg-[#FF3F01] pr-[3rem] "
              >
                Get Started
              </Button>
            </div>
          </div>

          <div className=" h-[27rem] flex items-end ">
            <div className=" p-1 w-[19.5rem] h-[23rem] flex flex-col items-center text-black rounded-xl border-2 m-4 ">
              <div className=" p-2 flex flex-col items-center ">
                <h1 className=" text-[1.125rem] font-bold m-0.5 ">Premium</h1>
                <p className=" text-[0.65rem] font-[400] text-[#74788D] m-0.5 ">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
                <h1 className="  text-[1.125rem] font-bold m-0.5 ">
                  $150
                  <span className=" text-[0.609rem] text-[#C2C9D1] ">
                    /month
                  </span>
                </h1>
              </div>
              <div className=" h-0.5 w-[90%] bg-slate-100 m-3 "></div>
              <div className=" flex flex-col justify-center items-start p-3 ">
                <div className=" flex justify-center items-center my-0.5 ">
                  <CheckedSymbol2 />
                  <h1 className=" text-xs m-1 ">
                    Sed perspiciatis unde omnis natus error
                  </h1>
                </div>

                <div className=" flex justify-center items-center my-0.5 ">
                  <CheckedSymbol2 />
                  <h1 className=" text-xs m-1 ">
                    Sed perspiciatis unde omnis natus error
                  </h1>
                </div>

                <div className=" flex justify-center items-center my-0.5 ">
                  <CheckedSymbol2 />
                  <h1 className=" text-xs m-1 ">
                    Sed perspiciatis unde omnis natus error
                  </h1>
                </div>

                <div className=" flex justify-center items-center my-0.5 ">
                  <CheckedSymbol2 />
                  <h1 className=" text-xs m-1 ">
                    Sed perspiciatis unde omnis natus error
                  </h1>
                </div>

                <div className=" flex justify-center items-center my-0.5 ">
                  <CheckedSymbol2 />
                  <h1 className=" text-xs m-1 ">
                    Sed perspiciatis unde omnis natus error
                  </h1>
                </div>

                <div className=" flex justify-center items-center my-0.5 ">
                  <CheckedSymbol2 />
                  <h1 className=" text-xs m-1 ">
                    Sed perspiciatis unde omnis natus error
                  </h1>
                </div>
              </div>
              <Button
                size="md"
                color="primary"
                radius="none"
                className=" rounded bg-[#FF3F01] pr-[3rem] "
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Blog section */}
      <div className=" my-8 flex flex-col justify-center items-center ">
        <div className=" text-center m-8 ">
          <h1 className=" text-[1.875rem] text-[#28283C] font-bold ">
            Latest Blog
          </h1>
          <p className=" text-[0.75rem ] text-[#74788D] font-[400] ">
            Lorem ipsum dolor sit amet, consectetur elit
          </p>
        </div>
        <div className=" flex flex-wrap justify-center items-center ">
          <div className=" w-[18.375rem] h-[19.67063rem] p-4 rounded-xl flex flex-col m-2 overflow-hidden ">
            <div className=" w-full ">
              <BlogImg1 />
            </div>
            <div className=" flex flex-col mt-2 p-2 ">
              <div className=" flex justify-evenly text-[0.75rem] text-[#74788D] ">
                <span>09 Aug 2023</span>
                <span>Hal Lewis</span>
              </div>
              <div className=" text-[0.9375rem] text-[#28283C] font-bold ">
                How to Choose a Electrical ServiceProvider?
              </div>
            </div>
          </div>
          <div className=" w-[18.375rem] h-[19.67063rem] p-4 rounded-xl flex flex-col m-2 overflow-hidden ">
            <div className=" w-full ">
              <BlogImg2 />
            </div>
            <div className=" flex flex-col mt-2 p-2 ">
              <div className=" flex justify-evenly text-[0.75rem] text-[#74788D] ">
                <span>09 Aug 2023</span>
                <span>JohnDoe</span>
              </div>
              <div className=" text-[0.9375rem] text-[#28283C] font-bold ">
                How to Choose a Electrical ServiceProvider?
              </div>
            </div>
          </div>
          <div className=" w-[18.375rem] h-[19.67063rem] p-4 rounded-xl flex flex-col m-2 overflow-hidden ">
            <div className=" w-full ">
              <BlogImg3 />
            </div>
            <div className=" flex flex-col mt-2 p-2 ">
              <div className=" flex justify-evenly text-[0.75rem] text-[#74788D] ">
                <span>09 Aug 2023</span>
                <span>Greg Avery</span>
              </div>
              <div className=" text-[0.9375rem] text-[#28283C] font-bold ">
                Construction Service Scams: How to Avoid Them
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
