import vanitoryImg from "@/assets/producto-vanitory.png";
import aparadorImg from "@/assets/producto-aparador.png";
import cocinaGrisImg from "@/assets/producto-cocina-gris.png";
import deckImg from "@/assets/producto-deck.png";
import cocinaMaderaImg from "@/assets/producto-cocina-madera.png";
import cocinaCelesteImg from "@/assets/producto-cocina-celeste.png";
import comoditaImg from "@/assets/producto-comodita.png";
import vitrinaImg from "@/assets/producto-vitrina.png";
import panelTvImg from "@/assets/producto-panel-tv.png";

export interface Product {
  id: string;
  image: string;
  title: string;
  category: string;
  description: string;
  materials: string[];
  dimensions: string;
}

export const products: Product[] = [
  {
    id: "vanitory-moderno",
    image: vanitoryImg,
    title: "Vanitory Moderno",
    category: "Baño",
    description: "Mueble de baño con diseño contemporáneo en acabado blanco brillante. Incluye cajones amplios con guías suaves y espacio optimizado para almacenamiento.",
    materials: ["MDF laqueado", "Herrajes de acero inoxidable"],
    dimensions: "80 x 45 x 85 cm",
  },
  {
    id: "aparador-bicolor",
    image: aparadorImg,
    title: "Aparador Bicolor",
    category: "Almacenaje",
    description: "Elegante aparador con combinación de madera natural y acabado blanco. Puertas con vidrio y cajones inferiores para organización versátil.",
    materials: ["Madera maciza", "Vidrio templado", "Herrajes de bronce"],
    dimensions: "100 x 40 x 90 cm",
  },
  {
    id: "cocina-integral-gris",
    image: cocinaGrisImg,
    title: "Cocina Integral Gris",
    category: "Cocinas",
    description: "Cocina integral con diseño minimalista en tono gris topo. Muebles superiores e inferiores con amplio espacio de almacenamiento y mesada resistente.",
    materials: ["Melamina premium", "Mesada de cuarzo"],
    dimensions: "A medida",
  },
  {
    id: "deck-exterior",
    image: deckImg,
    title: "Deck de Madera",
    category: "Exterior",
    description: "Deck de madera para exterior ideal para piscinas y jardines. Tratamiento especial para resistir la intemperie y rayos UV.",
    materials: ["Madera tratada para exterior"],
    dimensions: "A medida",
  },
  {
    id: "cocina-madera-natural",
    image: cocinaMaderaImg,
    title: "Cocina Madera Natural",
    category: "Cocinas",
    description: "Cocina completa en madera natural con acabado cálido y elegante. Diseño funcional con múltiples cajones, alacenas y bodeguero integrado.",
    materials: ["Madera maciza", "Mesada de granito"],
    dimensions: "A medida",
  },
  {
    id: "cocina-celeste",
    image: cocinaCelesteImg,
    title: "Cocina Estilo Campo",
    category: "Cocinas",
    description: "Cocina con encanto rústico en color celeste. Puertas con molduras clásicas y herrajes de estilo vintage para un ambiente acogedor.",
    materials: ["Madera laqueada", "Herrajes de hierro forjado"],
    dimensions: "A medida",
  },
  {
    id: "comodita-rustica",
    image: comoditaImg,
    title: "Cómoda Rústica",
    category: "Dormitorio",
    description: "Cómoda de seis cajones en madera maciza con acabado natural. Herrajes clásicos y construcción robusta con detalles artesanales.",
    materials: ["Pino macizo", "Herrajes de bronce antiguo"],
    dimensions: "90 x 45 x 120 cm",
  },
  {
    id: "vitrina-clasica",
    image: vitrinaImg,
    title: "Vitrina Clásica",
    category: "Almacenaje",
    description: "Vitrina tradicional con puertas de vidrio en la parte superior y almacenamiento cerrado debajo. Perfecta para exhibir vajilla y objetos decorativos.",
    materials: ["Madera de cedro", "Vidrio biselado"],
    dimensions: "140 x 45 x 200 cm",
  },
  {
    id: "panel-tv-moderno",
    image: panelTvImg,
    title: "Panel para TV",
    category: "Living",
    description: "Centro de entretenimiento moderno con panel para TV, módulo bajo flotante y estantería lateral. Diseño contemporáneo que maximiza el espacio.",
    materials: ["MDF laqueado", "Estructura de metal"],
    dimensions: "180 x 35 x 150 cm",
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};
