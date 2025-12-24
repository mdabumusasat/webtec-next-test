import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import ServiceDetails from "@/components/sections/ServiceDetails";

export const metadata = {
  title: "Webtec | React Next js Template | Service Details",
};

export default function ServiceDetailsPage() {
  return (
    <Layout HeaderStyle="two" FooterStyle="two">
      <PageTitle title="Service Details" />
      <ServiceDetails />
    </Layout>
  );
}

