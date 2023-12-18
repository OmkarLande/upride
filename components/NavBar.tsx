"use client";

import Image from "next/image";
import React from "react";

function NavBar() {
  return (
    <>
      <div className="items-center flex w-full justify-between gap-5 pl-12 pr-20 pt-2.5 pb-4 max-md:max-w-full max-md:flex-wrap max-md:px-5">
        <div className="items-stretch flex justify-between gap-6 min-[500px]:gap-4 max-md:max-w-full max-md:flex-wrap">
          <Image
            loading="lazy"
            src="/logo.png"
            alt="logo"
            className="aspect-[3.65] object-contain object-center w-[146px] overflow-hidden shrink-0 max-w-full"
            width={146}
            height={40}
          /> 
          <div className="items-stretch self-center flex gap-2.5 my-auto">
            <Image
              className="aspect-[0.74] object-contain object-center w-3.5 overflow-hidden shrink-0 max-w-full"
              loading="lazy"
              src="/number.png"
              alt="phone"
              width={14}
              height={19}
            /> 
            <div className="justify-center text-indigo-950 text-sm font-bold leading-[64px] uppercase grow whitespace-nowrap self-start">
              <span className="font-semibold text-zinc-400">Contact us :</span>
              <span className="font-bold text-zinc-400"> </span>
              <span className="font-bold text-indigo-950">+91 9211420786 </span>
            </div>
          </div>
        </div>
        <div className="items-center flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="justify-between flex gap-5 my-auto items-start">
            <div className="text-zinc-800 text-sm font-medium">
              Download App
            </div>
            <div className="text-neutral-900 text-sm font-medium leading-5">
              Are you a Driving School?
            </div>
          </div>
          <div className="items-center self-stretch flex justify-between gap-5 rounded-3xl shadow border-2 border-black border-opacity-10 ">
            <Image
              loading="lazy" 
              src="/notification.png"
              alt="notification"
              width={25}
              height={21}
              className="aspect-[1.25] object-contain object-center w-[25px] overflow-hidden shrink-0 max-w-full my-auto"
            />
            <div className="items-stretch border shadow-sm bg-white self-stretch flex gap-3 p-1 rounded-[50px] border-solid border-black border-opacity-10 max-md:justify-center">
              <Image
                loading="lazy"
                src={"/profilepic.png"}
                alt="profile-pic"
                width={32}
                height={32}
                className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full rounded-[50%]"
              />
              <div className="text-black text-center text-base leading-5 self-center my-auto">
                Hello Rahul!
              </div>
              <Image
                loading="lazy"
                src={"/wavinghand.png"}
                alt="wavinghand"
                width={14}
                height={14}
                className="aspect-square object-contain object-center w-3.5 overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-auto h-7 flex-wrap max-md:h-auto max-md:gap-2 max-md:py-0  flex flex-row justify-between m-0 p-0 bg-rose-500 items-center  text-white text-xs font-normal font-['Roboto'] ">
        <div>Kerekodi</div>
        <div>Banaswadi</div>
        <div>Kormangala</div>
        <div>MG Road</div>
        <div>JP Nagar</div>
        <div>Jayanagar</div>
        <div>Vijayanagar</div>
        <div>Yahlanka</div>
        <div>Yeshwanthpur</div>
        <div>Rajajinagar</div>
        <div>Rajarajeshwari Nagar</div>
      </div>
    </>
  );
}

export default NavBar;
