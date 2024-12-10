"use client";
import React from "react";
import { easeInOut, motion } from "framer-motion";
import Image from "next/image";

const Avatar = () => {
    return (
        <div className="w-full h-full relative flex justify-center items-center">
            {/* avatar */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 1.3, duration: 0.8, ease: easeInOut },
                }}
                className="w-[256px] h-[256px] xl:w-[460px] xl:h-[460px] mix-blend-lighten absolute"
            >
                <Image
                    src="/assets/avatar-img-1.png"
                    priority
                    quality={100}
                    fill
                    alt=""
                    className="object-contain rounded-full opacity-75"
                />
            </motion.div>

            {/* circle */}
            <motion.svg
                className="w-[264px] xl:w-[480px] h-[264px] xl:h-[480px]"
                fill="transparent"
                viewBox="0 0 506 506"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                        delay: 1.3,
                        duration: 0.8,
                    },
                }}
            >
                <motion.circle
                    cx="253"
                    cy="253"
                    r="250"
                    stroke="#00ff99"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ strokedashkarray: "24 10 0 0" }}
                    animate={{
                        strokeDasharray: [
                            "15 120 25 25",
                            "16 25 92 72",
                            "4 250 22 22",
                        ],
                        rotate: [120, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
            </motion.svg>
        </div>
    );
};

export default Avatar;

