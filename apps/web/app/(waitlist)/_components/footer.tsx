"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Icons } from "@call/ui/components/icons";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState<string>("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-[#151515] border-t border-border mt-auto w-full">
      <div className="mx-auto w-full max-w-5xl px-6 py-10">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
          {/* Left: Brand + description + socials */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Icons.logo className="size-6" />
              <span className="font-lora text-xl">Call</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              open source video conferencing platform, its gonna be ai native 😉
            </p>
            <div className="flex items-center gap-2">
              <Link
                href="https://github.com/Call0dotco/call"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-md p-2 hover:bg-muted-foreground/10"
              >
                <Icons.github className="size-4" />
              </Link>
              <Link
                href="https://discord.com/invite/bre4echNxB"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="rounded-md p-2 hover:bg-muted-foreground/10"
              >
                <Icons.discord />
              </Link>
              <Link
                href="https://x.com/joincalldotco"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="rounded-md p-2 hover:bg-muted-foreground/10"
              >
                <Icons.x className="size-4" />
              </Link>
            </div>
          </div>

          {/* Right: Template sections */}
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div className="flex flex-col gap-2">
              <h3 className="text-white/90 font-medium">Company</h3>
              <Link href="#" className="text-muted-foreground hover:underline">Blog</Link>
              <Link href="#" className="text-muted-foreground hover:underline">Contributors</Link>
              <Link href="#" className="text-muted-foreground hover:underline">About</Link>

            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-white/90 font-medium">Product</h3>
              <Link href="/roadmap" className="text-muted-foreground hover:underline">Roadmap</Link>

            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-2 text-xs text-muted-foreground">
          <p>&copy; {currentYear} Call. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
