import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";
import { products } from "@/data/products";

export function CollectionSection() {
  return (
    <section id="coleccion" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-sans text-sm tracking-[0.3em] text-accent uppercase">
            Nuestra colección
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4">
            Piezas Destacadas
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto mt-4">
            Cada mueble es una obra de arte única, creada con pasión y dedicación
            usando las mejores maderas nobles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              category={product.category}
              price={product.priceFormatted}
              stock={product.stock}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 border-2 border-primary text-primary font-sans font-medium tracking-wide rounded-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            Ver toda la colección
          </button>
        </motion.div>
      </div>
    </section>
  );
}
