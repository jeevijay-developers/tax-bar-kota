import React from "react";

export default function Information() {
  return (
    <section className="layout-pt-lg">
      <div className="container">
        <div className="row y-gap-20 justify-between">
          <div className="col-lg-6">
            <h2 className="text-30 fw-700">
              Shree Ummed Club Kota: A Legacy of Heritage and Elegance
            </h2>
          </div>

          <div className="col-lg-5">
            <p>
              Established in 1898 and named after Sir Robert Crosthwaite, Shree
              Ummed Club Kota is one of the first 18 clubs founded before the
              nineteenth century. Nestled in the heart of Kota city, the club
              spans nearly 5 acres, featuring a grandeur historic building and a
              historic library with a rare collection of seventeenth-century
              books. It stands as a symbol of rich heritage and tradition,
              preserving the charm of a bygone era.
              <br />
              <br />
              Blending history with modern amenities, the club offers a
              state-of-the-art synthetic tennis court and a billiard room with a
              unique fixed grouted legs table adorned with exquisite
              heritage-style woodwork. Shree Ummed Club Kota continues to be a
              prestigious landmark, celebrating a legacy of excellence while
              catering to contemporary leisure and community needs.
            </p>

            {/* <button className="button -md -dark-1 bg-accent-1 text-white mt-30">
              Learn More
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
