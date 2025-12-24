import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import ShopDetails from "@/components/sections/ShopDetails";

export const metadata = {
  title: "Webtec | React Next js Template | Product Details",
};

export default function ShopProductDetailsPage() {
  return (
    <Layout HeaderStyle="two" FooterStyle="two">
      <PageTitle title="Product Details" />
      <ShopDetails />
    </Layout>
  );
}

