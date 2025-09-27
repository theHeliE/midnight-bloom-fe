import { Header } from "@/components/Header";
import Image from "next/image";
import { Products } from "@/components/Products";
export default function Home() {
  return (
    <>
      <Header />
      <h1 className="text-2xl font-italic pl-10 mb-7 mt-1 md:pl-15">
        Explore our Newest Products!
      </h1>
      <Products api={"products"} />

      <h1 className="text-2xl font-italic pl-10 mb-7 md:pl-15">
        Timeless masculinity, bottled.
      </h1>
      <Products category={0} api={"products"} />

      <h1 className="text-2xl font-italic pl-10 mb-7 md:pl-15">
        Timeless Elegance for Her.
      </h1>
      <Products category={1} api={"products"} />

      <h1 className="text-2xl font-italic pl-10 mb-7 md:pl-15">
        Travel Size - Perfect for on the go!
      </h1>
      <Products category={2} api={"products"} />
    </>
  );
}
