import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/', label: 'Início' },
    { href: '/blog', label: 'Blog' },
    { href: '/jornada', label: 'Jornada' },
    { href: '/mapa', label: 'Mapa' },
    { href: '/irmaos', label: 'Irmãos' },
    { href: '/galeria', label: 'Galeria' },
    { href: '/escolhas', label: 'Escolhas' },
    { href: '/tatuagem', label: 'Tatuagem' },
    { href: '/citacoes', label: 'Citações' },
    { href: '/cartas', label: 'Cartas' },
    { href: '/sobre', label: 'Sobre' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-full bg-amber-900/95 backdrop-blur-sm text-amber-50 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <a className="text-lg md:text-xl font-bold hover:text-amber-200 transition-colors" onClick={closeMenu}>
              Uma Tribo Chamada Oeste
            </a>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className="hover:text-amber-200 transition-colors text-sm lg:text-base">
                  {link.label}
                </a>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-amber-800 rounded transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
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
