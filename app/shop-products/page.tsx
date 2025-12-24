import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import ShopProduct from "@/components/sections/ShopProduct";

export const metadata = {
  title: "Webtec | React Next js Template | Shop",
};

export default function ShopProductsPage() {
  return (
    <Layout HeaderStyle="two" FooterStyle="two">
      <PageTitle title="Shop" />
      <ShopProduct />
    </Layout>
  );
}

