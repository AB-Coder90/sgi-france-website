import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: 'Innovation dans la Pulvérisation Automobile',
    description: 'Découvrez les dernières avancées technologiques en matière de pulvérisation pour le secteur automobile.',
    category: 'Automobile',
    date: '15 Mars 2024',
    readTime: '5 min',
    image: '/images/blog/automotive-spray.jpg'
  },
  {
    id: 2,
    title: 'L\'Art du Chocolat avec SGI',
    description: 'Comment nos équipements révolutionnent le travail des maîtres chocolatiers.',
    category: 'Métiers du Dessert',
    date: '10 Mars 2024',
    readTime: '4 min',
    image: '/images/blog/chocolate.jpg'
  },
  {
    id: 3,
    title: 'Automatisation Industrielle 4.0',
    description: 'Les solutions d\'automatisation intelligente pour l\'industrie du futur.',
    category: 'Industrie',
    date: '5 Mars 2024',
    readTime: '6 min',
    image: '/images/blog/industry.jpg'
  }
];

const Blog = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium mb-4 sm:mb-6">
            Actualités & <span className="text-primary">Insights</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Restez informé des dernières innovations et actualités du secteur
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col bg-card border-border/10 hover:border-primary/20 transition-all duration-300">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <motion.img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
                <CardHeader className="space-y-2 sm:space-y-3">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <Badge 
                      variant="outline" 
                      className="border-primary/20 text-primary hover:bg-primary/5 transition-all duration-300"
                    >
                      {article.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-display font-medium line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground line-clamp-3">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{article.date}</p>
                </CardContent>
                <CardFooter className="mt-auto pt-4">
                  <Link to={`/blog/${article.id}`} className="w-full">
                    <Button 
                      variant="outline" 
                      className="w-full border-primary/20 text-primary hover:bg-primary hover:text-black transition-all duration-300"
                    >
                      Lire l'article
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
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
