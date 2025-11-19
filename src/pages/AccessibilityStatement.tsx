import { ArrowRight, Accessibility, CheckCircle, Mail, Phone, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AccessibilityStatement() {
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
              <Accessibility className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-3">הצהרת נגישות</h1>
            <p className="text-slate-600">עודכן לאחרונה: {new Date().toLocaleDateString('he-IL')}</p>
          </div>

          <div className="prose prose-slate max-w-none text-right" dir="rtl">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-blue-600">1.</span>
                התחייבות לנגישות
              </h2>
              <div className="bg-blue-50 border-r-4 border-blue-600 pr-6 py-5 mb-4">
                <p className="text-slate-800 font-semibold mb-3">
                  יש לי זכות מחויבת להנגשת האתר שלה עבור כלל האוכלוסייה, לרבות אנשים עם מוגבלויות.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  אנו שואפים להבטיח שהשירותים באתר יהיו נגישים לאנשים עם מוגבלויות כדי לאפשר חווית גלישה נוחה, קלה ונגישה ככל האפשר.
                </p>
              </div>
              <p className="text-slate-700 leading-relaxed">
                ההנגשה בוצעה על פי המלצות התקן הישראלי (ת"י 5568) לנגישות תכנים באינטרנט ברמת AA,
                ובהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, התשנ"ח-1998.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-blue-600">2.</span>
                רמת הנגישות באתר
              </h2>
              <div className="bg-green-50 border-2 border-green-600 rounded-lg p-6 mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <h3 className="font-bold text-slate-900">האתר עומד ברמת נגישות AA</h3>
                </div>
                <p className="text-slate-700">
                  בהתאם להנחיות WCAG 2.1 (Web Content Accessibility Guidelines) והתקן הישראלי ת"י 5568.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-blue-600">3.</span>
                התאמות הנגישות שבוצעו באתר
              </h2>
              <div className="bg-blue-50 border-r-4 border-blue-600 pr-6 py-4 mb-6">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="text-blue-600 text-2xl">♿</span>
                  ווידג'ט נגישות אינטראקטיבי
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  האתר כולל ווידג'ט נגישות מתקדם (כפתור כחול בפינה הימנית התחתונה) המאפשר התאמה אישית של חווית הגלישה:
                  שינוי גודל טקסט, ניגודיות גבוהה, מצב כהה, הדגשת קישורים, התאמת גובה שורה וריווח בין אותיות.
                  כל ההגדרות נשמרות אוטומטית.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 font-bold">⌨</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">ניווט באמצעות מקלדת</h3>
                    <p className="text-slate-600 text-sm">ניתן לנווט באתר באמצעות מקלדת בלבד (Tab, Shift+Tab, Enter, Space, חצים)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 font-bold">🔍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">אינדיקטור מיקוד (Focus)</h3>
                    <p className="text-slate-600 text-sm">כל האלמנטים האינטראקטיביים מסומנים בבירור כשהם במיקוד</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 font-bold">📖</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">תמיכה בקוראי מסך</h3>
                    <p className="text-slate-600 text-sm">האתר תואם לקוראי מסך (NVDA, JAWS, TalkBack, VoiceOver) עם תוויות ARIA מתאימות</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 font-bold">🎨</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">ניגודיות צבעים</h3>
                    <p className="text-slate-600 text-sm">כל הטקסטים עומדים בדרישות הניגודיות המינימליות (יחס 4.5:1 לטקסט רגיל, 3:1 לטקסט גדול)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 font-bold">📱</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">עיצוב רספונסיבי</h3>
                    <p className="text-slate-600 text-sm">האתר מותאם לצפייה במכשירים שונים (מחשב, טאבלט, סמארטפון)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 font-bold">🏷</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">תוויות וכותרות ברורות</h3>
                    <p className="text-slate-600 text-sm">כל הכפתורים, קישורים וטפסים מתוייגים בצורה ברורה ומובנת</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 font-bold">⏭</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">דילוג לתוכן</h3>
                    <p className="text-slate-600 text-sm">קישור "דלג לתוכן הראשי" לדילוג מהיר על ניווט חוזר</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 font-bold">📝</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">טפסים נגישים</h3>
                    <p className="text-slate-600 text-sm">כל שדות הטופס מסומנים, כוללים הנחיות והודעות שגיאה ברורות</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 font-bold">🎬</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">אנימציות מופחתות</h3>
                    <p className="text-slate-600 text-sm">תמיכה ב-prefers-reduced-motion למשתמשים רגישים לתנועה</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 font-bold">🌐</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">סימון שפה</h3>
                    <p className="text-slate-600 text-sm">העמוד מסומן כעברית (lang="he" dir="rtl") לתמיכה נכונה בקוראי מסך</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-blue-600">4.</span>
                דפדפנים ועזרים תומכים
              </h2>
              <div className="bg-slate-50 border border-slate-300 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-3">האתר נבדק ותומך בטכנולוגיות הבאות:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">דפדפנים:</h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm mr-4">
                      <li>Google Chrome (גרסה עדכנית)</li>
                      <li>Mozilla Firefox (גרסה עדכנית)</li>
                      <li>Microsoft Edge (גרסה עדכנית)</li>
                      <li>Safari (גרסה עדכנית)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">קוראי מסך:</h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm mr-4">
                      <li>NVDA (Windows - חינמי)</li>
                      <li>JAWS (Windows)</li>
                      <li>VoiceOver (Mac/iOS)</li>
                      <li>TalkBack (Android)</li>
                    </ul>
                  </div>
                </div>
                <p className="text-slate-600 text-sm mt-4">
                  <strong>המלצה:</strong> לחוויית גלישה מיטבית, אנא השתמש בגרסה העדכנית ביותר של הדפדפן וקורא המסך.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-blue-600">5.</span>
                בעיות נגישות ידועות ופתרונות זמניים
              </h2>
              <div className="bg-amber-50 border-r-4 border-amber-500 pr-6 py-4">
                <div className="flex items-start gap-3 mb-2">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-800 font-semibold">אנו ממשיכים לשפר ולהנגיש את האתר באופן שוטף</p>
                </div>
                <p className="text-slate-700 text-sm">
                  אם נתקלת בבעיית נגישות באתר, אנא הודע לנו באמצעות פרטי יצירת הקשר המופיעים בהמשך,
                  ואנו נעשה כמיטב יכולתנו לפתור את הבעיה בהקדם האפשרי.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-blue-600">6.</span>
                פניות ותלונות בנושא נגישות
              </h2>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-xl p-6 mb-4">
                <p className="text-slate-800 font-semibold mb-4">
                  אם נתקלת בבעיית נגישות באתר או שיש לך הצעות לשיפור, נשמח לשמוע ממך:
                </p>
                <div className="space-y-3 text-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">ע</span>
                    </div>
                    <div>
                      <p className="font-bold">רכז נגישות</p>
                      <p className="text-sm">יש לי זכות</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mr-10">
                    <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <a href="mailto:accessibility@eidan-tax.co.il" className="text-blue-600 hover:text-blue-700 font-semibold">
                      accessibility@eidan-tax.co.il
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
                <p className="text-slate-700 text-sm mt-4">
                  <strong>זמן מענה:</strong> אנו מתחייבים לטפל בכל פניה תוך 5 ימי עסקים ולספק פתרון תוך 21 יום.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-300 rounded-lg p-5">
                <h3 className="font-bold text-slate-900 mb-3">מידע נוסף בנושא נגישות:</h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>
                      <strong>נציבות שוויון זכויות לאנשים עם מוגבלות:</strong>{' '}
                      <a href="https://www.gov.il/he/departments/molsa/disability_rights" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        www.gov.il/disability
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>
                      <strong>המכון הישראלי לתקינה:</strong>{' '}
                      <a href="https://www.sii.org.il/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        www.sii.org.il
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>
                      <strong>מדריך WCAG 2.1:</strong>{' '}
                      <a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        www.w3.org/WAI/WCAG21
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-blue-600">7.</span>
                מסמכים והצהרות נוספות
              </h2>
              <div className="space-y-3">
                <p className="text-slate-700 leading-relaxed">
                  הצהרת נגישות זו חלה על אתר האינטרנט של יש לי זכות בלבד.
                  קישורים לאתרים חיצוניים (אם קיימים) עשויים שלא לעמוד באותם תקני נגישות, ואנו לא אחראים לנגישותם.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-slate-700 text-sm">
                    <strong>שים לב:</strong> אנו עושים מאמצים מתמשכים להגביר את נגישות האתר.
                    במקרה בו נתקלת בקושי בגישה לאחד המידעים או השירותים באתר, אנו מציעים דרכי התקשרות חלופיות:
                    טלפון, דואר אלקטרוני או פגישה פרונטלית במשרדנו.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-blue-600">8.</span>
                תאריך עדכון ובדיקה
              </h2>
              <div className="bg-slate-100 border border-slate-300 rounded-lg p-5">
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">📅</span>
                    <span><strong>תאריך פרסום הצהרה:</strong> {new Date().toLocaleDateString('he-IL')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">🔄</span>
                    <span><strong>תאריך עדכון אחרון:</strong> {new Date().toLocaleDateString('he-IL')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span><strong>בדיקת נגישות אחרונה:</strong> {new Date().toLocaleDateString('he-IL')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">🏛</span>
                    <span><strong>תקן:</strong> ת"י 5568 + WCAG 2.1 Level AA</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="border-t-2 border-slate-200 pt-6">
              <p className="text-slate-600 text-sm leading-relaxed">
                הצהרת נגישות זו נכתבה בהתאם לתקן הישראלי ת"י 5568 לנגישות אתרי אינטרנט,
                התקנה הישראלית לשוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013,
                וחוק שוויון זכויות לאנשים עם מוגבלות, התשנ"ח-1998.
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
