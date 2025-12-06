import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // רשימת כל התמונות מתיקיית photo
  const images = [
    'WhatsApp Image 2025-12-06 at 17.25.14.jpeg',
    'WhatsApp Image 2025-12-06 at 17.25.15 (1).jpeg',
    'WhatsApp Image 2025-12-06 at 17.25.15 (2).jpeg',
    'WhatsApp Image 2025-12-06 at 17.25.15.jpeg',
    'WhatsApp Image 2025-12-06 at 17.25.16 (1).jpeg',
    'WhatsApp Image 2025-12-06 at 17.25.16 (2).jpeg',
    'WhatsApp Image 2025-12-06 at 17.25.16.jpeg',
    'WhatsApp Image 2025-12-06 at 17.25.17 (1).jpeg',
    'WhatsApp Image 2025-12-06 at 17.25.17 (2).jpeg',
    'WhatsApp Image 2025-12-06 at 17.25.17 (3).jpeg',
    'WhatsApp Image 2025-12-06 at 17.25.17.jpeg',
    'WhatsApp Image 2025-12-06 at 17.25.18 (1).jpeg',
    'WhatsApp Image 2025-12-06 at 17.25.18 (2).jpeg',
    'WhatsApp Image 2025-12-06 at 17.25.18 (3).jpeg',
    'WhatsApp Image 2025-12-06 at 17.25.18.jpeg',
    'WhatsApp Image 2025-12-06 at 17.25.19 (1).jpeg',
    'WhatsApp Image 2025-12-06 at 17.25.19 (2).jpeg',
    'WhatsApp Image 2025-12-06 at 17.25.19 (3).jpeg',
    'WhatsApp Image 2025-12-06 at 17.25.19.jpeg',
    'WhatsApp Image 2025-12-06 at 17.25.20 (1).jpeg',
    'WhatsApp Image 2025-12-06 at 17.25.20 (2).jpeg',
    'WhatsApp Image 2025-12-06 at 17.25.20 (3).jpeg',
    'WhatsApp Image 2025-12-06 at 17.25.20.jpeg',
    'WhatsApp Image 2025-12-06 at 17.25.21 (1).jpeg',
    'WhatsApp Image 2025-12-06 at 17.25.21 (2).jpeg',
    'WhatsApp Image 2025-12-06 at 17.25.21 (3).jpeg',
    'WhatsApp Image 2025-12-06 at 17.25.21.jpeg',
    'WhatsApp Image 2025-12-06 at 17.25.22 (1).jpeg',
    'WhatsApp Image 2025-12-06 at 17.25.22 (2).jpeg',
    'WhatsApp Image 2025-12-06 at 17.25.22 (3).jpeg',
    'WhatsApp Image 2025-12-06 at 17.25.22.jpeg',
    'WhatsApp Image 2025-12-06 at 17.25.23.jpeg',
  ];

  const totalImages = images.length;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalImages);
    }, 3500);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalImages]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  };

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  // חישוב אילו תמונות להציג (הנוכחית + 2 משני הצדדים)
  const getVisibleSlides = () => {
    const slides = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + totalImages) % totalImages;
      slides.push({
        index,
        position: i,
        image: images[index],
      });
    }
    return slides;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            מה{' '}
            <span className="text-blue-600 relative inline-block">
              הלקוחות שלנו
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-400 rounded-full opacity-50"></span>
            </span>{' '}
            מספרים
          </h2>
          <p className="text-xl text-gray-600">
            <span className="font-bold text-blue-600">סיפורי הצלחה</span> אמיתיים מלקוחות מרוצים
          </p>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative h-[450px] md:h-[550px] lg:h-[600px] flex items-center justify-center">
          <div className="relative w-full h-full perspective-1000">
            {getVisibleSlides().map((slide) => {
              const { position, image, index } = slide;

              // חישוב סגנון לפי מיקום
              let transform = '';
              let zIndex = 0;
              let opacity = 1;
              let scale = 1;

              if (position === 0) {
                // תמונה מרכזית
                transform = 'translateX(0) translateZ(0) rotateY(0deg)';
                zIndex = 30;
                scale = 1;
                opacity = 1;
              } else if (position === -1) {
                // תמונה ימינה
                transform = 'translateX(70%) translateZ(-200px) rotateY(-35deg)';
                zIndex = 20;
                scale = 0.75;
                opacity = 0.6;
              } else if (position === 1) {
                // תמונה שמאלה
                transform = 'translateX(-70%) translateZ(-200px) rotateY(35deg)';
                zIndex = 20;
                scale = 0.75;
                opacity = 0.6;
              } else if (position === -2) {
                // תמונה רחוקה ימינה
                transform = 'translateX(120%) translateZ(-350px) rotateY(-45deg)';
                zIndex = 10;
                scale = 0.5;
                opacity = 0.3;
              } else {
                // תמונה רחוקה שמאלה
                transform = 'translateX(-120%) translateZ(-350px) rotateY(45deg)';
                zIndex = 10;
                scale = 0.5;
                opacity = 0.3;
              }

              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out cursor-pointer"
                  style={{
                    transform: `translate(-50%, -50%) ${transform} scale(${scale})`,
                    zIndex,
                    opacity,
                  }}
                  onClick={() => position !== 0 && goToSlide(index)}
                >
                  <div
                    className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-white hover:border-blue-500 transition-all duration-300"
                    style={{
                      width: '320px',
                      height: '420px',
                    }}
                  >
                    <img
                      src={`/photo/${encodeURIComponent(image)}`}
                      alt={`ביקורת לקוח ${index + 1}`}
                      className="w-full h-full object-contain bg-gray-50"
                      loading={position === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 bg-white/90 hover:bg-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 group"
            aria-label="ביקורת קודמת"
          >
            <ChevronRight className="w-6 h-6 text-gray-800 group-hover:text-blue-600" />
          </button>

          <button
            onClick={goToNext}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 bg-white/90 hover:bg-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 group"
            aria-label="ביקורת הבאה"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800 group-hover:text-blue-600" />
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center items-center gap-2 mt-8 flex-wrap px-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-12 h-3 bg-blue-600'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`עבור לביקורת ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        <div className="text-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            {isAutoPlaying ? '⏸️ השהה מצגת אוטומטית' : '▶️ הפעל מצגת אוטומטית'}
          </button>
        </div>
      </div>

      {/* Custom CSS for 3D perspective */}
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
};

export default ReviewsCarousel;
