"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { links } from "@/constants/constants";

const Nav = () => {
    const pathName = usePathname();
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`${
                            link.path === pathName && "text-accent"
                        } capitalize font-medium hover:text-accent-hover transition-all`}
                    >
                        <p className="px-[1px] py-1">{link.name}</p>
                        {link.path === pathName && (
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 0.3, delay: 1.6 }}
                                layoutId="underline"
                                className="w-full h-[1.5px] bg-accent rounded-full"
                            />
                        )}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;

