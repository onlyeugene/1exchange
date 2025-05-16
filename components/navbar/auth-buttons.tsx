import Link from "next/link";
import { usePathname } from "next/navigation";

const UserMenu = () => {
  const pathname = usePathname();

  const Menu = [
    {
      label: "Explore",
      href: "/explore",
    },
    {
      label: "Contact",
      href: "/contact",
      isButton: true,
    },
  ];
  return (
    <div className="hidden md:flex items-center space-x-4 text-sm">
      {Menu.map((item) => (
        <Link
          href={item.href}
          key={item.label}
          className={`transition-all duration-300 ${
            pathname === item.href ? "text-gray" : "text-light hover:text-gray-500"
          } ${
            item.isButton
              ? "border border-current py-2 px-6 hover:bg-white/10"
              : ""
          }`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default UserMenu;
