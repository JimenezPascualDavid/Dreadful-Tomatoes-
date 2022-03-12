import React from "react";
import Search from "../components/Searchbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Items from "../components/Items";
import {useLocation} from 'react-router-dom';



function  Movies() {

  const {pathname} = useLocation();


 
  return (
    <div className="items">
      <Header pathname={pathname}/>
      <Search />
      <h1 className="items__intro">Popular {pathname === "/movies" ? " movies" : "series"}</h1>
      <div  className="items__all">
     <Items pathname={pathname}/>
      </div>   
      <Footer />
    </div>
  );
}

export default  Movies;
