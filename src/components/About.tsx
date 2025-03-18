import { motion } from 'framer-motion';
import { Button } from './ui/button';

const About = () => {
  const stats = [
    { value: '1992', label: 'Année de création' },
    { value: '500+', label: 'Installations' },
    { value: '30+', label: "Années d'expertise" },
    { value: '5+', label: 'Marques exclusives' },
  ];

  const features = [
    {
      title: 'Innovation Continue',
      description: 'Pionnier dans l\'implantation du pistolet à gravité et l\'installation de générateurs d\'azote.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Expertise Technique',
      description: 'Une maîtrise approfondie de la pulvérisation pour tous les secteurs industriels.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Service Premium',
      description: 'Un accompagnement personnalisé et des formations adaptées à vos besoins.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-background/80">
      {/* Effet de grille en arrière-plan */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-eurostile font-medium mb-4 sm:mb-6">
            Notre <span className="text-primary">Histoire</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Depuis 1992, SGI France est le partenaire de confiance des professionnels
            de la pulvérisation, offrant des solutions innovantes et un service d'excellence.
          </p>
        </motion.div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-4 sm:p-6 rounded-lg bg-card/5 backdrop-blur-sm border border-primary/5 hover:border-primary/10 transition-all duration-300"
            >
              <motion.div 
                className="text-2xl sm:text-3xl md:text-4xl font-eurostile font-medium text-primary mb-2 sm:mb-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm sm:text-base text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Caractéristiques */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 sm:p-8 rounded-lg bg-card/5 backdrop-blur-sm border border-primary/5 hover:border-primary/10 transition-all duration-300"
            >
              <motion.div 
                className="absolute -top-3 -left-3 p-3 rounded-lg bg-primary/10 backdrop-blur-sm border border-primary/20"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-primary">
                  {feature.icon}
                </div>
              </motion.div>
              <h3 className="text-lg sm:text-xl font-eurostile font-medium mb-3 mt-4">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12 sm:mt-16"
          whileHover={{ scale: 1.02 }}
        >
          <Button 
            asChild
            size="lg" 
            className="bg-primary text-black hover:bg-primary/90 transition-all duration-300 text-base sm:text-lg py-6 px-8"
          >
            <a href="#contact">
              Contactez nos Experts
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
