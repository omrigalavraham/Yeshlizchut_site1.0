import { useState } from 'react';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import ContactForm from './ContactForm';

export default function FinalCTA() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="contact-form" className="py-8 md:py-10 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/50 overflow-hidden">
          <div className="p-8 md:p-16 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              מוכן לקבל את ההחזר שמגיע לך?
            </h2>

            <p className="text-xl md:text-2xl text-slate-600 font-normal max-w-2xl mx-auto">
              הצטרף למעל <span className="font-bold text-blue-600">6,200+</span> שכירים שכבר קיבלו את הכסף שלהם
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-6 max-w-3xl mx-auto">
              <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-emerald-50/50 border border-emerald-100">
                <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                <span className="text-slate-700 font-semibold">ללא התחייבות</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-blue-50/50 border border-blue-100">
                <CheckCircle2 className="w-8 h-8 text-blue-600" />
                <span className="text-slate-700 font-semibold">ללא תשלום עד לקבלת החזר</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-amber-50/50 border border-amber-100">
                <CheckCircle2 className="w-8 h-8 text-amber-600" />
                <span className="text-slate-700 font-semibold">תשובה תוך 7-21 ימי עסקים</span>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => setShowForm(true)}
                className="group bg-gradient-to-l from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-xl md:text-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
              >
                בדקו כמה מגיע לכם - חינם!
                <ArrowLeft className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <p className="text-slate-500 text-sm pt-4">
              מצטרפים אלינו מדי יום עשרות לקוחות חדשים
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 border-t border-slate-200">
            <div className="grid md:grid-cols-3 gap-6 p-8 md:p-12">
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-l from-blue-600 to-blue-700 bg-clip-text text-transparent">₪11,847</div>
                <div className="text-slate-600 font-medium">החזר ממוצע</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-l from-emerald-600 to-emerald-700 bg-clip-text text-transparent">7-21 ימי עסקים</div>
                <div className="text-slate-600 font-medium">זמן עד תשובה</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-l from-amber-600 to-amber-700 bg-clip-text text-transparent">4.87/5</div>
                <div className="text-slate-600 font-medium">דירוג לקוחות</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showForm && <ContactForm onClose={() => setShowForm(false)} />}
    </section>
  );
}
