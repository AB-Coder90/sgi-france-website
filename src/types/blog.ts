export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  content: {
    introduction: string;
    sections: Array<{
      title: string;
      content: string;
      image?: string;
    }>;
    conclusion: string;
  };
  tags: string[];
  relatedPosts?: number[];
}
