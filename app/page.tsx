import HeroCarousol from "@/components/HeroCarousol";
import ProductCard from "@/components/ProductCard";
import Searchbar from "@/components/Searchbar";
import { getAllProduct } from "@/lib/actions";
import Image from "next/image";

const Home = async () => {
  const allProducts = await getAllProduct();

  return (
    <>
      <section className="px-6 md:px-20 py-24 flex item-center justify-center min-h-screen w-full relative">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="text-sm text-white flex gap-2">
              Smart Shopping Starts Here:
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>

            <h1 className="head-text text-white">
              Unleash the Power of
              <span className="text-white"> PriceLies</span>
            </h1>

            <p className="mt-6 text-white">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more.
            </p>

            <Searchbar />
          </div>
        </div>
        <div className="absolute bottom-5 left-1/2 h-10 w-10 animate-bounce -translate-x-1/2">
          <Image
            src="/assets/icons/bag.svg"
            height={40}
            width={40}
            alt="scroll down"
            className="animate-pulse"
          />
        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text">What's Currently in Demand</h2>

        <div className="flex flex-wrap gap-x-4 gap-y-8">
          {allProducts?.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
