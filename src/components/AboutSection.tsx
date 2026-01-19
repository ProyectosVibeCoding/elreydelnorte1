import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import craftsmanImg from "@/assets/about-craftsman.jpg";

const stats = [
  { number: "40+", label: "Años de experiencia" },
  { number: "1200+", label: "Muebles creados" },
  { number: "98%", label: "Clientes satisfechos" },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="py-24 md:py-32 bg-card overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <motion.img
                src={craftsmanImg}
                alt="Artesano trabajando la madera"
                className="w-full h-full object-cover"
                style={{ y: imageY }}
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-sm -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-accent rounded-sm -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sans text-sm tracking-[0.3em] text-accent uppercase">
              Nuestra historia
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4">
              Tradición familiar
              <br />
              <span className="text-gradient-gold">desde 1985</span>
            </h2>
            <p className="font-sans text-muted-foreground mt-6 leading-relaxed">
              Somos una familia de artesanos dedicada a crear muebles que
              trascienden generaciones. Cada pieza que sale de nuestro taller
              lleva consigo décadas de conocimiento, técnicas heredadas y un
              amor profundo por la madera.
            </p>
            <p className="font-sans text-muted-foreground mt-4 leading-relaxed">
              Seleccionamos personalmente cada tronco, respetando los tiempos
              naturales de secado y trabajando con herramientas tradicionales
              que nos permiten extraer la esencia de cada madera.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="font-serif text-3xl md:text-4xl font-bold text-accent">
                    {stat.number}
                  </div>
                  <div className="font-sans text-xs md:text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
