import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import BlogDetails from "@/components/sections/BlogDetails";

export const metadata = {
  title: "Webtec | React Next js Template | News Details",
};

export default function NewsDetailsPage() {
  return (
    <Layout HeaderStyle="two" FooterStyle="two">
      <PageTitle title="News Details" />
      <BlogDetails />
    </Layout>
  );
}

