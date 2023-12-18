import Image from "next/image";
import React from "react";

function Review() {
  return (
    <div className="flex flex-col justify-start items-start">
      <div className="text-neutral-900 text-5xl  font-semibold self-center w-[1218px] max-w-[1265px] mt-8 max-md:max-w-full max-md:text-4xl">
        What Our Clients Say
      </div>
      <div className="text-zinc-700 text-sm leading-6 tracking-normal whitespace-nowrap ml-28 mt-8 self-start max-md:max-w-full">
        Quality training and easy to get driving license
      </div>
      <div className="self-center w-full max-w-screen-xl mt-12 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="justify-center shadow-md bg-white flex grow flex-col w-full px-12 py-7 rounded-3xl items-start max-md:mt-8 max-md:px-5">
              <Image
                src={"/wei.png"}
                alt="wei"
                height={23}
                width={30}
                className="aspect-[1.3] object-contain object-center w-[30px] fill-[linear-gradient(50deg,#FF006E_-0.02%,#FFBE0B_141.03%)] overflow-hidden max-w-full"
              />
              <div className="text-neutral-500 text-base leading-8 tracking-wider capitalize self-stretch mt-5">
                At in pellentesque integer netus enim purus. Tempor nulla porta
                pretium venenatis sem tellus duis. Rhoncus eu le
              </div>
              <div className="shadow-md bg-white flex flex-row mt-5  pt-4 pb-2.5 rounded-[59px] items-start max-md:px-5 gap-3">
                <Image
                  src={"/man.png"}
                  alt="man"
                  height={50}
                  width={50}
                  className="aspect-[5.54] w-28 h-12"
                />
                <div className="flex flex-col justify-start items-start">
                  <div className="text-neutral-600 text-lg font-medium leading-6 tracking-wider capitalize ml-5 max-md:ml-2.5">
                    narendra gates
                  </div>
                  <div className="flex-row flex w-16 h-3 ">
                    <Image
                      src={"/Star 1.png"}
                      alt="man"
                      height={50}
                      width={50}
                    />
                    <Image
                      src={"/Star 1.png"}
                      alt="man"
                      height={50}
                      width={50}
                    />
                    <Image
                      src={"/Star 1.png"}
                      alt="man"
                      height={50}
                      width={50}
                    />
                    <Image
                      src={"/Star 1.png"}
                      alt="man"
                      height={50}
                      width={50}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-center shadow-md bg-white flex grow flex-col w-full px-12 py-7 rounded-3xl items-start max-md:mt-8 max-md:px-5">
              <Image
                src={"/wei.png"}
                alt="wei"
                height={23}
                width={30}
                className="aspect-[1.3] object-contain object-center w-[30px] fill-[linear-gradient(50deg,#FF006E_-0.02%,#FFBE0B_141.03%)] overflow-hidden max-w-full"
              />
              <div className="text-neutral-500 text-base leading-8 tracking-wider capitalize self-stretch mt-5">
                Eu lorem lobortis malesuada suspendisse volutpat viverra
                penatibus vulputate sit. Morbi et malesuada ipsum etiam in
                vitae.{" "}
              </div>
              <div className="shadow-md bg-white flex flex-row mt-5  pt-4 pb-2.5 rounded-[59px] items-start max-md:px-5 gap-3">
                <Image
                  src={"/man.png"}
                  alt="man"
                  height={50}
                  width={50}
                  className="aspect-[5.54] w-28 h-12"
                />
                <div className="flex flex-col justify-start items-start">
                  <div className="text-neutral-600 text-lg font-medium leading-6 tracking-wider capitalize ml-5 max-md:ml-2.5 inline-block ">
                    silvia putriani
                  </div>
                  <div className="flex-row flex w-16 h-3 ">
                    <Image
                      src={"/Star 1.png"}
                      alt="man"
                      height={50}
                      width={50}
                    />
                    <Image
                      src={"/Star 1.png"}
                      alt="man"
                      height={50}
                      width={50}
                    />
                    <Image
                      src={"/Star 1.png"}
                      alt="man"
                      height={50}
                      width={50}
                    />
                    <Image
                      src={"/Star 1.png"}
                      alt="man"
                      height={50}
                      width={50}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-center shadow-md bg-white flex grow flex-col w-full px-12 py-11 rounded-3xl items-start max-md:mt-8 max-md:px-5">
              <Image
                src={"/wei.png"}
                alt="wei"
                height={23}
                width={30}
                className="aspect-[1.3] object-contain object-center w-[30px] fill-[linear-gradient(50deg,#FF006E_-0.02%,#FFBE0B_141.03%)] overflow-hidden max-w-full"
              />
              <div className="text-neutral-500 text-base leading-8 tracking-wider capitalize self-stretch mt-5">
                Vel egestas cursus mauris urna sed dui egestas quis aliquet.
                Nulla dictumst vel iaculis at. Justo purus id arcu vitae.
              </div>
              <div className="shadow-md bg-white flex flex-row mt-5  pt-4 pb-2.5 rounded-[59px] items-start max-md:px-5 gap-3">
                <Image
                  src={"/man.png"}
                  alt="man"
                  height={50}
                  width={50}
                  className="aspect-[5.54] w-28 h-12"
                />
                <div className="flex flex-col justify-start items-start">
                  <div className="text-neutral-600 text-lg font-medium leading-6 tracking-wider capitalize ml-5 max-md:ml-2.5">
                    wulan anggraeni
                  </div>
                  <div className="flex-row flex w-16 h-3 ">
                    <Image
                      src={"/Star 1.png"}
                      alt="man"
                      height={50}
                      width={50}
                    />
                    <Image
                      src={"/Star 1.png"}
                      alt="man"
                      height={50}
                      width={50}
                    />
                    <Image
                      src={"/Star 1.png"}
                      alt="man"
                      height={50}
                      width={50}
                    />
                    <Image
                      src={"/Star 1.png"}
                      alt="man"
                      height={50}
                      width={50}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items-stretch self-center flex  fill-rose-500 w-[66px] max-w-full justify-between gap-5 mt-24 max-md:mt-10">
        <div className="flex shrink-0 h-[22px] fill-rose-500 flex-col flex-1 rounded-[50%]" />
        <div className="flex shrink-0 h-[22px] flex-col flex-1 fill-rose-500 rounded-[50%]" />
      </div>
    </div>
  );
}

export default Review;
