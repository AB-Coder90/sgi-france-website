import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  features: string[];
  isNew?: boolean;
}

const products: Product[] = [
  {
    id: "satajet-x-5500",
    name: "SATAJET X 5500",
    description: "Le pistolet de pulvérisation haute performance pour une finition parfaite",
    category: "Pistolets de Peinture",
    image: "/images/products/satajet-x-5500.webp",
    features: [
      "Technologie X-nozzle",
      "Réduction de la consommation de peinture",
      "Ergonomie optimisée",
    ],
    isNew: true,
  },
  {
    id: 'sata-vision-5000',
    name: 'SATA Vision 5000',
    category: 'Protection Respiratoire',
    description: 'Masque de protection respiratoire avec système de ventilation intégré',
    image: '/images/products/sata-vision-5000.webp',
    features: [
      'Vision panoramique',
      'Ventilation optimisée',
      'Confort maximal',
      'Batterie longue durée'
    ]
  },
  {
    id: 'sata-clean-rcs',
    name: 'SATA Clean RCS',
    category: 'Nettoyage',
    description: 'Station de nettoyage automatique pour pistolets de peinture',
    image: '/images/products/sata-clean-rcs.webp',
    features: [
      'Nettoyage rapide',
      'Économie de solvant',
      'Installation facile',
      'Maintenance réduite'
    ]
  }
];

const categories = Array.from(new Set(products.map(p => p.category)));

export function Products({ className }: { className?: string }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  return (
    <section id="products" className={cn("bg-dark-900 py-24", className)}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:60px_60px]" />
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-primary/5 blur-3xl rounded-full" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-semibold mb-4">
            Nos <span className="text-gradient">Produits</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre gamme complète d'équipements de pulvérisation professionnels,
            conçus pour répondre aux exigences les plus strictes de l'industrie.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant="default"
            className={cn(
              "transition-colors",
              !selectedCategory && "bg-primary text-white hover:bg-primary/90"
            )}
            onClick={() => setSelectedCategory(null)}
          >
            Tous
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant="default"
              className={cn(
                "transition-colors",
                selectedCategory === category && "bg-primary text-white hover:bg-primary/90"
              )}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-dark-800/50 rounded-lg p-6 space-y-4 transition-transform hover:scale-105">
                {product.isNew && (
                  <Badge variant="default" className="absolute top-4 right-4 bg-primary text-white">
                    Nouveau
                  </Badge>
                )}
                <div className="aspect-square relative rounded-lg overflow-hidden bg-dark-700/50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-display font-medium">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature) => (
                      <Badge key={feature} variant="default">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
