export default function About() {
  return (
    <section id="about" className="relative py-8 md:py-10 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      {/* רקע דקורטיבי */}
      <div className="absolute inset-0 opacity-[0.01]">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="absolute inset-0 opacity-[0.008]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(59, 130, 246) 1px, transparent 0)`,
          backgroundSize: '64px 64px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-3 tracking-tight">
            אודות
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-12 border border-slate-200/50">
            <div className="space-y-6 text-right">
              <p className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                כסף ששייך לך – צריך לחזור אליך.
              </p>

              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                <span className="font-bold text-blue-600">78% מהשכירים בישראל זכאים להחזר מס</span>, אבל רובם לא יודעים על זה ולא מממשים את זכויותיהם.
                מדי שנה, מיליארדי שקלים נשארים בקופת המדינה במקום לחזור לכיסם של אזרחים עובדים.
              </p>

              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                אתם עובדים קשה, משלמים מיסים בזמן, מקפידים על כל התשלומים – <span className="font-semibold text-slate-900">אז למה לא לוודא שאתם מקבלים בחזרה את מה שמגיע לכם על פי חוק?</span>
              </p>

              <div className="bg-gradient-to-l from-blue-600/5 to-blue-600/10 border-r-4 border-blue-600 pr-4 md:pr-8 py-4 md:py-6 my-6">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">התהליך שלנו:</h3>
                <p className="text-base md:text-lg text-slate-900 leading-relaxed font-medium space-y-2">
                  ✓ <span className="font-bold">בדיקה מקיפה ומקצועית</span> של כל נקודות הזיכוי, ניכויים וזכויות שמגיעות לכם – כולל אלו שלא ידעתם עליהן<br />
                  ✓ <span className="font-bold">איסוף והכנת כל המסמכים</span> – אנחנו דואגים לכל הפרטים הקטנים, אתם לא צריכים ללכת לרו"ח או לטפל בניירת<br />
                  ✓ <span className="font-bold">הגשה מסודרת למס הכנסה</span> עם כל האישורים והמסמכים הנדרשים<br />
                  ✓ <span className="font-bold">מעקב אישי וצמוד</span> עד שהכסף מגיע בפועל לחשבון הבנק שלכם<br />
                  ✓ <span className="font-bold">תמיכה מלאה</span> בכל שאלה או בירור מול רשויות המס
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl pr-4 md:pr-8 py-4 md:py-8 my-6">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">מי אנחנו ?</h3>
                <p className="text-base md:text-lg text-slate-800 leading-relaxed mb-4">
                  חברתנו מתמחת בתחום החזרי המס עם ניסיון מוכח של שנים בהחזרת מאות אלפי שקלים לשכירים, פנסיונרים ועצמאים ברחבי הארץ.
                </p>
                <p className="text-base md:text-lg text-slate-800 leading-relaxed mb-4">
                  אנו עובדים מול רשויות המס באופן יומיומי ומכירים לעומק את המערכת, את הזכויות, ואת הדרכים החוקיות למקסם את ההחזרים.
                  <span className="font-semibold text-slate-900"> כל לקוח מקבל מאיתנו יחס אישי, מענה זמין, ושקיפות מלאה בכל שלב</span> – מתחילת התהליך ועד קבלת הכסף בפועל.
                </p>
                <p className="text-base md:text-lg text-slate-800 leading-relaxed">
                  <span className="font-bold text-blue-700">העיקרון שלנו פשוט:</span> אמינות מוחלטת, עבודה מקצועית, וקבלת התוצאות המקסימליות שמגיעות לכם על פי חוק.
                </p>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl pr-4 md:pr-8 py-4 md:py-6 my-6">
                <p className="text-base md:text-lg text-slate-800 leading-relaxed">
                  💡 <span className="font-bold text-blue-900">כדאי לדעת:</span> רוב האנשים מפספסים זכויות פשוט מחוסר ידע –
                  נקודות זיכוי על הוצאות רפואיות, תרומות, לימודים, הפרשות לפנסיה, ביטוחי חיים, ועוד עשרות סעיפים שיכולים לחסוך לכם אלפי שקלים בשנה.
                </p>
              </div>

              <p className="text-lg md:text-xl font-bold text-blue-700 leading-relaxed pt-4 border-t border-slate-200">
                החזר מס זה לא מותרות – זו זכוּת שלך על פי חוק. בוא נוודא שאתה מממש אותה.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
