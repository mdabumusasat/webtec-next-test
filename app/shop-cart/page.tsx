import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import ShopCart from "@/components/sections/ShopCart";

export const metadata = {
  title: "Webtec | React Next js Template | Shopping Cart",
};

export default function ShopCartPage() {
  return (
    <Layout HeaderStyle="two" FooterStyle="two">
      <PageTitle title="Shopping Cart" />
      <ShopCart />
    </Layout>
  );
}

