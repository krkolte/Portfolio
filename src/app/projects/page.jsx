"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import SliderButtons from "@/components/SliderButtons";
import Section from "@/components/Section";

const projects = [
    {
        num: "01",
        category: "Mobile Development",
        title: "Delightree",
        description:
            "Delightree is a comprehensive franchising tech platform tailored for emerging franchises, simplifying the process of managing locations while maintaining brand consistency.",
        stack: ["React Native", "Firebase", "Express.js", "MongoDB"],
        image: "",
        live: "https://apps.apple.com/in/app/delightree/id1505988671",
    },
    {
        num: "02",
        category: "Mobile Development",
        title: "Amori",
        description:
            "A unique dating coach app where users share their conversations with coaches who assist in improving relationship health.",
        stack: ["React.js", "Tailwind CSS", "GSAP"],
        image: "",
        live: "https://apps.apple.com/us/app/amori-personal-dating-coach/id1552334356",
    },
    {
        num: "03",
        category: "Mobile Development",
        title: "Employee Link ",
        description:
            "Employee Link is a comprehensive tool for tracking employee schedules, time, and GPS-based location for clock-ins and outs.",
        stack: ["React.js", "Node.js", "Tailwind CSS", "Express.js", "MongoDb"],
        image: "",
        live: "https://apps.apple.com/us/app/employee-link-crew-timesheet/id1397280601?platform=i",
    },
];

const ProjectsPage = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };
    return (
        <Section>
            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                    <div className="flex flex-col gap-[30px] h-[50%]">
                        <div className="text-6xl md:text-8xl leading-none font-extrabold text-transparent gap-4 flex items-baseline text-outline">
                            {project?.num}
                            <span className="text-transparent bg-gradient-to-br bg-clip-text text-start pb-1 from-white via-accent-hover to-accent text-4xl md:text-6xl">
                                {project?.title}
                            </span>
                        </div>

                        {/* category */}
                        <h2 className="text-4xl md:text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize text-pretty">
                            {project?.category} project
                        </h2>

                        {/* description */}
                        <p className="text-white/60 text-pretty">
                            {project?.description}
                        </p>

                        {/* stack */}
                        <ul className="flex gap-4 flex-wrap">
                            {project?.stack.map((stack, index) => (
                                <li
                                    key={index}
                                    className={`text-xl text-accent py-1 rounded-lg`}
                                >
                                    {stack}
                                    {index !== project?.stack.length - 1 && (
                                        <span className="text-white/60">,</span>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* border */}
                        <div className="border border-white/20"></div>

                        {/* buttons */}
                        <div className="flex items-center gap-4">
                            {/* live project button */}
                            <a target="_blank" href={project?.live}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live project</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </a>

                            {/* github project button */}
                            {/* <a target="_blank" href={project?.github}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Github repository</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </a> */}
                        </div>
                    </div>
                </div>
                <div className="w-full xl:w-[50%]">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        className="xl:h-[520px] mb-12"
                        onSlideChange={handleSlideChange}
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide key={index} className="w-full">
                                <div className="h-[300px] md:h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                    {/* overlay */}
                                    <div></div>
                                    {/* image */}
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={project?.image}
                                            fill
                                            className="object-cover"
                                            alt={project?.title}
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        <SliderButtons
                            containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                            btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                        />
                    </Swiper>
                </div>
            </div>
        </Section>
    );
};

export default ProjectsPage;

