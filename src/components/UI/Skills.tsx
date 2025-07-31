"use client"
import { RiReactjsLine, RiTailwindCssFill   } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Skills(){
    return(
        <>
            <motion.div
                className="flex flex-col justify-center-safe h-screen md:gap-y-20 gap-y-10"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <h2 className="xl:text-8xl md:text-6xl text-5xl text-center font-extrabold">My Skills</h2>
                <div className="grid md:grid-cols-3 md:grid-rows-1 grid-cols-1 grid-rows-3 gap-6 justify-items-center-safe">
                    <div className="flex flex-col gap-2 items-center-safe">
                        <div className="flex flex-row justify-center-safe items-center-safe gap-2">
                            <RiReactjsLine  className="lg:h-16 lg:w-16 h-12 w-12 " />
                            <h3 className="lg:text-4xl text-3xl font-extrabold ">Frontend</h3>
                        </div>
                        <p className="flex items-center-safe text-center lg:text-xl text-md font-bold px-6">Over 3 years of experience working with HTML, CSS, JS, React, and Next.js. Projects of varying complexity: from landing pages to web applications.</p>
                    </div>

                    <div className="flex flex-col gap-2 items-center-safe">
                        <div className="flex flex-row justify-center-safe items-center-safe gap-2">
                            <RiTailwindCssFill  className="lg:h-16 lg:w-16 h-12 w-12 " />
                            <h3 className="lg:text-4xl text-3xl font-extrabold ">Web Design</h3>
                        </div>
                        <p className="flex items-center-safe text-center lg:text-xl text-md font-bold px-6">I create beautiful and effective designs and animations using TailwindCSS and Framer Motion.</p>
                    </div>

                    <div className="flex flex-col gap-2 items-center-safe">
                        <div className="flex flex-row justify-center-safe items-center-safe gap-2">
                            <FaNodeJs   className="lg:h-16 lg:w-16 h-12 w-12 " />
                            <h3 className="lg:text-4xl text-3xl font-extrabold ">Backend</h3>
                        </div>
                        <p className="flex items-center-safe text-center lg:text-xl text-md font-bold px-6">I have experience in creating simple servers on Node.js Express and Nest.js, as well as experience working with MongoDB Prisma Postgresql and Supabase.</p>
                    </div>
                </div>
            </motion.div>
        </>
    )
}