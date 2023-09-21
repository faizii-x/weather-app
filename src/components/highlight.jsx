import Humidity from "../../src/assets/png/humidity.png";
import Windnight from "../../src/assets/png/windnight.png";
import Sunrise from "../../src/assets/png/sunrise.png";
import Sunset from "../../src/assets/png/sunset.png";
import Pressure from "../../src/assets/png/pressure.png";
import Uv from "../../src/assets/png/uv.png";
import Clouds from "../../src/assets/png/clouds.png";

function Highlight() {
  return (
    <>
      <h1 className="text-[20px] font-grotesk text-white p-16">Today's Highlights</h1>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-[90%] gap-4 container mx-auto">
        <div className="col-span-1">
          <div className="bg-[#19202D] rounded-[20px] p-3">
            <h1 className="text-center font-grotesk text-white text-[18px]">Humidity</h1>
            <img src={Humidity} alt="" className="mx-auto w-[100px] h-[92px] mt-4" />
            <div className="flex justify-center gap-2">
            <p className="text-center font-grotesk mt-4 text-[30px] text-white">94</p>
            <p className="mt-8 font-grotesk text-[#7F7F7F] text-[16px]">%</p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
        <div className="bg-[#19202D] rounded-[20px] p-3">
            <h1 className="text-center font-grotesk text-white text-[18px]">Wind Speed</h1>
            <img src={Windnight} alt="" className="mx-auto w-[100px] h-[92px] mt-4" />
            <div className="flex justify-center gap-2">
            <p className="text-center font-grotesk mt-4 text-[30px] text-white">1.5</p>
            <p className="mt-8 font-grotesk text-[#7F7F7F] text-[16px]">m/s</p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-[#19202D] rounded-[20px] p-3">
            <div className="flex justify-center gap-3 mt-[36px] sm:mt-6">
              <img src={Sunrise} alt="" className="w-[50px] h-[50px]" />
              <div className="grid justify-start">
              <p className=" text-[14px] sm:text-[18px] font-grotesk text-white mt-2">5:52 AM</p>
              <p className="text-[#7F7F7F] font-grotesk text-[16px] -mt-1">Sunrise</p>
              </div>
            </div>
            <div className="flex justify-center gap-3 mt-6 pb-9 ">
              <img src={Sunset} alt="" className="w-[50px] h-[50px]" />
              <div className="grid justify-start">
              <p className="text-[14px] sm:text-[18px] font-grotesk text-white mt-2">6:56 AM</p>
              <p className="text-[#7F7F7F] font-grotesk text-[16px] -mt-1">Sunset</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1">
        <div className="bg-[#19202D] rounded-[20px] p-3">
            <h1 className="text-center font-grotesk text-white text-[18px]">Clouds</h1>
            <img src={Clouds} alt="" className="mx-auto w-[100px] h-[92px] mt-4" />
            <div className="flex justify-center gap-2">
            <p className="text-center font-grotesk mt-4 text-[30px] text-white">20</p>
            <p className="mt-8 font-grotesk text-[#7F7F7F] text-[16px]">%</p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
        <div className="bg-[#19202D] rounded-[20px] p-3">
            <h1 className="text-center font-grotesk text-white text-[18px]">UV Index</h1>
            <img src={Uv} alt="" className="mx-auto w-[100px] h-[92px] mt-4" />
            <div className="flex justify-center gap-2">
            <p className="text-center font-grotesk mt-4 text-[30px] text-white">0</p>
            <p className="mt-8 font-grotesk text-[#7F7F7F] text-[16px]"></p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
        <div className="bg-[#19202D] rounded-[20px] p-3">
            <h1 className="text-center font-grotesk text-white text-[18px]">Pressure</h1>
            <img src={Pressure} alt="" className="mx-auto w-[90px] h-[92px] mt-4" />
            <div className="flex justify-center gap-2">
            <p className="text-center font-grotesk mt-4 text-[30px] text-white">1005</p>
            <p className="mt-8 font-grotesk text-[#7F7F7F] text-[16px]">hpa</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Highlight;
