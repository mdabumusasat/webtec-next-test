import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/Home2/Banner";
import About from "@/components/sections/Home2/About";
import Marquee from "@/components/sections/Home2/Marquee";
import Services from "@/components/sections/Home2/Services";
import Funfact from "@/components/sections/Home2/Funfact";
import Project from "@/components/sections/Home2/Project";
import ChooseUs from "@/components/sections/Home2/ChooseUs";
import Faqs from "@/components/sections/Home2/Faqs";
import Testimonial from "@/components/sections/Home2/Testimonial";
import Contact from "@/components/sections/Home2/Contact";
import News from "@/components/sections/Home2/News";

export const metadata = {
  title: "Home 2 - Webtec React Next Js Template",
};

export default function Home2() {
  return (
    <Layout HeaderStyle="two" FooterStyle="two">
      <Banner />
      <About />
      <Marquee />
      <Services />
      <Funfact />
      <Project />
      <ChooseUs />
      <Faqs />
      <Testimonial />
      <Contact />
      <News />
    </Layout>
  );
}

