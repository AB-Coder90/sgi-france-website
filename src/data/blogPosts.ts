import { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'innovation-pulverisation-automobile',
    title: 'Innovation dans la Pulvérisation Automobile',
    description: 'Découvrez les dernières avancées technologiques en matière de pulvérisation pour le secteur automobile.',
    category: 'Automobile',
    date: '15 Mars 2024',
    readTime: '5 min',
    image: '/images/blog/automotive-spray.jpg',
    author: {
      name: 'Thomas Laurent',
      role: 'Expert en Solutions Automobiles',
      avatar: '/images/team/thomas.jpg'
    },
    content: {
      introduction: 'Le secteur automobile est en constante évolution, et les technologies de pulvérisation ne font pas exception. Les nouvelles exigences en matière de qualité de finition, d\'efficacité énergétique et de respect de l\'environnement poussent les industriels à innover continuellement.',
      sections: [
        {
          title: 'Les Nouvelles Technologies HVLP',
          content: 'La technologie HVLP (High Volume Low Pressure) continue d\'évoluer avec l\'introduction de systèmes de contrôle numérique permettant une précision accrue et une réduction significative des pertes de produit. Les nouveaux pistolets SATA intègrent désormais des capteurs intelligents qui ajustent automatiquement les paramètres de pulvérisation en fonction des conditions ambiantes.',
          image: '/images/blog/hvlp-tech.jpg'
        },
        {
          title: 'L\'Intelligence Artificielle au Service de la Pulvérisation',
          content: 'L\'intégration de l\'IA dans les systèmes de pulvérisation permet désormais une optimisation en temps réel des paramètres de projection. Les algorithmes analysent en continu la qualité de la finition et ajustent automatiquement les réglages pour maintenir une qualité constante, réduisant ainsi les défauts et les reprises.',
        },
        {
          title: 'Durabilité et Éco-responsabilité',
          content: 'Les nouveaux systèmes de pulvérisation sont conçus avec une attention particulière portée à l\'impact environnemental. Les technologies de récupération des overspray et de filtration avancée permettent de réduire considérablement les émissions de COV et la consommation de peinture.',
          image: '/images/blog/eco-spray.jpg'
        }
      ],
      conclusion: 'L\'avenir de la pulvérisation automobile s\'oriente clairement vers des solutions plus intelligentes, plus précises et plus respectueuses de l\'environnement. Ces innovations permettent non seulement d\'améliorer la qualité des finitions mais aussi de réduire les coûts opérationnels et l\'impact environnemental.'
    },
    tags: ['Automobile', 'Innovation', 'HVLP', 'Intelligence Artificielle', 'Écologie'],
    relatedPosts: [2, 3]
  },
  {
    id: 2,
    slug: 'art-chocolat-sgi',
    title: 'L\'Art du Chocolat avec SGI',
    description: 'Comment nos équipements révolutionnent le travail des maîtres chocolatiers.',
    category: 'Métiers du Dessert',
    date: '10 Mars 2024',
    readTime: '4 min',
    image: '/images/blog/chocolate.jpg',
    author: {
      name: 'Marie Dubois',
      role: 'Experte en Solutions Alimentaires',
      avatar: '/images/team/marie.jpg'
    },
    content: {
      introduction: 'La chocolaterie artisanale connaît une véritable révolution grâce aux technologies de pulvérisation modernes. Les maîtres chocolatiers peuvent désormais atteindre des niveaux de précision et de créativité inégalés dans leurs créations.',
      sections: [
        {
          title: 'Précision et Contrôle',
          content: 'Les systèmes de pulvérisation de nouvelle génération permettent un contrôle ultra-précis de la température et de la viscosité du chocolat. Cette maîtrise permet d\'obtenir des finitions parfaites et des effets visuels spectaculaires impossibles à réaliser manuellement.',
          image: '/images/blog/chocolate-spray.jpg'
        },
        {
          title: 'Innovation dans les Textures',
          content: 'Grâce à nos technologies de pulvérisation avancées, les artisans peuvent créer des textures variées et des effets de surface uniques. Du velours au brillant, en passant par des effets givrés, les possibilités créatives sont démultipliées.',
        },
        {
          title: 'Efficacité et Productivité',
          content: 'L\'automatisation des processus de pulvérisation permet aux artisans de se concentrer sur la créativité tout en augmentant leur productivité. Les systèmes modernes réduisent également le gaspillage de matière première et simplifient le nettoyage.',
          image: '/images/blog/chocolate-production.jpg'
        }
      ],
      conclusion: 'La technologie de pulvérisation moderne ouvre de nouvelles perspectives dans l\'art du chocolat. Elle permet aux artisans de repousser les limites de leur créativité tout en optimisant leur production.'
    },
    tags: ['Chocolaterie', 'Innovation', 'Artisanat', 'Automatisation', 'Productivité'],
    relatedPosts: [1, 3]
  },
  {
    id: 3,
    slug: 'automatisation-industrielle-4-0',
    title: 'Automatisation Industrielle 4.0',
    description: 'Les solutions d\'automatisation intelligente pour l\'industrie du futur.',
    category: 'Industrie',
    date: '5 Mars 2024',
    readTime: '6 min',
    image: '/images/blog/industry.jpg',
    author: {
      name: 'Philippe Martin',
      role: 'Directeur Innovation',
      avatar: '/images/team/philippe.jpg'
    },
    content: {
      introduction: 'L\'industrie 4.0 représente une nouvelle ère dans l\'automatisation industrielle, où la connectivité et l\'intelligence artificielle transforment radicalement les processus de production.',
      sections: [
        {
          title: 'L\'IoT dans l\'Industrie',
          content: 'L\'Internet des Objets (IoT) révolutionne la surveillance et le contrôle des systèmes de pulvérisation. Les capteurs connectés permettent une supervision en temps réel et une maintenance prédictive, réduisant les temps d\'arrêt et optimisant les performances.',
          image: '/images/blog/iot-industry.jpg'
        },
        {
          title: 'Robotique Collaborative',
          content: 'Les cobots équipés de systèmes de pulvérisation avancés travaillent désormais aux côtés des opérateurs humains. Cette collaboration homme-machine permet d\'allier précision automatisée et expertise humaine pour des résultats optimaux.',
        },
        {
          title: 'Analyse de Données en Temps Réel',
          content: 'Les systèmes d\'analyse Big Data permettent d\'optimiser continuellement les processus de pulvérisation. L\'analyse en temps réel des paramètres de production permet d\'ajuster automatiquement les réglages pour maintenir une qualité optimale.',
          image: '/images/blog/data-analysis.jpg'
        }
      ],
      conclusion: 'L\'automatisation industrielle 4.0 représente un bond en avant majeur dans l\'efficacité et la qualité des processus de pulvérisation. Cette révolution technologique permet aux industries de rester compétitives tout en répondant aux exigences croissantes en matière de qualité et de durabilité.'
    },
    tags: ['Industrie 4.0', 'IoT', 'Automatisation', 'Big Data', 'Innovation'],
    relatedPosts: [1, 2]
  }
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRelatedPosts = (postId: number): BlogPost[] => {
  const post = blogPosts.find(p => p.id === postId);
  if (!post?.relatedPosts) return [];
  return blogPosts.filter(p => post.relatedPosts?.includes(p.id));
};
