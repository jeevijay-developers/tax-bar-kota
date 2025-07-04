import { features } from "@/data/features";
import Image from "next/image";
import React from "react";

export default function FeaturesOne() {
  return (
    <section
      className="layout-mt-xl layout-pt-xl bg-gradient position-relative overflow-hidden"
     
    >
      <div className="position-relative z-1"  style={{ background: "#ffebe0" }}>
        <div className="layout-pt-md row justify-content-center mb-1  0">
          <div className="col-auto text-center">
            <h2 data-aos="fade-up" className="text-36 fw-700 text-dark">
              Why Choose Tax Bar Kota?
            </h2>
            <p className="text-16 text-gray mt-10" data-aos="fade-up" data-aos-delay="100">
              Discover our exclusive facilities and premium features
            </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="row md:x-gap-20 py-30 sm:pt-20 mobile-css-slider -w-280"
          style={{ padding: "0 2rem"}}
        >
          {features.map((elm, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className="col-lg-3 col-sm-6 mb-30 d-flex"
            >
              <div className="featureCard glass-card text-center p-30 rounded-20 hover-lift w-100 d-flex flex-column justify-content-between">
                <div style={{ padding: "0 2rem" }}>
                  <div className="icon-wrapper mx-auto mb-20">
                    <div className="icon-bubble bg-icon mx-auto d-flex align-items-center justify-content-center">
                      <Image width={32} height={32} src={elm.iconSrc} alt="icon" />
                    </div>
                  </div>
                  <h3 className="text-20 fw-600 mb-10 text-dark">{elm.title}</h3>
                  <p className="text-15 text-gray">{elm.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
