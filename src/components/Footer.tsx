import { motion } from "framer-motion";
import { Instagram, Facebook, ArrowUp } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-espresso text-primary-foreground/80">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left flex items-center gap-3">
            <img src={logo} alt="El Rey del Norte" className="h-12 w-auto" />
            <div>
              <h3 className="font-serif text-xl font-bold text-primary-foreground">
                El Rey del Norte
              </h3>
              <p className="font-sans text-sm text-primary-foreground/60">
                © 2025 Todos los derechos reservados
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <motion.a
              href="#"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <Instagram size={18} />
            </motion.a>
            <motion.a
              href="#"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <Facebook size={18} />
            </motion.a>
            <motion.button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
