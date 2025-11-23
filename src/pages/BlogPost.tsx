import { useRoute, Link } from 'wouter';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { posts } from '../data/posts';

export default function BlogPost() {
  const [, params] = useRoute('/blog/:slug');
  const post = posts.find(p => p.slug === params?.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-amber-900">Post não encontrado</h1>
          <Link href="/blog">
            <a className="text-amber-600 hover:text-amber-700">
              Voltar ao blog
            </a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <article className="pt-24 pb-20">
        {/* Hero Image */}
        <div className="h-96 overflow-hidden mb-12">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/blog">
            <a className="flex items-center text-amber-600 hover:text-amber-700 mb-8 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar ao blog
            </a>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center text-amber-600 mb-4">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{post.date}</span>
            </div>

            <h1 className="text-5xl font-bold mb-8 text-amber-900">{post.title}</h1>

            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link href="/blog">
                <a className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block">
                  Ver mais posts
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
