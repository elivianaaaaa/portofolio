import Image from 'next/image'
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Container } from 'postcss';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar/>
      <div class="container mt-20 mx-auto px-12 py-4">
      <HeroSection/>
      <AboutMe/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
      </div>
    </main>
  );
} 
