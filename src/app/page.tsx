'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SiteHeader } from '@/components/SiteHeader';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { WorksSection } from '@/components/WorkSection';
import { StatsSection } from '@/components/StatsSection';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const products = [
    {
      name: 'Бэлэн бетон хольц',
      description: 'Өндөр чанартай, найдвартай бэлэн бетон хольц',
      image: 'https://media.licdn.com/dms/image/v2/D4D22AQENY1X-0lEf4A/feedshare-shrink_800/feedshare-shrink_800/0/1711606643063?e=2147483647&v=beta&t=2BDZkRnpJcmPtGN47LYogTYp42Vg5XYDde3xsyphiDA', // Placeholder: Replace with real concrete mix image
    },
    {
      name: 'Төмөр бетон эдлэл',
      description: 'Бат бөх, удаан эдэлгээтэй төмөр бетон эдлэл',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLxULG-G4FDJCCDFky76wCRP444FRaTjSXg&s', 
    },
    {
      name: 'Хайрга, дайрга',
      description: 'Барилгын өндөр стандартад нийцсэн хайрга, дайрга',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjiOQ5dQ5V_FozS8g9dbfge-AcZeiQSvG1Ug&s', 
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <main className="min-h-screen text-gray-800">
      <SiteHeader/>
      <HeroSection/>
      <WorksSection/>
      <StatsSection/>
{/* <AboutSection/> */}



      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 text-center bg-white">
        <motion.h2
          className="text-4xl font-semibold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Холбоо барих
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Бидэнтэй холбогдож захиалга өгөөрэй эсвэл манай үйлдвэртэй танилцаарай.
        </motion.p>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <motion.input
              type="text"
              placeholder="Таны нэр"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
            <motion.input
              type="email"
              placeholder="Таны и-мэйл"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
            <motion.textarea
              placeholder="Таны захиа"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              rows={4}
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
            <motion.button
              className="w-full px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Илгээх
            </motion.button>
          </div>
          <div className="flex flex-col items-center">
            <a
              href="tel:+976XXXXXXXX"
              className="mb-4 px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              📞 +976 XXX XXXX
            </a>
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">
                Google Maps Placeholder
                <br />
                Replace with embedded map of factory location
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}