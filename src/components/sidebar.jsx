import Grayline from "../../src/assets/png/grayline.png";
import Symbol from "../../src/assets/svg/Symbol.svg";
import Locate from "../../src/assets/svg/locate.svg";
import Line from "../../src/assets/svg/line.svg";
import "../App.css";

function Sidebar( {weather, search, handleSubmit, handleChangeSearch}) {


  return (
    <>
      <aside className="bg-[#19202D] h-[100%] p-10 sm:p-10">
        <form onSubmit={handleSubmit}>
          <div className="relative ">
            <input
              type="text"
              value={search}
              onChange={ handleChangeSearch}
              placeholder="Search For Places.."
              className="text-[17px] text-[#8F94AF] pl-16 font-poppins font-medium rounded-md bg-[#232B39] w-[100%] h-[45px] p-5 "
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-[#8F94AF] absolute top-3 left-0 ml-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </form>
        {/* ................... */}

        <img src={Grayline} alt="" className="mt-10 block md:mx-auto" />
        <div className="flex justify-center lg:justify-start ">
          <h1 className="text-[80px] lg:text-[60px] xl:text-[80px] text-white font-poppins font-light">
            {weather?.main?.temp? weather.main.temp: "22"}
          </h1>
          <p className="text-[32px] font-medium text-white ">o</p>
          <p className="text-[56px] lg:text-[62px] xl:text-[72px] font-poppins font-light text-white mt-6 lg:mt-0 xl:mt-2">
            C
          </p>
        </div>
        <div className="flex justify-center lg:justify-start -mt-12">
          <p className="text-[#7F7F7F] font-grotesk font-light text-[22px] mt-10">
            Feels Like {weather?.main?.feels_like? weather.main.feels_like: "17"}
          </p>
          {""}
          <p className="text-[12px] text-[#7F7F7F] mt-10"> o </p>
          <p className="text-[18px] text-[#7F7F7F] mt-[43px]"> C</p>
        </div>

        <div className="flex justify-center lg:justify-start gap-3 mt-4 ">
          <img src={Symbol} alt="" className="w-[70px] h-[50px]" />
          <p className="text-[24px] text-white font-grotesk font-light mt-2">
            Mist
          </p>
        </div>
        <img src={Line} alt="" className="w-[100%] h-[4px] mt-16" />
        <div className="flex justify-center lg:justify-start">
          <p className="text-[30px] text-white font-grotesk font-normal mt-6">
            Sunday, <span className=" text-[#7F7F7F]">{weather?.timezone? weather.timezone : "1:34 PM"}</span>{" "}
          </p>
        </div>
        <div className="flex justify-center lg:justify-start gap-2 mt-6">
          <img src={Locate} alt="" className="w-[25px]" />
          <p className="text-[24px] font-grotesk text-white">{weather.name? weather.name: "Pakistan"}</p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
