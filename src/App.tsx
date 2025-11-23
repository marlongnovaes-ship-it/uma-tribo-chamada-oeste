import { Route, Switch } from 'wouter';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Sobre from './pages/Sobre';

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/sobre" component={Sobre} />
      <Route>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">404 - Página não encontrada</h1>
            <a href="/" className="text-amber-600 hover:text-amber-700">
              Voltar para o início
            </a>
          </div>
        </div>
      </Route>
    </Switch>
  );
}
