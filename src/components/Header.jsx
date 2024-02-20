import React from "react";
import { IoBagCheckSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchItemAction } from "./store/SearchSlice";

export default function Header() {
  const bagItem = useSelector((store) => store.bagItem);
  const dispatch = useDispatch();

  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <Link to="/">Men</Link>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon">search</span>
        <input
          className="search_input p-2"
          placeholder="Search for products, brands and more"
          onChange={(e) =>
            dispatch(searchItemAction.setSearchVal(e.target.value))
          }
        />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <CgProfile />
          <span className="action_name">Profile</span>
        </div>

        <Link className="action_container" to="/bag">
          <IoBagCheckSharp />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bagItem.initalVal.length}</span>
        </Link>

        {/* <div className="action_container">
          <FaFilter />
          <select className="w-2 h-2 mt-1">
           <option value="none">None</option>
           <option value="10-20">$(10-20)</option>
           <option value="20-30">$(20-30)</option>
           <option value="30-40">$(30-40)</option>
           <option value="40-50">$(40-50)</option>
          </select>
        </div> */} 
      </div>
    </header>
  );
}
