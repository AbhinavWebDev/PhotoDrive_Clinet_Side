import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Posts from "../../Components/Posts/Posts";
function home() {
  return (
    <>
      <Navbar />

      <div className="Home">
        <Posts />
      </div>
    </>
  );
}

export default home;
