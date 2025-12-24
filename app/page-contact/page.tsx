import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import ContactInner from "@/components/sections/ContactInner";

export const metadata = {
  title: "Contact Us - Webtec | React Next js Template",
};

export default function ContactPage() {
  return (
    <Layout HeaderStyle="two" FooterStyle="two">
      <PageTitle title="Contact Us" />
      <ContactInner />
    </Layout>
  );
}

