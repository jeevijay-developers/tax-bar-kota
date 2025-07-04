import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import ProfileUpdation from "@/components/pages/ProfileUpdation";
import React from "react";
export const metadata = {
  title: "Profile Updation || Tax Bar Kota",
  description: "Profile Updation || Tax Bar Kota",
};

export default function page() {
  return (
    <>
      <main>
        <Header1 />
        <ProfileUpdation />
        <FooterOne />
      </main>
    </>
  );
}
