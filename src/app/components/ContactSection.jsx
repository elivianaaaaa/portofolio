import React from "react";
import InstagramIcon from "../../../public/instagram-icons.svg";
import GithubIcon from "../../../public/github-icons.svg";
import Link from "next/link";
import Image from "next/image";

const ContactSection = () => {
    const githubUrl = "https://github.com/elivianaaaaa";
    const instagramUrl = "https://www.instagram.com/ellivianaaa_?igshid=ZGNjOWZkYTE3MQ=="

  return (

  <section className='grid md:grid-cols-2 my-12 md:my-12 py-28 gap-4' id='contact'>
    <div>
        <h5 className='text-xl font-bold text-blue-700 my-2'>
            Let's Talk!
        </h5>
        <p className='text-gray-800 mb-4 max-w-md'>
            {" "}
            I am eagerly awaiting your message! 
            Feel free to communicate or ask questions through the form below or by sending a direct email. 
            I&apos;ll try my best to get back to you promptly. My inbox is always open, whether for inquiries or just to say hi. 
            Thank you!
        </p>
        <div className="socials flex flex-row gap-2">
            <Link href={githubUrl}>
                <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link href={instagramUrl}>
                <Image src={InstagramIcon} alt="Instagram Icon" />
            </Link>
        </div>
    </div>
    <div>
        <form className='flex flex-col'>
            <div className='mb-6'>
                <label 
                htmlFor="email" 
                className='text-black block text-sm mb-2 font-medium'
                >
                    Your email
                </label>
                <input 
                type='email' 
                id='email' 
                required 
                className='bg-[#cccccc] border border-[#33353F] placeholder-slate-700 text-gray-500 text-sm rounded-lg block w-full p-2.5'
                placeholder='username@google.com'
                />
            </div>
            <div className='mb-6'>
                <label 
                htmlFor="subject" 
                className='text-black block text-sm mb-2 font-medium'
                >
                    Subject
                </label>
                <input 
                type='text' 
                id='subject' 
                required 
                className='bg-[#cccccc] border border-[#33353F] placeholder-slate-700 text-gray-500 text-sm rounded-lg block w-full p-2.5'
                placeholder='Just saying hi!'
                />
            </div>
            <div className='mb-6'>
                <label
                    htmlFor='message'
                    className='text-black block mb-2 text-sm font-medium'
                >
                    Message
                </label>
                <textarea
                    name='message'
                    id='message'
                    className='bg-[#cccccc] border border-[#33353F] placeholder-slate-700 text-gray-500 text-sm rounded-lg block w-full p-2.5'
                    placeholder='Type your message..'
                />
            </div>
            <button
                type='submit'
                className='bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-lg w-full '
            >
                Send Message
            </button>
        </form>
    </div>
  </section>

  );
};

export default ContactSection;