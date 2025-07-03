"use client";
import Image from "next/image";
import React from "react";

export default function Hero1({ blog }) {
  return (
    <section className="hero -type-1 -min-2">
      <div className="hero__bg image-half-overlay">
        <Image
          width={1800}
          height={500}
          // src={blog.blog.bImage1}
          src={"/img/tax-bar-kota/event-gallery/bg.jpg"}
          className=""
          alt="image"
        />
        <Image
          style={{ height: "auto" }}
          width="1800"
          height="40"
          src="/img/hero/1/shape.svg"
          alt="image"
        />
      </div>

      <div className="container">
        <div className="row justify-center">
          <div className="col-xl-12">
            <div className="hero__content">
              <h1 className="hero__title">
                {blog?.title ? blog?.title : "Your guide to everywhere"}
              </h1>

              <p className="hero__text">
                {blog?.desc
                  ? blog?.desc
                  : `Find inspiration, guides and stories for wherever you're going
                Select a destination`}
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .image-half-overlay {
          position: relative;
          overflow: hidden;
        }

        .image-half-overlay::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0) 100%
          );
          z-index: 1;
          pointer-events: none;
        }
        @media (max-width: 767px) {
          .image-half-overlay::before {
            width: 100%;
            height: 100%;
            background: black;
            opacity: 0.7;
            z-index: 1;
          }
        }
      `}</style>
    </section>
  );
}
