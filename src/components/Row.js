import React, { useState, useEffect } from "react";

import axios from "axios";
import Movie from "./Movie";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    let slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  //styles
  const styleRightArrowIcon =
    "bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block";
  const styleLeftArrowIcon =
    "bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block";
  const styleSlider =
    "w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative";

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className={styleLeftArrowIcon}
          size={40}
        />
        <div className={styleSlider} id={"slider" + rowID}>
          {movies.map((item, i) => {
            return <Movie key={i} item={item} />;
          })}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className={styleRightArrowIcon}
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
