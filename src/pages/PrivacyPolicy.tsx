import { ArrowRight, Shield, Lock, Eye, Trash2, Mail, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-8 transition-colors"
          aria-label="חזרה לעמוד הראשי"
        >
          <ArrowRight className="w-5 h-5" />
          <span>חזרה לעמוד הראשי</span>
        </button>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-3">מדיניות פרטיות</h1>
            <p className="text-slate-600">עודכן לאחרונה: {new Date().toLocaleDateString('he-IL')}</p>
          </div>

          <div className="prose prose-slate max-w-none text-right" dir="rtl">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-blue-600">1.</span>
                מבוא
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                יש לי זכות (להלן: "החברה", "אנחנו", "שלנו") מכבדת את פרטיותך ומתחייבת להגן על המידע האישי שלך.
                מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים, מאחסנים ומגינים על המידע האישי שלך בהתאם לחוק הגנת הפרטיות, התשמ"א-1981 ותקנות הגנת הפרטיות (אבטחת מידע), התשע"ז-2017.
              </p>
              <p className="text-slate-700 leading-relaxed">
                השימוש באתר ובשירותים שלנו מהווה הסכמה למדיניות פרטיות זו. אם אינך מסכים לתנאים המפורטים כאן, אנא הימנע משימוש באתר.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-blue-600">2.</span>
                איזה מידע אנחנו אוספים
              </h2>
              <div className="bg-blue-50 border-r-4 border-blue-600 pr-6 py-4 mb-4">
                <h3 className="font-bold text-slate-900 mb-2">מידע שאתה מספק לנו:</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li><strong>שם מלא</strong> - לצורך זיהוי ויצירת קשר אישי</li>
                  <li><strong>מספר טלפון</strong> - ליצירת קשר טלפוני לבדיקת זכאות</li>
                  <li><strong>כתובת דואר אלקטרוני</strong> (אופציונלי) - לשליחת מידע ועדכונים</li>
                  <li><strong>סוג משתמש</strong> (שכיר/פנסיונר) - להתאמת השירות לצרכיך</li>
                </ul>
              </div>
              <div className="bg-slate-50 border-r-4 border-slate-400 pr-6 py-4">
                <h3 className="font-bold text-slate-900 mb-2">מידע טכני שנאסף אוטומטית:</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>כתובת IP</li>
                  <li>סוג דפדפן ומערכת הפעלה</li>
                  <li>תאריך ושעת גישה לאתר</li>
                  <li>עמודים שצפית בהם</li>
                </ul>
                <p className="text-sm text-slate-600 mt-3">
                  <strong>שים לב:</strong> אנו לא משתמשים בעוגיות (Cookies) למעקב או לאיסוף מידע נוסף מעבר למידע הטכני הבסיסי.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-blue-600">3.</span>
                למה אנחנו משתמשים במידע שלך
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">יצירת קשר ומתן שירות</h3>
                    <p className="text-slate-600 text-sm">ליצירת קשר עמך לצורך בדיקת זכאות להחזר מס ומתן שירותי ייעוץ</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">שליחת מידע ועדכונים</h3>
                    <p className="text-slate-600 text-sm">לשלוח לך מידע רלוונטי על זכאותך, מסמכים נדרשים ועדכוני סטטוס</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">עמידה בדרישות חוק</h3>
                    <p className="text-slate-600 text-sm">שמירת תיעוד בהתאם לדרישות רשות המסים והחוק הישראלי</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Eye className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">שיפור השירות</h3>
                    <p className="text-slate-600 text-sm">ניתוח סטטיסטי (אנונימי) לשיפור חווית המשתמש והשירות</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-blue-600">4.</span>
                שיתוף מידע עם צדדים שלישיים
              </h2>
              <div className="bg-green-50 border-2 border-green-600 rounded-lg p-6 mb-4">
                <p className="text-slate-800 font-semibold mb-2">
                  <strong className="text-green-700">התחייבותנו:</strong> אנחנו לא מוכרים, משכירים או מעבירים את המידע האישי שלך לצדדים שלישיים למטרות שיווקיות.
                </p>
              </div>
              <p className="text-slate-700 leading-relaxed mb-3">
                <strong>אנו עשויים לשתף מידע במקרים הבאים בלבד:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 mr-4">
                <li><strong>רשות המסים:</strong> במסגרת הגשת בקשות להחזר מס בשמך (בהסכמתך המפורשת)</li>
                <li><strong>ספקי שירות:</strong> ספקי שירותי ענן, אחסון ותקשורת הפועלים מטעמנו ומחויבים לשמירה על סודיות</li>
                <li><strong>דרישות חוק:</strong> כאשר נדרש על פי חוק, צו שיפוטי או דרישה ממשלתית</li>
                <li><strong>הגנה על זכויות:</strong> כדי להגן על הזכויות, הרכוש או הבטיחות של החברה, המשתמשים או הציבור</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-blue-600">5.</span>
                אבטחת המידע
              </h2>
              <div className="bg-blue-50 border-r-4 border-blue-600 pr-6 py-4 mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <Lock className="w-6 h-6 text-blue-600" />
                  <h3 className="font-bold text-slate-900">אמצעי האבטחה שלנו כוללים:</h3>
                </div>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li><strong>הצפנת SSL/TLS:</strong> כל המידע מועבר באמצעות חיבור מוצפן ומאובטח</li>
                  <li><strong>אחסון מאובטח:</strong> המידע מאוחסן בשרתים מאובטחים עם הגנות מתקדמות</li>
                  <li><strong>הגבלת גישה:</strong> רק עובדים מורשים שעברו הדרכת אבטחת מידע יכולים לגשת למידע</li>
                  <li><strong>עדכוני אבטחה:</strong> אנו מבצעים עדכוני אבטחה ובדיקות באופן שוטף</li>
                  <li><strong>גיבויים:</strong> ביצוע גיבויים תקופתיים למניעת אבדן מידע</li>
                </ul>
              </div>
              <p className="text-slate-600 text-sm">
                למרות מאמצינו לאבטח את המידע שלך, שום שיטת העברה או אחסון באינטרנט אינה בטוחה ב-100%. אנו ממשיכים לשפר את אמצעי האבטחה שלנו באופן מתמיד.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-blue-600">6.</span>
                כמה זמן אנחנו שומרים את המידע
              </h2>
              <div className="bg-slate-50 border border-slate-300 rounded-lg p-6">
                <p className="text-slate-700 leading-relaxed mb-4">
                  אנו שומרים את המידע האישי שלך כל עוד הוא נדרש למטרות שלשמן נאסף, או בהתאם לדרישות החוק:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 mr-4">
                  <li><strong>פניות שלא הומרו לשירות:</strong> עד 12 חודשים</li>
                  <li><strong>לקוחות פעילים:</strong> למשך תקופת מתן השירות + 7 שנים (בהתאם לדרישות רשות המסים)</li>
                  <li><strong>מידע טכני ולוגים:</strong> עד 6 חודשים</li>
                </ul>
                <p className="text-slate-700 leading-relaxed mt-4">
                  לאחר תום התקופה, המידע יימחק או יהפוך לאנונימי באופן בטוח.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-blue-600">7.</span>
                הזכויות שלך
              </h2>
              <div className="space-y-4">
                <div className="bg-white border-2 border-blue-200 rounded-lg p-5">
                  <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-blue-600" />
                    זכות עיון
                  </h3>
                  <p className="text-slate-700 text-sm">
                    אתה זכאי לקבל מידע על הנתונים האישיים שלך המצויים אצלנו ולעיין בהם.
                  </p>
                </div>
                <div className="bg-white border-2 border-blue-200 rounded-lg p-5">
                  <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="text-blue-600 text-xl">✎</span>
                    זכות תיקון
                  </h3>
                  <p className="text-slate-700 text-sm">
                    אתה זכאי לבקש תיקון או עדכון של מידע שגוי או לא מדויק.
                  </p>
                </div>
                <div className="bg-white border-2 border-blue-200 rounded-lg p-5">
                  <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Trash2 className="w-5 h-5 text-blue-600" />
                    זכות מחיקה
                  </h3>
                  <p className="text-slate-700 text-sm">
                    אתה זכאי לבקש מחיקת המידע האישי שלך, בכפוף לחובות חוקיות לשמירת מידע.
                  </p>
                </div>
                <div className="bg-white border-2 border-blue-200 rounded-lg p-5">
                  <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="text-blue-600 text-xl">⛔</span>
                    זכות התנגדות
                  </h3>
                  <p className="text-slate-700 text-sm">
                    אתה זכאי להתנגד לשימוש במידע שלך לצרכי שיווק ישיר.
                  </p>
                </div>
                <div className="bg-white border-2 border-blue-200 rounded-lg p-5">
                  <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="text-blue-600 text-xl">📦</span>
                    זכות להעברת מידע
                  </h3>
                  <p className="text-slate-700 text-sm">
                    אתה זכאי לקבל עותק של המידע האישי שלך בפורמט נפוץ וקריא.
                  </p>
                </div>
              </div>
              <div className="mt-6 bg-blue-600 text-white rounded-lg p-6">
                <h3 className="font-bold text-xl mb-3">כיצד להפעיל את זכויותיך?</h3>
                <p className="mb-4">לממש את זכויותיך, פנה אלינו בכל אחת מהדרכים הבאות:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:privacy@eidan-tax.co.il" className="underline hover:text-blue-200">privacy@eidan-tax.co.il</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <a href="tel:0533464288" className="underline hover:text-blue-200">053-3464288</a>
                  </li>
                </ul>
                <p className="text-sm mt-4 text-blue-100">
                  נשיב לפנייתך תוך 30 יום ממועד קבלתה.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-blue-600">8.</span>
                קטינים
              </h2>
              <p className="text-slate-700 leading-relaxed">
                השירות שלנו מיועד למבוגרים בלבד. איננו אוספים במודע מידע מקטינים מתחת לגיל 18.
                אם הגעת למסקנה שאספנו מידע מקטין, אנא פנה אלינו מיד ונמחק את המידע.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-blue-600">9.</span>
                שינויים במדיניות הפרטיות
              </h2>
              <p className="text-slate-700 leading-relaxed mb-3">
                אנו שומרים לעצמנו את הזכות לעדכן ולשנות מדיניות פרטיות זו מעת לעת.
                שינויים מהותיים יפורסמו באתר עם ציון תאריך העדכון בראש העמוד.
              </p>
              <p className="text-slate-700 leading-relaxed">
                המשך השימוש באתר לאחר פרסום שינויים מהווה הסכמה למדיניות המעודכנת.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-blue-600">10.</span>
                יצירת קשר - רכז הגנת הפרטיות
              </h2>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-xl p-6">
                <p className="text-slate-800 font-semibold mb-4">
                  לכל שאלה, בקשה או תלונה בנושא פרטיות, ניתן ליצור קשר עם רכז הגנת הפרטיות:
                </p>
                <div className="space-y-3 text-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">ע</span>
                    </div>
                    <div>
                      <p className="font-bold">רכז הגנת הפרטיות</p>
                      <p className="text-sm">יש לי זכות</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mr-10">
                    <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <a href="mailto:privacy@eidan-tax.co.il" className="text-blue-600 hover:text-blue-700 font-semibold">
                      privacy@eidan-tax.co.il
                    </a>
                  </div>
                  <div className="flex items-center gap-3 mr-10">
                    <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <a href="tel:0533464288" className="text-blue-600 hover:text-blue-700 font-semibold">
                      053-3464288
                    </a>
                  </div>
                  <div className="flex items-start gap-3 mr-10">
                    <span className="text-blue-600 text-xl flex-shrink-0">📍</span>
                    <p>רחוב הארבעה 7, תל אביב</p>
                  </div>
                </div>
              </div>
              <p className="text-slate-600 text-sm mt-4">
                <strong>שים לב:</strong> במקרה של אי שביעות רצון מהטיפול בפנייתך, תוכל להגיש תלונה לרשות להגנת הפרטיות בכתובת:{' '}
                <a href="https://www.gov.il/he/departments/the_privacy_protection_authority" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  www.gov.il/he/privacy
                </a>
              </p>
            </section>

            <section className="border-t-2 border-slate-200 pt-6">
              <p className="text-slate-600 text-sm leading-relaxed">
                מדיניות פרטיות זו נכתבה בהתאם לחוק הגנת הפרטיות, התשמ"א-1981, תקנות הגנת הפרטיות (אבטחת מידע), התשע"ז-2017,
                ותקנות הגנת הפרטיות (תיקון - פרסום הצהרת פרטיות), התשע"א-2011.
              </p>
            </section>
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
          >
            חזרה לעמוד הראשי
          </button>
        </div>
      </div>
    </div>
  );
}
