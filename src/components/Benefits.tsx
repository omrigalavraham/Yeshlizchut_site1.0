import { FileText, DollarSign, Zap, Lock, UserCheck, Smartphone } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'בדיקת זכאות חינם',
      description: 'משלמים רק אם יש החזר — אם לא קיבלתם כסף, לא משלמים אף שקל',
      color: 'from-emerald-50 to-emerald-100/50',
      iconColor: 'text-emerald-600',
      image: 'https://images.pexels.com/photos/6120214/pexels-photo-6120214.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: FileText,
      title: 'מקיפים עשרות קריטריונים',
      description: 'בודקים גם נקודות זיכוי שרוב האנשים לא מכירים — כדי שתקבלו את המקסימום',
      color: 'from-blue-50 to-blue-100/50',
      iconColor: 'text-blue-600',
      image: 'https://images.pexels.com/photos/6238048/pexels-photo-6238048.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: UserCheck,
      title: 'מומחים לשכירים ולפנסיונרים',
      description: 'התאמות ונקודות זיכוי ייחודיות — אנחנו יודעים בדיוק מה מגיע לכם',
      color: 'from-rose-50 to-rose-100/50',
      iconColor: 'text-rose-600',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Zap,
      title: 'חוסכים זמן ובירוקרטיה',
      description: 'אנחנו מול רשות המסים בשבילך — איסוף מסמכים, טפסים והגשה מהתחלה ועד הסוף',
      color: 'from-amber-50 to-amber-100/50',
      iconColor: 'text-amber-600',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Lock,
      title: 'שקיפות מלאה',
      description: 'עדכון סטטוס בכל שלב — אתם יודעים בדיוק איפה הבקשה שלכם ומתי הכסף מגיע',
      color: 'from-violet-50 to-violet-100/50',
      iconColor: 'text-violet-600',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Smartphone,
      title: 'שירות אישי ומהיר',
      description: 'נציג אישי זמין בווטסאפ, טלפון ומייל — תשובות מהירות לכל שאלה',
      color: 'from-teal-50 to-teal-100/50',
      iconColor: 'text-teal-600',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="services" className="relative py-8 md:py-10 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* רקע דקורטיבי */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-[0.03] animate-blob"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-[0.03] animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-rose-400 rounded-full mix-blend-multiply filter blur-3xl opacity-[0.03] animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            למה אלפי ישראלים <span className="text-blue-600">בוחרים</span> בנו?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            אנחנו לא רק עוד חברה להחזרי מס. אנחנו השותפים שלכם להשגת הכסף שמגיע לכם
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-200/50"
              >
                <div className="relative h-32 md:h-40 overflow-hidden">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-4 md:p-6 text-right space-y-2">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
