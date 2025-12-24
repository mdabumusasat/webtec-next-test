import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import FaqInner from "@/components/sections/FaqInner";

export const metadata = {
  title: "Webtec | React Next js Template | FAQ",
};

export default function FaqPage() {
  return (
    <Layout HeaderStyle="two" FooterStyle="two">
      <PageTitle title="Frequently Asked Questions" />
      <FaqInner />
    </Layout>
  );
}

