import React from "react";
import { SearchBar } from "./SearchBar";
import ticketwavelogo from "../ticketwavelogo.png";
import "../css/SearchMovie.css";
import { UserOutlined } from "@ant-design/icons";

const SearchMovie = () => {
  return (
    <div className="top-bar">
      <img src={ticketwavelogo} alt="TicketWave Logo" className="logo" />
      <SearchBar />
      <div className="user-icon">
        <UserOutlined />
      </div>
    </div>
  );
};

export default SearchMovie;
