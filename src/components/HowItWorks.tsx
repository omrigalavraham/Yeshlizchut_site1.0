import { ClipboardList, FileCheck, Banknote, ArrowLeft } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: ClipboardList,
      title: 'משאירים פרטים',
      description: 'טופס קצר ומהיר — רק כמה שדות ואנחנו יוצרים איתך קשר',
      color: 'from-blue-500 to-blue-600',
      image: 'https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      number: 2,
      icon: FileCheck,
      title: 'בדיקת זכאות מלאה',
      description: 'עוברים על עשרות קריטריונים — כולל נקודות זיכוי שרוב האנשים לא יודעים עליהן',
      color: 'from-emerald-500 to-emerald-600',
      image: 'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      number: 3,
      icon: FileCheck,
      title: 'איסוף והגשה',
      description: 'אנחנו מטפלים בכל הבירוקרטיה — מסמכים, טפסים והגשה מול רשות המיסים',
      color: 'from-amber-500 to-amber-600',
      image: 'https://images.pexels.com/photos/4386339/pexels-photo-4386339.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      number: 4,
      icon: Banknote,
      title: 'קבלת ההחזר',
      description: 'מעקב ועדכון שוטף עד שהכסף מגיע לחשבון שלך — בדיוק כמו שהבטחנו',
      color: 'from-violet-500 to-violet-600',
      image: 'https://images.pexels.com/photos/6120214/pexels-photo-6120214.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section className="relative py-6 md:py-8 bg-gradient-to-br from-blue-50/50 via-emerald-50/30 to-violet-50/50 overflow-hidden">
      {/* רקע דקורטיבי */}
      <div className="absolute inset-0 opacity-[0.01]">
        <div className="absolute top-1/4 right-10 w-80 h-80 bg-blue-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-emerald-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            איך זה עובד?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            4 שלבים פשוטים להחזר המס שמגיע לכם
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-l from-blue-200 via-green-200 to-purple-200 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200/50 group">
                    <div className="relative h-32 md:h-40 overflow-hidden">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 right-4">
                        <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-xl font-bold text-slate-900">{step.number}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 md:p-6 text-center space-y-2">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900">
                        {step.title}
                      </h3>

                      <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 -translate-x-full">
                      <ArrowLeft className="w-8 h-8 text-gray-300" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg max-w-2xl mx-auto border border-slate-200/50">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              כמה זמן לוקח התהליך?
            </h3>
            <p className="text-base md:text-lg text-slate-600 mb-6">
              מרגע התחלת התהליך ועד קבלת תשובה על גובה הזכאות - <span className="font-bold bg-gradient-to-l from-blue-600 to-blue-700 bg-clip-text text-transparent">7-21 ימי עסקים</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full shadow-sm"></div>
                <span>בדיקת זכאות 7-21 ימי עסקים</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-violet-500 rounded-full shadow-sm"></div>
                <span>קבלת הכסף לאחר אישור</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
