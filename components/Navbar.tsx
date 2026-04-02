"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const navLink = (path: string, label: string) => {
        const isActive = pathname === path;

        return (
        <Link
            href={path}
            className={`${
            isActive
                ? "transition duration-300 ease-in-out text-orange-400 hover:text-underline"
                : "transition duration-300 ease-in-out hover:text-orange-400"
            }`}
        >
            {label}
        </Link>
        );
    };

    return (
        <nav className="max-w-5xl mx-auto flex flex-wrap md:flex-nowrap md:justify-between items-center p-4 border-b border-gray-300">
            <h1 className="font-bold text-lg w-full text-center mb-5 md:m-0 md:w-auto">My Portfolio</h1>
            <div className="space-x-6 text-center w-full md:w-auto">
                {navLink("/", "Home")}
                {navLink("/about", "About")}
                {navLink("/portfolio", "Portfolio")}
                {navLink("/contact", "Contact")}
            </div>
        </nav>
  );
}