import { Route, Switch } from 'wouter';
import './styles/lis2-effects.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

import Citacoes from './pages/Citacoes';
import Cartas from './pages/Cartas';

import Galeria from './pages/Galeria';
import Escolhas from './pages/Escolhas';
import Tatuagem from './pages/Tatuagem';
import MusicPlayer from './components/MusicPlayer';
import LightningEffect from './components/LightningEffect';

// Última atualização: 2025-11-23 14:15
export default function App() {
  return (
    <>
      <LightningEffect />
      <MusicPlayer />
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />

      <Route path="/galeria" component={Galeria} />
      <Route path="/escolhas" component={Escolhas} />
      <Route path="/tatuagem" component={Tatuagem} />
      <Route path="/citacoes" component={Citacoes} />
      <Route path="/cartas" component={Cartas} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/contato" component={Contato} />
      <Route>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">404 - Página não encontrada</h1>
            <a href="/" className="text-lis2-rust hover:text-lis2-rust">
              Voltar para o início
            </a>
          </div>
        </div>
      </Route>
    </Switch>
    </>
  );
}
