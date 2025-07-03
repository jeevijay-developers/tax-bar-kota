"use client";
import React, { useState } from "react";
import { tourDataThreeA } from "@/data/tours";
// import "./style.css";
import { IoCloseSharp } from "react-icons/io5";

import Image from "next/image";

const ClubGallary = () => {
  const [image, setImage] = useState("/img/clubgallary/cg10.jpg");
  const [viewBig, setViewBig] = useState(false);
  const [text, setText] = useState("");
  const handleImageClick = (path, text) => {
    setImage(path);
    setText(text);
    setViewBig(true);
  };
  const handleCloseImageClick = () => {
    setImage("");
    setViewBig(false);
  };
  return (
    <section className="layout-pt-lg layout-pb-xl position-relative">
      <div className="container">
        <div className="row y-gap-30 pt-30">
          {tourDataThreeA.map((elm, i) => (
            <div key={i} className="col-lg-3 col-sm-6">
              <div
                className="tourCard -type-1 py-10 px-10 border-1 rounded-12  -hover-shadow cg-bg"
                onClick={() => {
                  handleImageClick(elm.imageSrc, elm.title);
                }}
              >
                <div className="tourCard__header">
                  <div className="tourCard__image ratio ratio-28:20">
                    <Image
                      width={421}
                      height={301}
                      src={elm.imageSrc}
                      alt="image"
                      className="img-ratio rounded-12"
                    />
                  </div>
                </div>

                <div className="tourCard__content px-10 pt-10">
                  <h3 className="tourCard__title text-16 fw-500 mt-5">
                    <span className="fw-bold">{elm.title}</span>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {viewBig && (
        <div className="bigImage">
          <div className="close" onClick={() => handleCloseImageClick()}>
            <IoCloseSharp />
          </div>
          <div className="d-flex flex-column gap-4">
            <Image height={600} width={600} src={image} alt="big-image" />{" "}
            <br />
            <h4 className="text-white text-center">{text}</h4>
          </div>
        </div>
      )}
    </section>
  );
};

export default ClubGallary;
