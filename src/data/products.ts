import diningTableImg from "@/assets/product-dining-table.jpg";
import bookshelfImg from "@/assets/product-bookshelf.jpg";
import chairImg from "@/assets/product-chair.jpg";
import nightstandImg from "@/assets/product-nightstand.jpg";
import coffeeTableImg from "@/assets/product-coffee-table.jpg";
import deskImg from "@/assets/product-desk.jpg";
import benchImg from "@/assets/product-bench.jpg";
import cabinetImg from "@/assets/product-cabinet.jpg";
import mirrorImg from "@/assets/product-mirror.jpg";
import coatRackImg from "@/assets/product-coat-rack.jpg";
import sideboardImg from "@/assets/product-sideboard.jpg";
import armchairImg from "@/assets/product-armchair.jpg";
import plantStandImg from "@/assets/product-plant-stand.jpg";
import bedImg from "@/assets/product-bed.jpg";

export interface Product {
  id: string;
  image: string;
  title: string;
  category: string;
  price: number;
  priceFormatted: string;
  description: string;
  stock: number;
  materials: string[];
  dimensions: string;
}

export const products: Product[] = [
  {
    id: "mesa-roble-imperial",
    image: diningTableImg,
    title: "Mesa Roble Imperial",
    category: "Mesas de comedor",
    price: 2450000,
    priceFormatted: "$2.450.000",
    description: "Mesa de comedor artesanal fabricada en roble macizo europeo. Cada pieza es única, con vetas naturales que cuentan una historia. Acabado con aceites naturales que resaltan la belleza de la madera.",
    stock: 3,
    materials: ["Roble macizo europeo", "Acabado con aceite natural"],
    dimensions: "200 x 100 x 76 cm",
  },
  {
    id: "libreria-nordica",
    image: bookshelfImg,
    title: "Librería Nórdica",
    category: "Estanterías",
    price: 1890000,
    priceFormatted: "$1.890.000",
    description: "Librería de diseño escandinavo con líneas limpias y funcionalidad excepcional. Fabricada en fresno con detalles en latón envejecido.",
    stock: 5,
    materials: ["Fresno macizo", "Detalles en latón"],
    dimensions: "180 x 35 x 200 cm",
  },
  {
    id: "silla-copenhagen",
    image: chairImg,
    title: "Silla Copenhagen",
    category: "Sillas",
    price: 485000,
    priceFormatted: "$485.000",
    description: "Silla de diseño danés con respaldo ergonómico tallado a mano. Comodidad y elegancia en perfecta armonía.",
    stock: 12,
    materials: ["Haya maciza", "Asiento tapizado en lino"],
    dimensions: "45 x 50 x 82 cm",
  },
  {
    id: "mesita-cerezo",
    image: nightstandImg,
    title: "Mesita Cerezo",
    category: "Dormitorio",
    price: 695000,
    priceFormatted: "$695.000",
    description: "Mesa de noche en cerezo con cajón silencioso y acabado satinado. El complemento perfecto para tu dormitorio.",
    stock: 8,
    materials: ["Cerezo americano", "Herrajes de bronce"],
    dimensions: "50 x 40 x 55 cm",
  },
  {
    id: "mesa-centro-nogal",
    image: coffeeTableImg,
    title: "Mesa Centro Nogal",
    category: "Mesas de centro",
    price: 1250000,
    priceFormatted: "$1.250.000",
    description: "Mesa de centro con diseño orgánico inspirado en formas naturales. Las patas curvadas evocan las raíces de un árbol ancestral.",
    stock: 4,
    materials: ["Nogal americano", "Acabado natural"],
    dimensions: "120 x 80 x 40 cm",
  },
  {
    id: "escritorio-ejecutivo",
    image: deskImg,
    title: "Escritorio Ejecutivo",
    category: "Oficina",
    price: 2180000,
    priceFormatted: "$2.180.000",
    description: "Escritorio de líneas mid-century con amplios cajones y espacio de trabajo generoso. Diseñado para la productividad y el estilo.",
    stock: 2,
    materials: ["Roble europeo", "Cajones con guías metálicas"],
    dimensions: "140 x 70 x 76 cm",
  },
  {
    id: "banco-jardin",
    image: benchImg,
    title: "Banco Jardín Artesanal",
    category: "Exterior",
    price: 890000,
    priceFormatted: "$890.000",
    description: "Banco de exterior con tratamiento especial para resistir la intemperie. Incluye cojín de lino natural.",
    stock: 6,
    materials: ["Teca birmana", "Cojín de lino impermeable"],
    dimensions: "150 x 55 x 90 cm",
  },
  {
    id: "vitrina-clasica",
    image: cabinetImg,
    title: "Vitrina Clásica",
    category: "Almacenaje",
    price: 3450000,
    priceFormatted: "$3.450.000",
    description: "Vitrina de inspiración victoriana con puertas de vidrio biselado. Una pieza de museo para tu hogar.",
    stock: 1,
    materials: ["Cerezo oscuro", "Vidrio biselado", "Herrajes de hierro forjado"],
    dimensions: "120 x 45 x 200 cm",
  },
  {
    id: "espejo-circular",
    image: mirrorImg,
    title: "Espejo Circular Teca",
    category: "Decoración",
    price: 520000,
    priceFormatted: "$520.000",
    description: "Marco de espejo circular tallado en teca con vetas naturales visibles. Cada espejo es una obra de arte única.",
    stock: 10,
    materials: ["Teca natural", "Espejo de alta definición"],
    dimensions: "Ø 80 cm",
  },
  {
    id: "perchero-pared",
    image: coatRackImg,
    title: "Perchero de Pared",
    category: "Recibidor",
    price: 285000,
    priceFormatted: "$285.000",
    description: "Perchero minimalista con ganchos de latón macizo sobre base de arce. Funcionalidad y diseño en armonía.",
    stock: 15,
    materials: ["Arce canadiense", "Ganchos de latón"],
    dimensions: "80 x 10 x 15 cm",
  },
  {
    id: "aparador-escandinavo",
    image: sideboardImg,
    title: "Aparador Escandinavo",
    category: "Salón",
    price: 2890000,
    priceFormatted: "$2.890.000",
    description: "Aparador de líneas puras con puertas correderas y patas anguladas. El corazón de tu salón escandinavo.",
    stock: 3,
    materials: ["Fresno blanqueado", "Interior en roble"],
    dimensions: "180 x 45 x 80 cm",
  },
  {
    id: "sillon-cuero",
    image: armchairImg,
    title: "Sillón Cuero Artesanal",
    category: "Sillones",
    price: 1750000,
    priceFormatted: "$1.750.000",
    description: "Sillón con estructura de nogal y cojines de cuero italiano curtido al vegetal. Comodidad atemporal.",
    stock: 4,
    materials: ["Nogal americano", "Cuero italiano"],
    dimensions: "75 x 80 x 85 cm",
  },
  {
    id: "estante-plantas",
    image: plantStandImg,
    title: "Estante para Plantas",
    category: "Decoración",
    price: 345000,
    priceFormatted: "$345.000",
    description: "Soporte para plantas de tres niveles inspirado en el minimalismo japonés. Perfecto para crear tu rincón verde.",
    stock: 20,
    materials: ["Bambú natural", "Ensambles tradicionales"],
    dimensions: "40 x 30 x 90 cm",
  },
  {
    id: "cama-rustica",
    image: bedImg,
    title: "Cama Rústica King",
    category: "Dormitorio",
    price: 3980000,
    priceFormatted: "$3.980.000",
    description: "Cama king size con cabecero de tablones macizos. Cada nudo y veta cuenta la historia del bosque.",
    stock: 2,
    materials: ["Pino añejo recuperado", "Acabado mate natural"],
    dimensions: "200 x 180 x 120 cm",
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};
