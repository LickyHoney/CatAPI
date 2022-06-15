import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import Search from "./Search";
import Loading from "./Loading";

import { Button } from "react-bootstrap";
const CardList = (props) => {
  // Declarations
  const [breeds, setBreeds] = useState([]);
  const [search, setSearch] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const [postsPerPage] = useState(10);
  const [offset, setOffset] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Fetching the breeds data using useEffect hook.

  useEffect(() => {
    axios.get(`https://api.thecatapi.com/v1/breeds`).then((res) => {
      console.log(res);
      const data = res.data;

      const indexOfLastTodo = offset * postsPerPage;
      const indexOfFirstTodo = indexOfLastTodo - postsPerPage;
      const cats = data.slice(indexOfFirstTodo, indexOfLastTodo);
      //const cats = data.slice(offset - 1, offset - 1 + postsPerPage);
      const filteredCats = cats.filter((cat) => {
        return cat.name.toLowerCase().includes(search.toLowerCase());
      });

      console.log(cats);

      setTimeout(() => {
        setBreeds(filteredCats);
        setIsLoading(false);
      }, 700);

      setPageCount(Math.ceil(data.length / postsPerPage));
      setIsLoading(true);
    });
  }, [search, postsPerPage, offset]);

  const handlePageClick = (event) => {
    setOffset(Number(event.target.id));
  };

  const pageNumbers = [];
  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li className="page-link">
        <button
          className={`${offset === number ? "text-success" : ""} page-no-m`}
          key={number}
          id={number}
          onClick={handlePageClick}
        >
          {number}
        </button>
      </li>
    );
  });

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

  const handleSort = () => {
    const sortedData = [...breeds].sort((a, b) => {
      return a.first > b.first ? 1 : -1;
    });
    setBreeds(sortedData);
  };

  return (
    <div className="container">
      <header id="myheader" className="header-dark">
        <h1 className="w3-sans-serif">Cat Breeds</h1>
      </header>

      <div className="flex">
        <Search searchChange={onSearchChange} />
        <div>
          <Button className="sort" variant="primary" onClick={handleSort}>
            Sort
          </Button>
        </div>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex">
          {breeds.map((breed, i) => {
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
      <ul id="page-numbers" className="pagination">
        <li className="page-link">
          <button className="text-success">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </button>
        </li>
        {renderPageNumbers}
        <li className="page-link">
          <button className="text-success">
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CardList;
