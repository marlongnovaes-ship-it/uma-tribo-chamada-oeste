import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const links = [
    { href: '/', label: t('nav.home') },
    { href: '/blog', label: t('nav.blog') },
    { href: '/galeria', label: t('nav.gallery') },
    { href: '/escolhas', label: t('nav.choices') },
    { href: '/tatuagem', label: t('nav.tattoo') },
    { href: '/citacoes', label: t('nav.quotes') },
    { href: '/cartas', label: t('nav.letters') },
    { href: '/sobre', label: t('nav.about') },
    { href: '/contato', label: t('nav.contact') },
  ];

  const closeMenu = () => setIsOpen(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  const currentLang = i18n.language === 'pt' ? 'PT' : 'EN';

  return (
    <nav className="fixed top-0 w-full bg-amber-900/95 backdrop-blur-sm text-amber-50 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <a className="text-lg md:text-xl font-bold hover:text-orange-200 transition-colors" onClick={closeMenu}>
              {t('home.title')}
            </a>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className="hover:text-orange-200 transition-colors text-sm lg:text-base">
                  {link.label}
                </a>
              </Link>
            ))}
            
            {/* Language Toggle Button - Desktop */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 bg-amber-800 hover:bg-amber-700 rounded-lg transition-colors text-sm font-medium"
              aria-label="Change language"
            >
              <Globe className="w-4 h-4" />
              {currentLang}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Language Toggle Button - Mobile */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 bg-amber-800 hover:bg-amber-700 rounded transition-colors text-xs font-medium"
              aria-label="Change language"
            >
              <Globe className="w-4 h-4" />
              {currentLang}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-amber-800 rounded transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a 
                    className="block px-4 py-2 hover:bg-amber-800 rounded transition-colors"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
