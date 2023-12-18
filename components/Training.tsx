import Image from "next/image";
import React from "react";

function Training() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="items-stretch flex w-[441px] max-w-full justify-between gap-5 ml-52 mt-36 self-start max-md:flex-wrap max-md:justify-center max-md:mt-10">
        <div className="text-black text-2xl font-semibold leading-8">All</div>
        <div className="text-black text-2xl font-semibold leading-8">
          Training
        </div>
        <div className="text-black text-2xl font-semibold leading-8">
          RTO & Rules
        </div>
      </div>
      <div className="bg-rose-500 flex w-[167px] shrink-0 h-2.5 flex-col ml-28 mt-1.5 rounded-[40px_0px_0px_40px] self-start max-md:ml-2.5" />
      <div className="self-center w-full max-w-[1276px] mt-12 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="grow max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                  <div className="items-stretch flex grow flex-col max-md:mt-10">
                    <Image
                      loading="lazy"
                      src={"/Bassick.png"}
                      alt="Bassick"
                      width={274}
                      height={157}
                      className="aspect-[1.75] object-contain object-center w-full shadow-sm overflow-hidden"
                    />
                    <div className="bg-white flex flex-col items-stretch px-3.5 py-5">
                      <div className="text-black text-2xl font-bold leading-8">
                        Learn Basics
                      </div>
                      <div className="text-neutral-500 text-base leading-6 mt-3">
                        Learn about basics of car driving. Understand the
                        combination of clutch, brake & accelerator
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-stretch flex grow flex-col max-md:mt-10">
                    <Image
                      loading="lazy"
                      src={"/Bassick2.png"}
                      alt="Bassick2"
                      width={274}
                      height={157}
                      className="aspect-[1.75] object-contain object-center w-full overflow-hidden"
                    />
                    <div className="bg-white flex flex-col items-stretch px-3.5 py-5">
                      <div className="text-black text-2xl font-bold leading-8">
                        Learn Basics - 2
                      </div>
                      <div className="text-neutral-500 text-base leading-6 mt-3">
                        Learn about basics of car driving. Understand the
                        combination of clutch, brake & accelerator
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="grow max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                  <div className="items-stretch flex grow flex-col max-md:mt-10">
                    <Image
                      loading="lazy"
                      src={"/Bassick3.png"}
                      alt="Bassick3"
                      width={274}
                      height={157}
                      className="aspect-[1.75] object-contain object-center w-full overflow-hidden"
                    />
                    <div className="bg-white flex flex-col items-stretch px-3.5 py-5">
                      <div className="text-black text-2xl font-bold leading-8">
                        Road Safety{" "}
                      </div>
                      <div className="text-neutral-500 text-base leading-6 mt-3">
                        Learn about basics of car driving. Understand the
                        combination of clutch, brake & accelerator
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-stretch flex grow flex-col max-md:mt-10">
                    <Image
                      loading="lazy"
                      src={"/Bassick4.png"}
                      alt="Bassick4"
                      width={274}
                      height={157}
                      className="aspect-[1.75] object-contain object-center w-full overflow-hidden"
                    />
                    <div className="bg-white flex flex-col items-stretch px-3.5 py-5">
                      <div className="text-black text-2xl font-bold leading-8">
                        Traffic Rules
                      </div>
                      <div className="text-neutral-500 text-base leading-6 mt-3">
                        Learn about basics of car driving. Understand the
                        combination of clutch, brake & accelerator
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items-stretch shadow-md bg-white self-center flex w-[977px] max-w-full flex-col mt-52 px-20 py-12 rounded-[33px] border-[3px] border-solid border-pink-600 max-md:mt-10 max-md:px-5">
        <div className="text-neutral-800 text-center text-5xl font-semibold leading-[66px] tracking-widest capitalize max-w-[777px] mt-4 mx-5 max-md:max-w-full max-md:mr-2.5">
          Prepare for Learner’s License Test
        </div>
        <div className="text-stone-500 text-center text-xl leading-10 tracking-wider uppercase self-center max-w-[717px] mt-8 max-md:max-w-full">
          Curated videos for you to easily pass learner’s license test. Watch
          now and pass the test with utmost ease.{" "}
        </div>
        <div className="text-white text-xl font-bold leading-10 tracking-wider capitalize whitespace-nowrap justify-center items-stretch shadow-md bg-[linear-gradient(50deg,#FF006E_-0.02%,#FFBE0B_141.03%)] self-center mt-8 mb-4 px-9 py-3.5 rounded-[40px] max-md:px-5">
          Watch Now
        </div>
      </div>
    </div>
  );
}

export default Training;
