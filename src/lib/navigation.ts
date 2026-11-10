export const navigationItems = [
  ["About", "/about"],
  ["Projects", "/projects"],
  ["Skills", "/skills"],
  ["Contact", "/contact"],
  ["CV", "/cv"],
] as const;

export function isNavigationItemCurrent(pathname: string, href: string) {
  return pathname === href || (href === "/projects" && pathname.startsWith("/projects/"));
}
