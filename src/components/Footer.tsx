import { Link } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    }
  ];

  const contactInfo = [
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      text: '+33 (0)1 23 45 67 89'
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      text: 'contact@sgi-france.fr'
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      text: '123 Avenue de la Pulvérisation, 75001 Paris'
    }
  ];

  const navLinks = [
    { to: '/about', text: 'À Propos' },
    { to: '/careers', text: 'Carrières' },
    { to: '/news', text: 'Actualités' },
    { to: '/contact', text: 'Contact' }
  ];

  return (
    <footer className="relative py-12 sm:py-16 bg-background">
      {/* Effet de grille en arrière-plan */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <Card className="bg-card/5 backdrop-blur-sm border-primary/5">
          <CardContent className="p-6 sm:p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-lg sm:text-xl font-display font-medium mb-4">SGI France</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-6">
                  Leader dans les solutions de pulvérisation industrielle, nous innovons pour votre succès depuis plus de 30 ans.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 text-primary hover:bg-primary hover:text-black transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                        {social.icon}
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-lg sm:text-xl font-display font-medium mb-4">Contact</h3>
                <ul className="space-y-3 sm:space-y-4">
                  {contactInfo.map((info) => (
                    <motion.li
                      key={info.text}
                      className="flex items-center gap-3 text-sm sm:text-base text-muted-foreground"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-primary">{info.icon}</span>
                      {info.text}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-lg sm:text-xl font-display font-medium mb-4">Navigation</h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {navLinks.map((link) => (
                    <Button
                      key={link.to}
                      variant="ghost"
                      asChild
                      className="justify-start hover:bg-primary/5 hover:text-primary transition-all duration-300"
                    >
                      <Link to={link.to}>{link.text}</Link>
                    </Button>
                  ))}
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>

        <Separator className="my-8 opacity-10" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-sm sm:text-base text-muted-foreground"
        >
          <p>&copy; {currentYear} SGI France. Tous droits réservés.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
