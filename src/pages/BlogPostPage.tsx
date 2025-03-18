import { useParams, Navigate } from 'react-router-dom';
import { BlogPost } from '@/components/BlogPost';
import { getPostBySlug } from '@/data/blogPosts';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return <BlogPost post={post} />;
}
