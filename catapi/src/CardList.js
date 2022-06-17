import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import Search from "./Search";
import Loading from "./Loading";

//Segmented Button for Sorting.
import { SegmentedControl } from "segmented-control";

import { Button } from "react-bootstrap";
import { DonutSmall, StoreMallDirectory } from "@material-ui/icons";
import { fontWeight, width } from "@mui/system";
const CardList = (props) => {
  // Declarations
  const [breeds, setBreeds] = useState([]);
  const [search, setSearch] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const [postsPerPage] = useState(14);
  const [offset, setOffset] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [sort, setSort] = useState(false);

  // Fetching the breeds data using useEffect hook.

  useEffect(() => {
    axios.get(`https://api.thecatapi.com/v1/breeds`).then((res) => {
      console.log(res);
      const data = res.data;

      const indexOfLastTodo = offset * postsPerPage;
      const indexOfFirstTodo = indexOfLastTodo - postsPerPage;
      const cats = data.slice(indexOfFirstTodo, indexOfLastTodo);

      console.log(cats);

      setTimeout(() => {
        setBreeds(cats);
        setIsLoading(false);
      }, 700);

      setPageCount(Math.ceil(data.length / postsPerPage));
      setIsLoading(true);
    });
  }, [search, postsPerPage, offset]);

  const handlePageClick = (event) => {
    debugger;
    setOffset(Number(event.target.id));
    debugger;
  };

  const pageNumbers = [];
  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

  //rendering pagination

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

  const onSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const img = breeds.map((img) => img.image);
  console.log(img);
  const catImg = img.filter((cat) => {
    return cat;
  });
  console.log(catImg);

  //To get the image url to display images.
  const img1 = catImg.map((img2) => img2.url);
  console.log(img1);

  //To handle the sort.

  const handleSort = () => {
    const sortedData = [...breeds].sort((a, b) => {
      return a.first > b.first ? 1 : -1;
    });
    setBreeds(sortedData);
  };

  //To handle the search.

  const handleSearch = () => {
    debugger;
    axios.get(`https://api.thecatapi.com/v1/breeds`).then((res) => {
      console.log(res);
      const data = res.data;

      const filteredCats = data.filter((cat) => {
        return JSON.stringify(cat).toLowerCase().includes(search.toLowerCase()); //filter condition for search by breed data.
      });
      debugger;

      const catsSearch = filteredCats.slice(0, postsPerPage);
      setBreeds(catsSearch);
      debugger;
    });
  };

  //Rendering the web page.
  return (
    <div className="container">
      <div className="flex-container">
        <div class="flex-child ">
          <header id="myheader" className="header-dark">
            CAT Breeds
          </header>
        </div>
        <div class="flex-child ">
          {/* <SegmentedControl
            name="oneDisabled"
            options={[
              { label: "A-Z", value: "-1", default: true },
              { label: "Z-A", value: "1" }
            ]}
            setValue={(newValue) => {
              handleSort();
            }}
            style={{
              width: 130,
              height: 30,
              color: "#ab47bc"
            }} // purple400
          ></SegmentedControl> */}
          {/* <Button className="sort" variant="primary" onClick={handleSort}>
            ⇅ Sort
          </Button> */}
          <button
            style={{
              justifyContent: "center",
              marginTop: "52px",
              marginRight: "-150px",
              color: "#ab47bc",
              fontWeight: 900,
              background: "#588ced;"
            }}
            onClick={handleSort}
          >
            ⇅ Sort
          </button>
        </div>
      </div>

      <div>
        <Search searchChange={onSearchChange} searchClick={handleSearch} />
      </div>

      {!search && isLoading ? (
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
        {renderPageNumbers}
      </ul>
    </div>
  );
};

export default CardList;
