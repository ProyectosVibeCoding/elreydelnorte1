import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CartSheet() {
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative p-2 hover:bg-secondary/50 rounded-full transition-colors">
          <ShoppingCart size={22} className="text-foreground" />
          {totalItems > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs font-medium rounded-full flex items-center justify-center"
            >
              {totalItems}
            </motion.span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg bg-background border-l border-primary/10">
        <SheetHeader>
          <SheetTitle className="font-serif text-2xl text-foreground">
            Tu Carrito ({totalItems})
          </SheetTitle>
        </SheetHeader>

        <div className="mt-8 flex flex-col h-[calc(100vh-180px)]">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <ShoppingCart size={48} className="text-muted-foreground mb-4" />
              <p className="font-sans text-muted-foreground">Tu carrito está vacío</p>
              <p className="font-sans text-sm text-muted-foreground mt-2">
                Explora nuestra colección y encuentra piezas únicas
              </p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                <AnimatePresence mode="popLayout">
                  {items.map((item) => (
                    <motion.div
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className="flex gap-4 p-4 bg-card rounded-sm"
                    >
                      <div className="w-20 h-24 rounded-sm overflow-hidden flex-shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif font-semibold text-foreground truncate">
                          {item.product.title}
                        </h4>
                        <p className="font-sans text-sm text-muted-foreground">
                          {item.product.category}
                        </p>
                        <p className="font-sans text-accent font-medium mt-1">
                          {item.product.priceFormatted}
                        </p>
                        
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border border-primary/20 rounded-sm">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="p-1 hover:bg-secondary transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              disabled={item.quantity >= item.product.stock}
                              className="p-1 hover:bg-secondary transition-colors disabled:opacity-50"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="border-t border-primary/10 pt-4 mt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-sans text-muted-foreground">Subtotal</span>
                  <span className="font-serif text-xl font-semibold text-foreground">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
                
                <Button className="w-full py-6 bg-primary text-primary-foreground font-sans font-medium tracking-wide rounded-sm">
                  Proceder al pago
                </Button>
                
                <p className="text-center text-xs text-muted-foreground mt-3">
                  Envío gratuito en pedidos superiores a $500.000
                </p>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
