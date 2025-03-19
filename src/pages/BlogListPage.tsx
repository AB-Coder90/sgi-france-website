import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { blogPosts } from '@/data/blogPosts';
import { Button } from '@/components/ui/button';
import { BlogCard } from '@/components/BlogCard';

// Extraire toutes les catégories uniques des articles
const categories = Array.from(new Set(blogPosts.map(post => post.category)));

export function BlogListPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Mémoriser les articles filtrés pour éviter des recalculs inutiles
  const filteredPosts = useMemo(() => {
    if (!selectedCategory) return blogPosts;
    return blogPosts.filter(post => post.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container px-4 md:px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Blog & <span className="text-primary">Actualités</span>
          </h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Découvrez nos derniers articles sur l'innovation en pulvérisation et les actualités du secteur
          </p>
        </motion.div>

        {/* Filter Categories */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
            className={`
              px-6 py-2 text-sm font-medium transition-all duration-300
              ${selectedCategory === null 
                ? 'bg-primary text-background hover:bg-primary/90' 
                : 'border-primary/20 hover:border-primary/40 hover:bg-primary/5'
              }
            `}
          >
            Tous les articles
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-6 py-2 text-sm font-medium transition-all duration-300
                ${selectedCategory === category 
                  ? 'bg-primary text-background hover:bg-primary/90' 
                  : 'border-primary/20 hover:border-primary/40 hover:bg-primary/5'
                }
              `}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCategory || 'all'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post, index) => (
              <BlogCard 
                key={post.id} 
                post={post} 
                index={index} 
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <h3 className="text-xl font-medium mb-2">
              Aucun article trouvé
            </h3>
            <p className="text-muted-foreground">
              Aucun article ne correspond à la catégorie sélectionnée.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
