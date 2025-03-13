
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import FeatureCard from '../components/FeatureCard';
import { 
  Stethoscope, 
  GraduationCap, 
  ShoppingCart, 
  Droplets, 
  MessageCircle,
  Video,
  BookOpen,
  CreditCard,
  BarChart3,
  Users,
  AlertTriangle,
  FileSpreadsheet,
  Building,
  Megaphone,
  ShieldCheck
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero />
        
        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 stagger-animation">
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-vivaccess-green/10 text-vivaccess-green text-sm font-medium">
                Nos Services
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Des solutions adaptées aux besoins locaux
              </h2>
              <p className="text-muted-foreground">
                Nous proposons une gamme de services conçus pour répondre aux besoins spécifiques des communautés rurales isolées.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <FeatureCard 
                title="Télémédecine"
                description="Consultations à distance avec des médecins spécialistes et suivi médical des patients chroniques."
                icon={Stethoscope}
                color="bg-vivaccess-blue"
                delay={100}
              />
              <FeatureCard 
                title="Éducation à distance"
                description="Cours en ligne pour les élèves et formation professionnelle pour les adultes."
                icon={GraduationCap}
                color="bg-vivaccess-green"
                delay={200}
              />
              <FeatureCard 
                title="Développement économique"
                description="Marketplace pour les produits locaux et microfinancement pour les entrepreneurs."
                icon={ShoppingCart}
                color="bg-amber-500"
                delay={300}
              />
              <FeatureCard 
                title="Gestion des ressources en eau"
                description="Système d'alerte pour la qualité et la disponibilité de l'eau et formation sur les techniques d'irrigation."
                icon={Droplets}
                color="bg-vivaccess-light-blue"
                delay={400}
              />
              <FeatureCard 
                title="Engagement civique"
                description="Forum de discussion pour les problèmes locaux et outil de signalement des problèmes d'infrastructure."
                icon={MessageCircle}
                color="bg-violet-600"
                delay={500}
              />
              <FeatureCard 
                title="Formation locale"
                description="Formation des utilisateurs et support technique local pour assurer l'autonomie des communautés."
                icon={Users}
                color="bg-rose-500"
                delay={600}
              />
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="stagger-animation">
                <div className="inline-block mb-4 px-3 py-1 rounded-full bg-vivaccess-blue/10 text-vivaccess-blue text-sm font-medium">
                  Télémédecine
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Accès aux soins médicaux à distance
                </h2>
                <p className="text-muted-foreground mb-8">
                  Notre service de télémédecine permet aux habitants des zones rurales d'accéder à des consultations médicales de qualité sans avoir à parcourir de longues distances.
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex">
                    <div className="mr-4 h-6 w-6 rounded-full bg-vivaccess-blue flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-base">Consultations vidéo</h4>
                      <p className="text-sm text-muted-foreground">Consultez des médecins spécialistes par appel vidéo.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 h-6 w-6 rounded-full bg-vivaccess-blue flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-base">Suivi des patients chroniques</h4>
                      <p className="text-sm text-muted-foreground">Surveillance continue et personnalisée pour les maladies chroniques.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 h-6 w-6 rounded-full bg-vivaccess-blue flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-base">Formation des agents de santé</h4>
                      <p className="text-sm text-muted-foreground">Programmes de formation continue pour les soignants locaux.</p>
                    </div>
                  </li>
                </ul>
                
                <button className="button-primary">
                  Découvrir la télémédecine
                </button>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-vivaccess-blue/5 to-vivaccess-green/5 rounded-3xl transform rotate-3 scale-95 opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-b from-vivaccess-blue/5 to-vivaccess-green/5 rounded-3xl transform -rotate-3 scale-95 opacity-70" />
                
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden relative transform hover:scale-[1.01] transition-transform duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-vivaccess-blue to-vivaccess-green" />
                  
                  <div className="p-1">
                    <div className="w-full aspect-video bg-gray-100 rounded-t-2xl overflow-hidden relative">
                      <img 
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                        alt="Télémédecine en action" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-full bg-vivaccess-blue flex items-center justify-center">
                              <Video className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-medium">Consultation en cours</span>
                          </div>
                          <span className="text-sm px-2 py-1 bg-white/20 rounded-full backdrop-blur-md">25:18</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Consultation médicale</h3>
                          <p className="text-sm text-muted-foreground">Dr. Amina Benali - Cardiologue</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden">
                          <img 
                            src="https://randomuser.me/api/portraits/women/44.jpg" 
                            alt="Doctor" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Fréquence cardiaque</span>
                          <span>78 bpm</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Tension artérielle</span>
                          <span>125/85 mmHg</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Température</span>
                          <span>37.2°C</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <button className="button-secondary w-full">
                          Dossier
                        </button>
                        <button className="button-ghost w-full border border-gray-200">
                          Terminer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Grid Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 stagger-animation">
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-vivaccess-green/10 text-vivaccess-green text-sm font-medium">
                Fonctionnalités
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Des solutions complètes pour les communautés rurales
              </h2>
              <p className="text-muted-foreground">
                Notre plateforme offre de nombreuses fonctionnalités conçues pour améliorer la qualité de vie dans les villages isolés.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <div className="p-6 rounded-xl glass-card hover:shadow-md transition-all">
                <Video className="w-6 h-6 text-vivaccess-blue mb-4" />
                <h3 className="font-semibold mb-2">Consultations vidéo</h3>
                <p className="text-sm text-muted-foreground">Accès aux médecins spécialistes à distance.</p>
              </div>
              <div className="p-6 rounded-xl glass-card hover:shadow-md transition-all">
                <BookOpen className="w-6 h-6 text-vivaccess-green mb-4" />
                <h3 className="font-semibold mb-2">Cours en ligne</h3>
                <p className="text-sm text-muted-foreground">Éducation pour tous les âges et niveaux.</p>
              </div>
              <div className="p-6 rounded-xl glass-card hover:shadow-md transition-all">
                <ShoppingCart className="w-6 h-6 text-amber-500 mb-4" />
                <h3 className="font-semibold mb-2">Marketplace locale</h3>
                <p className="text-sm text-muted-foreground">Vente et achat de produits artisanaux.</p>
              </div>
              <div className="p-6 rounded-xl glass-card hover:shadow-md transition-all">
                <CreditCard className="w-6 h-6 text-violet-600 mb-4" />
                <h3 className="font-semibold mb-2">Microfinancement</h3>
                <p className="text-sm text-muted-foreground">Accès aux services financiers de base.</p>
              </div>
              <div className="p-6 rounded-xl glass-card hover:shadow-md transition-all">
                <BarChart3 className="w-6 h-6 text-vivaccess-blue mb-4" />
                <h3 className="font-semibold mb-2">Suivi des ressources</h3>
                <p className="text-sm text-muted-foreground">Gestion optimisée des ressources locales.</p>
              </div>
              <div className="p-6 rounded-xl glass-card hover:shadow-md transition-all">
                <AlertTriangle className="w-6 h-6 text-rose-500 mb-4" />
                <h3 className="font-semibold mb-2">Alertes eau</h3>
                <p className="text-sm text-muted-foreground">Surveillance de la qualité et disponibilité.</p>
              </div>
              <div className="p-6 rounded-xl glass-card hover:shadow-md transition-all">
                <FileSpreadsheet className="w-6 h-6 text-vivaccess-green mb-4" />
                <h3 className="font-semibold mb-2">Ressources pédagogiques</h3>
                <p className="text-sm text-muted-foreground">Matériel adapté au contexte local.</p>
              </div>
              <div className="p-6 rounded-xl glass-card hover:shadow-md transition-all">
                <Building className="w-6 h-6 text-amber-500 mb-4" />
                <h3 className="font-semibold mb-2">Infrastructure</h3>
                <p className="text-sm text-muted-foreground">Signalement des problèmes d'infrastructure.</p>
              </div>
              <div className="p-6 rounded-xl glass-card hover:shadow-md transition-all">
                <Megaphone className="w-6 h-6 text-violet-600 mb-4" />
                <h3 className="font-semibold mb-2">Campagnes locales</h3>
                <p className="text-sm text-muted-foreground">Organisation d'initiatives communautaires.</p>
              </div>
              <div className="p-6 rounded-xl glass-card hover:shadow-md transition-all">
                <Users className="w-6 h-6 text-vivaccess-blue mb-4" />
                <h3 className="font-semibold mb-2">Formation communautaire</h3>
                <p className="text-sm text-muted-foreground">Renforcement des capacités locales.</p>
              </div>
              <div className="p-6 rounded-xl glass-card hover:shadow-md transition-all">
                <ShieldCheck className="w-6 h-6 text-rose-500 mb-4" />
                <h3 className="font-semibold mb-2">Droits citoyens</h3>
                <p className="text-sm text-muted-foreground">Information sur les droits et démarches.</p>
              </div>
              <div className="p-6 rounded-xl glass-card hover:shadow-md transition-all">
                <Droplets className="w-6 h-6 text-vivaccess-light-blue mb-4" />
                <h3 className="font-semibold mb-2">Irrigation efficace</h3>
                <p className="text-sm text-muted-foreground">Techniques pour économiser l'eau.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-vivaccess-blue to-vivaccess-green opacity-10" />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-vivaccess-light-blue/10 blur-3xl transform translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-vivaccess-light-green/10 blur-3xl transform -translate-x-1/3" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center stagger-animation">
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-primary text-sm font-medium">
                Rejoignez-nous
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ensemble, construisons un avenir meilleur pour les communautés rurales
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Notre plateforme est conçue en collaboration avec les communautés locales. Rejoignez-nous pour participer à cette initiative et contribuer au développement durable des régions rurales du Maroc.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="button-primary bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
                  S'inscrire gratuitement
                </button>
                <button className="button-ghost text-gray-800 hover:bg-white/10 w-full sm:w-auto">
                  Nous contacter
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
