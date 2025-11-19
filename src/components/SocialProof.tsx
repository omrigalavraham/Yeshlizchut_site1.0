import { useEffect, useState, useRef } from 'react';
import { Users, TrendingUp, Star, Award } from 'lucide-react';

export default function SocialProof() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Counter = ({ end, duration = 2000, suffix = '', prefix = '' }: { end: number; duration?: number; suffix?: string; prefix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return (
      <span className="text-2xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
        {prefix}{count.toLocaleString('he-IL')}{suffix}
      </span>
    );
  };

  const RatingCounter = () => {
    const [rating, setRating] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const duration = 2000;
      const end = 4.87;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setRating(progress * end);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible]);

    return (
      <span className="text-2xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
        {rating.toFixed(1)}<span className="text-xl md:text-4xl text-gray-600">/5</span>
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-8 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 lg:gap-12">
          <div className="text-center space-y-1 md:space-y-4 px-2">
            <div className="flex justify-center">
              <div className="bg-blue-50 p-2 md:p-5 rounded-2xl">
                <Award className="w-5 h-5 md:w-10 md:h-10 text-blue-600" />
              </div>
            </div>
            <div className="min-h-[2.5rem] md:min-h-[3.75rem] flex items-center justify-center">
              <Counter end={96.8} suffix="%" />
            </div>
            <p className="text-gray-600 text-[10px] md:text-base lg:text-lg font-medium leading-tight">שביעות רצון</p>
          </div>

          <div className="text-center space-y-1 md:space-y-4 px-2">
            <div className="flex justify-center">
              <div className="bg-yellow-50 p-2 md:p-5 rounded-2xl">
                <Star className="w-5 h-5 md:w-10 md:h-10 text-yellow-500" />
              </div>
            </div>
            <div className="min-h-[2.5rem] md:min-h-[3.75rem] flex items-center justify-center">
              <RatingCounter />
            </div>
            <p className="text-gray-600 text-[10px] md:text-base lg:text-lg font-medium leading-tight">דירוג ממוצע</p>
          </div>

          <div className="text-center space-y-1 md:space-y-4 px-2">
            <div className="flex justify-center">
              <div className="bg-green-50 p-2 md:p-5 rounded-2xl">
                <TrendingUp className="w-5 h-5 md:w-10 md:h-10 text-green-600" />
              </div>
            </div>
            <div className="min-h-[2.5rem] md:min-h-[3.75rem] flex items-center justify-center">
              <Counter end={1.53} suffix="M+ ₪" />
            </div>
            <p className="text-gray-600 text-[10px] md:text-base lg:text-lg font-medium leading-tight">הוחזרו ללקוחותינו</p>
          </div>

          <div className="text-center space-y-1 md:space-y-4 px-2">
            <div className="flex justify-center">
              <div className="bg-orange-50 p-2 md:p-5 rounded-2xl">
                <Users className="w-5 h-5 md:w-10 md:h-10 text-orange-600" />
              </div>
            </div>
            <div className="min-h-[2.5rem] md:min-h-[3.75rem] flex items-center justify-center">
              <Counter end={6923} suffix="+" />
            </div>
            <p className="text-gray-600 text-[10px] md:text-base lg:text-lg font-medium leading-tight">לקוחות מרוצים</p>
          </div>
        </div>

        <div className="mt-8 md:mt-16 pt-6 md:pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-12">
            <div className="flex items-center gap-2 md:gap-3 text-gray-700">
              <div className="bg-green-100 p-1.5 md:p-2 rounded-lg">
                <span className="font-bold text-green-700 text-sm md:text-base">✓</span>
              </div>
              <span className="font-medium text-xs md:text-base">מאובטח SSL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
