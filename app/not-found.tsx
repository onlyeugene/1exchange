import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center  px-4">
      <div className="bg-white p-10 flex flex-col items-center  w-full">
        <div className="md:text-[300px] text-[100px] text-center  font-extrabold text-[#0d7fa3] mb-2">
          404
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          Page Not Found
        </h1>
        <p className="text-gray-500 mb-6 text-center">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 md:px-5 md:py-2 px-3 py-2 rounded-full bg-[#0d7fa3] text-white font-semibold md:text-base text-xs shadow hover:bg-[#117ca6] transition"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
