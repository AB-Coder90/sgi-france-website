import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Sector {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const sectors: Sector[] = [
  {
    title: "Aéronautique",
    description: "Solutions de peinture pour l'industrie aéronautique, répondant aux normes les plus strictes.",
    tags: ["Haute Performance", "Certification", "Durabilité"],
    image: "/images/sectors/aeronautique.jpg"
  },
  {
    title: "Automobile",
    description: "Systèmes de peinture innovants pour l'industrie automobile, alliant esthétique et protection.",
    tags: ["Innovation", "Efficacité", "Qualité"],
    image: "/images/sectors/automobile.jpg"
  },
  {
    title: "Industrie",
    description: "Solutions complètes pour les applications industrielles, optimisant la productivité.",
    tags: ["Productivité", "Fiabilité", "Support"],
    image: "/images/sectors/industrie.jpg"
  }
];

const SectorCard = ({ sector }: { sector: Sector }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden h-full">
        <div className="relative h-48">
          <img
            src={sector.image}
            alt={sector.title}
            className="object-cover w-full h-full"
          />
        </div>
        <CardHeader>
          <CardTitle>{sector.title}</CardTitle>
          <CardDescription>{sector.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {sector.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const SectorsGrid: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold mb-4">
            Nos Secteurs d'Activité
          </h2>
          <p className="text-lg text-muted-foreground">
            Des solutions adaptées à chaque industrie
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector) => (
            <SectorCard key={sector.title} sector={sector} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsGrid;
