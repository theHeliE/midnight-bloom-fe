"use client";
import react, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { LoginCard } from "@/components/LoginCard";

export default function LoginPage() {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <LoginCard />
    </div>
  );
}
