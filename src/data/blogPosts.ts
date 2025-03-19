import { BlogPost } from '@/types/blog';

// Fonction pour obtenir un article par son slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

// Fonction utilitaire pour obtenir des articles liés
export function getRelatedPosts(currentPostId: number, limit: number = 2): BlogPost[] {
  return blogPosts
    .filter(post => post.id !== currentPostId)
    .sort(() => Math.random() - 0.5)
    .slice(0, limit);
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'sata-jet-x-revolution-pulverisation',
    title: 'SATA Jet X : La Révolution dans la Pulvérisation Automobile',
    description: 'SATA lance son nouveau pistolet de pulvérisation Jet X, établissant de nouveaux standards dans l\'industrie automobile.',
    category: 'Automobile',
    date: '18 Mars 2025',
    readTime: '5 min de lecture',
    image: '/images/blog/automotive/sata-jet-x.jpg',
    author: {
      name: 'Thomas Martin',
      role: 'Expert en Solutions Automobiles',
      avatar: '/images/team/thomas-martin.jpg'
    },
    content: {
      introduction: 'SATA, leader mondial des équipements de pulvérisation, vient de dévoiler son pistolet révolutionnaire Jet X lors du salon Automechanika à Francfort. Cette innovation majeure marque une nouvelle ère dans la technologie de pulvérisation automobile.',
      sections: [
        {
          title: 'Une Technologie de Buse Innovante',
          content: 'Le nouveau système de labyrinthe inventé par SATA guide l\'air dans la buse de manière à ce qu\'il sorte sans turbulence, établissant ainsi de nouveaux standards en matière d\'atomisation. Cette innovation permet une application plus précise et uniforme de la peinture.\n\nSource : Autobody News - "Many New Products Coming from SATA", 2024',
          image: '/images/blog/automotive/jet-x-nozzle.jpg'
        },
        {
          title: 'L\'Ère Numérique dans la Cabine de Peinture',
          content: 'Le Jet X intègre des fonctionnalités numériques avancées qui permettent un contrôle précis des paramètres de pulvérisation. Les peintres peuvent désormais ajuster et surveiller en temps réel la pression, le débit et d\'autres paramètres critiques via une interface numérique intuitive.\n\nSource : Surface Technology Info - "SATA presents painting technology innovations", 2024',
          image: '/images/blog/automotive/digital-controls.jpg'
        }
      ],
      conclusion: 'Le lancement du SATA Jet X représente une avancée significative dans l\'industrie de la pulvérisation automobile. Cette innovation démontre l\'engagement continu de SATA à repousser les limites de la technologie pour offrir des solutions toujours plus performantes aux professionnels.'
    },
    tags: ['SATA', 'Innovation', 'Jet X', 'Technologie Numérique']
  },
  {
    id: 2,
    slug: 'innovations-confiserie-2025',
    title: 'Les Dernières Innovations en Confiserie Industrielle',
    description: 'Découvrez les nouvelles technologies qui transforment l\'industrie de la confiserie en 2025.',
    category: 'Métiers du Dessert',
    date: '17 Mars 2025',
    readTime: '4 min de lecture',
    image: '/images/blog/dessert/confectionery-tech.jpg',
    author: {
      name: 'Sophie Dubois',
      role: 'Experte en Solutions Alimentaires',
      avatar: '/images/team/sophie-dubois.jpg'
    },
    content: {
      introduction: 'Le secteur de la confiserie connaît une croissance remarquable, avec une valeur globale de 619,25 milliards de dollars et une croissance annuelle prévue de 5,47% sur les cinq prochaines années. Les innovations technologiques jouent un rôle crucial dans cette expansion.',
      sections: [
        {
          title: 'Automatisation et Personnalisation',
          content: 'Les grands acteurs comme Mondelēz International investissent massivement dans les technologies d\'automatisation et de personnalisation. Les systèmes de pulvérisation de nouvelle génération permettent une personnalisation précise des enrobages et des finitions.\n\nSource : Confectionery News - "Meet the top technology trends shaping confectionery in 2025", Février 2025',
          image: '/images/blog/dessert/automated-coating.jpg'
        },
        {
          title: 'Durabilité et Efficacité',
          content: 'Les nouveaux équipements de pulvérisation pour le chocolat intègrent des technologies de récupération et de recyclage, réduisant considérablement le gaspillage. Ces systèmes permettent également une réduction significative de la consommation d\'énergie.\n\nSource : International Confectionery Magazine - "Chocolate Trends for 2025", Janvier 2025',
          image: '/images/blog/dessert/sustainable-production.jpg'
        }
      ],
      conclusion: 'L\'industrie de la confiserie entre dans une nouvelle ère où la technologie permet non seulement d\'améliorer la qualité et l\'efficacité de la production, mais aussi de répondre aux exigences croissantes en matière de durabilité.'
    },
    tags: ['Innovation', 'Confiserie', 'Automatisation', 'Durabilité']
  },
  {
    id: 3,
    slug: 'tendances-industrie-peinture-2025',
    title: 'Les Tendances de l\'Industrie de la Peinture en 2025',
    description: 'Analyse des dernières innovations et tendances dans l\'industrie de la peinture et du revêtement.',
    category: 'Industrie',
    date: '16 Mars 2025',
    readTime: '6 min de lecture',
    image: '/images/blog/industry/paint-trends.jpg',
    author: {
      name: 'Pierre Laurent',
      role: 'Ingénieur Solutions Industrielles',
      avatar: '/images/team/pierre-laurent.jpg'
    },
    content: {
      introduction: 'Le marché des machines de pulvérisation de peinture, évalué à 4,78 milliards de dollars en 2023, devrait connaître une croissance de 5,2% entre 2024 et 2030. Cette expansion est portée par des innovations majeures dans les technologies de pulvérisation.',
      sections: [
        {
          title: 'Intelligence Artificielle et Automatisation',
          content: 'L\'intégration de l\'IA dans les systèmes de pulvérisation industrielle permet une optimisation en temps réel des paramètres de projection et une réduction significative des déchets. Les systèmes automatisés peuvent désormais ajuster leurs paramètres en fonction des conditions environnementales et des caractéristiques du substrat.\n\nSource : StartUs Insights - "Top 10 Paint Industry Trends in 2025", 2025',
          image: '/images/blog/industry/ai-coating.jpg'
        },
        {
          title: 'Solutions Écologiques',
          content: 'Les fabricants développent des systèmes de pulvérisation spécialement conçus pour les peintures à base d\'eau et les revêtements écologiques. Ces systèmes intègrent des technologies avancées de récupération et de filtration pour minimiser l\'impact environnemental.\n\nSource : Surface Technology Info - "Paint Industry Innovation Report", 2025',
          image: '/images/blog/industry/eco-coating.jpg'
        }
      ],
      conclusion: 'L\'industrie de la peinture connaît une transformation profonde grâce à l\'adoption de technologies intelligentes et durables. Ces innovations permettent non seulement d\'améliorer la qualité des finitions mais aussi de répondre aux enjeux environnementaux.'
    },
    tags: ['Industrie', 'Innovation', 'IA', 'Durabilité']
  }
];
