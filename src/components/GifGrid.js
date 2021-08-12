import React /* , { useEffect, useState } */ from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GigGridItem } from "./GigGridItem";

export const GifGrid = ({ category }) => {

  
  

  const {data:images,loading} = useFetchGifs(category);

  
  return (
    <>
      <h3 className="animate__animated animate__bounce animate__fadeIn">{category}</h3>

      { loading && <p className="animate__animated animate__bounce animate__flash">Loading</p> }

      <div className="card-grid">
        {
        images.map((img) => {
          return <GigGridItem key={img.id} {...img} />;
        })
        }
      </div>

    </>
  );
};
