"use client";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTheme as useThemes } from "next-themes";

import { Card, CardContent } from "@/components/ui/card"


import { Product } from "@/Types/Products";

export function Products({ category }: { category: number }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useThemes();

  const products : Product[] = [
    {
      id: "1",
        name: "Product 1",
        description: "Description for Product 1",
        price: 29.99,
        size: "M",
        category: 0,
        stockQuantity: 100,
        imageUrl: "/images/product1.jpg",
    },
    {
        id: "2",
        name: "Product 2",
        description: "Description for Product 2",
        price: 39.99,
        size: "L",
        category: 1,
        stockQuantity: 50,
        imageUrl: "/images/product2.jpg",
    },
    {
        id: "3",
        name: "Product 3",
        description: "Description for Product 3",
        price: 49.99,
        size: "S",
        category: 2,
        stockQuantity: 75,
        imageUrl: "/images/product3.jpg",
    },
    {
        id: "4",
        name: "Product 4",
        description: "Description for Product 4",
        price: 59.99,
        size: "XL",
        category: 0,
        stockQuantity: 20,
        imageUrl: "/images/product4.jpg",
    },
    {
        id: "5",
        name: "Product 5",
        description: "Description for Product 5",
        price: 19.99,
        size: "M",
        category: 1,
        stockQuantity: 150,
        imageUrl: "/images/product5.jpg",
    },
    {
        id: "6",
        name: "Product 6",
        description: "Description for Product 6",
        price: 24.99,
        size: "L",
        category: 2,
        stockQuantity: 80,
        imageUrl: "/images/product6.jpg",
    },
    {
        id: "7",
        name: "Product 7",
        description: "Description for Product 7",
        price: 34.99,
        size: "S",
        category: 0,
        stockQuantity: 60,
        imageUrl: "/images/product7.jpg",
    },
    {
        id: "8",
        name: "Product 8",
        description: "Description for Product 8",
        price: 44.99,
        size: "XL",
        category: 1,
        stockQuantity: 30,
        imageUrl: "/images/product8.jpg",
    }
  ];
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
            <CarouselItem key={index} className="px-px-2 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="p-1">
                <Card className={`w-full h-full ${theme.theme === "dark" ? "border-purple-700" : "border-purple-300"} hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1`}>
                    <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                    <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-center">{product.name}</span>
                    {/* <Image src={product.imageUrl} alt={product.name} width={200} height={200} /> */}
                    <div className="mt-4 text-center">
                        <p className="text-lg font-medium">${product.price.toFixed(2)}</p>
                        <p className="text-sm text-gray-500">Size: {product.size}</p>
                    </div>
                    </CardContent>
                </Card>
                </div>
            </CarouselItem>
            ))}
        </CarouselContent>
            <div className="flex justify-center gap-4 mt-6">
            <CarouselPrevious className={`relative left-auto right-auto flex items-center justify-center w-10 h-10 rounded-full shadow-md ${theme.theme === "dark" ? "bg-gray-800 text-white border-purple-700" : "bg-white text-purple-700 border-purple-300"}`}>
                <span className="text-gray-600">&lt;</span>
            </CarouselPrevious>
            <CarouselNext className={`relative left-auto right-auto flex items-center justify-center w-10 h-10 rounded-full shadow-md ${theme.theme === "dark" ? "bg-gray-800 text-white border-purple-700" : "bg-white text-purple-700 border-purple-300"}`}>
                <span className="text-gray-600">&gt;</span>
            </CarouselNext>
        </div>
        </Carousel>
    </>
  );
}