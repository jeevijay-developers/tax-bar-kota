"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getEventGallery } from "@/server/api";

export default function ArticlesOne() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getEventGallery()
      .then((res) => setData(res))
      .catch((e) => console.log("error in fetching data", e));
  }, []);

  return (
    <section
      className="layout-pt-xl layout-pb-xl"
      style={{
        backgroundColor: "#ffcc6f24",
      }}
    >
      <div className="container">
        <div className="row justify-between items-end y-gap-10">
          <div className="col-auto">
            <h2 data-aos="fade-up" className="text-30 md:text-24">
              Event Gallery
            </h2>
          </div>
          {/* Optionally add "See all" link if needed */}
        </div>

        <div data-aos="fade-up" className="row y-gap-30 pt-40 sm:pt-20">
          {/* show loader while data is null */}
          {!data && (
            <div className="col-12 text-center">
              <p>Loading...</p>
            </div>
          )}

          {/* render actual data after fetching */}
          {data?.map((elm) => (
            <div key={elm._id} className="col-lg-4 col-md-6">
              <Link
                href={`/blog-single/${elm._id}`}
                className="blogCard -type-1"
              >
                <div className="blogCard__image ratio ratio-41:30">
                  <Image
                    width={616}
                    height={451}
                    src={elm.bannerImage}
                    alt={elm.title}
                    className="img-ratio rounded-12"
                  />
                </div>
                <div className="blogCard__content mt-30">
                  <div className="blogCard__info text-14">
                    <h4>{elm.title}</h4>
                  </div>
                  <h3 className="blogCard__title text-18 fw-500 mt-10">
                    {elm.desc}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
