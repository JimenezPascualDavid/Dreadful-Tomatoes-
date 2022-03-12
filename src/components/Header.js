import React from "react";
import Logo from "../assets/logo.png";
import  Movies from "../assets/icon-movies.png";
import Series from "../assets/icon-series.png";
import Login from "../assets/icon-login.png";
import Filter from '../assets/icon-filter.png';
import { Link } from "react-router-dom";
function Header({ pathname }) {


  return (
    <div className="header">
      <div>
        
        <Link to="/"> 
          <img src={Logo}></img>
        </Link> 
      </div>
      {pathname === "/series" ? (
        
      <div className="header__select">
        <Link to="/series" className="header__selected header__selected--active">
            <img src={Movies}/>
            <span>Movies</span>
            </Link>
            
          <Link to="/movies" className="header__selected">
          <img src={Series}/>
          <span>Series</span>
          </Link>
          </div>
       
      ) : (
        ""
      )}
      {pathname === "/movies" ? (
    <div className="header__select">
    <Link to="/series" className="header__selected">
        <img src={Movies}/>
        <span>Movies</span>
        </Link>
      <Link to="/movies" className="header__selected header__selected--active">
      <img src={Series}/>
      <span>Series</span>
      </Link>
      </div>
      ) : (
        ""
      )}
      <div className="header__actions">
      {pathname !== "/" ?
      <div className="header__filter">
          <img src={Filter}/>
          <span>Filters</span>
          </div>:""}
        |
        <Link to="/dashboard">
          <span>Login</span>
          <img src={Login}/>
        </Link>
        <Link to="/dashboard">
          <button type="button">Start your free trial</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
