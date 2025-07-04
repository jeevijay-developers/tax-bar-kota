import React from "react";
import Reviews from "./Reviews";
import CommentBox from "./CommentBox";
import Image from "next/image";

export default function BlogSingle({ blog }) {
  return (
    <>
      <section className="layout-pt-md layout-pb-xl">
        <div className="container">
          <div className="row y-gap-30 justify-center">
            <div className="col-lg-8">
              <h2 className="text-30 md:text-24">{blog.blog.bhead}</h2>
              <p className="mt-20">{blog.blog.blogPara1}</p>

              <ul className="ulList2 mt-20">
                {blog.blog.list &&
                  blog.blog.list.map((item, i) => {
                    return <li key={i}>{item}</li>;
                  })}
              </ul>
              {/* 
              <div className="blockquote bg-accent-1-05 rounded-12 px-30 py-30 mt-20">
                <div className="blockquote__icon">
                  <svg
                    width="37"
                    height="25"
                    viewBox="0 0 37 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.50417 24.1C4.50417 24.1 2.8375 23.3333 1.50417 21.8C0.237499 20.2 -0.229167 17.9667 0.104167 15.1C0.570834 10.7 2.17083 7.1 4.90417 4.3C7.70417 1.43333 11.1708 0 15.3042 0C16.6375 0 17.6042 0.099998 18.2042 0.299995L17.4042 4.3C16.6708 4.16667 15.6375 4.1 14.3042 4.1C13.0375 4.1 11.8375 4.4 10.7042 5C9.6375 5.6 8.80417 6.4 8.20417 7.4C6.9375 8.86667 6.1375 10.5333 5.80417 12.4C6.80417 11.4 8.1375 10.9 9.80417 10.9C11.4708 10.9 12.8042 11.4 13.8042 12.4C14.8042 13.4 15.2042 14.7667 15.0042 16.5C14.8042 18.6333 13.8708 20.4333 12.2042 21.9C10.6042 23.3667 8.70417 24.1 6.50417 24.1ZM24.9042 24.1C22.9042 24.1 21.2375 23.3333 19.9042 21.8C18.6375 20.2 18.1708 17.9667 18.5042 15.1C18.9708 10.7 20.5708 7.1 23.3042 4.3C26.1042 1.43333 29.5708 0 33.7042 0C35.0375 0 36.0042 0.099998 36.6042 0.299995L35.8042 4.3C35.0708 4.16667 34.0375 4.1 32.7042 4.1C31.4375 4.1 30.2375 4.4 29.1042 5C28.0375 5.6 27.2042 6.4 26.6042 7.4C25.3375 8.86667 24.5375 10.5333 24.2042 12.4C25.2042 11.4 26.5375 10.9 28.2042 10.9C29.8708 10.9 31.2042 11.4 32.2042 12.4C33.2042 13.4 33.6042 14.7667 33.4042 16.5C33.2042 18.6333 32.2708 20.4333 30.6042 21.9C29.0042 23.3667 27.1042 24.1 24.9042 24.1Z"
                      fill="#EB662B"
                    />
                  </svg>
                </div>
                <div className="blockquote__text">
                  “Sed viverra ipsum nunc aliquet bibendum enim facilisis
                  gravida. Diam phasellus vestibulum lorem sed risus ultricies.
                  Magna sit amet purus gravida quis blandit. Arcu cursus vitae
                  congue mauris.“
                </div>
              </div> */}

              <p className="mt-20">{blog.blog.blogPara2}</p>
              <div className="row y-gap-30 pt-20">
                {blog.blog.bImages?.map((image, index) => (
                  <div className="col-md-6" key={index}>
                    <Image
                      width={410}
                      height={350}
                      src={image}
                      alt={`image-${index}`}
                      className="rounded-8"
                    />
                  </div>
                ))}
              </div>

              <p className="mt-20">{blog.blog.blogPara3}</p>
              {/* 
              <div className="row y-gap-15 justify-between items-center pt-20">
                <div className="col-auto">
                  <div className="d-flex x-gap-10">
                    <div>
                      <a
                        href="#"
                        className="button -accent-1 size-40 flex-center bg-accent-1-05 rounded-full"
                      >
                        <i className="icon-facebook text-14"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="button -accent-1 size-40 flex-center bg-accent-1-05 rounded-full"
                      >
                        <i className="icon-twitter text-14"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="button -accent-1 size-40 flex-center bg-accent-1-05 rounded-full"
                      >
                        <i className="icon-instagram text-14"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="button -accent-1 size-40 flex-center bg-accent-1-05 rounded-full"
                      >
                        <i className="icon-linkedin text-14"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-auto">
                  <div className="d-flex x-gap-10">
                    <div>
                      <button className="button -accent-1 border-1 text-14 px-15 py-10 rounded-200">
                        Advanture
                      </button>
                    </div>
                    <div>
                      <button className="button -accent-1 border-1 text-14 px-15 py-10 rounded-200">
                        Nature
                      </button>
                    </div>
                    <div>
                      <button className="button -accent-1 border-1 text-14 px-15 py-10 rounded-200">
                        Culture
                      </button>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* <div className="line mt-60 mb-30"></div>

              <div className="row y-gap-20">
                <div className="col-auto">
                  <Image
                    width={70}
                    height={70}
                    src="/img/blogSingle/3.png"
                    alt="image"
                  />
                </div>

                <div className="col">
                  <div className="text-18 fw-500">Brooklyn Simmons</div>
                  <div className="lh-15">Medical Assistant</div>
                  <div className="mt-20">
                    Etiam vitae leo et diam pellentesque porta. Sed eleifend
                    ultricies risus, vel rutrum erat commodo ut. Praesent
                    finibus congue euismod. Nullam scelerisque massa vel augue
                    placerat, a tempor sem egestas. Curabitur placerat finibus
                    lacus.
                  </div>
                </div>
              </div> */}

              {/* <div className="line mt-30 mb-30"></div> */}

              {/* <div className="row y-gap-15 justify-between">
                <div className="col-md-auto">
                  <div className="d-flex">
                    <div className="pt-5">
                      <i className="icon-arrow-left text-16"></i>
                    </div>
                    <div className="ml-20">
                      <div className="text-18 fw-500">Prev</div>
                      <div className="mt-5">
                        5 awesome steps to get rid of
                        <br /> stress and routine
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-auto md:d-none">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="4" height="4" fill="#05073C" />
                    <rect y="8" width="4" height="4" fill="#05073C" />
                    <rect y="16" width="4" height="4" fill="#05073C" />
                    <rect x="8" width="4" height="4" fill="#05073C" />
                    <rect x="8" y="8" width="4" height="4" fill="#05073C" />
                    <rect x="8" y="16" width="4" height="4" fill="#05073C" />
                    <rect x="16" width="4" height="4" fill="#05073C" />
                    <rect x="16" y="8" width="4" height="4" fill="#05073C" />
                    <rect x="16" y="16" width="4" height="4" fill="#05073C" />
                  </svg>
                </div>

                <div className="col-md-auto">
                  <div className="d-flex text-right md:text-left">
                    <div className="mr-20">
                      <div className="text-18 fw-500">Next</div>
                      <div className="mt-5">
                        Happy clients leave positive
                        <br />
                        feedback less often
                      </div>
                    </div>
                    <div className="pt-5">
                      <i className="icon-arrow-right text-16"></i>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* <div className="line mt-30 mb-30"></div>

              <h2 className="text-30 mt-30">Customer Reviews</h2>

              <Reviews />

              <button className="button -md -outline-accent-1 text-accent-1 mt-30">
                See more reviews
                <i className="icon-arrow-top-right text-16 ml-10"></i>
              </button>

              <CommentBox /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
