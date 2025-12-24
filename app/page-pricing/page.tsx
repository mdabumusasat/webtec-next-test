import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import PricingInner from "@/components/sections/PricingInner";

export const metadata = {
  title: "Webtec | React Next js Template | Pricing",
};

export default function PricingPage() {
  return (
    <Layout HeaderStyle="two" FooterStyle="two">
      <PageTitle title="Pricing Plans" />
      <PricingInner />
    </Layout>
  );
}

