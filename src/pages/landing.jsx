import { useState } from "react";
import Sidebar from "../components/sidebar";
import Today from "../components/today";



function Landing() {

  const [search, setSearch] = useState("");
const [weather, setWeather] = useState({})

  const api = {
    key: "1faf9db5d1fe3858efe66d9b6b51acf0",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const handleSubmit = (event) => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    
    .then((result) => {
      setWeather(result)
      console.log(result)
    })
    event.preventDefault()
    console.log("......>>", search)
  };
 
  const handleChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-8 ">
        <div className="col-span-2">
          <Sidebar  weather={weather} search={search} handleChangeSearch={handleChangeSearch} handleSubmit={handleSubmit}/>
        </div>
        <div className="col-span-6 bg-[#232B39]">
          <Today  weather={weather}/>
        </div>
      </div>
    </>
  );
}

export default Landing;
