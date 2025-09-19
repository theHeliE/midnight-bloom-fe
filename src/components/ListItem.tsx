"use client"
import * as React from "react"
import Link from "next/link"
import { NavigationMenuLink } from "@/components/ui/navigation-menu"
export function ListItem({
  title,
  children,
  href,
  icon,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string; icon?: React.ReactNode }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex items-center gap-2 text-sm leading-none font-medium">
            {icon}
            {title}
          </div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}