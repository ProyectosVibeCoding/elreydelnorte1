import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Llámanos",
    content: "3512 34-6427",
    href: "tel:+5493512346427",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    content: "+54 9 3512 34-6427",
    href: "https://wa.me/5493512346427",
  },
  {
    icon: MapPin,
    title: "Visítanos",
    content: "Av. Hipólito Yrigoyen 456, X5000 Córdoba, Argentina",
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
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("https") ? "_blank" : undefined}
                        rel={info.href.startsWith("https") ? "noopener noreferrer" : undefined}
                        className="font-sans text-sm text-primary-foreground/60 mt-1 hover:text-accent transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="font-sans text-sm text-primary-foreground/60 mt-1">
                        {info.content}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[400px] lg:h-full min-h-[400px] rounded-sm overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.8876!2d-64.1888!3d-31.4201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a29f89a85a4d%3A0x80a6b2e4e0c9e1d7!2sAv.%20Hip%C3%B3lito%20Yrigoyen%20456%2C%20C%C3%B3rdoba%2C%20Argentina!5e0!3m2!1ses!2sar!4v1699999999999!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de El Rey del Norte"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
