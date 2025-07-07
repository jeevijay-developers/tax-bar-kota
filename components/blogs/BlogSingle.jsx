"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getEventGallery } from "@/server/api";
import Hero1 from "./Hero1";

export default function BlogSingle({ eventId }) {
  const [data, setData] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    getEventGallery()
      .then((res) => {
        setData(res);
        console.log("res ->", res);
        console.log("event id", eventId);
        const found = res.find((item) => item._id === eventId);
        console.log(found);
        setSelectedBlog(found);
      })
      .catch((e) => console.log("error in fetching data", e));
  }, [eventId]);

  if (!selectedBlog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Hero1 blog={selectedBlog} />
      <section className="layout-pt-md layout-pb-xl">
        <div className="container">
          <div className="row y-gap-30 justify-center">
            <div className="col-lg-8">
              <h2 className="text-30 md:text-24">{selectedBlog.blog.bhead}</h2>
              <p className="mt-20">{selectedBlog.blog.blogPara1}</p>

              {/* Example: you can render more fields if needed */}
              {/* <div className="mt-20">
                <Image
                  src={selectedBlog.blog.bImage1}
                  width={600}
                  height={400}
                  alt="blog image"
                  className="rounded-8"
                />
              </div> */}

              {/* <p className="mt-20">{selectedBlog.desc}</p> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
