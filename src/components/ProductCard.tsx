import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  category: string;
  price: string;
  stock: number;
  delay?: number;
}

export function ProductCard({ id, image, title, category, price, stock, delay = 0 }: ProductCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/producto/${id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="group cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative overflow-hidden rounded-sm bg-card">
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        
        {/* Stock badge */}
        {stock <= 3 && stock > 0 && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-amber-500 text-white text-xs font-sans font-medium rounded-full">
            {stock === 1 ? "¡Última unidad!" : `Solo ${stock}`}
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/40 transition-all duration-500 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
              <ArrowRight className="text-accent-foreground" size={22} />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-4 space-y-1">
        <span className="font-sans text-xs tracking-widest text-muted-foreground uppercase">
          {category}
        </span>
        <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="font-sans text-lg font-medium text-accent">
          {price}
        </p>
      </div>
    </motion.div>
  );
}
