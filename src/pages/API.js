import React, { useState, useEffect } from "react";
import pug from "../assets/pug404.jpg"; //meant to act as a placeholder alt image/ loading image

export default function API() {
  const [items, setItems] = React.useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        console.log(json);
      })
      .catch((error) => {
        console.error("Error fetching API: ", error);
      });
  }, []);

  return (
    <>
      <div className="API">
        <h1>Random Cute Dog Picture</h1>
        <img
          src={items.message || pug}
          alt="image"
          style={{ height: 500, width: 500 }}
        />
        <p>
          ...If image fails to load, please reload the page as the image
          provided by the API may no longer exist.
        </p>
        <p>
          <b>Examples:</b> Indian Spitz, Lulu2, and Indian-Chippiparai
          <br />
          <br /> <b>Links to the dog's image error:</b> <br />
          https://images.dog.ceo/breeds/spitz-indian/Indian_Spitz.jpg <br />
          https://images.dog.ceo/breeds/cavapoo/lulu2.jpg
          <br />
          https://images.dog.ceo/breeds/chippiparai-indian/Indian-Chippiparai.jpg
        </p>
      </div>
    </>
  );
}
