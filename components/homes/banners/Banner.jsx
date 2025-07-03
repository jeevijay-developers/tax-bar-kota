import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <section className="cta -type-2">
      <div className="cta__bg">
        <Image width={1530} height={600} src="/img/cta/2/bg.png" alt="image" />

        <div className="cta__image">
          <Image
            width={750}
            height={600}
            src="/logo/Jagmandir-palace-Kota.png"
            alt="image"
          />
          <Image
            width="40"
            height="600"
            src="/img/cta/2/shape.svg"
            alt="image"
          />
          <Image
            width="390"
            height="35"
            src="/img/cta/2/shape2.svg"
            alt="image"
          />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-7">
            <div className="cta__content">
              <h2
                data-aos="fade-up"
                data-aos-delay=""
                className="text-40 md:text-30  lh-13"
              >
                <span className="text-accent-1">About Tax Bar Kota</span>
              </h2>

              <p data-aos="fade-up" data-aos-delay="" className="mt-10">
                At the time of Independence in 1947, Income Tax Act, 1922, was in
                existence which was levied in Part A and Part C states. Kota was
                then a part of Bundi State which was Part B state and Income Tax
                was not applicable on us. In 1950, Income Tax was levied on Part
                B States, through Part B Income Tax Concession Order. Inspired by
                the ideology to have a common platform for all those who practise
                in taxation laws, and to enable them to share the benefits of
                their learning, experience and knowledge, 13 eminent professionals
                from the fields of Taxation conceived the idea of establishing a
                body for tax practitioners. The idea of the Tax Bar Association,
                Kota was given life under the able Presidency of Shri M. H.
                Ansari in the year 1952. Founder members of the Association are:
                -
              </p>

              <div className="mt-30 md:mt-20">
                {/* <button
                  data-aos="fade-right"
                  data-aos-delay=""
                  className="button -md -dark-1 bg-accent-1 text-white"
                > */}
                {/* <Link href="/tour-list-1">
                    Book Now
                    <i className="icon-arrow-top-right ml-10 text-16"></i>
                  </Link> */}
                {/* </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
