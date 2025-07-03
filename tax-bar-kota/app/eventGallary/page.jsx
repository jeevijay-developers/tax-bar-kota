// import ClubGallary from "@/components/ClubGallary/ClubGallary";
import EnevtGallary from "@/components/ClubGallary/EnevtGallary";
import ArticlesOne from "@/components/homes/articles/ArticlesOne";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import React from "react";

const page = () => {
  return (
    <div>
      <Header1 />
      <ArticlesOne />
      {/* <EnevtGallary /> */}
      <FooterOne />
    </div>
  );
};

export default page;
