import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import React from 'react';

interface Service {
  title: string;
  description: string;
  href: string;
  image: string;
}

const services: Service[] = [
  {
    title: 'Automobile',
    description: 'Solutions de pulvérisation et équipements spécialisés pour le secteur automobile.',
    href: '/automobile',
    image: '/models/automotive-expertise.jpg',
  },
  {
    title: 'Métiers du Dessert',
    description: 'Équipements et formations pour les professionnels de la pâtisserie et chocolaterie.',
    href: '/dessert',
    image: '/models/dessert-expertise.jpg',
  },
  {
    title: 'Industrie',
    description: 'Solutions d\'automatisation et robotique pour l\'industrie manufacturière.',
    href: '/industrie',
    image: '/models/industry-expertise.jpg',
  },
  {
    title: 'Formation',
    description: 'Programmes de formation professionnelle et certification technique.',
    href: '/formation',
    image: '/models/training-expertise.jpg',
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Nos Domaines d'Expertise
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.href}
              className="group relative block w-full h-[300px] overflow-hidden rounded-lg bg-[#111111] border border-white/5 hover:border-white/10 shadow-[0_4px_12px_rgba(255,255,255,0.01)] hover:shadow-[0_8px_20px_rgba(255,255,255,0.02)] transition-all duration-300"
            >
              <motion.div
                className="relative h-full w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className={cn(
                      "w-full h-full transition-all duration-300 scale-[1.01] group-hover:scale-105",
                      service.title === "Automobile" && "object-cover object-[center_5%]",
                      service.title === "Métiers du Dessert" && "object-cover object-[center_10%]",
                      service.title !== "Automobile" && service.title !== "Métiers du Dessert" && "object-cover object-center"
                    )}
                    draggable="false"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-75 group-hover:opacity-70 backdrop-blur-[1px] transition-all duration-300"
                    initial={false}
                  />
                </div>

                {/* Content */}
                <div className="relative h-full p-6 sm:p-8 flex flex-col justify-end">
                  <motion.h3 
                    className="font-display font-medium text-xl sm:text-2xl text-white mb-2 sm:mb-3 drop-shadow-[0_1px_1px_rgba(255,255,255,0.03)]"
                    initial={false}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p 
                    className="font-body text-base sm:text-lg text-white/90 drop-shadow-[0_1px_1px_rgba(255,255,255,0.03)] line-clamp-2"
                    initial={false}
                  >
                    {service.description}
                  </motion.p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
