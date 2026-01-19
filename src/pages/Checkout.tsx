import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Truck, CreditCard, ShieldCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCart } from "@/context/CartContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const checkoutSchema = z.object({
  nombre: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres").max(100, "El nombre es demasiado largo"),
  apellido: z.string().trim().min(2, "El apellido debe tener al menos 2 caracteres").max(100, "El apellido es demasiado largo"),
  email: z.string().trim().email("Email inválido").max(255, "El email es demasiado largo"),
  telefono: z.string().trim().min(8, "Teléfono inválido").max(20, "Teléfono demasiado largo"),
  direccion: z.string().trim().min(5, "La dirección es muy corta").max(200, "La dirección es demasiado larga"),
  ciudad: z.string().trim().min(2, "Ciudad requerida").max(100, "Ciudad demasiado larga"),
  provincia: z.string().trim().min(2, "Provincia requerida").max(100, "Provincia demasiado larga"),
  codigoPostal: z.string().trim().min(4, "Código postal inválido").max(10, "Código postal inválido"),
  notas: z.string().max(500, "Las notas son demasiado largas").optional(),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

export default function Checkout() {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const envioGratis = totalPrice >= 500000;
  const costoEnvio = envioGratis ? 0 : 25000;
  const totalFinal = totalPrice + costoEnvio;

  const onSubmit = async (data: CheckoutFormData) => {
    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("¡Pedido realizado con éxito!", {
      description: "Te enviaremos un email de confirmación.",
    });
    
    clearCart();
    navigate("/");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="font-serif text-3xl text-foreground mb-4">Tu carrito está vacío</h1>
            <p className="text-muted-foreground mb-8">Añade productos a tu carrito para continuar</p>
            <Button onClick={() => navigate("/#coleccion")} variant="outline">
              Ver colección
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-12"
          >
            Finalizar Compra
          </motion.h1>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Contact Information */}
                <div className="bg-card p-6 rounded-sm border border-primary/10">
                  <h2 className="font-serif text-xl font-semibold text-foreground mb-6">
                    Información de Contacto
                  </h2>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre *</Label>
                      <Input
                        id="nombre"
                        {...register("nombre")}
                        placeholder="Tu nombre"
                        className="bg-background"
                      />
                      {errors.nombre && (
                        <p className="text-sm text-destructive">{errors.nombre.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="apellido">Apellido *</Label>
                      <Input
                        id="apellido"
                        {...register("apellido")}
                        placeholder="Tu apellido"
                        className="bg-background"
                      />
                      {errors.apellido && (
                        <p className="text-sm text-destructive">{errors.apellido.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="tu@email.com"
                        className="bg-background"
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono *</Label>
                      <Input
                        id="telefono"
                        {...register("telefono")}
                        placeholder="+54 11 1234 5678"
                        className="bg-background"
                      />
                      {errors.telefono && (
                        <p className="text-sm text-destructive">{errors.telefono.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="bg-card p-6 rounded-sm border border-primary/10">
                  <h2 className="font-serif text-xl font-semibold text-foreground mb-6">
                    Dirección de Envío
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="direccion">Dirección *</Label>
                      <Input
                        id="direccion"
                        {...register("direccion")}
                        placeholder="Calle y número"
                        className="bg-background"
                      />
                      {errors.direccion && (
                        <p className="text-sm text-destructive">{errors.direccion.message}</p>
                      )}
                    </div>
                    
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="ciudad">Ciudad *</Label>
                        <Input
                          id="ciudad"
                          {...register("ciudad")}
                          placeholder="Ciudad"
                          className="bg-background"
                        />
                        {errors.ciudad && (
                          <p className="text-sm text-destructive">{errors.ciudad.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="provincia">Provincia *</Label>
                        <Input
                          id="provincia"
                          {...register("provincia")}
                          placeholder="Provincia"
                          className="bg-background"
                        />
                        {errors.provincia && (
                          <p className="text-sm text-destructive">{errors.provincia.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="codigoPostal">Código Postal *</Label>
                        <Input
                          id="codigoPostal"
                          {...register("codigoPostal")}
                          placeholder="1234"
                          className="bg-background"
                        />
                        {errors.codigoPostal && (
                          <p className="text-sm text-destructive">{errors.codigoPostal.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="notas">Notas del pedido (opcional)</Label>
                      <Textarea
                        id="notas"
                        {...register("notas")}
                        placeholder="Instrucciones especiales para la entrega..."
                        className="bg-background resize-none"
                        rows={3}
                      />
                      {errors.notas && (
                        <p className="text-sm text-destructive">{errors.notas.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Trust badges */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Truck, text: "Envío seguro" },
                    { icon: ShieldCheck, text: "Pago protegido" },
                    { icon: CreditCard, text: "Múltiples medios" },
                  ].map(({ icon: Icon, text }) => (
                    <div
                      key={text}
                      className="flex flex-col items-center text-center p-4 bg-secondary/50 rounded-sm"
                    >
                      <Icon size={24} className="text-accent mb-2" />
                      <span className="text-xs font-sans text-muted-foreground">{text}</span>
                    </div>
                  ))}
                </div>

                {/* Submit button - visible on mobile */}
                <div className="lg:hidden">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-6 bg-primary text-primary-foreground font-sans font-medium tracking-wide rounded-sm"
                  >
                    {isSubmitting ? "Procesando..." : `Confirmar pedido - ${formatPrice(totalFinal)}`}
                  </Button>
                </div>
              </form>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-card p-6 rounded-sm border border-primary/10 sticky top-28">
                <h2 className="font-serif text-xl font-semibold text-foreground mb-6">
                  Resumen del Pedido
                </h2>

                {/* Cart Items */}
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-3">
                      <div className="w-16 h-20 rounded-sm overflow-hidden flex-shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-sans text-sm font-medium text-foreground truncate">
                          {item.product.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          Cant: {item.quantity}
                        </p>
                        <p className="font-sans text-sm text-accent font-medium mt-1">
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="border-t border-primary/10 pt-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">{formatPrice(totalPrice)}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Envío</span>
                    <span className={envioGratis ? "text-green-600" : "text-foreground"}>
                      {envioGratis ? "Gratis" : formatPrice(costoEnvio)}
                    </span>
                  </div>
                  
                  {!envioGratis && (
                    <p className="text-xs text-muted-foreground">
                      Envío gratis en pedidos mayores a $500.000
                    </p>
                  )}
                  
                  <div className="border-t border-primary/10 pt-3 flex justify-between">
                    <span className="font-serif font-semibold text-foreground">Total</span>
                    <span className="font-serif text-xl font-bold text-accent">
                      {formatPrice(totalFinal)}
                    </span>
                  </div>
                </div>

                {/* Submit button - visible on desktop */}
                <div className="hidden lg:block mt-6">
                  <Button
                    type="submit"
                    form="checkout-form"
                    disabled={isSubmitting}
                    onClick={handleSubmit(onSubmit)}
                    className="w-full py-6 bg-primary text-primary-foreground font-sans font-medium tracking-wide rounded-sm"
                  >
                    {isSubmitting ? "Procesando..." : "Confirmar pedido"}
                  </Button>
                </div>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  Al confirmar, aceptas nuestros términos y condiciones
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
