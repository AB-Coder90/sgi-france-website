import { motion } from 'framer-motion';
import type { BlogPost as BlogPostType } from '@/types/blog';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { getRelatedPosts } from '@/data/blogPosts';
import { Link } from 'react-router-dom';

interface BlogPostProps {
  post: BlogPostType;
}

export const BlogPost = ({ post }: BlogPostProps) => {
  const relatedPosts = getRelatedPosts(post.id);

  return (
    <article className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <Badge 
              variant="outline" 
              className="mb-4 border-primary/20 text-primary"
            >
              {post.category}
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium mb-4">
              {post.title}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6">
              {post.description}
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime} de lecture</span>
            </div>
          </div>

          {/* Author */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {post.author.avatar && (
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full"
              />
            )}
            <div className="text-center">
              <p className="font-medium text-primary">{post.author.name}</p>
              <p className="text-sm text-muted-foreground">{post.author.role}</p>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-[400px] mb-12 rounded-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {/* Introduction */}
            <p className="lead">{post.content.introduction}</p>

            {/* Sections */}
            {post.content.sections.map((section, index) => (
              <section key={index} className="my-12">
                <h2 className="text-2xl sm:text-3xl font-display font-medium mb-6">
                  {section.title}
                </h2>
                <p className="mb-6">{section.content}</p>
                {section.image && (
                  <div className="relative h-[300px] rounded-lg overflow-hidden my-8">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </section>
            ))}

            {/* Conclusion */}
            <div className="my-12">
              <h2 className="text-2xl sm:text-3xl font-display font-medium mb-6">
                Conclusion
              </h2>
              <p>{post.content.conclusion}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="my-12">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-primary/5 hover:bg-primary/10"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl sm:text-3xl font-display font-medium mb-8 text-center">
                Articles Similaires
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`}>
                    <Card className="h-full hover:border-primary/20 transition-all duration-300">
                      <div className="relative h-48 rounded-t-lg overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <Badge variant="outline" className="mb-2">
                          {relatedPost.category}
                        </Badge>
                        <h3 className="text-xl font-display font-medium mb-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {relatedPost.description}
                        </p>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </article>
  );
};
