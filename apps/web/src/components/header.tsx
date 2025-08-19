"use client";
import Link from "next/link";

import { ModeToggle } from "./mode-toggle";
import { Authenticated } from "convex/react";
import AvatarComp from "./comp-375";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const links = [
    { to: "/", label: "Home" },
    { to: "/todos", label: "Todos" },
  ];

  return (
    <div>
      <div className="flex flex-row items-center justify-between px-2 py-4 max-w-7xl mx-auto">
        <Link href="/" className="-rotate-3 hover:rotate-0 transition-all">
          Better-t-stack
        </Link>
        <nav className="flex gap-4">
          {links.map(({ to, label }) => {
            return (
              <Link
                key={to}
                href={to}
                className={pathname === to ? "text-red-400" : ""}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Authenticated>
            <AvatarComp />
          </Authenticated>
          <ModeToggle />
        </div>
      </div>
      <hr />
    </div>
  );
}
