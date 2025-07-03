import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <Header1 />
      {children}
      <FooterOne />
    </div>
  );
};

export default layout;
