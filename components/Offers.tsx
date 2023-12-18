import Image from "next/image";
import React from "react";

function Offers() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-red-500 text-center text-lg font-semibold whitespace-nowrap ml-32 mt-36 self-start max-md:ml-2.5 max-md:mt-10">
        Our Offers
      </div>
      <div className="bg-red-500 w-[54px] shrink-0 h-0.5 ml-36 mt-3.5 self-start max-md:ml-2.5" />
      <div className="text-neutral-900 text-5xl font-semibold self-center w-[1218px] max-w-[1265px] mt-6 max-md:max-w-full max-md:text-4xl">
        Best offers this month
      </div>
      <div className="items-stretch self-center flex w-full max-w-[1265px] justify-between gap-5 mt-9 px-5 max-md:max-w-full max-md:flex-wrap">
        <div className="text-zinc-700 text-sm leading-6 tracking-normal grow shrink basis-auto max-md:max-w-full">
          Detailed Description of these offers here.
        </div>
        <div className="text-rose-500 text-center text-sm font-semibold leading-5 self-start">
          View All
        </div>
      </div>
      <div className="self-center w-full max-w-[1265px] mt-20 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col justify-center max-md:max-w-full max-md:mt-10">
              <div className="shadow-2xl bg-rose-500 pl-8 pr-px py-px rounded-xl max-md:max-w-full max-md:pl-5">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0">
                    <div className="items-stretch flex flex-col my-auto max-md:mt-10">
                      <div className="text-white text-3xl font-semibold">
                        Get 500 Discount
                      </div>
                      <div className="text-white text-lg leading-6 tracking-normal mt-1.5">
                        on minimum shopping of Rs. 999.
                      </div>
                      <div className="text-rose-500 text-center text-sm font-semibold leading-5 whitespace-nowrap bg-white justify-center items-stretch mt-5 px-12 py-2.5 rounded-3xl max-md:px-5">
                        Redeem Now
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[61%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="bg-white flex w-[300px] shrink-0 max-w-full h-[300px] flex-col mx-auto rounded-none max-md:mt-10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col justify-center max-md:max-w-full max-md:mt-10">
              <div className="shadow-2xl bg-rose-500 pl-8 pr-px py-px rounded-xl max-md:max-w-full max-md:pl-5">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0">
                    <div className="items-stretch flex flex-col my-auto max-md:mt-10">
                      <div className="text-white text-3xl font-semibold">
                        Get 500 Discount
                      </div>
                      <div className="text-white text-lg leading-6 tracking-normal mt-1.5">
                        on minimum shopping of Rs. 999.
                      </div>
                      <div className="text-rose-500 text-center text-sm font-semibold leading-5 whitespace-nowrap bg-white justify-center items-stretch mt-5 px-12 py-2.5 rounded-3xl max-md:px-5">
                        Redeem Now
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[61%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="bg-white flex w-[300px] shrink-0 max-w-full h-[300px] flex-col mx-auto rounded-none max-md:mt-10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-zinc-800 text-center text-5xl font-semibold leading-10 max-w-[738px] self-center mt-40 max-md:max-w-full max-md:text-4xl max-md:leading-10 max-md:mt-10">
        Personalized Learning Programs
      </div>
      <div className="justify-center self-center w-full max-w-[1128px] mt-14 py-2.5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[59%] max-md:w-full max-md:ml-0">
            <Image
              loading="lazy"
              src="/Boy.png"
              alt="Boy"
              width={506}
              height={506}
              className="aspect-[0.99] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </div>
          <div className="flex flex-col items-stretch w-[41%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col my-auto px-5 max-md:mt-10">
              <div className="text-black text-5xl font-semibold leading-[58px] max-md:text-4xl max-md:leading-[54px]">
                Easy, reliable,
                <br />
                and flexible.
              </div>
              <div className="text-neutral-600 text-base leading-7 mt-7">
                At Upride, we know that every learner is unique, and so are
                their needs when it comes to driving education. Our commitment
                to personalized learning goes beyond the conventional, offering
                tailor-made programs designed to cater to individual preferences
                .
              </div>
              <div className="text-red-500 text-base font-bold leading-7 mt-7">
                Learn More
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
