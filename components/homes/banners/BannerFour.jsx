import Image from "next/image";
import React from "react";

export default function BannerFour() {
  return (
    <section className="layout-pt-xxl layout-pb-xxl relative">
      {/* Background Image */}
      <div className="sectionBg relative">
        <Image
          src="/img/features/1/a.webp"
          width={1920}
          height={700}
          alt="image"
          className="img-ratio w-full h-[700px] object-cover"
        />
        {/* Overlay for Better Text Visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Text Content */}
      <div className="container relative z-10">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <h2
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-6xl md:text-4xl sm:text-2xl text-yellow-400 font-extrabold tracking-wide"
            >
              Keep Things Flexible
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              className="text-gray-200 text-lg sm:text-sm mt-4 bg-black bg-opacity-50 px-4 py-2 rounded-md"
            >
               <span className="font-bold text-white"> Use Reserve Now & Pay Later 
              to secure the activities you don't want to miss without being locked in.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
