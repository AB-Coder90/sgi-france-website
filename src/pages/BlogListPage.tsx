import { useState } from 'react';
import { motion } from 'framer-motion';
import { blogPosts } from '@/data/blogPosts';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

// Extraire toutes les catégories uniques des articles
const categories = Array.from(new Set(blogPosts.map(post => post.category)));

export function BlogListPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = selectedCategory
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  return (
    <div className="min-h-screen bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium mb-6">
            Blog & <span className="text-primary">Actualités</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos derniers articles sur l'innovation en pulvérisation et les actualités du secteur
          </p>
        </motion.div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
            className="border-primary/20 hover:border-primary/40"
          >
            Tous
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="border-primary/20 hover:border-primary/40"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`} className="block h-full">
                <Card className="h-full flex flex-col bg-card border-border/10 hover:border-primary/20 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                    />
                  </div>
                  <CardHeader className="space-y-2 sm:space-y-3">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <Badge 
                        variant="outline" 
                        className="border-primary/20 text-primary hover:bg-primary/5"
                      >
                        {post.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg sm:text-xl font-display font-medium line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base text-muted-foreground line-clamp-3">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3">
                      {post.author.avatar && (
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-8 h-8 rounded-full"
                        />
                      )}
                      <div>
                        <p className="text-sm font-medium">{post.author.name}</p>
                        <p className="text-xs text-muted-foreground">{post.date}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto pt-4">
                    <Button 
                      variant="outline" 
                      className="w-full border-primary/20 text-primary hover:bg-primary hover:text-black"
                    >
                      Lire l'article
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
