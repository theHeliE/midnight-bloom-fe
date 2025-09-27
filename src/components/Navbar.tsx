"use client";

import * as React from "react";
import Link from "next/link";
import {
  Settings,
  ShoppingCart,
  History,
  Mars,
  Venus,
  Backpack,
  BadgeCheck,
  Scale,
  Headset,
  LogIn,
  LogOut,
} from "lucide-react";

import { ListItem } from "./ListItem";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { ModeToggle } from "./ThemeButton";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

export function Navbar() {
  const [token, setToken] = useState<string | null>(null);

  React.useEffect(() => {
    // Only runs in the browser
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
    console.log("Token:", storedToken);
  }, []);

  const handleLogout = async () => {
    try {
      // Call your backend logout API
      const response = await fetch("http://localhost:5000/users/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include token if your API requires it
        },
      });

      if (response.ok) {
        console.log("Logout successful");
      } else {
        console.error("Logout failed:", response.statusText);
      }
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      // Clear token from localStorage and component state regardless of API response
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
      }
      setToken(null);
    }
  };
  return (
    <NavigationMenu viewport={false} className="z-50">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Discover</NavigationMenuTrigger>
          <NavigationMenuContent className="z-50">
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">
                      Midnight Bloom
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Premium scents, perfect prices.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="/"
                title="Men Perfumes"
                icon={<Mars className="h-4 w-4" />}
              >
                Confidence in every spray.
              </ListItem>
              <ListItem
                href="/"
                title="Women Perfumes"
                icon={<Venus className="h-4 w-4" />}
              >
                Elegance you can wear.
              </ListItem>
              <ListItem
                href="/"
                title="Travel Size"
                icon={<Backpack className="h-4 w-4" />}
              >
                Small bottle. Big impression.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Discounts</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
          <NavigationMenuContent className="z-50">
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">
                      <BadgeCheck />
                      Social Media
                    </div>
                    <div className="text-muted-foreground">
                      Follow us on social media.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">
                      <Scale />
                      Privacy Policy
                    </div>
                    <div className="text-muted-foreground">
                      Learn how we handle your data.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">
                      <Headset />
                      Contact Us
                    </div>
                    <div className="text-muted-foreground">
                      Get in touch with our support team.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger style={{}}>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="z-50">
            <ul className="grid w-[200px] gap-4">
              <li>
                {token ? (
                  <>
                    <NavigationMenuLink asChild>
                      <Link href="#" className="flex-row items-center gap-2">
                        <ShoppingCart />
                        Cart
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#" className="flex-row items-center gap-2">
                        <History />
                        History
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#" className="flex-row items-center gap-2">
                        <Settings />
                        Settings
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLogout();
                        }}
                        className="flex-row items-center gap-2"
                      >
                        <LogOut />
                        Logout
                      </Link>
                    </NavigationMenuLink>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link href="/login" className="flex-row items-center gap-2">
                      <LogIn />
                      Login
                    </Link>
                  </NavigationMenuLink>
                )}
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
