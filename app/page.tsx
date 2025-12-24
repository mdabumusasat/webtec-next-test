import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/Home1/Banner";
import About from "@/components/sections/Home1/About";
import Services from "@/components/sections/Home1/Services";
import ChooseUs from "@/components/sections/Home1/ChooseUs";
import Project from "@/components/sections/Home1/Project";
import Teams from "@/components/sections/Home1/Teams";
import Testimonial from "@/components/sections/Home1/Testimonial";
import Claint from "@/components/sections/Home1/Claint";
import Contact from "@/components/sections/Home1/Contact";
import News from "@/components/sections/Home1/News";

export default function Home1() {
  return (
    <Layout>
      <Banner />
      <About />
      <Services />
      <ChooseUs />
      <Project />
      <Teams />
      <Testimonial />
      <Claint />
      <Contact />
      <News />
    </Layout>
  );
}

