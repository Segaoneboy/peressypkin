"use client"

import { motion } from "framer-motion";

const Header = () => {
    return (
        <>
            <header className='flex flex-col justify-center items-center h-screen'>
                <motion.h1
                    className="md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-5xl  text-center  font-extrabold uppercase mb-4"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    Peressypkin Sergey
                </motion.h1>
                <motion.h3
                    className="lg:text-3xl xl:text-4xl text-xl  text-center font-semibold uppercase tracking-[1rem]"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    Frontend Developer
                </motion.h3>
            </header>
        </>
    );
};

export default Header;
