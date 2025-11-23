import { Link } from 'wouter';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-amber-900/95 backdrop-blur-sm text-amber-50 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a className="text-xl font-bold hover:text-amber-200 transition-colors">
              Uma Tribo Chamada Oeste
            </a>
          </Link>

          <div className="flex items-center space-x-8">
            <Link href="/">
              <a className="hover:text-amber-200 transition-colors">Início</a>
            </Link>
            <Link href="/blog">
              <a className="hover:text-amber-200 transition-colors">Blog</a>
            </Link>
            <Link href="/jornada">
              <a className="hover:text-amber-200 transition-colors">Jornada</a>
            </Link>
            <Link href="/citacoes">
              <a className="hover:text-amber-200 transition-colors">Citações</a>
            </Link>
            <Link href="/cartas">
              <a className="hover:text-amber-200 transition-colors">Cartas</a>
            </Link>
            <Link href="/sobre">
              <a className="hover:text-amber-200 transition-colors">Sobre</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
