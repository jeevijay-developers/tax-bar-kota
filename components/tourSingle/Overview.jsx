import React from "react";

export default function Overview({ tour }) {
  return (
    <>
      <h2 className="text-30">{tour.title}</h2>
      <p className="mt-20">{tour.description}</p>

      <h3 className="text-20 fw-500 mt-20">{tour.highlights}</h3>
      <ul className="ulList mt-20">
        {tour.highlightsPoints.map((item, isx) => {
          return <li key={isx}>{item}</li>;
        })}
      </ul>
    </>
  );
}
