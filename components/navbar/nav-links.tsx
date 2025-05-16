import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();

  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Crypto Markets",
      href: "/markets",
    },
    {
      label: "Crypto News",
      href: "/news",
    },
    {
      label: "FAQs",
      href: "/faqs",
    },
  ];

  return (
    <ul className="flex items-center gap-4 text-sm">
      {links.map((link) => {
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`transition-all duration-300 ${
                pathname === link.href
                  ? "text-gray underline-offset-8 underline decoration-2"
                  : "text-light hover:text-gray hover:underline hover:underline-offset-8 hover:decoration-2"
              }`}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
