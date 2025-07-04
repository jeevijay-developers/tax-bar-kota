import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Login from "@/components/pages/Login";
import React from "react";

export const metadata = {
  title: "Login | Tax Bar Kota",
  description: "Login to Tax Bar Kota portal.",
};

export default function page() {
  return (
    <>
      <main>
        <Header1 />
        <Login />
        <FooterOne />
      </main>
    </>
  );
}
