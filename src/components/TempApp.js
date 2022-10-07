import "../App.css";
import { useEffect, useState } from "react";

const TempApp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=564e686eefc48a2301458b6ff57ed03e`;
      const response = await fetch(url);

      const resJson = await response.json();
      console.log(response);
      console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {!city ? (
          <>
            <p className="errorMsg">No Data Found</p>

            <i class="fa-solid error fa-triangle-exclamation fa-fade"></i>
          </>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fa-solid fa-user"></i>
                {` ${search}`}
              </h2>
              <h1 className="temp">{city.temp} °C </h1>

              <div className="tempmin_max">
                Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel
              </div>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default TempApp;
