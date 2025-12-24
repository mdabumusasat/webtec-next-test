import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import Project from "@/components/sections/Project";

export const metadata = {
  title: "Webtec | React Next js Template | Our Projects",
};

export default function ProjectsPage() {
  return (
    <Layout HeaderStyle="two" FooterStyle="two">
      <PageTitle title="Our Projects" />
      <Project />
    </Layout>
  );
}

