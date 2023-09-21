import { CARDS_WEEK } from "../data";

function Week() {
  return (
    <>
      <h1 className="text-[20px] font-grotesk text-white p-16">This Week</h1>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-[90%] gap-4 container mx-auto pb-16">
        {CARDS_WEEK.map((x, index) => (
          <div key={index}>
            <div className="bg-[#19202D] rounded-[20px] p-3">
              <h1 className="text-center font-grotesk text-white text-[18px]">{x.day}</h1>
              <img
                src={x.img}
                alt=""
                className="mx-auto w-[100px] h-[92px] mt-4"
              />
              <p className="text-center font-grotesk mt-2 text-[#7F7F7F] text-[14px]">
                {x.des}
              </p>
              <div className="flex justify-center gap-3">
                <div className="flex justify-center">
                  <p className="text-center font-grotesk mt-4 text-[18px] text-white">
                    {x.temp}
                  </p>
                  <p className="mt-4 font-grotesk text-white text-[12px]">o</p>
                </div>
                <div className="flex justify-center">
                  <p className="text-center font-grotesk mt-4 text-[18px] text-[#7F7F7F]">
                    {x.degree}
                  </p>
                  <p className="mt-4 font-grotesk text-[#7F7F7F] text-[12px]">o</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Week;
