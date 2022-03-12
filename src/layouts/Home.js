import React from "react";
import {Link} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Series from "../assets/series.png";
import  Movies from "../assets/movies.png";
import {useLocation} from 'react-router-dom';
function Home() {


  const {pathname} = useLocation();

  return (
    <div id="home">
      <Header pathname={pathname}/>
      <div className="content">
        <div className="content__films"><img src={ Movies}/><Link to="/movies"><div className="content__title"><p>Movies</p></div></Link></div>
        <div className="content__series"><img src={Series}/><Link to="/series"><div className="content__title"><p>Series</p></div></Link></div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
