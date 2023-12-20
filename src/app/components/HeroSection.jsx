"use client";
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Link from 'next/link';

const HeroSection = () => {
    return (
    <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
            >
                <h1 className="text-blue-500 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d32d6f] to-[#4973ff]">
                        Hello, I{"\u0027"}m
                    </span>
                    <br></br>
                    <TypeAnimation
                    sequence={[
                        "Eliviana",
                        1000,
                        "Software Engineering Students",
                        1000,
                        "Students of SMKN 1 Denpasar",
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
                    </h1>
                    <p className="text-[#000000] text-base sm:text-lg mb-6 lg:text-xl">
                        I am Ni Kadek Eliviana, you can call me El. I am one of the students at SMKN 1 Denpasar, majoring in Software Engineering.
                    </p>
            <div>
                <Link
                href="#contact"
                className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white"
                >
                Contact Me
                </Link>
            </div>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
            >
            </motion.div>
        </div>
    </section>
    );
};
  
export default HeroSection;
