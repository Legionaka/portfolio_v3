"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { isNavigationItemCurrent, navigationItems } from "@/lib/navigation";

export function SiteNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="site-nav" aria-label="Main navigation">
        {navigationItems.map(([label, href]) => {
          const current = isNavigationItemCurrent(pathname, href);
          return (
            <Link key={href} href={href} aria-current={current ? "page" : undefined}>
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="mobile-nav-wrap">
        <button
          type="button"
          className="mobile-menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        {open && (
          <nav className="mobile-nav-panel" id="mobile-navigation" aria-label="Mobile navigation">
            {navigationItems.map(([label, href]) => {
              const current = isNavigationItemCurrent(pathname, href);
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={current ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </>
  );
}
