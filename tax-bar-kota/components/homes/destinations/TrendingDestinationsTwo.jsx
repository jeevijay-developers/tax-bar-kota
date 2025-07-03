"use client";
import { destinationsEight } from "@/data/destinations";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { tourDataThreeA } from "@/data/tours";
import { IoCloseSharp } from "react-icons/io5";
import "./style.css";

export default function TrendingDestinationsTwo() {
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
    <section className="layout-pt-xl layout-pb-xl bg-black">
      <div className="container">
        <div className="row justify-between items-end y-gap-10">
          <div className="col-auto">
            <h2
              data-aos="fade-up"
              data-aos-delay=""
              className="text-30 md:text-24 text-white"
            >
              Club Gallary
            </h2>
          </div>

          {/* <div className="col-auto">
            <Link
              href={"/tour-list-1"}
              data-aos="fade-left"
              data-aos-delay=""
              className="buttonArrow d-flex items-center text-white"
            >
              <span>See all</span>
              <i className="icon-arrow-top-right text-16 ml-10"></i>
            </Link>
          </div> */}
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay=""
          className="row y-gap-30 justify-between pt-40 sm:pt-20"
        >
          {tourDataThreeA.map((elm, i) => (
            <div
              key={i}
              className="col-lg-3 col-md-6"
              onClick={() => {
                handleImageClick(elm.imageSrc, elm.title);
              }}
            >
              <section
                href="/tour-list-1"
                className="featureCard -type-4 -hover-image-scale"
              >
                <div
                  className="featureCard__image ratio ratio-3:4 -hover-image-scale__image rounded-12"
                  style={{
                    border: "2px solid white",
                  }}
                >
                  <Image
                    width={450}
                    height={600}
                    src={elm.imageSrc}
                    alt="image"
                    className="img-ratio"
                  />
                </div>

                <div className="featureCard__content text-center">
                  <h4 className="text-20 fw-500 text-white">{elm.title}</h4>
                  {/* <div className="text-14 lh-14 text-white">
                    {elm.tourCount}+ Tours
                  </div> */}
                </div>
              </section>
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
            <Image
              height={600}
              width={600}
              src={image}
              alt="big-image"
              style={{ border: "2px solid white", borderRadius: "12px" }}
            />{" "}
            <br />
            <h4 className="text-white text-center">{text}</h4>
          </div>
        </div>
      )}
    </section>
  );
}
