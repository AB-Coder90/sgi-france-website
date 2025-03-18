import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MobileNav } from './MobileNav';
import { cn } from '@/lib/utils';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur border-b border-primary/10" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-24">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/models/logo-sgi.png" 
              alt="SGI Logo" 
              className="h-10 sm:h-12 md:h-14 w-auto transition-all duration-200 group-hover:opacity-90" 
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ 
                opacity: isScrolled ? 1 : 0, 
                y: isScrolled ? 0 : -10 
              }}
              transition={{ 
                duration: 0.3,
                ease: "easeInOut"
              }}
              className="hidden sm:flex flex-col justify-center"
            >
              <span className="text-base sm:text-lg md:text-xl font-display font-medium text-primary tracking-tight leading-none mb-1">
                SGI FRANCE
              </span>
              <span className="text-[0.7rem] sm:text-xs md:text-sm font-sans font-normal text-primary/80 tracking-wide">
                L'expert en pulvérisation
              </span>
            </motion.div>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/services"
              className="text-base font-medium text-primary/80 hover:text-primary transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="text-base font-medium text-primary/80 hover:text-primary transition-colors duration-200"
            >
              À propos
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-black hover:bg-primary/90 h-12 px-6 py-3"
            >
              Contactez-nous
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-12 w-12"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileNav onClose={() => setIsMobileMenuOpen(false)} />
        )}
      </AnimatePresence>
    </header>
  );
};
