import Image from "next/image";
import React from "react";

function Landing() {
  return (
    <>
      <div className="self-center w-full max-w-[1276px] mt-6 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-center justify-center w-[58%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col mt-16 px-5 max-md:max-w-full max-md:mt-10">
              <div className="justify-center text-red-500 text-6xl font-semibold leading-[65px] tracking-widest max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
                <span className="font-medium text-indigo-950">
                  Learn Driving: Book{" "}
                </span>
                <span className="font-bold text-indigo-950">Top Driving </span>
                <span className="font-bold text-red-500">
                  Schools
                  <br />
                </span>
                <span className="font-medium text-indigo-950">Near You</span>
              </div>
              <div className="text-indigo-950 text-lg font-medium leading-7 mt-12 max-md:max-w-full max-md:mt-10">
                Empower yourself with safe and confident driving skills today.
                Book expert Instructors and top-rated driving schools near you.{" "}
              </div>
              <div className="items-stretch shadow-sm bg-white flex justify-between gap-5 mt-12 px-3.5 py-4 rounded-[30px] border-[0.5px] border-solid border-black border-opacity-10 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
                <div className="flex flex-row justify-center items-center gap-7">
                  <div className="text-black text-opacity-30 text-xl grow shrink basis-auto self-start max-md:max-w-full">
                    Search Location, Driving School or Services...
                  </div>
                  <div className="items-center flex aspect-square flex-col justify-center self-start">
                    <Image
                      loading="lazy"
                      src="/Search.png"
                      alt="Search"
                      width={26}
                      height={26}
                      className="aspect-square object-contain object-center w-[25px] fill-rose-500 overflow-hidden"
                    />
                  </div>
                </div>
                <div className="align-middle w-28 h-9 px-1.5 py-1 bg-rose-500 rounded-3xl justify-center items-center gap-2 inline-flex">
                  <Image
                    src={"/Location.png"}
                    alt="Location"
                    width={25}
                    height={25}
                  />
                  <div className="w-16 h-4 text-white mb-2 font-normal font-['Roboto']">
                    Near Me
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[42%] ml-5 max-md:w-full max-md:ml-0">
            <Image
              loading="lazy"
              src={"/Hero.png"}
              alt="hero"
              width={506}
              height={467}
              className="aspect-[1.09] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-[27px] items-start justify-start shrink-0 relative">
        <div className="bg-[#fd5444] rounded-[10px] border-solid border-[rgba(0,0,0,0.10)] border shrink-0 w-[291px] h-[65px] relative ">
          <div className="text-[#ffffff] text-center font-['RobotoFlex-SemiBold',_sans-serif] text-[15px] leading-[64px] font-semibold uppercase absolute left-[47px] top-[26px] w-[200px] h-3.5 flex items-center justify-center">
            Book Driving School{" "}
          </div>
        </div>
        <div className="bg-[#ffffff] rounded-[10px] border-solid border-[rgba(0,0,0,0.20)] border pr-[41px] pl-[41px] shrink-0 w-[220px] h-16 relative ">
          <div className="w-[138px] h-16 absolute left-[41px] top-0">
            <div className="text-[#000000] text-center font-['RobotoFlex-SemiBold',_sans-serif] text-[15px] leading-[64px] font-semibold uppercase absolute left-0 top-0 flex items-center justify-center">
              Hire Instructors{" "}
            </div>
          </div>
        </div>
      </div>
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 left-[justify-center items-center">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="bg-white border shadow-[0px_4px_12px_rgba(0,0,0,0.10000000149011612)] flex grow items-stretch justify-between gap-5 w-full pl-5 pr-16 py-6 rounded-xl border-solid border-gray-100 max-md:mt-8 max-md:pr-5">
              <Image
                loading="lazy"
                src={"/100.png"}
                alt="100%"
                width={30}
                height={31}
                className="aspect-[0.86] object-contain object-center w-11 fill-blue-600 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-indigo-950 text-base font-medium leading-6 my-auto">
                100% Customer Satisfaction
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.10000000149011612)] flex grow items-stretch justify-between gap-5 w-full pl-5 pr-20 py-6 rounded-xl max-md:mt-8 max-md:pr-5">
              <Image
                loading="lazy"
                src={"/target.png"}
                alt="target"
                width={30}
                height={31}
                className="aspect-[0.86] object-contain object-center w-11 fill-pink-600 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-indigo-950 text-base font-medium leading-6 my-auto">
                Safer Roads is
                <br />
                Our Mission
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-white border shadow-[0px_4px_12px_rgba(0,0,0,0.10000000149011612)] flex grow items-stretch justify-between gap-5 w-full pl-5 pr-20 py-6 rounded-xl border-solid border-gray-100 max-md:mt-8 max-md:pr-5">
              <Image
                loading="lazy"
                src={"/Quality.png"}
                alt="Quality"
                height={31}
                width={30}
                className="aspect-[0.86] object-contain object-center w-11 fill-teal-500 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-indigo-950 text-base font-medium leading-6 mt-2.5">
                100% Best <br />
                Quality service
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Landing;
