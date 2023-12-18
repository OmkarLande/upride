import Image from "next/image";
import React from "react";

function Service() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" self-center flex w-full max-w-[1037px] flex-col mt-36 px-16 max-md:max-w-full max-md:mt-10 max-md:px-5 justify-center items-center">
        <div className="text-rose-500 text-center text-base leading-7 tracking-[4.48px] self-center whitespace-nowrap">
          OUR SERVICES
        </div>
        <div className="text-black text-center text-4xl font-semibold leading-10 self-center whitespace-nowrap mt-4">
          How can we help you?
        </div>
        <div className="self-center w-[794px] max-w-full mt-28 max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[21%] max-md:w-full max-md:ml-0">
              <div className="items-center flex grow flex-col max-md:mt-10">
                <Image
                  loading="lazy"
                  src={"/driving.png"}
                  alt="driving"
                  width={88}
                  height={88}
                  className="aspect-square object-contain object-center w-[88px] overflow-hidden"
                />
                <div className="text-red-500 text-center text-base font-semibold leading-7 self-stretch mt-5">
                  Driving
                  <br />
                  Schools
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[22%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-center flex grow flex-col mt-1.5 max-md:mt-10">
                <Image
                  loading="lazy"
                  src={"/instructor.png"}
                  alt="instructor"
                  width={88}
                  height={88}
                  className="aspect-[1.12] object-contain object-center w-[93px] overflow-hidden"
                />
                <div className="text-neutral-600 text-center text-base font-semibold leading-7 self-stretch mt-5">
                  Book Driving
                  <br />
                  Instructors
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[35%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-center flex flex-col max-md:mt-10">
                <Image
                  loading="lazy"
                  src={"/consult.png"}
                  alt="consult"
                  width={88}
                  height={88}
                  className="aspect-square object-contain object-center w-20 overflow-hidden max-w-full"
                />
                <div className="text-neutral-600 text-center text-base font-semibold leading-7 self-stretch mt-6">
                  International Driver’s <br />
                  License Consultation
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[22%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-center flex grow flex-col max-md:mt-10">
                <Image
                  loading="lazy"
                  src={"/carwash.png"}
                  alt="wash"
                  width={88}
                  height={88}
                  className="aspect-square object-contain object-center w-20 overflow-hidden max-w-full"
                />
                <div className="text-neutral-600 text-center text-base font-semibold leading-7 self-stretch mt-6">
                  Car/Bike Wash
                  <br />
                  Near Me{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[rgba(78,78,78,0.10)] shrink-0 w-[891px] h-0.5 relative ">
          <div className="bg-rose-500 mt-12 w-[212px] h-0.5 absolute left-0 top-0"></div>
        </div>
        <div className="mt-28 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[44%] max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col my-auto max-md:mt-10">
                <div className="text-black text-4xl font-bold leading-10">
                  Top Rated Driving
                  <br />
                  Schools Nearby
                </div>
                <div className="text-neutral-600 text-base leading-7 mt-8">
                  Discover the convenience of finding highly-rated driving
                  schools near you with Upride. Whether you're eager to get your
                  driver's license or seeking professional training to sharpen
                  your driving skills, Upride simplifies your search. Just click
                  on &quot;near me&quot; in our search bar and instantly connect
                  with the best driving schools near you.
                </div>
                <div className="text-red-500 text-base font-semibold leading-7 mt-8">
                  Book Now
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[56%] ml-5 max-md:w-full max-md:ml-0">
              <Image
                loading="lazy"
                src={"/sign.png"}
                alt="service"
                width={481}
                height={423}
                className="aspect-[1.14] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-black text-center text-4xl font-medium leading-10 self-center max-w-[944px] mt-32 max-md:max-w-full max-md:mt-10">
        <span className="font-medium">Why Choose </span>
        <span className="font-bold">Upride</span>
        <span className="font-medium">
          {" "}
          as your choice <br />
          for a comprehensive driving learning experience?
        </span>
      </div>
      <div className="self-center w-full max-w-screen-xl mt-20 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[27%] max-md:w-full max-md:ml-0">
            <div className="items-center flex grow flex-col pt-3 max-md:mt-10">
              <div className="text-black text-center text-5xl font-bold leading-[58px] max-w-[270px] max-md:text-4xl max-md:leading-[54px]">
                <span className="text-white bg-rose-500 rounded-lg">
                  1000+
                  <br />
                </span>
                <span className="text-black">Trained</span>
              </div>
              <div className="text-neutral-600 text-center text-base leading-7 self-stretch whitespace-nowrap mt-7">
                through Upride
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[22%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-center flex grow flex-col pt-3 max-md:mt-10">
              <div className="text-black text-center text-5xl font-bold leading-[58px] max-md:text-4xl max-md:leading-[54px]">
                <span className="text-white bg-teal-400 rounded-lg ">
                  99%
                  <br />
                </span>
                <span className="text-black">Rating</span>
              </div>
              <div className="text-neutral-600 text-center text-base leading-7 self-stretch whitespace-nowrap mt-3.5">
                Customer satisfaction
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col pt-3 px-5 max-md:mt-10">
              <div className="text-black text-center text-5xl font-bold leading-[58px] max-md:text-4xl max-md:leading-[54px]">
                <span className="text-white bg-amber-300 rounded-lg">
                  60
                  <br />
                </span>
                <span className="text-black">Minutes</span>
              </div>
              <div className="text-neutral-600 text-center text-base leading-7 whitespace-nowrap mt-7">
                per Session
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-center flex grow flex-col pt-3 max-md:mt-10">
              <div className="text-black text-center text-5xl font-bold leading-[58px] max-w-[261px] max-md:text-4xl max-md:leading-[54px]">
                <span className="text-white bg-rose-500 rounded-lg">
                  150+
                  <br />
                </span>
                <span className="text-black">Reviews</span>
              </div>
              <div className="text-neutral-600 text-center text-base leading-7 self-stretch whitespace-nowrap mt-7">
                Five-star rated in Google
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
