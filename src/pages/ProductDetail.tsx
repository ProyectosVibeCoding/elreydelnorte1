import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Minus, Plus, ShoppingCart, Check, Package } from "lucide-react";
import { useState } from "react";
import { getProductById } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = getProductById(id || "");

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-foreground mb-4">Producto no encontrado</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="mr-2" size={18} />
            Volver al inicio
          </Button>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span className="font-sans">Volver</span>
          </motion.button>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-sm bg-card"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col"
            >
              <span className="font-sans text-sm tracking-[0.3em] text-accent uppercase">
                {product.category}
              </span>
              
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2">
                {product.title}
              </h1>
              
              <p className="font-serif text-3xl font-semibold text-accent mt-4">
                {product.priceFormatted}
              </p>

              <p className="font-sans text-muted-foreground mt-6 leading-relaxed">
                {product.description}
              </p>

              {/* Stock indicator */}
              <div className="flex items-center gap-2 mt-6">
                <Package size={18} className={product.stock > 5 ? "text-green-600" : "text-amber-600"} />
                <span className={`font-sans text-sm ${product.stock > 5 ? "text-green-600" : "text-amber-600"}`}>
                  {product.stock > 5 
                    ? `${product.stock} unidades en stock`
                    : product.stock === 1
                      ? "¡Última unidad!"
                      : `Solo ${product.stock} unidades disponibles`
                  }
                </span>
              </div>

              {/* Materials */}
              <div className="mt-8">
                <h3 className="font-sans text-sm tracking-widest text-muted-foreground uppercase mb-3">
                  Materiales
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((material) => (
                    <span
                      key={material}
                      className="px-3 py-1 bg-secondary text-secondary-foreground font-sans text-sm rounded-full"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dimensions */}
              <div className="mt-6">
                <h3 className="font-sans text-sm tracking-widest text-muted-foreground uppercase mb-2">
                  Dimensiones
                </h3>
                <p className="font-sans text-foreground">{product.dimensions}</p>
              </div>

              {/* Quantity selector */}
              <div className="mt-8 flex items-center gap-4">
                <span className="font-sans text-sm text-muted-foreground">Cantidad:</span>
                <div className="flex items-center border border-primary/20 rounded-sm">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="p-3 hover:bg-secondary transition-colors disabled:opacity-50"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center font-sans font-medium">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= product.stock}
                    className="p-3 hover:bg-secondary transition-colors disabled:opacity-50"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Add to cart button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="mt-8 w-full py-4 bg-primary text-primary-foreground font-sans font-medium tracking-wide rounded-sm flex items-center justify-center gap-3 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingCart size={20} />
                Añadir al carrito
              </motion.button>

              {/* Features */}
              <div className="mt-8 space-y-3">
                {[
                  "Envío gratuito a todo el país",
                  "Garantía de 5 años",
                  "Fabricación artesanal bajo pedido",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-muted-foreground">
                    <Check size={16} className="text-accent" />
                    <span className="font-sans text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
