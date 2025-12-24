import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import About from "@/components/sections/Home1/About";
import Services from "@/components/sections/Home1/Services";
import Teams from "@/components/sections/Home3/Teams";

export const metadata = {
  title: "Webtec | React Next js Template | About",
};

export default function AboutPage() {
  return (
    <Layout HeaderStyle="two" FooterStyle="two">
      <PageTitle title="About Us" />
      <About />
      <Services />
      <Teams className="pb-100" />
    </Layout>
  );
}

