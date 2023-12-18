import Image from "next/image";

export default function Footer() {
  return (
    <div className=" items-start flex w-full max-w-[1170px] justify-center gap-5 mt-36 mb-11 max-md:max-w-full max-md:flex-wrap max-md:my-10">
      <div className="items-start flex flex-col px-5">
        <div className="items-stretch flex gap-3 self-start">
          <Image
            loading="lazy"
            src={"/logo.png"}
            alt="logo"
            width={121}
            height={35}
          />
        </div>
        <div className="text-zinc-800 text-sm leading-6 self-stretch mt-5">
          Sometimes features require a short description. This can be detailed
          description or just a short text.
        </div>
        <div className="text-zinc-800 text-lg font-semibold whitespace-nowrap mt-10 self-start">
          Download App
        </div>
        <div className="text-zinc-800 text-xs">Available on</div>
        <div className="items-stretch flex w-[130px] max-w-full gap-5 mt-2 pr-6 self-start max-md:pr-5">
          <Image
            loading="lazy"
            src={"/play.png"}
            alt="play"
            width={43}
            height={43}
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
            />
          <Image
            loading="lazy"
            src={"/app.png"}
            alt="app"
            width={43}
            height={43}
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
            />
        </div>
      </div>
      <div className="self-center my-auto px-5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[35%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col max-md:mt-10">
              <div className="text-zinc-800 text-lg font-semibold whitespace-nowrap">
                Company
              </div>
              <div className="text-neutral-500 text-sm leading-5 mt-6">
                About Us
                <br />
                <br />
                Testimonial
                <br />
                <br />
                Terms of services
                <br />
                <br />
                Privacy Policy
                <br />
                <br />
                Investor
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[32%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col max-md:mt-10">
              <div className="text-zinc-800 text-lg font-semibold whitespace-nowrap">
                Services
              </div>
              <div className="text-neutral-500 text-sm leading-5 mt-6">
                Booking
                <br />
                <br />
                Support Center
                <br />
                <br />
                Blog
                <br />
                <br />
                Review
                <br />
                <br />
                Room
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col max-md:mt-10">
              <div className="text-zinc-800 text-lg font-semibold whitespace-nowrap">
                Recourses
              </div>
              <div className="text-neutral-500 text-sm leading-5 mt-6">
                Help Center
                <br />
                <br />
                Guide
                <br />
                <br />
                Partner Network
                <br />
                <br />
                FAQ’s
                <br />
                <br />
                Documentation
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
