import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import ShopSidebar from "@/components/sections/ShopSidebar";

export const metadata = {
  title: "Webtec | React Next js Template | Shop",
};

export default function ShopProductsSidebarPage() {
  return (
    <Layout HeaderStyle="two" FooterStyle="two">
      <PageTitle title="Shop" />
      <ShopSidebar />
    </Layout>
  );
}

