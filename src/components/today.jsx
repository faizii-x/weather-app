import Highlight from "./highlight";
import Week from "./week";
import Slide from "./slide";

function Today() {
  return (
    <>
      <div className="flex justify-between p-10 lg:p-0 w-[90%] mx-auto mt-16">
        <h1 className="text-[20px] font-grotesk text-white">Today</h1>
        <div className="flex justify-center back-div">
          <p className="text-[12px] text-white -mt-4">o</p>
          <p className="text-[22px] font-poppins text-white ">C</p>
        </div>
      </div>

      <Slide  />
      <Highlight />
      <Week />
    </>
  );
}

export default Today;
