import { Route, Switch } from 'wouter';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-6xl font-bold text-center mb-8 text-amber-900">
          Uma Tribo Chamada Oeste
        </h1>
        <p className="text-2xl text-center text-gray-700 max-w-3xl mx-auto">
          Histórias da estrada. Encontros que mudam vidas. A jornada nunca termina.
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
}
