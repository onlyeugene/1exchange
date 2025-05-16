import CryptoMarket from "@/components/hero/crypto-market";
import CryptoNews from "@/components/hero/crypto-news";
import GetStarted from "@/components/hero/get-started";
import Hero from "@/components/hero/hero";
import HeroDetails from "@/components/hero/hero-details";

export default function Home() {

  return (
    <>
      <Hero />
      <HeroDetails />
      <GetStarted />
      <CryptoMarket />
      <CryptoNews />
      </>
  );
}
