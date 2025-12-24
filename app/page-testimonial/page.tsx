import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import Testimonial from "@/components/sections/Testimonials";

export const metadata = {
  title: "Testimonials - Webtec | React Next js Template |",
};

export default function TestimonialPage() {
  return (
    <Layout HeaderStyle="two" FooterStyle="two">
      <PageTitle title="Testimonials" />  
      <Testimonial />
    </Layout>
  );
}

