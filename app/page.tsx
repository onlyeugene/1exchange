import CryptoMarket from "@/components/hero/crypto-market";
import CryptoNews from "@/components/hero/crypto-news";
import GetStarted from "@/components/hero/get-started";
import Hero from "@/components/hero/hero";
import HeroDetails from "@/components/hero/hero-details";
import Testimonials from "@/components/hero/testimonials";

export default function Home() {

  return (
    <>
      <Hero />
      <hr />
      <HeroDetails />
      <hr />
      <GetStarted />
      <hr />
      <CryptoMarket />
      <hr />
      <CryptoNews />
      <hr />
      <Testimonials />
      </>
  );
}
