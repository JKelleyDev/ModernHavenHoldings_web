'use client';

import * as React from "react";
import Link from "next/link";
import Image from "next/image"; 
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// Header with centered nav and mobile-friendly design
export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50  bg-white/45 ">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col items-center md:flex-row md:justify-between md:items-center">
        {/* Logo / Brand */}
        <div className="mb-2 md:mb-0">
            <Link href="/">
                <Image
                    src="/logo.png"
                    alt="Modern Haven Logo"
                    width={140}
                    height={40}
                    priority
                />
            </Link>
        </div>
        
        {/* Navigation Menu Centered */}
        <NavigationMenu>
          <NavigationMenuList className="flex flex-wrap justify-center gap-4">
            {/* Home */}
            <NavigationMenuItem>
                <NavigationMenuLink asChild>
                    <Link href="/" className={navigationMenuTriggerStyle()}>
                        Home
                    </Link>
                </NavigationMenuLink>
            </NavigationMenuItem>


            {/* About */}
            <NavigationMenuItem>
                <NavigationMenuLink asChild>
                    <Link href="/about" className={navigationMenuTriggerStyle()}>
                    About
                    </Link>
                </NavigationMenuLink>
            </NavigationMenuItem>


            {/* Rentals */}
            <NavigationMenuItem>
                <NavigationMenuLink asChild>
                    <Link href="/rentals" className={navigationMenuTriggerStyle()}>
                    Rentals
                    </Link>
                </NavigationMenuLink>
            </NavigationMenuItem>


            {/* Login Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Login</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-48">
                  <ListItem href="/login/employee" title="Employee Portal">
                    Manage properties and tenants.
                  </ListItem>
                  <ListItem href="/login/tenant" title="Tenant Portal">
                    Pay rent, request repairs, and more.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}

// Dropdown ListItem component
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
