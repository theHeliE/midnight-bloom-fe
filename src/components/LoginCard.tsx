"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTheme } from "next-themes";
import { use, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export function LoginCard() {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const { theme, resolvedTheme } = useTheme();

  // Fix hydration issue
  useEffect(() => {
    setMounted(true);
  }, []);

  // Check if user is already logged in and redirect to home page
  useEffect(() => {
    if (mounted) {
      const token = localStorage.getItem("token");
      if (token) {
        console.log("User already logged in, redirecting to home page");
        router.push("/");
      }
    }
  }, [mounted, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful
        console.log("Login successful:", data);
        localStorage.setItem("token", data.token);
        // You can redirect user or store token here
        router.push("/");
        // For example: localStorage.setItem('token', data.token);
        // router.push('/dashboard');
      } else {
        // Login failed
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection.");
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Prevent hydration mismatch by showing consistent loading state
  if (!mounted) {
    return (
      <Card className="w-full max-w-sm sm:max-w-md mx-auto p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 rounded-lg shadow-md bg-white border border-purple-300">
        <CardHeader className="space-y-2 sm:space-y-3">
          <CardTitle className="text-xl sm:text-2xl font-bold text-purple-700">
            Login to Midnight Bloom
          </CardTitle>
          <CardDescription className="text-sm sm:text-md text-purple-700">
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Button
              variant="link"
              className="text-sm font-medium text-purple-700"
            >
              Sign Up
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 sm:gap-6">
              {error && (
                <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                  {error}
                </div>
              )}
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-sm sm:text-base">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className="w-full px-3 py-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white text-gray-900 border-purple-300 placeholder-gray-400"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password" className="text-sm sm:text-base">
                    Password
                  </Label>
                  <Link
                    href="#"
                    className="ml-auto inline-block text-xs sm:text-sm underline-offset-4 hover:underline text-purple-700"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  className="w-full px-3 py-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white text-gray-900 border-purple-300 placeholder-gray-400"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2 sm:gap-3">
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full text-sm sm:text-base py-2 sm:py-3 bg-purple-600 hover:bg-purple-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Signing in..." : "Login"}
          </Button>
          <Button
            variant="outline"
            className="w-full text-sm sm:text-base py-2 sm:py-3 border-purple-300 text-gray-900 hover:bg-purple-50"
          >
            Login with Google
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card
      className={`w-full max-w-102 sm:max-w-125 mx-auto p-4 px-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 rounded-lg shadow-md ${
        resolvedTheme === "dark"
          ? "bg-indigo-950/80 border border-purple-700"
          : "bg-white border border-purple-300"
      }`}
    >
      <CardHeader className="space-y-2 sm:space-y-3">
        <CardTitle
          className={`text-xl sm:text-2xl font-bold ${
            resolvedTheme === "dark" ? "text-white-400" : "text-purple-700"
          }`}
        >
          Login to Midnight Bloom
        </CardTitle>
        <CardDescription
          className={`text-sm sm:text-md ${
            resolvedTheme === "dark" ? "text-purple-300" : "text-purple-700"
          }`}
        >
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button
            variant="link"
            className={`text-sm font-medium ${
              resolvedTheme === "dark" ? "text-purple-300" : "text-purple-700"
            }`}
          >
            Sign Up
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 sm:gap-6">
            {error && (
              <div
                className={`p-3 text-sm rounded-md ${
                  resolvedTheme === "dark"
                    ? "text-red-400 bg-red-900/50 border border-red-800"
                    : "text-red-600 bg-red-50 border border-red-200"
                }`}
              >
                {error}
              </div>
            )}
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-sm sm:text-base">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                className={`w-full px-3 py-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ${
                  resolvedTheme === "dark"
                    ? "bg-purple-800 text-purple-200 border-purple-700 placeholder-purple-400 "
                    : "bg-white text-gray-900 border-purple-300 placeholder-gray-400"
                } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password" className="text-sm sm:text-base">
                  Password
                </Label>
                <Link
                  href="#"
                  className={`ml-auto inline-block text-xs sm:text-sm underline-offset-4 hover:underline ${
                    resolvedTheme === "dark"
                      ? "text-purple-300"
                      : "text-purple-700"
                  }`}
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                className={`w-full px-3 py-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ${
                  resolvedTheme === "dark"
                    ? "bg-purple-800 text-purple-200 border-purple-700 placeholder-purple-400"
                    : "bg-white text-gray-900 border-purple-300 placeholder-gray-400"
                } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2 sm:gap-3">
        <Button
          type="submit"
          onClick={handleSubmit}
          disabled={isLoading}
          className={`w-full text-sm sm:text-base py-2 sm:py-3 ${
            resolvedTheme === "dark"
              ? "bg-purple-800 text-purple-200 hover:bg-purple-700"
              : "bg-purple-600 hover:bg-purple-700 text-white"
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {isLoading ? "Signing in..." : "Login"}
        </Button>
        <Button
          variant="outline"
          className={`w-full text-sm sm:text-base py-2 sm:py-3 ${
            resolvedTheme === "dark"
              ? "border-purple-700 text-purple-300 hover:bg-purple-900/50"
              : "border-purple-300 text-gray-900 hover:bg-purple-50"
          }`}
        >
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  );
}
