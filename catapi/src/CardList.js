import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import Search from "./Search";
import Loading from "./Loading";
const CardList = (props) => {
  // Declarations
  const [breeds, setBreeds] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Fetching the breeds data using useEffect hook.

  useEffect(() => {
    axios.get(`https://api.thecatapi.com/v1/breeds`).then((res) => {
      console.log(res);
      const data = res.data;
      const filteredCats = data.filter((cat) => {
        return cat.name.toLowerCase().includes(search.toLowerCase());
      });

      setBreeds(filteredCats);
    });
  }, [search]);

  //Rendering the web page.

  const onSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const img = breeds.map((img) => img.image);
  console.log(img);
  const catImg = img.filter((cat) => {
    return cat;
  });
  console.log(catImg);
  const img1 = catImg.map((img2) => img2.url);
  console.log(img1);

  return (
    <div className="tc">
      <header id="myheader" className="header-dark">
        <h1 className="w3-sans-serif">Cat Breeds</h1>
      </header>
      <div className="flex">
        <Search searchChange={onSearchChange} />
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex">
          {breeds.map((cat, i) => {
            return (
              <>
                <Card
                  key={breeds[i].id}
                  id={breeds[i].id}
                  image={img1[i]}
                  name={breeds[i].name}
                  description={breeds[i].description}
                />
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CardList;
