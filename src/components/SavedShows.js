import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);

  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((item) => {
        return item.id !== passedID;
      });

      await updateDoc(movieRef, {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //styles
  const styleRightArrowIcon =
    "bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block";
  const styleLeftArrowIcon =
    "bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block";
  const styleSlider =
    "w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative";
  const styleCloseIcon = "absolute top-4 right-4 text-gray-300";
  const styleMovieTitle =
    "white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center";
  const styleMovieOverlay =
    "absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white";
  const styleMainCategoryContainer =
    "w-[10rem] sm:w-[12.5rem] md:w-[15rem] lg:w-[17.5rem] inline-block cursor-pointer relative p-2";

  const renderSavedShows = movies.map((item) => (
    <div key={item.id} className={styleMainCategoryContainer}>
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
        alt={item?.title}
      />
      <div className={styleMovieOverlay}>
        <p className={styleMovieTitle}>{item?.title}</p>
        <p onClick={() => deleteShow(item.id)} className={styleCloseIcon}>
          <AiOutlineClose />
        </p>
      </div>
    </div>
  ));

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">My Shows</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className={styleLeftArrowIcon}
          size={40}
        />
        <div id={"slider"} className={styleSlider}>
          {renderSavedShows}
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

export default SavedShows;
