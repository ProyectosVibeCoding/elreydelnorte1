import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { ProductCard } from "./ProductCard";
import { products } from "@/data/products";
import { Filter, X } from "lucide-react";

export function CollectionSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(products.map((p) => p.category))];
    return cats.sort();
  }, []);

  // Filter products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    return result;
  }, [selectedCategory]);

  const clearFilters = () => {
    setSelectedCategory(null);
  };

  const hasActiveFilters = selectedCategory !== null;

  return (
    <section id="coleccion" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-sans text-sm tracking-[0.3em] text-accent uppercase">
            Nuestro catálogo
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4">
            Nuestros Productos
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto mt-4">
            Cada mueble es fabricado con dedicación y los mejores materiales
            para garantizar calidad y durabilidad.
          </p>
        </motion.div>

        {/* Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          {/* Mobile filter toggle */}
          <div className="flex items-center justify-between md:hidden mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-sm font-sans text-sm"
            >
              <Filter size={18} />
              Filtros
              {hasActiveFilters && (
                <span className="w-2 h-2 bg-accent rounded-full" />
              )}
            </button>
            
            <span className="text-sm text-muted-foreground">
              {filteredProducts.length} productos
            </span>
          </div>

          {/* Filter bar - always visible on desktop, toggleable on mobile */}
          <div className={`${showFilters ? "block" : "hidden"} md:block`}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 md:p-0 bg-card md:bg-transparent rounded-sm md:rounded-none">
              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-full font-sans text-sm transition-all duration-300 ${
                    selectedCategory === null
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  Todos
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-sans text-sm transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Count and clear */}
              <div className="flex items-center gap-4">
                <span className="hidden md:block text-sm text-muted-foreground">
                  {filteredProducts.length} productos
                </span>

                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X size={16} />
                    Limpiar
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProductCard
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  category={product.category}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="font-sans text-muted-foreground text-lg">
              No se encontraron productos en esta categoría.
            </p>
            <button
              onClick={clearFilters}
              className="mt-4 text-accent hover:underline font-sans"
            >
              Ver todos los productos
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
