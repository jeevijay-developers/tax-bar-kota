"use client";
import React, { useState } from "react";
import { tourDataThreeB } from "@/data/tours";
import "./style.module.css";
import { IoCloseSharp } from "react-icons/io5";

import Image from "next/image";

const EnevtGallary = () => {
  const [image, setImage] = useState("/img/clubgallary/cg10.jpg");
  const [viewBig, setViewBig] = useState(false);
  const [text, setText] = useState("");
  const [para, setPara] = useState("");
  const handleImageClick = (path, text, para) => {
    setImage(path);
    setText(text);
    setPara(para);
    setViewBig(true);
  };
  const handleCloseImageClick = () => {
    setImage("");
    setViewBig(false);
  };
  return (
    <section className="layout-pt-lg layout-pb-xl position-relative">
      <div className="container">
        <div className="row y-gap-30 pt-30 justify-content-center">
          {tourDataThreeB.map((elm, i) => (
            <div key={i} className="col-lg-3 col-sm-6">
              <div
                className="tourCard -type-1 py-10 px-10 border-1 rounded-12  -hover-shadow eg-bg"
                onClick={() => {
                  handleImageClick(elm.imageSrc, elm.title, elm.para);
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
                    <h5 className="fw-bolder">{elm.title}</h5>
                    <p>{elm.para}</p>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {viewBig && (
        <div className="bigImage">
          <div className="close-evenet" onClick={() => handleCloseImageClick()}>
            <IoCloseSharp />
          </div>
          <div className="d-flex flex-column gap-4">
            <Image
              height={600}
              width={600}
              src={image}
              alt="big-image"
              style={{ border: "2px solid black", borderRadius: "12px" }}
            />{" "}
            <br />
            <h4 className="text-black stroke-1 outline-1 text-center">
              {text}
            </h4>
          </div>
        </div>
      )}
    </section>
  );
};

export default EnevtGallary;
