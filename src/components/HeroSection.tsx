import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen w-full pt-[64px] bg-black font-sans"
    >
      <Image
        src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=1600&auto=format&fit=crop&q=80"
        alt="Concrete Construction Background"
        fill
        className="object-cover opacity-60"
        quality={100}
        priority
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..."
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ fontFamily: "Anton, sans-serif" }}
         className="text-4xl md:text-5xl tracking-tight font-anton"

        >
          <span>Төмөр</span>{" "}
          <span style={{ fontSize: "48px", color: "#E38710" }}>&</span>{" "}
          <span> Бетон Эдлэл</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-lg md:text-xl max-w-2xl uppercase text-gray-200 tracking-[0.08em]"
        >
          Найдвартай бетон <span className="text-[#E38710]">бүтээгдэхүүн</span>
        </motion.p>

        <motion.a
          href="#contact"
          className="mt-8 px-8 py-3 rounded-full text-white font-semibold tracking-wide shadow-lg"
          style={{ backgroundColor: "#E38710" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Захиалга өгөх
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12 text-[#E38710]"
        >
          <ArrowDown size={32} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
