import Image from "next/image";
import React from "react";

function Recommendation() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-neutral-800 text-5xl font-semibold leading-[66px] tracking-widest capitalize max-w-[1272px] ml-28 self-start mt-36 max-md:max-w-full max-md:mt-10">
        Recommended Driving Schools
      </div>
      <div className="items-stretch self-center flex w-full max-w-[1272px] justify-between gap-5 mt-6 px-5 max-md:max-w-full ml-24 max-md:flex-wrap max-md:justify-center">
        <div className="text-stone-500 text-xl leading-10 tracking-wider capitalize grow shrink basis-auto max-md:max-w-full">
          These are upride Verified most recommended Driving Schools in
          Bengaluru
        </div>
        <div className="align-middle w-28 h-9 px-1.5 py-4 bg-rose-500 rounded-3xl justify-center items-center gap-2 inline-flex">
          <Image src={"/Location.png"} alt="Location" width={25} height={25} />
          <div className="w-16 h-4 text-white mb-2 font-normal font-['Roboto']">
            Near Me
          </div>
        </div>
        <div className="items-stretch flex basis-[0%] flex-col justify-center px-0.5 py-px self-start">
          <div className="text-black text-center text-sm font-semibold leading-5 whitespace-nowrap border justify-center items-stretch px-6 py-3 rounded-3xl border-solid border-black border-opacity-20 max-md:px-5">
            View All
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-full max-w-[1272px] mt-14 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="items-stretch shadow-md bg-white flex w-full grow flex-col mx-auto pb-12 rounded-3xl max-md:mt-9">
              <Image
                loading="lazy"
                src={"/1.png"}
                alt="1"
                width={400}
                height={315}
                className="aspect-[1.27] object-contain object-center w-full overflow-hidden"
              />
              <div className="flex flex-col items-stretch mt-6 px-9 max-md:px-5">
                <div className="text-neutral-700 text-2xl font-medium leading-9 tracking-wider capitalize">
                  SharpDrives Driving School- kerekodi
                </div>
                <div className="text-neutral-500 text-base leading-8 tracking-wider capitalize whitespace-nowrap mt-6">
                  Kerekodi, Bengaluru
                </div>
              </div>
              <div className="items-stretch flex w-full justify-between gap-5 mt-20 pr-5 max-md:mt-10">
                <div className="items-center shadow-md bg-white flex justify-between gap-4 px-4 py-1 rounded-[36px]">
                  <Image
                    loading="lazy"
                    src={"/star.png"}
                    alt="star"
                    width={20}
                    height={20}
                    className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                  />
                  <div className="text-stone-500 text-xl font-medium leading-8 tracking-wider capitalize self-stretch">
                    4.8
                  </div>
                </div>
                <div className="items-stretch self-center flex gap-2 my-auto">
                  <div className="justify-between items-center flex gap-2">
                    <Image
                      loading="lazy"
                      src={"/rupee.png"}
                      alt="rupee"
                      width={15}
                      height={20}
                      className="aspect-[0.7] object-contain object-center w-3.5 fill-pink-600 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <div className="text-pink-600 text-xl font-normal font-['Roboto'] capitalize leading-loose tracking-wide">
                      2500/
                    </div>
                  </div>
                  <div className="text-stone-500 text-xs leading-6 tracking-wide capitalize grow whitespace-nowrap mt-1.5 self-start">
                    Starting from
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch shadow-md bg-white flex w-full grow flex-col mx-auto pb-12 rounded-3xl max-md:mt-9">
              <Image
                loading="lazy"
                src={"/2.png"}
                alt="2"
                width={400}
                height={315}
                className="aspect-[1.27] object-contain object-center w-full overflow-hidden"
              />
              <div className="text-neutral-700 text-2xl font-medium leading-9 tracking-wider capitalize max-w-[285px] self-center mt-4">
                Prerana Driving School-
                <br />
                Uttarahalli
              </div>
              <div className="text-neutral-500 text-base leading-8 tracking-wider capitalize self-center whitespace-nowrap mt-1">
                uttarhalli Hobli, bengaluru
              </div>
              <div className="items-stretch flex w-full justify-between gap-5 mt-16 pr-5 max-md:mt-10">
                <div className="items-center shadow-md bg-white flex justify-between gap-4 px-4 py-1 rounded-[36px]">
                  <Image
                    loading="lazy"
                    src={"/star.png"}
                    alt="star"
                    width={20}
                    height={20}
                    className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                  />
                  <div className="text-stone-500 text-xl font-medium leading-8 tracking-wider capitalize self-stretch">
                    4.5
                  </div>
                </div>
                <div className="items-stretch self-center flex gap-2 my-auto">
                  <div className="justify-between items-center flex gap-2">
                    <Image
                      loading="lazy"
                      src={"/rupee.png"}
                      alt="rupee"
                      width={15}
                      height={20}
                      className="aspect-[0.7] object-contain object-center w-3.5 fill-pink-600 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <div className="text-pink-600 text-xl font-normal font-['Roboto'] capitalize leading-loose tracking-wide">
                      2500/
                    </div>
                  </div>
                  <div className="text-stone-500 text-xs leading-6 tracking-wide capitalize grow whitespace-nowrap mt-1.5 self-start">
                    Starting From
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-start shadow-md bg-white flex w-full grow flex-col mx-auto pb-12 rounded-3xl max-md:mt-9">
              <Image
                loading="lazy"
                src={"/3.png"}
                alt="3"
                width={400}
                height={315}
                className="aspect-[1.27] object-contain object-center w-full overflow-hidden self-stretch"
              />
              <div className="text-neutral-700 text-2xl font-medium leading-9 tracking-wider capitalize max-w-[380px] ml-5 mt-4 self-start max-md:ml-2.5">
                Riders driving School-
                <br />
                ThyagarajNagar
              </div>
              <div className="text-neutral-500 text-base leading-8 tracking-wider capitalize whitespace-nowrap ml-5 mt-1 self-start max-md:ml-2.5">
                Thyagaraj Nagar, Bengaluru
              </div>
              <div className="items-stretch self-center flex w-[368px] max-w-full justify-between gap-5 mt-16 max-md:mt-10">
                <div className="items-center shadow-md bg-white flex justify-between gap-4 px-4 py-1 rounded-[36px]">
                  <Image
                    loading="lazy"
                    src={"/star.png"}
                    alt="star"
                    width={20}
                    height={20}
                    className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                  />
                  <div className="text-stone-500 text-xl font-medium leading-8 tracking-wider capitalize self-stretch">
                    4.9
                  </div>
                </div>
                <div className="items-stretch self-center flex gap-2 my-auto">
                  <div className="justify-between items-center flex gap-2">
                    <Image
                      loading="lazy"
                      src={"/rupee.png"}
                      alt="rupee"
                      width={15}
                      height={20}
                      className="aspect-[0.75] object-contain object-center w-[15px] fill-pink-600 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <div className="text-pink-600 text-xl font-normal font-['Roboto'] capitalize leading-loose tracking-wide">
                      1500/
                    </div>
                  </div>
                  <div className="text-stone-500 text-xs leading-6 tracking-wide capitalize grow whitespace-nowrap mt-1.5 self-start">
                    Starting from
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-full max-w-[1272px] mt-16 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="items-stretch shadow-md bg-white flex w-full grow flex-col mx-auto pb-12 rounded-3xl max-md:mt-9">
              <Image
                loading="lazy"
                src={"/1.png"}
                alt="1"
                width={400}
                height={315}
                className="aspect-[1.27] object-contain object-center w-full overflow-hidden"
              />
              <div className="flex flex-col items-stretch mt-6 px-9 max-md:px-5">
                <div className="text-neutral-700 text-2xl font-medium leading-9 tracking-wider capitalize">
                  SharpDrives Driving School- kerekodi
                </div>
                <div className="text-neutral-500 text-base leading-8 tracking-wider capitalize whitespace-nowrap mt-6">
                  Kerekodi, Bengaluru
                </div>
              </div>
              <div className="items-stretch flex w-full justify-between gap-5 mt-20 pr-5 max-md:mt-10">
                <div className="items-center shadow-md bg-white flex justify-between gap-4 px-4 py-1 rounded-[36px]">
                  <Image
                    loading="lazy"
                    src={"/rupee.png"}
                    alt="rupee"
                    width={15}
                    height={20}
                    className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                  />
                  <div className="text-stone-500 text-xl font-medium leading-8 tracking-wider capitalize self-stretch">
                    4.8
                  </div>
                </div>
                <div className="items-stretch self-center flex gap-2 my-auto">
                  <div className="justify-between items-center flex gap-2">
                    <Image
                      loading="lazy"
                      src={"/star.png"}
                      alt="star"
                      width={20}
                      height={20}
                      className="aspect-[0.7] object-contain object-center w-3.5 fill-pink-600 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <div className="text-pink-600 text-xl font-normal font-['Roboto'] capitalize leading-loose tracking-wide">
                      2500/
                    </div>
                  </div>
                  <div className="text-stone-500 text-xs leading-6 tracking-wide capitalize grow whitespace-nowrap mt-1.5 self-start">
                    Starting from
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch shadow-md bg-white flex w-full grow flex-col mx-auto pb-12 rounded-3xl max-md:mt-9">
              <Image
                loading="lazy"
                src={"/2.png"}
                alt="2"
                width={400}
                height={315}
                className="aspect-[1.27] object-contain object-center w-full overflow-hidden"
              />
              <div className="text-neutral-700 text-2xl font-medium leading-9 tracking-wider capitalize max-w-[285px] self-center mt-4">
                Prerana Driving School-
                <br />
                Uttarahalli
              </div>
              <div className="text-neutral-500 text-base leading-8 tracking-wider capitalize self-center whitespace-nowrap mt-1">
                uttarhalli Hobli, bengaluru
              </div>
              <div className="items-stretch flex w-full justify-between gap-5 mt-16 pr-5 max-md:mt-10">
                <div className="items-center shadow-md bg-white flex justify-between gap-4 px-4 py-1 rounded-[36px]">
                  <Image
                    loading="lazy"
                    src={"/star.png"}
                    alt="star"
                    width={20}
                    height={20}
                    className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                  />
                  <div className="text-stone-500 text-xl font-medium leading-8 tracking-wider capitalize self-stretch">
                    4.5
                  </div>
                </div>
                <div className="items-stretch self-center flex gap-2 my-auto">
                  <div className="justify-between items-center flex gap-2">
                    <Image
                      loading="lazy"
                      src={"/rupee.png"}
                      alt="rupee"
                      width={15}
                      height={20}
                      className="aspect-[0.7] object-contain object-center w-3.5 fill-pink-600 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <div className="text-pink-600 text-xl font-normal font-['Roboto'] capitalize leading-loose tracking-wide">
                      2500/
                    </div>
                  </div>
                  <div className="text-stone-500 text-xs leading-6 tracking-wide capitalize grow whitespace-nowrap mt-1.5 self-start">
                    Starting From
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-start shadow-md bg-white flex w-full grow flex-col mx-auto pb-12 rounded-3xl max-md:mt-9">
              <Image
                loading="lazy"
                src={"/3.png"}
                alt="3"
                width={400}
                height={315}
                className="aspect-[1.27] object-contain object-center w-full overflow-hidden self-stretch"
              />
              <div className="text-neutral-700 text-2xl font-medium leading-9 tracking-wider capitalize max-w-[380px] ml-5 mt-4 self-start max-md:ml-2.5">
                Riders driving School-
                <br />
                ThyagarajNagar
              </div>
              <div className="text-neutral-500 text-base leading-8 tracking-wider capitalize whitespace-nowrap ml-5 mt-1 self-start max-md:ml-2.5">
                Thyagaraj Nagar, Bengaluru
              </div>
              <div className="items-stretch self-center flex w-[368px] max-w-full justify-between gap-5 mt-16 max-md:mt-10">
                <div className="items-center shadow-md bg-white flex justify-between gap-4 px-4 py-1 rounded-[36px]">
                  <Image
                    loading="lazy"
                    src={"/star.png"}
                    alt="star"
                    width={20}
                    height={20}
                    className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                  />
                  <div className="text-stone-500 text-xl font-medium leading-8 tracking-wider capitalize self-stretch">
                    4.9
                  </div>
                </div>
                <div className="items-stretch self-center flex gap-2 my-auto">
                  <div className="justify-between items-center flex gap-2">
                    <Image
                      loading="lazy"
                      src={"/rupee.png"}
                      alt="rupee"
                      width={15}
                      height={20}
                      className="aspect-[0.75] object-contain object-center w-[15px] fill-pink-600 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <div className="text-pink-600 text-xl font-normal font-['Roboto'] capitalize leading-loose tracking-wide">
                      1500/
                    </div>
                  </div>
                  <div className="text-stone-500 text-xs leading-6 tracking-wide capitalize grow whitespace-nowrap mt-1.5 self-start">
                    Starting from
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommendation;
