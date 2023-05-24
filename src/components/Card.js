import React from "react";
import Image from "next/image";

function Card({ item }) {
  return (
    <div
      className=" mt-20 px-5 py-5 bg-no-repeat"
      style={{
        backgroundImage: `url(${item})`,
        height: "auto",
        backgroundSize: "auto",
      }}
    >
      <div className=" text-white text-2xl mt-4">EUROPEAN</div>
      <br></br>
      <br></br>
      <br></br>
      <div className="max-w-xs text-white mt-60 font-extralight tracking-wider font-sans">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna.
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default Card;
