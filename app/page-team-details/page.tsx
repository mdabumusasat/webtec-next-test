import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import TeamDetails from "@/components/sections/TeamDetails";

export const metadata = {
  title: "Team Details - Webtec | React Next js Template",
};

export default function TeamDetailsPage() {
  return (
    <Layout HeaderStyle="two" FooterStyle="two">
      <PageTitle title="Team Details" />
      <TeamDetails />
    </Layout>
  );
}

