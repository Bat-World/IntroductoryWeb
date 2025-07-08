"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    {/* Company Info */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-4">
        Манай <span className="text-[#E38710]">Компани</span>
      </h2>
      <p className="text-lg text-gray-700 mb-4 leading-relaxed">
        Төмөр Бетон ХХК нь Монголын барилгын салбарт чанартай бетон эдлэлийг
        үйлдвэрлэн нийлүүлж, хэрэглэгчдийн итгэлийг олж авсан үндэсний үйлдвэрлэгч юм.
      </p>
      <p className="text-sm text-gray-500">
        Бидний зорилго — найдвартай, хурдан, чанартай бүтээгдэхүүнээр хэрэглэгчдийг хангах.
      </p>
    </motion.div>

    {/* CEO Image and Quote */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center"
    >
      <Image
        src="/images/ceo.jpg"
        alt="CEO of Company"
        width={300}
        height={300}
        className="rounded-full shadow-lg object-cover mb-4"
      />
      <h3 className="text-xl font-semibold">Бат-Эрдэнэ</h3>
      <p className="text-sm text-gray-600">Гүйцэтгэх захирал</p>
      <blockquote className="mt-4 italic text-gray-500 max-w-md">
        “Чанартай бүтээгдэхүүн бол урт хугацааны хамтын ажиллагааны үндэс юм.”
      </blockquote>
    </motion.div>
  </div>
</section>

  );
}
