import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Walmo Home"
      className={`inline-flex items-center group select-none focus-ring rounded-lg ${className}`}
    >
      <div className="relative h-10 sm:h-11 w-36 sm:w-40 transition-opacity duration-200 group-hover:opacity-90">
        <Image
          src={siteConfig.assets.logo}
          alt="Walmo Logo"
          fill
          priority
          className="object-contain object-left"
          sizes="120px"
        />
      </div>
    </Link>
  );
}
