"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/constants/varients";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Avatar from "@/components/Avatar";
import Section from "@/components/Section";
import Stats from "@/components/Stats";

const HomePage = () => {
    return (
        <Section>
            <div className="flex container w-full flex-1 flex-col items-center justify-center gap-6">
                <div className="w-full flex flex-col xl:flex-row justify-between items-center gap-6 group py-8">
                    {/* Introduction text */}
                    <div className="text-center xl:text-left flex flex-col gap-2 order-2 xl:order-none">
                        <span className="text-xl pl-1">
                            Sr. Software Developer(Android/Ios)
                        </span>
                        <div className="h1 mb-4">
                            <motion.h1
                                variants={fadeIn("left", 1.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 0.7 }}
                            >
                                Hello I'm
                            </motion.h1>
                            <motion.h1
                                variants={fadeIn("left", 1.4)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: true, amount: 0.7 }}
                                className="text-accent tracking-[10px]"
                            >
                                Kapil Rao Kolte
                            </motion.h1>
                        </div>
                        <p className="mb-4">
                            I am a passionate software developer who is
                            passionate about creating new experiences. I have a
                            strong interest in technology and enjoy learning new
                            things.
                        </p>
                        {/* Buttons and Socials */}
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <Button
                                varient="outline"
                                size="lg"
                                className="uppercase gap-2"
                            >
                                <a
                                    href="/resume/Kapil_Rao_Kolte_Resume.pdf"
                                    target="_blank"
                                    download={true}
                                >
                                    Download CV
                                </a>
                                <FiDownload className="text-xl" />
                            </Button>
                            <div className="mb-8 xl:mb-0">
                                <Social
                                    containerStyles="flex gap-6"
                                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 order-1 xl:order-none">
                        <Avatar />
                    </div>
                </div>
            </div>
            <Stats />
        </Section>
    );
};

export default HomePage;

