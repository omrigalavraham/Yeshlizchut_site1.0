import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Article } from '../data/articles';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] flex flex-col h-full">
      <Link to={`/articles/${article.id}`} className="relative h-48 sm:h-56 overflow-hidden block">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/photo/WhatsApp Image 2025-12-06 at 17.25.14.jpeg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </Link>

      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <Link to={`/articles/${article.id}`}>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4 hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
            {article.title}
          </h3>
        </Link>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 line-clamp-3 flex-grow">
          {article.summary}
        </p>

        <Link
          to={`/articles/${article.id}`}
          className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors group mt-auto text-sm sm:text-base"
        >
          <span>קרא עוד</span>
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
