"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image'
import TabButtons from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Microsoft Office</li>
                <li>Graphic Desain</li>
            </ul>
        ),
    },
    {
        title: "Hobby",
        id: "hobby",
        content: (
            <ul className='list-disc pl-2'>
                <li>Photography</li>
                <li>Watching Anime</li>
                <li>Reading Novels</li>
                <li>Listening to Music</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>SMK Negeri 1 Denpasar</li>
                <li>SMP Negeri 2 Mengwi</li>
            </ul>
        ),
    },
];

const AboutMe = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    

    return (
        <section className='text-black' id="about">
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image className='rounded-image rounded-2xl' src="/images/el.jpg" width={400} height={400} alt='pict not found' />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-[#428cb8] mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                Hi! I am Eliviana, a student at SMKN 1 Denpasar. I was born at Tabanan on 19 October 2007. I have a big dream to become a Website Developer. With a determination to continuously learn and grow, I hope to bring innovation and creativity to the world of Website Development.
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButtons
                        selectTab={() => handleTabChange("skills")}
                        active={tab === "skills"}
                    >
                    <span style={{ color: 'black', margin: '8px' }}>Skills</span>
                    </TabButtons>
                    <TabButtons
                        selectTab={() => handleTabChange("hobby")}
                        active={tab === "hobby"}
                    >
                    <span style={{ color: 'black', margin: '8px' }}>Hobby</span>
                    </TabButtons>
                    <TabButtons
                        selectTab={() => handleTabChange("education")}
                        active={tab === "education"}
                    >
                    <span style={{ color: 'black', margin: '8px' }}>Education</span>
                    </TabButtons>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;