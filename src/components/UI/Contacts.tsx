"use client"
import React from 'react';
import { FaInstagram, FaTelegram, FaLinkedinIn, FaGithub   } from "react-icons/fa";
const Contacts = () => {
    const handleClick = () =>{
        window.location.href = "https://t.me/sega_oneboy";
    }


    return (
        <>
            <footer  className="flex flex-col justify-end-safe items-center mt-24">
                <h1 className="md:text-6xl text-3xl font-bold flex justify-center py-4">
                    Contacts
                </h1>
                <p className="text-center text-xl py-2 px-4">
                    Want to learn more or just chat?
                </p>
                <button className= 'rounded-lg text-bold text-2xl border-2 border-white my-4 px-6 py-2' onClick={handleClick}>
                    Write
                </button>
                <div className="flex justify-between mb-4">
                    <a href="https://www.instagram.com/sega_oneboy/">
                        <FaInstagram color="white" size={40} className="my-4 mx-4" />
                    </a>
                    <a href="http://www.linkedin.com/in/sergey-peressypkin-97b0332b4">
                        <FaLinkedinIn color="white" size={40} className="my-4 mx-4" />
                    </a>
                    <a href="https://t.me/segasdays">
                        <FaTelegram color="white" size={40} className="my-4 mx-4" />
                    </a>
                    <a href="https://github.com/Segaoneboy">
                        <FaGithub  color="white" size={40} className="my-4 mx-4" />
                    </a>
                </div>

            </footer>
        </>
    );
};

export default Contacts;
