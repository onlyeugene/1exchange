import Link from "next/link";
import { appName } from "@/lib/constant";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="self-center md:text-2xl text-xl font-semibold whitespace-nowrap text-white">
        {appName}
      </span>
    </Link>
  );
};

export default Logo;
