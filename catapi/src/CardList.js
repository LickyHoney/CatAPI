import axios from "axios";
import React, { useState, useEffect } from "react";

const CardList = (props) => {
  // Declarations
  const [breeds, setBreeds] = useState([]);

  // Fetching the breeds data using useEffect hook.

  useEffect(() => {
    axios.get(`https://api.thecatapi.com/v1/breeds`).then((res) => {
      console.log(res);
      const data = res.data;

      setBreeds(data);
    });
  }, []);

  //Rendering the web page.

  return (
    <div className="tc">
      <header id="myheader" className="header-dark">
        <h1 className="w3-sans-serif">Cat Breeds</h1>
      </header>
      <div className="flex">
        {breeds.map((breed, i) => {
          return (
            <>
              <ul key={breed.id}>
                <li>{breed.name}</li>
              </ul>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CardList;
