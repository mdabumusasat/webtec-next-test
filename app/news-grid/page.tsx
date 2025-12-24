import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import NewsGrid from "@/components/sections/NewsGrid";

export const metadata = {
  title: "Webtec | React Next js Template | News & Blog",
};

export default function NewsGridPage() {
  return (
    <Layout HeaderStyle="two" FooterStyle="two">
      <PageTitle title="News & Blog" />
      <NewsGrid />
    </Layout>
  );
}

