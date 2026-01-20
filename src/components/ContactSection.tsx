import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visítanos",
    content: "Av. Hipólito Yrigoyen 456, X5000 Córdoba, Argentina",
  },
  {
    icon: Phone,
    title: "Llámanos",
    content: "+54 351 456 7890",
  },
  {
    icon: Mail,
    title: "Escríbenos",
    content: "info@artesaniamadera.ar",
  },
  {
    icon: Clock,
    title: "Horario",
    content: "Lun - Vie: 10:00 - 19:00",
  },
];

export function ContactSection() {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-sans text-sm tracking-[0.3em] text-accent uppercase">
              Contacto
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4">
              Hablemos de tu
              <br />
              <span className="text-gradient-gold">proyecto ideal</span>
            </h2>
            <p className="font-sans text-primary-foreground/70 mt-6 max-w-md">
              ¿Tienes una idea en mente? Cuéntanos tu visión y crearemos juntos
              el mueble perfecto para tu hogar.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-sm bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-accent" size={22} />
                  </div>
                  <div>
                    <h4 className="font-sans font-medium text-primary-foreground">
                      {info.title}
                    </h4>
                    <p className="font-sans text-sm text-primary-foreground/60 mt-1">
                      {info.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-sans text-sm text-primary-foreground/80 mb-2 block">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="font-sans text-sm text-primary-foreground/80 mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="font-sans text-sm text-primary-foreground/80 mb-2 block">
                  Asunto
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent transition-colors"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>
              <div>
                <label className="font-sans text-sm text-primary-foreground/80 mb-2 block">
                  Mensaje
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Cuéntanos tu proyecto..."
                />
              </div>
              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-accent text-accent-foreground font-sans font-medium tracking-wide rounded-sm hover:bg-accent/90 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Enviar mensaje
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
