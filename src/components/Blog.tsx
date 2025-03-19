import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';
import { BlogCard } from './BlogCard';
import { useMemo } from 'react';

const Blog = () => {
  // Mémoriser les articles récents pour éviter des recalculs inutiles
  const recentPosts = useMemo(() => blogPosts.slice(0, 3), []);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium">
            Actualités & <span className="text-primary">Insights</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Restez informé des dernières innovations et actualités du secteur de la pulvérisation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {recentPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogCard post={post} index={index} />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12 sm:mt-16"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <Link to="/blog">
            <Button 
              size="lg" 
              className="bg-primary text-black hover:bg-primary/90 transition-all duration-300 text-base sm:text-lg py-6 px-8"
            >
              Voir tous les articles
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
