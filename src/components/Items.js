import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSearchStore } from "../context/searchContext";
import ReactPaginate from "react-paginate";

function Items({ pathname }) {
  const [movies, setMovies] = useState([]);
  const { store, date } = useSearchStore();
  const [moviesFiltradas, setMoviesFiltradas] = useState([]);

  const [pageNumber, setPageNumber] = useState(0);
  const userPage = 10;
  const pagesVisited = pageNumber * userPage;
  const displayUsers = moviesFiltradas
    .slice(pagesVisited, pagesVisited + userPage)
    .map((item, key) => {
      return (
        <div key={key} className="items__item">
          <img src={item.images["Poster Art"].url} />
          <div className="items__details">
            <div className="items__title">{item.title}</div>
            <div className="items__year"> {item.releaseYear}</div>
            <div className="items__description">{item.description}</div>
          </div>
        </div>
      );
    });

  const handleClick = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    axios
      .get("https://gitlab.com/-/snippets/2041384/raw/master/data.json")
      .then((response) => {
        if (pathname === "/movies") {
          const movies = response.data.entries.filter(
            (item) => item.programType === "movie"
          );
          setMovies(movies);
          setMoviesFiltradas(movies);
        } else {
          const movies = response.data.entries.filter(
            (item) => item.programType === "series"
          );
          setMovies(movies);
          setMoviesFiltradas(movies);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pathname]);

  useEffect(() => {
    const filtradasPorInput = movies.filter((item) =>
      item.title.toLowerCase().startsWith(store)
    );
    setMoviesFiltradas(filtradasPorInput);
    if (date) {
      const filtradasPorFecha = filtradasPorInput.filter(
        (item) => item.releaseYear >= date
      );
      setMoviesFiltradas(filtradasPorFecha);
    }
  }, [store, date]);

  return (
    <>
      {displayUsers}
      {/* {moviesFiltradas.map((item, key) => {
        return (
          <div key={key} className="movies__movie">
            <img src={item.images["Poster Art"].url} />
            <div className="movies__details">
              <div className="movies__title">{item.title}</div>
              <div className="movies__year"> {item.releaseYear}</div>
              <div className="movies__description">{item.description}</div>
            </div>
          </div>
        );
      })} */}
      <div className={"pagination"}>
        <ReactPaginate
        containerClassName={"pagination__container"}
          prevLinkClassName={'pagination__prev'}
          previusLabel={"<"}
          nextLinkClassName={'pagination__next'}
          nextLabel={">"}
          activeClassName={'pagination__active'}
          disabledClassName={'pagination__disabled'}
          pageCount={10}
          onPageChange={handleClick}
        />
      </div>
    </>
  );
}

export default Items;
