import { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero'; 
import { ErrorBoundary } from 'react-error-boundary';
import Blog from './components/Blog'; 
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services';
import { ThemeProvider } from './components/theme-provider';
import { LogoMarquee } from './components/LogoMarquee';
import { BlogListPage } from './pages/BlogListPage';
import { BlogPostPage } from './pages/BlogPostPage';

const ScrollToSection = ({ hash }: { hash: string }) => {
  if (hash) {
    const id = hash.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    window.scrollTo(0, 0);
  }
  return null;
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <About />
        </div>
      </section>
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background/80 to-black">
        <div className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium mb-4 sm:mb-6">
              Nos <span className="text-primary">Partenaires</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Des marques de renommée mondiale nous font confiance pour représenter leurs produits en France
            </p>
          </div>
        </div>
        <LogoMarquee />
      </section>
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <Services />
        </div>
      </section>
      <section id="blog" className="py-20">
        <div className="container mx-auto px-4">
          <Blog />
        </div>
      </section>
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <Contact />
        </div>
      </section>
    </>
  );
};

const AppContent = () => {
  const location = useLocation();

  return (
    <Layout>
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        </div>
      }>
        <ScrollToSection hash={location.hash} />
        <main className="min-h-screen bg-background">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={
              <section className="pt-32 pb-20">
                <div className="container mx-auto px-4">
                  <About />
                </div>
              </section>
            } />
            <Route path="/services" element={
              <section className="pt-32 pb-20">
                <div className="container mx-auto px-4">
                  <Services />
                </div>
              </section>
            } />
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contact" element={
              <section className="pt-32 pb-20">
                <div className="container mx-auto px-4">
                  <Contact />
                </div>
              </section>
            } />
          </Routes>
        </main>
      </Suspense>
    </Layout>
  );
};

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <ErrorBoundary fallback={
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Une erreur est survenue</h2>
            <p className="text-muted-foreground mb-4">Nous nous excusons pour la gêne occasionnée.</p>
            <button 
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Recharger la page
            </button>
          </div>
        </div>
      }>
        <AppContent />
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export { App };
