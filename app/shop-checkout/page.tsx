import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import ShopCheckout from "@/components/sections/ShopCheckout";

export const metadata = {
  title: "Webtec | React Next js Template | Checkout",
};

export default function ShopCheckoutPage() {
  return (
    <Layout HeaderStyle="two" FooterStyle="two">
      <PageTitle title="Checkout" />
      <ShopCheckout />
    </Layout>
  );
}

