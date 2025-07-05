"use client";
import { destinationsEight } from "@/data/destinations";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import "@/public/css/main.css";
import { getGallery } from "@/server/api";

export default function TrendingDestinationsTwo() {
  const [gallerySections, setGallerySections] = useState([]);
  const [image, setImage] = useState("");
  const [viewBig, setViewBig] = useState(false);
  const [text, setText] = useState("");
  const getClubGallery = async () => {
    const res = await getGallery();
    // Expecting res to be an array of objects with { title, images: [{url, _id}] }
    setGallerySections(res);
  };
  useEffect(() => {
    getClubGallery();
  }, []);

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
          <div key={section._id || idx}>
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
              {section.images &&
                section.images.map((img, i) => (
                  <div
                    key={img._id || i}
                    className="col-lg-3 col-md-6 col-6"
                    onClick={() => handleImageClick(img.url, section.title)}
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
                          src={img.url}
                          alt={section.title}
                          className="img-ratio"
                        />
                      </div>
                      <div className="featureCard__content text-center">
                        <h4 className={`text-20 fw-500 galleryTitleColor`}>
                          {section.title}
                        </h4>
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
          <div onClick={handleCloseImageClick}>
            <IoCloseSharp className="close" size={15} />
          </div>
          <div className="img-box">
            <Image
              height={500}
              width={500}
              src={image}
              alt="big-image"
              style={{ border: "2px solid white", borderRadius: "12px" }}
            />
            <h4 className="text-black text-center">{text}</h4>
          </div>
        </div>
      )}
    </section>
  );
}
