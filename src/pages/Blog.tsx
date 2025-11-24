import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { posts } from '../data/posts';

export default function Blog() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 text-orange-900">Diário de Viagem</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Histórias da estrada, reflexões sobre liberdade, e encontros que mudam vidas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden sketch-border lis2-card watercolor-transition reflection-effect dynamic-shadow"
              >
                <Link href={`/blog/${post.slug}`}>
                  <a className="block">
                    <div className="h-64 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-lis2-rust mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{post.date}</span>
                      </div>
                      <h2 className="text-2xl font-bold mb-3 text-orange-900 hover:text-lis2-rust transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-700 mb-4">{post.excerpt}</p>
                      <span className="text-lis2-rust font-semibold hover:text-lis2-rust">
                        Ler mais →
                      </span>
                    </div>
                  </a>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
