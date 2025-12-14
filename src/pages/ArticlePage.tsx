import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { articles } from '../data/articles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import AccessibilityWidget from '../components/AccessibilityWidget';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const article = articles.find(a => a.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">המאמר לא נמצא</h1>
          <Link to="/articles" className="text-blue-600 hover:text-blue-700 font-semibold">
            חזרה לדף המאמרים
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = articles.findIndex(a => a.id === id);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Header />

      <article className="pt-24 sm:pt-32 pb-12 sm:pb-20">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 mb-6 sm:mb-10">
          <button
            onClick={() => navigate('/articles')}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-all duration-200 font-semibold group hover:gap-3 text-base sm:text-lg"
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            <span>חזרה למאמרים</span>
          </button>
        </div>

        {/* Hero Image */}
        <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 mb-8 sm:mb-16">
          <div className="relative h-56 sm:h-[28rem] md:h-[32rem] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl ring-1 ring-slate-200">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/photo/WhatsApp Image 2025-12-06 at 17.25.14.jpeg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          </div>
        </div>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight sm:leading-[1.15] tracking-tight">
            {article.title}
          </h1>
        </div>

        {/* Article Summary */}
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 mb-10 sm:mb-14 md:mb-16">
          <div className="bg-gradient-to-l from-blue-50 to-blue-100/50 border-r-4 border-blue-600 p-5 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-sm">
            <p className="text-lg sm:text-xl md:text-2xl text-slate-800 leading-relaxed sm:leading-[1.7] font-semibold">
              {article.summary}
            </p>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
          <div
            className="prose prose-base sm:prose-lg prose-slate max-w-none
              prose-headings:font-bold prose-headings:text-slate-900 prose-headings:leading-tight
              prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:md:text-4xl prose-h2:mt-10 prose-h2:sm:mt-16 prose-h2:mb-4 prose-h2:sm:mb-6 prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-2 prose-h2:sm:pb-3
              prose-h3:text-xl prose-h3:sm:text-2xl prose-h3:md:text-3xl prose-h3:mt-6 prose-h3:sm:mt-10 prose-h3:mb-3 prose-h3:sm:mb-5 prose-h3:text-blue-700
              prose-p:text-slate-700 prose-p:text-base prose-p:sm:text-lg prose-p:md:text-xl prose-p:leading-relaxed prose-p:sm:leading-[1.8] prose-p:mb-4 prose-p:sm:mb-6 prose-p:font-normal
              prose-a:text-blue-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline hover:prose-a:text-blue-700
              prose-strong:text-slate-900 prose-strong:font-extrabold prose-strong:text-lg prose-strong:sm:text-xl
              prose-ul:mr-5 prose-ul:sm:mr-8 prose-ul:my-6 prose-ul:sm:my-8 prose-ul:space-y-2 prose-ul:sm:space-y-3
              prose-ol:mr-5 prose-ol:sm:mr-8 prose-ol:my-6 prose-ol:sm:my-8 prose-ol:space-y-2 prose-ol:sm:space-y-3
              prose-li:text-slate-700 prose-li:text-base prose-li:sm:text-lg prose-li:md:text-xl prose-li:leading-relaxed prose-li:mb-2 prose-li:sm:mb-3 prose-li:pl-1 prose-li:sm:pl-2
              prose-li::marker:text-blue-600 prose-li::marker:font-bold"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        {/* Navigation to Other Articles */}
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 mt-16 sm:mt-20 md:mt-24">
          <div className="border-t-2 border-slate-300 pt-10 sm:pt-14 md:pt-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6 sm:mb-8 md:mb-10 text-center">המשך לקרוא</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
              {prevArticle && (
                <Link
                  to={`/articles/${prevArticle.id}`}
                  className="group p-5 sm:p-6 md:p-8 bg-white rounded-xl sm:rounded-2xl border-2 border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 hover:shadow-xl active:scale-[0.98]"
                >
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 mb-2 sm:mb-3">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    <span>מאמר קודם</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {prevArticle.title}
                  </h4>
                </Link>
              )}
              {nextArticle && (
                <Link
                  to={`/articles/${nextArticle.id}`}
                  className="group p-5 sm:p-6 md:p-8 bg-white rounded-xl sm:rounded-2xl border-2 border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 hover:shadow-xl active:scale-[0.98]"
                >
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 mb-2 sm:mb-3">
                    <span>מאמר הבא</span>
                    <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {nextArticle.title}
                  </h4>
                </Link>
              )}
            </div>
          </div>
        </div>
      </article>

      <Footer />
      <WhatsAppButton />
      <AccessibilityWidget />
    </div>
  );
}
