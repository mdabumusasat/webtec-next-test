import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/Home3/Banner";
import Service from "@/components/sections/Home3/Service";
import About from "@/components/sections/Home3/About";
import Cta from "@/components/sections/Home3/Cta";
import Project from "@/components/sections/Home3/Project";
import ChooseUs from "@/components/sections/Home3/ChooseUs";
import Teams from "@/components/sections/Home3/Teams";
import Testimonial from "@/components/sections/Home1/Testimonial";
import Contact from "@/components/sections/Home3/Contact";
import News from "@/components/sections/Home3/News";

export const metadata = {
  title: "Home 3 - Webtec React Next Js Template",
}; 

export default function Home3() {
  return (
    <div className="home3-bgcolor">
      <Layout HeaderStyle="three" FooterStyle="three">
        <Banner />
        <Service />
        <About />
        <Cta /> 
        <Project />
        <ChooseUs />
        <Teams />
        <Testimonial />
        <Contact />
        <News />
      </Layout>
    </div>

  );
}

