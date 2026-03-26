import { motion } from "framer-motion";

export default function VideoHeroComponent() {
  return (
    <div className="w-full bg-white text-gray-900 dark:bg-black dark:text-white transition-colors">  <section className="relative flex flex-col items-center justify-center px-4 pt-12 pb-6 sm:pt-16 sm:pb-10">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 " />

        {/* Video Icon */}
      

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl font-light text-center max-w-3xl leading-tight"
        >
İhtiyaçlarınıza özel çözümlerle buradayız.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-center text-base  max-w-2xl text-neutral-600 dark:text-neutral-300"
        >
       
        </motion.p>

       
      </section>

    </div>
  );
}
