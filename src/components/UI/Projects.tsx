"use client"
import Image from 'next/image'
import {motion} from "framer-motion"

export default function Projects(){
    return(
        <>
            <div className="flex flex-col xl:flex-row  min-h-screen mt-10 md:mt-0">
                <motion.div
                    className="xl:w-1/2 flex flex-col items-center-safe justify-center-safe gap-4 mb-4 xl:mb-0"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="md:text-6xl lg:text-7xl xl:text-8xl  text-5xl font-extrabold text-left">My Projects</h2>
                    <div className="md:w-[55%] m-1 md:m-0 md:border-l-4  text-center md:text-left border-white ">
                        <p className="md:text-xl text-lg pl-2  ">Over the years, I have developed many different websites and web applications. You can view and test these projects yourself.</p>
                    </div>

                </motion.div>
                <motion.div
                    className="grid xl:w-1/2 xl:grid-cols-2 xl:grid-rows-2  grid-cols-1 grid-rows-3 gap-6"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="justify-items-center-safe ">
                        <a href="https://segaoneboy.github.io/MEDI/" className="flex flex-col justify-center items-center " >
                            <Image
                                loading={"lazy"}
                                src="/medi.png"
                                alt="MEDI - mediataion app"
                                width="450"
                                height="450"
                                className="rounded-lg w-[300px] md:w-[450px] h-auto md:hover:w-[600px] justify-items-center-safe"
                            />
                            <h2 className="text-2xl font-bold text-center pt-4 md:hover:underline">MEDI / JavaScript</h2>
                        </a>
                    </div>
                    <div className="justify-items-center-safe">
                        <a href="https://smarttown.vercel.app/" className="flex flex-col justify-center items-center " >
                            <Image
                                loading={"lazy"}
                                src="/smarttown.png"
                                alt="Smarttown "
                                width="450"
                                height="450"
                                className="rounded-lg w-[300px] md:w-[450px] md:hover:w-[600px] h-auto"
                            />
                            <h2 className="text-2xl font-bold text-center pt-4 md:hover:underline">SmartTown / React + TailwindCSS</h2>
                        </a>
                    </div>
                    <div className="justify-items-center-safe ">
                        <a href="https://segaoneboy.github.io/charynCanyon/" className="flex flex-col justify-center items-center " >
                            <Image
                                loading={"lazy"}
                                src="/charyncanyon.png"
                                alt="Charyn canyon landing"
                                width="450"
                                height="450"
                                className="rounded-lg w-[300px] md:w-[450px] md:hover:w-[500px] h-auto"
                            />
                            <h2 className="text-2xl font-bold text-center pt-4 md:hover:underline">Charyn Canyon / JavaScript</h2>
                        </a>
                    </div>
                    <div className="hidden lg:flex flex-col justify-center items-center " >
                        <blockquote className="text-5xl text-center font-bold">
                            Design is not how an item looks, but how it works
                        </blockquote>
                        <cite className="text-xl font-bold text-center mt-4">- Steve Jobs</cite>
                    </div>

                </motion.div>
            </div>
        </>
    )
}