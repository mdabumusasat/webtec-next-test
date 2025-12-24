import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import ProjectDetails from "@/components/sections/ProjectDetails";

export const metadata = {
  title: "Webtec | React Next js Template | Project Details",
};

export default function ProjectDetailsPage() {
  return (
    <Layout HeaderStyle="two" FooterStyle="two">
      <PageTitle title="Project Details" />
      <ProjectDetails />
    </Layout>
  );
}

