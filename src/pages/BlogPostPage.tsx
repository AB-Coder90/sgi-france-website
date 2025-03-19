import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getPostBySlug, getRelatedPosts } from '@/data/blogPosts';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BlogCard } from '@/components/BlogCard';
import type { BlogPost } from '@/types/blog';
import { ensureAbsolutePath } from '@/utils/image';
import { useMemo } from 'react';

export function BlogPostPage() {
  const { slug } = useParams();
  const post = useMemo(() => getPostBySlug(slug || ''), [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background pt-32 pb-24">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Article non trouvé</h1>
            <p className="text-muted-foreground mb-8">
              L'article que vous recherchez n'existe pas ou a été déplacé.
            </p>
            <Link to="/blog">
              <Button variant="default">
                Retour aux articles
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const relatedPosts: BlogPost[] = useMemo(() => getRelatedPosts(post.id), [post.id]);

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <article className="container px-4 md:px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <Badge 
              variant="outline" 
              className="mb-4 bg-primary/10 text-primary border-primary/20"
            >
              {post.category}
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-[700px] mx-auto">
              {post.description}
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Author */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <div className="relative w-16 h-16 bg-muted rounded-full overflow-hidden">
              <img
                src={ensureAbsolutePath(post.author.avatar, '/placeholder-avatar.jpg')}
                alt={post.author.name}
                width={64}
                height={64}
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
            <div>
              <p className="font-medium text-lg">{post.author.name}</p>
              <p className="text-muted-foreground">{post.author.role}</p>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative aspect-[16/9] mb-12 rounded-lg overflow-hidden bg-muted"
          >
            <img
              src={ensureAbsolutePath(post.image)}
              alt={post.title}
              width={1200}
              height={675}
              loading="eager"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                console.error(`Error loading image: ${target.src}`);
                target.src = '/placeholder.jpg';
              }}
            />
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            {/* Introduction */}
            <p className="text-xl leading-relaxed mb-12">{post.content.introduction}</p>

            {/* Sections */}
            {post.content.sections.map((section, index) => (
              <motion.section 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="my-12"
              >
                <h2 className="text-3xl font-bold tracking-tighter mb-6">
                  {section.title}
                </h2>
                <p className="text-lg leading-relaxed mb-8">{section.content}</p>
                {section.image && (
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden my-8 bg-muted">
                    <img
                      src={ensureAbsolutePath(section.image)}
                      alt={section.title}
                      width={1200}
                      height={675}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        console.error(`Error loading section image: ${target.src}`);
                        target.src = '/placeholder.jpg';
                      }}
                    />
                  </div>
                )}
              </motion.section>
            ))}

            {/* Conclusion */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="my-12"
            >
              <h2 className="text-3xl font-bold tracking-tighter mb-6">
                Conclusion
              </h2>
              <p className="text-lg leading-relaxed">{post.content.conclusion}</p>
            </motion.div>
          </motion.div>

          {/* Tags */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="my-12"
          >
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-24"
            >
              <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">
                Articles Similaires
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost: BlogPost, index: number) => (
                  <BlogCard key={relatedPost.id} post={relatedPost} index={index} />
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </article>
    </div>
  );
}
