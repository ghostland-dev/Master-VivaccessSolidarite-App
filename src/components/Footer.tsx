
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="bg-primary rounded-lg p-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M12 2L20 7V17L12 22L4 17V7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 22V12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 7L12 12L4 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-lg font-display font-bold text-primary">VivAccess</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md mb-6">
              Une plateforme numérique pour améliorer les conditions de vie et l'accès aux services essentiels des populations rurales isolées du Sud-Est du Maroc.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-gray-900">Services</h4>
            <ul className="space-y-3">
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Télémédecine</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Éducation à distance</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Développement économique</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Gestion des ressources en eau</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Engagement civique</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-gray-900">Support</h4>
            <ul className="space-y-3">
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Centre d'aide</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Tutoriels</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Ressources</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Formation</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-gray-900">Légal</h4>
            <ul className="space-y-3">
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Conditions d'utilisation</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Politique de confidentialité</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Mentions légales</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Cookies</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2023 VivAccess. Tous droits réservés.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><Link to="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Conditions</Link></li>
              <li><Link to="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Confidentialité</Link></li>
              <li><Link to="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Cookies</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
