import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import TeamGrid from "@/components/sections/TeamGrid";

export const metadata = {
  title: "Webtec React Next Js Template",
};

export default function TeamPage() {
  return (
    <Layout HeaderStyle="two" FooterStyle="two">
      <PageTitle title="Our Team" />
      <TeamGrid />
    </Layout>
  );
}

