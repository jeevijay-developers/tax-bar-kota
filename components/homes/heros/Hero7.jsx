/*New code*/
"use client";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    imageSrc: "/img/hero/7/3.png",
    subtitle:
      "",
    title: "WELCOME TO TAX BAR KOTA",
  },
  {
    id: 2,
    imageSrc: "/img/hero/7/1.png",
    subtitle:
      "Empowering society with tax education, ethical standards, and a collaborative forum for professionals, taxpayers, and authorities.",
    title: "Spreading Tax Knowledge & Professional Excellence",
  },
  {
    id: 3,
    imageSrc: "/img/hero/7/5.png",
    subtitle:
      "Enhance your tax expertise through our comprehensive educational programs, workshops, and seminars focused on the latest developments in tax laws and accounting practices.",
    title: "Education & Professional Development",
  },
  {
    id: 4,
    imageSrc: "/img/hero/7/3.png",
    subtitle:
      "Gain access to a wealth of resources including tax publications, journals, and a supportive network of experienced professionals to help navigate complex tax challenges.",
    title: "Resources & Community Support",
  },
  {
    id: 5,
    imageSrc: "/img/hero/7/4.png",
    subtitle:
      "Join our advocacy efforts to promote independence of judicial authorities and represent public interest in matters of taxation and professional standards.",
    title: "Advocacy & Public Representation",
  },
];

export default function Hero7() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="hero -type-7">
      {/* <div className="hero__shape"></div> */}

      <div className="hero__slider js-section-slider">
        <Swiper
          className="w-100"
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            prevEl: ".js-sliderHero-prev",
            nextEl: ".js-sliderHero-next",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            500: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
            1200: { slidesPerView: 1 },
          }}
        >
          {slides.map((elm, i) => (
            <SwiperSlide key={elm.id}>
              <div className="hero__bg image-half-overlay">
                <Image
                  width={1920}
                  height={960}
                  src={elm.imageSrc}
                  alt="background"
                />
              </div>

              <div className="container">
                <div className="row justify-center">
                  <div className="col-lg-8 col-md-10">
                    <div className="hero__content text-center">
                      <h1
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="hero__title text-white"
                      >
                        {elm.title.includes(",") ? (
                          <>
                            {elm.title.split(",")[0]},
                            <br className="md:d-none" />
                            {elm.title.split(",")[1]}
                          </>
                        ) : (
                          elm.title
                        )}
                      </h1>
                      <div
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="hero__subtitle text-white mb-20 md:mb-10"
                      >
                        {elm.subtitle}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hero__nav d-flex mt-40">
        <button className="button -outline-white rounded-full size-72 flex-center text-white js-sliderHero-prev">
          <i className="icon-arrow-left text-20"></i>
        </button>

        <button className="button -outline-white rounded-full size-72 flex-center text-white ml-10 js-sliderHero-next">
          <i className="icon-arrow-right text-20"></i>
        </button>
      </div>
    </section>
  );
}


/* Old code */
// "use client";
// import Calender from "@/components/common/dropdownSearch/Calender";
// import Location from "@/components/common/dropdownSearch/Location";
// import TourType from "@/components/common/dropdownSearch/TourType";
// import { useRouter } from "next/navigation";

// import { Swiper, SwiperSlide } from "swiper/react";

// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// import { useEffect, useState, useRef } from "react";
// import Image from "next/image";
// const slides = [
//   {
//     id: 1,
//     imageSrc: "/img/hero/7/8.jpg",
//     subtitle:
//       "Search, compare and book 15,000+ multiday tours all over the world.",
//     title: "WELCOME TO SHREE UMMED CLUB",
//   },
//   {
//     id: 2,
//     imageSrc: "/img/hero/7/2.jpg",
//     subtitle:
//       "Experience unforgettable moments at our exclusive events and celebrations. From cultural festivals to themed parties, we bring people together in joyous harmony.",
//     title: "Events & Celebrations",
//   },
//   {
//     id: 3,
//     imageSrc: "/img/hero/7/3.jpg",
//     subtitle:
//       "Stay active and energized with our state-of-the-art sports facilities. Whether you're into swimming, tennis, or indoor games, we have something for every fitness enthusiast.",
//     title: "Sports & Recreation",
//   },
//   {
//     id: 4,
//     imageSrc: "/img/hero/7/9.png",
//     subtitle:
//       "Savor a culinary journey with our exquisite dining options. Our multi-cuisine restaurant and café offer a delightful ambiance, perfect for family gatherings and social meet-ups.",
//     title: "Dining & Hospitality",
//   },
//   {
//     id: 5,
//     imageSrc: "/img/hero/7/5.jpg",
//     subtitle:
//       "Become a part of the Shree Ummed Club family. Enjoy exclusive privileges, access to premium amenities, and a community that celebrates togetherness and well-being.",
//     title: "Membership & Benefits",
//   },
// ];

// export default function Hero7() {
//   const router = useRouter();
//   const [currentActiveDD, setCurrentActiveDD] = useState("");
//   const [location, setLocation] = useState("");
//   const [calender, setCalender] = useState("");
//   const [tourType, setTourType] = useState("");
//   useEffect(() => {
//     setCurrentActiveDD("");
//   }, [location, calender, tourType, setCurrentActiveDD]);
//   const dropDownContainer = useRef();
//   useEffect(() => {
//     const handleClick = (event) => {
//       if (
//         dropDownContainer.current &&
//         !dropDownContainer.current.contains(event.target)
//       ) {
//         setCurrentActiveDD("");
//       }
//     };

//     document.addEventListener("click", handleClick);

//     return () => {
//       document.removeEventListener("click", handleClick);
//     };
//   }, []);

//   return (
//     <>
//       <section className="hero -type-7">
//         <div className="hero__shape"></div>

//         <div className="hero__slider js-section-slider">
//           <div className="swiper-wrapper">
//             <Swiper
//               className="w-100"
//               modules={[Navigation]}
//               navigation={{
//                 prevEl: ".js-sliderHero-prev",
//                 nextEl: ".js-sliderHero-next",
//               }}
//               breakpoints={{
//                 500: {
//                   slidesPerView: 1,
//                 },
//                 768: {
//                   slidesPerView: 1,
//                 },
//                 1024: {
//                   slidesPerView: 1,
//                 },
//                 1200: {
//                   slidesPerView: 1,
//                 },
//               }}
//             >
//               {slides.map((elm, i) => (
//                 <SwiperSlide key={i}>
//                   <div className="hero__bg">
//                     <Image
//                       width={1920}
//                       height={960}
//                       src={elm.imageSrc}
//                       alt="background"
//                     />
//                   </div>

//                   <div className="container">
//                     <div className="row justify-center">
//                       <div className="col-lg-8 col-md-10">
//                         <div className="hero__content text-center">
//                           <h1
//                             data-aos="fade-up"
//                             data-aos-delay="300"
//                             className="hero__title text-white"
//                           >
//                             {elm.title.split(",")[0]},
//                             <br className="md:d-none" />
//                             {elm.title.split(",")[1]}
//                           </h1>
//                           <div
//                             data-aos="fade-up"
//                             data-aos-delay="100"
//                             className="hero__subtitle text-white mb-20 md:mb-10"
//                           >
//                             {elm.subtitle}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>

//           <div className="hero__nav d-flex mt-40">
//             <button className="button -outline-white rounded-full size-72 flex-center text-white js-sliderHero-prev">
//               <i className="icon-arrow-left text-20"></i>
//             </button>

//             <button className="button -outline-white rounded-full size-72 flex-center text-white ml-10 js-sliderHero-next">
//               <i className="icon-arrow-right text-20"></i>
//             </button>
//           </div>
//         </div>

//         {/* <div className="hero__filter">
//           <div
//             ref={dropDownContainer}
//             className="searchForm -type-1 shadow-1 rounded-200"
//           >
//             <div className="searchForm__form">
//               <div className="searchFormItem js-select-control js-form-dd">
//                 <div
//                   className="searchFormItem__button"
//                   onClick={() =>
//                     setCurrentActiveDD((pre) =>
//                       pre == "location" ? "" : "location",
//                     )
//                   }
//                 >
//                   <div className="searchFormItem__icon size-50 rounded-full border-1 flex-center">
//                     <i className="text-20 icon-pin"></i>
//                   </div>
//                   <div className="searchFormItem__content">
//                     <h5>Where</h5>
//                     <div className="js-select-control-chosen">
//                       {location ? location : "Search destinations"}
//                     </div>
//                   </div>
//                 </div>

//                 <Location
//                   setLocation={setLocation}
//                   active={currentActiveDD === "location"}
//                 />
//               </div>

//               <div className="searchFormItem js-select-control js-form-dd js-calendar">
//                 <div
//                   className="searchFormItem__button"
//                   onClick={() =>
//                     setCurrentActiveDD((pre) =>
//                       pre == "calender" ? "" : "calender",
//                     )
//                   }
//                 >
//                   <div className="searchFormItem__icon size-50 rounded-full border-1 flex-center">
//                     <i className="text-20 icon-calendar"></i>
//                   </div>
//                   <div className="searchFormItem__content">
//                     <h5>When</h5>
//                     <div>
//                       <span className="js-first-date">
//                         <Calender active={currentActiveDD === "calender"} />
//                       </span>
//                       <span className="js-last-date"></span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="searchFormItem js-select-control js-form-dd">
//                 <div
//                   className="searchFormItem__button"
//                   onClick={() =>
//                     setCurrentActiveDD((pre) =>
//                       pre == "tourType" ? "" : "tourType",
//                     )
//                   }
//                 >
//                   <div className="searchFormItem__icon size-50 rounded-full border-1 flex-center">
//                     <i className="text-20 icon-flag"></i>
//                   </div>
//                   <div className="searchFormItem__content">
//                     <h5>Tour Type</h5>
//                     <div className="js-select-control-chosen">
//                       {tourType ? tourType : "All tour"}
//                     </div>
//                   </div>
//                 </div>

//                 <TourType
//                   setTourType={setTourType}
//                   active={currentActiveDD === "tourType"}
//                 />
//               </div>
//             </div>

//             <div
//               onClick={() => router.push("/tour-list-5")}
//               className="searchForm__button"
//             >
//               <button className="button -dark-1 bg-accent-1 rounded-200 text-white">
//                 <i className="icon-search text-16 mr-10"></i>
//                 Search
//               </button>
//             </div>
//           </div>
//         </div> */}
//       </section>
//     </>
//   );
// }
