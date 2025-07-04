"use client";
import { destinationsEight } from "@/data/destinations";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { gallerySections, tourDataThreeA } from "@/data/tours";
import { IoCloseSharp } from "react-icons/io5";
import "./style.css";



export default function TrendingDestinationsTwo() {
  const [image, setImage] = useState("");
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
    <section
      className="layout-pt-sm layout-pb-xl "
      style={{ backgroundColor: "#fcf9f7" }}
    >
      <div className="container">
        {gallerySections.map((section, idx) => (
          <div key={idx}>
            <h2
              data-aos="fade-up"
              className="text-30 text-center md:text-24 text-black mt-4 mb-4"
            >
              {section.title}
            </h2>
            <div
              data-aos="fade-up"
              className="row y-gap-30  pt-20 sm:pt-10"
            >
              {section.images.map((img, i) => (
                <div
                  key={i}
                  className="col-lg-3 col-md-6 col-6"
                  onClick={() => handleImageClick(img.src, img.title)}
                >
                  <section className="featureCard -type-4 -hover-image-scale">
                    <div
                      className="featureCard__image ratio ratio-3:4 -hover-image-scale__image rounded-12"
                      style={{
                        border: "2px solid white",
                      }}
                    >
                      <Image
                        width={450}
                        height={600}
                        src={img.src}
                        alt={img.title}
                        className="img-ratio"
                      />
                    </div>
                    <div className="featureCard__content text-center">
                      <h4 className="text-20 fw-500 text-white">{img.title}</h4>
                    </div>
                  </section>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {viewBig && (
        <div className="bigImage">
          <div className="close" onClick={handleCloseImageClick}>
            <IoCloseSharp />
          </div>
          <div className="d-flex flex-column gap-4">
            <Image
              height={600}
              width={600}
              src={image}
              alt="big-image"
              style={{ border: "2px solid white", borderRadius: "12px" }}
            />
            <h4 className="text-white text-center">{text}</h4>
          </div>
        </div>
      )}
    </section>
  );
}
