import React from "react";
import { motion } from "framer-motion";
import { delayAnimation } from "@/constants/varients";

const Section = ({ children }) => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={delayAnimation}
            className="flex-1 flex flex-col justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto xl:pb-6">{children}</div>
        </motion.section>
    );
};

export default Section;

