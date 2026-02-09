import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ProductsSection from "@/components/home/ProductsSection";
import StatsSection from "@/components/home/StatsSection";
import SecuritySection from "@/components/home/SecuritySection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProductsSection />
      <StatsSection />
      <SecuritySection />
      <CTASection />
    </Layout>
  );
};

export default Index;
