import { useState } from 'react';
import { articles } from '../data/articles';
import ArticleCard from '../components/ArticleCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import AccessibilityWidget from '../components/AccessibilityWidget';
import { BookOpen, Search } from 'lucide-react';

export default function Articles() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-10 sm:pb-16 px-5 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full mb-5 sm:mb-6">
            <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 sm:mb-6">
            מאמרים ומידע
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-8 sm:mb-10 px-4">
            כל המידע שצריך לדעת על החזרי מס, זכויות כלכליות ועוד
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <input
              type="text"
              placeholder="חפש מאמרים..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pr-10 sm:pr-12 pl-4 sm:pl-6 py-3 sm:py-4 rounded-lg sm:rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all text-base sm:text-lg"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-12 sm:pb-20 px-5 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 sm:py-20">
              <p className="text-lg sm:text-xl text-slate-600 px-4">לא נמצאו מאמרים התואמים לחיפוש</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <AccessibilityWidget />
    </div>
  );
}
