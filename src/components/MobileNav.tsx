import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

interface MobileNavProps {
  onClose: () => void;
}

const menuItems = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'À propos' },
  { to: '/configurator', label: 'Configurateur' },
  { to: '/contact', label: 'Contact' },
];

export function MobileNav({ onClose }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="lg"
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 aspect-square"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-24 z-50 h-[calc(100vh-6rem)] bg-background/95 backdrop-blur-sm border-t border-border"
          >
            <nav className="container mx-auto px-6 py-8 space-y-6">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.to}
                    onClick={() => {
                      onClose();
                      setIsOpen(false);
                    }}
                    className="block"
                  >
                    <Button
                      variant={item.to === '/contact' ? 'default' : 'ghost'}
                      className="w-full justify-start text-xl font-medium py-4 hover:bg-primary/5"
                    >
                      {item.label}
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
