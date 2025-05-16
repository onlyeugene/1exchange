// "use client";

// import Link from "next/link";
// import { ChevronDown, ChevronUp } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { useState } from "react";

// const NavDropdownMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <DropdownMenu onOpenChange={setIsOpen}>
//       <DropdownMenuTrigger className="flex items-center focus:outline-none focus:ring-0">
//         More
//         {isOpen ? (
//           <ChevronUp className="w-4 h-4 ml-1 transition-transform duration-200" />
//         ) : (
//           <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200" />
//         )}
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="w-48">
//         <DropdownMenuItem>
//           <Link href="/about" className="w-full">
//             About
//           </Link>
//         </DropdownMenuItem>
//         <DropdownMenuItem>
//           <Link href="/fees" className="w-full">
//             Fees
//           </Link>
//         </DropdownMenuItem>
//         <DropdownMenuItem>
//           <Link href="/support" className="w-full">
//             Support
//           </Link>
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// };

// export default NavDropdownMenu;
