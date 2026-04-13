import React from "react";
import Doctor from "./assets/Doctor.jpg";
import search from "./assets/search.svg";
import Rating from "./assets/Rating.svg";

export default function HeroSection() {
  return (
    <div>
      <section className=" w-full flex justify-center mt-9">

        <div className="container flex justify-between items-center ">
          
          <div className="right flex justify-center items-center h-full">

            <div className="flex flex-col gap-6 p-3  ">

              
              <p className="bg-[#E7F9ED] text-[10px] text-green-500 font-bold w-[170px] p-1.5 felx text-center rounded-2xl">
                Trusted by 10 Lakh+ Patients
              </p>

              <h1 className=" text-[33px] font-bold w-9/12 leading-11">
                Book Doctor{" "}
                <span className="text-[#0da2e7] text-[38px] tracking-wider">Appointments</span>{" "}
                Instantly
              </h1>

              <p className=" w-10/12 text-[17px] text-[#627384]">
                Find trusted doctors, clinics, and hospitals near you. Online &
                in-clinic consultations available 24/7.
              </p>

              <img className="pr-8" src={search}></img>

              <div className="btn flex gap-2">
                <button className="bg-[#0da2e7] p-2 rounded-2xl text-white text-[13px] font-medium w-[120px]">
                  Search Doctor
                </button>
                <button className=" w-[120px] bg-[#E7F9ED] text-green-500 p-2 rounded-2xl text-[13px] font-medium ">
                  Consult Online
                </button>
              </div>

              <img src={Rating}></img>
            
            </div>
          </div>

          <img className="w-6/12 rounded-3xl shadow-black/45 shadow-2xl" src={Doctor}></img>
        </div>
      </section>
    </div>
  );
}
