'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
      {/* Navigation Bar */}
      <motion.nav
        className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Төмөр Бетон</h1>
          <div className="space-x-4">
            <a href="#home" className="hover:text-gray-600 transition-colors">Нүүр</a>
            <a href="#about" className="hover:text-gray-600 transition-colors">Бидний тухай</a>
            <a href="#products" className="hover:text-gray-600 transition-colors">Бүтээгдэхүүн</a>
            <a href="#contact" className="hover:text-gray-600 transition-colors">Холбоо барих</a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen w-full bg-black">
         <Image
          src="https://fujisilvertech.com/wp-content/uploads/2025/05/ST_7923.webp"
          alt="Concrete Construction Background"
          fill
          className="object-cover opacity-60"
          quality={100}
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            Төмөр Бетон Эдлэлийн Үйлдвэр
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 text-lg md:text-2xl max-w-2xl"
          >
            Найдвартай бетон бүтээгдэхүүн, Монголын бүтээн байгуулалтад зориулав
          </motion.p>
          <motion.a
            href="#contact"
            className="mt-8 px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Захиалга өгөх
          </motion.a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold mb-6 text-center">Бидний тухай</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Манай үйлдвэр нь барилгын салбарын хэрэгцээнд бүрэн нийцсэн төмөр бетон эдлэлийг үйлдвэрлэн
            нийлүүлдэг. Үндэсний үйлдвэрлэгчийн хувьд бид чанар, шуурхай хүргэлтийг эрхэмлэдэг.
          </p>
        </motion.div>
      </section>

      {/* Products Section with Carousel */}
      <section id="products" className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-4xl font-semibold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Бүтээгдэхүүнүүд
          </motion.h2>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="flex flex-col items-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={products[currentSlide].image}
                  alt={products[currentSlide].name}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md mb-4 object-cover"
                  loading="lazy"
                />
                <h3 className="text-2xl font-semibold mb-2">{products[currentSlide].name}</h3>
                <p className="text-sm text-gray-600 text-center max-w-md">
                  {products[currentSlide].description}
                </p>
              </motion.div>
            </AnimatePresence>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
            >
              <ChevronRight size={24} />
            </button>
            <div className="flex justify-center mt-4 space-x-2">
              {products.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 w-2 rounded-full ${
                    i === currentSlide ? 'bg-black' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

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