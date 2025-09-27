"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTheme as useThemes } from "next-themes";

import { Card, CardContent } from "@/components/ui/card";

import { Product } from "@/Types/Products";

export function Products({
  category,
  api,
}: {
  category?: number;
  api: string | null;
}) {
  const [mounted, setMounted] = React.useState(false);
  const { theme, resolvedTheme } = useThemes();
  const [products, setProducts] = useState<Product[]>([]);
  const categoryString =
    category === 0
      ? "men"
      : category === 1
      ? "women"
      : category === 2
      ? "travel"
      : "";
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Only runs in the browser
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
    console.log("Token:", storedToken);
  }, []);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        category === 0 && console.log(categoryString);
        const response = await fetch(
          api
            ? `http://localhost:5000/${api}/${categoryString}`
            : "http://localhost:5000/products"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [api]);

  if (!mounted) {
    // Avoid mismatches — render a skeleton or neutral state
    return null;
  }

  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
        className="max-w-full px-2 md:px-4 ml-px-2 md:ml-4"
      >
        <CarouselContent>
          {products.map((product, index) => (
            <CarouselItem
              key={index}
              className="px-px-2 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <div className="p-1">
                <Card
                  className={`w-full h-full ${
                    resolvedTheme === "dark"
                      ? "border-purple-700"
                      : "border-purple-300"
                  } hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1`}
                >
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                    <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-center">
                      {product.name}
                    </span>
                    {/* <Image src={product.imageUrl} alt={product.name} width={200} height={200} /> */}
                    <div className="mt-4 text-center">
                      <p className="text-lg font-medium">${product.price}</p>
                      <p className="text-sm text-gray-500">
                        Size: {product.size}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-4 mt-6">
          <CarouselPrevious
            className={`relative left-auto right-auto flex items-center justify-center w-10 h-10 rounded-full shadow-md ${
              resolvedTheme === "dark"
                ? "bg-gray-800 text-white border-purple-700"
                : "bg-white text-purple-700 border-purple-300"
            }`}
          >
            <span className="text-gray-600">&lt;</span>
          </CarouselPrevious>
          <CarouselNext
            className={`relative left-auto right-auto flex items-center justify-center w-10 h-10 rounded-full shadow-md ${
              resolvedTheme === "dark"
                ? "bg-gray-800 text-white border-purple-700"
                : "bg-white text-purple-700 border-purple-300"
            }`}
          >
            <span className="text-gray-600">&gt;</span>
          </CarouselNext>
        </div>
      </Carousel>
    </>
  );
}
