import React, { useState } from "react";
import '../styles/points.css'

const Points = ({ product }) => {
    const [showMore,setShowMore]=useState(false)
    function handleShowMore()
    {
        setShowMore(showMore=>!showMore)
    }
  return (
    <div className="pointsdiv">
      <button className="btn_showmore" onClick={()=>handleShowMore()}>{showMore?'show less...':'Key Points...'}</button>
      <ul className="product-points">
        {showMore && product.points.map((point, index) => {
          return (
            <div>
              <li key={index}>{point}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Points;
