import {Header} from "@/components/Header"
import Image from "next/image";
import { Products } from "@/components/Products";

export default function Home() {
  return (
    <>
    <Header />
    <h1 className="text-2xl font-italic pl-10 mb-7 mt-1 md:pl-20">Explore our Newest Products!</h1>
    <Products category={0} />
    </>
  );
}