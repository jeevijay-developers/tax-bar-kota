import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Hero1 from "@/components/blogs/Hero1";
import BlogSingle from "@/components/blogs/BlogSingle";
import eventDesc from "@/data/eventDesc";

export const metadata = {
  title: "tax-bar-kota",
  description: "",
};

export default async function page({ params }) {
  const id = await params.id;
  const blog = eventDesc[id];
  console.log("id-> ", id);
  return (
    <>
      <main>
        <Header1 />
        {/* <Hero1 blog={blog} /> */}
        <BlogSingle eventId={id} />
        <FooterOne />
      </main>
    </>
  );
}
