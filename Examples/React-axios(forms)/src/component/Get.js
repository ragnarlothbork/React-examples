import React, { useState, useEffect } from "react";
import axios from "axios";

export const Get = () => {
  const [country, setcountry] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        setcountry(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>list of countries</h1>
      {country.map((country) => (
        <div key={country.name}>
          {country.name} - {country.capital}
        </div>
      ))}
    </div>
  );
};
