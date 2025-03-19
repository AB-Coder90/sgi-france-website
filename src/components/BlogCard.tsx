import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Badge } from './ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import type { BlogPost } from '@/types/blog';
import { ensureAbsolutePath } from '@/utils/image';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <Link to={`/blog/${post.slug}`}>
      <Card className="group overflow-hidden h-full transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {/* Image Container */}
          <div className="relative aspect-[16/10] overflow-hidden bg-muted">
            <img
              src={ensureAbsolutePath(post.image)}
              alt={post.title}
              width={800}
              height={500}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                console.error(`Error loading image: ${target.src}`);
                target.src = '/placeholder.jpg';
              }}
            />
          </div>

          <CardHeader className="space-y-2">
            <Badge 
              variant="outline" 
              className="w-fit bg-primary/10 text-primary border-primary/20"
            >
              {post.category}
            </Badge>
            <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
              {post.title}
            </h3>
          </CardHeader>

          <CardContent>
            <p className="text-muted-foreground line-clamp-3">
              {post.description}
            </p>
          </CardContent>

          <CardFooter className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 overflow-hidden rounded-full bg-muted">
                <img
                  src={ensureAbsolutePath(post.author.avatar, '/placeholder-avatar.jpg')}
                  alt={post.author.name}
                  width={32}
                  height={32}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    console.error(`Error loading avatar: ${target.src}`);
                    target.src = '/placeholder-avatar.jpg';
                  }}
                />
              </div>
              <span>{post.author.name}</span>
            </div>
            <span>•</span>
            <span>{post.date}</span>
          </CardFooter>
        </motion.div>
      </Card>
    </Link>
  );
}
