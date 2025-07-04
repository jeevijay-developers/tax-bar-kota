import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Register from "@/components/pages/Register";
import React from "react";

export const metadata = {
  title: "Sign Up | Tax Bar Kota",
  description: "Register for Tax Bar Kota portal.",
};

const Page = () => {
  return (
    <>
      <main>
        <Header1 />
        <Register />
        <FooterOne />
      </main>
    </>
  );
};

export default Page;
