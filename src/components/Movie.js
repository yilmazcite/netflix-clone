import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
const Movie = ({ item }) => {
  const [like, setLike] = useState(false);

  //styles
  const styleHeartIcons = "absolute top-4 left-4 text-gray-300";
  const styleMovieTitle =
    "white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center";
  const styleMovieOverlay =
    "absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white";
  const styleMainCategoryContainer =
    "w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2";

  return (
    <div className={styleMainCategoryContainer}>
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className={styleMovieOverlay}>
        <p className={styleMovieTitle}>{item?.title}</p>
        <p>
          {like ? (
            <FaHeart className={styleHeartIcons} />
          ) : (
            <FaRegHeart className={styleHeartIcons} />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
