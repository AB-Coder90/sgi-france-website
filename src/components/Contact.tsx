import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialFormState: ContactForm = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
};

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simuler un appel API
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData(initialFormState);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
      {/* Effet de grille en arrière-plan */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-6 sm:p-8 md:p-10 bg-card/5 backdrop-blur-sm border-primary/5">
            <CardHeader className="text-center space-y-2 sm:space-y-3">
              <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-display font-medium">
                Contactez-<span className="text-primary">nous</span>
              </CardTitle>
              <CardDescription className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-lg sm:text-xl font-display font-medium mb-4">Nos Bureaux</h3>
                    <div className="space-y-6">
                      <div>
                        <Badge 
                          variant="outline" 
                          className="mb-3 border-primary/20 text-primary hover:bg-primary/5 transition-all duration-300"
                        >
                          Paris
                        </Badge>
                        <p className="text-sm sm:text-base text-muted-foreground">
                          123 Avenue des Champs-Élysées<br />
                          75008 Paris, France
                        </p>
                      </div>
                      <div>
                        <Badge 
                          variant="outline" 
                          className="mb-3 border-primary/20 text-primary hover:bg-primary/5 transition-all duration-300"
                        >
                          Lyon
                        </Badge>
                        <p className="text-sm sm:text-base text-muted-foreground">
                          456 Rue de la République<br />
                          69002 Lyon, France
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="text-lg sm:text-xl font-display font-medium mb-4">Contact Direct</h3>
                    <div className="space-y-3">
                      <p className="text-sm sm:text-base text-muted-foreground">
                        Email: contact@sgi-france.com
                      </p>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        Tél: +33 (0)1 23 45 67 89
                      </p>
                    </div>
                  </motion.div>
                </div>

                <motion.form 
                  onSubmit={handleSubmit} 
                  className="space-y-5"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">Nom complet</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-card/50 border-primary/10 focus:border-primary/20 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-card/50 border-primary/10 focus:border-primary/20 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">Téléphone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-card/50 border-primary/10 focus:border-primary/20 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium">Sujet</Label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-card/50 border border-primary/10 focus:border-primary/20 rounded-md px-3 py-2 text-sm transition-all duration-300"
                    >
                      <option value="" disabled>Sélectionnez un sujet</option>
                      <option value="devis">Demande de devis</option>
                      <option value="information">Demande d'information</option>
                      <option value="support">Support technique</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full min-h-[100px] rounded-md border border-primary/10 focus:border-primary/20 bg-card/50 px-3 py-2 text-sm transition-all duration-300"
                      placeholder="Votre message..."
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary text-black hover:bg-primary/90 transition-all duration-300 text-base py-6"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  </Button>

                  {submitStatus === 'success' && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-primary mt-4 text-center text-sm sm:text-base"
                    >
                      Message envoyé avec succès !
                    </motion.p>
                  )}
                  {submitStatus === 'error' && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-destructive mt-4 text-center text-sm sm:text-base"
                    >
                      Une erreur est survenue. Veuillez réessayer.
                    </motion.p>
                  )}
                </motion.form>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
