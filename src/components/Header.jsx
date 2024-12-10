"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";
const Header = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 1.2,
                    duration: 0.4,
                    ease: "easeInOut",
                },
            }}
        >
            <header className="py-8 xl:py-12 text-white sticky top-0 left-0 z-30 w-full">
                <div className="container mx-auto flex justify-between items-center">
                    {/* logo */}
                    <Link href={"/"}>
                        <h1 className="text-4xl font-semibold bg-gradient-to-br from-white to-accent hover:bg-gradient-to-bl text-transparent bg-clip-text">
                            Kapil<span className="text-accent">.</span>
                        </h1>
                    </Link>
                    {/* desktop navbar */}
                    <div className="hidden xl:flex items-center gap-8">
                        <Nav />
                        <Link href={"/contact"}>
                            <Button>Hire me</Button>
                        </Link>
                    </div>
                    {/* mobile navbar */}
                    <div className="xl:hidden">
                        <MobileNav />
                    </div>
                </div>
            </header>
        </motion.div>
    );
};

export default Header;

