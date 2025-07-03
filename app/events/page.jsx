import Event from "@/components/events/Event";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import React from "react";

const page = () => {
  return (
    <div>
      <Header1 />
      <Event />
      <FooterOne />
    </div>
  );
};

export default page;
