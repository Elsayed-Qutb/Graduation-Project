import Bookcon from "./assets/Bookcon.svg";
import Bookcon1 from "./assets/Bookcon1.svg";

export default function BookAppoint() {
  return (
    <div>
      <section className="flex justify-center mt-13">
        <div className="container flex justify-center">
          <div className="w-8/12 flex flex-col items-center gap-5">
            <div className="upper flex flex-col items-center">
              <img className="mb-10" src={Bookcon1}></img>
              <h1 className="text-[25px] font-semibold mb-1">
                Book Your Appointment
              </h1>
              <p className="text-[13px] text-gray-400/70 mb-8">
                Quick, easy, and secure booking. Your appointment is just a few
                clicks away.
              </p>
              <img className="w-7/12 mb-3" src={Bookcon}></img>
            </div>

            <div className="lower bg-white w-10/12 flex flex-col gap-4 rounded-2xl border-1 border-gray-300 p-3 shadow-2xl shadow-black/20">
              <h1 className="font-semibold">Select Date</h1>
              <p className="text-[13px]">Consultation Type</p>

              <div className="btn w-full flex gap-2 ">
                <div className="left w-1/2 flex flex-col items-center p-1 rounded-2xl border-1 border-gray-300 ">
                  <h1 className="text-[14px] font-semibold">In-Clinic Visit</h1>
                  <p className="text-[12px] text-gray-500">Visit doctor at clinic</p>
                </div>
                <div className="left w-1/2 flex flex-col items-center p-1 rounded-2xl border-1 border-gray-300">
                  <h1 className="text-[14px] font-semibold">Video Consultation</h1>
                  <p className="text-[12px] text-gray-500">Consult from home</p>
                </div>
              </div>

              <h1 className="text-[13px]">Select Date</h1>

              <div className="btn w-full flex gap-2 ">
                <div className="left w-1/2 flex flex-col items-center justify-center rounded-2xl border-1 border-gray-300 p-3  ">
                  <h1 className="text-[12px] text-gray-500">Today</h1>
                  <p className="text-[13px] font-bold ">21 jan</p>
                  <p className="text-[10px] text-green-500">8 slot</p>
                </div>
                <div className="left w-1/2 flex flex-col items-center justify-center rounded-2xl border-1 border-gray-300 p-3 ">
                  <h1 className="text-[12px] text-gray-500">Tomorrow</h1>
                  <p className="text-[13px] font-bold ">22 jan</p>
                  <p className="text-[10px] text-green-500">12 slot</p>
                </div>
                <div className="left w-1/2 flex flex-col items-center justify-center rounded-2xl border-1 border-gray-300 p-3">
                  <h1 className="text-[12px] text-gray-500">Wed</h1>
                  <p className="text-[13px] font-bold ">23 jan</p>
                  <p className="text-[10px] text-green-500">15 slot</p>
                </div>
                <div className="left w-1/2 flex flex-col items-center justify-center rounded-2xl border-1 border-gray-300 p-3 ">
                  <h1 className="text-[12px] text-gray-500">Thu</h1>
                  <p className="text-[13px] font-bold ">24 jan</p>
                  <p className="text-[10px] text-green-500">6 slot</p>
                </div>
                <div className="left w-1/2 flex flex-col items-center justify-center rounded-2xl border-1 border-gray-300 p-3 ">
                  <h1 className="text-[12px] text-gray-500">Fri</h1>
                  <p className="text-[13px] font-bold ">25 jan</p>
                  <p className="text-[10px] text-green-500"> 9 slot</p>
                </div>
              </div>
              <button className="bg-blue-400 p-2 rounded-[10px] text-white text-[14px]">Continue</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
