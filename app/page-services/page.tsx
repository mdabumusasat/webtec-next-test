import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import ServiceGrid from "@/components/sections/ServiceGrid";

export const metadata = {
  title: "Webtec | React Next js Template | Our Services",
};

export default function ServicesPage() {
  return (
    <Layout HeaderStyle="two" FooterStyle="two">
      <PageTitle title="Our Services" />
      <ServiceGrid />
    </Layout>
  );
}

