import { ArrowRight, FileText, AlertTriangle, Shield, Scale } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TermsOfService() {
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
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-3">תנאי שימוש</h1>
            <p className="text-slate-600">עודכן לאחרונה: {new Date().toLocaleDateString('he-IL')}</p>
          </div>

          <div className="prose prose-slate max-w-none text-right" dir="rtl">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-blue-600">1.</span>
                מבוא וקבלת התנאים
              </h2>
              <div className="bg-blue-50 border-r-4 border-blue-600 pr-6 py-5 mb-4">
                <p className="text-slate-700 leading-relaxed mb-3">
                  ברוכים הבאים לאתר של יש לי זכות (להלן: "החברה", "אנחנו", "שלנו").
                  אתר זה מספק מידע ושירותי ייעוץ בתחום החזרי המס לשכירים ופנסיונרים בישראל.
                </p>
                <p className="text-slate-800 font-semibold">
                  השימוש באתר מהווה הסכמה מלאה ובלתי מסויגת לתנאי שימוש אלה.
                  אם אינך מסכים לתנאים, אנא הימנע משימוש באתר.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-blue-600">2.</span>
                הגדרות
              </h2>
              <div className="bg-slate-50 border border-slate-300 rounded-lg p-6">
                <ul className="space-y-3 text-slate-700">
                  <li><strong>"האתר"</strong> - אתר האינטרנט של יש לי זכות, כולל כל תתי-הדומיינים והעמודים</li>
                  <li><strong>"המשתמש" / "אתה"</strong> - כל אדם או גוף המשתמש באתר או בשירותים</li>
                  <li><strong>"השירותים"</strong> - כל השירותים המוצעים באתר, לרבות ייעוץ והגשת בקשות להחזר מס</li>
                  <li><strong>"תוכן"</strong> - כל מידע, טקסט, תמונה, סרטון, גרפיקה או חומר אחר המופיע באתר</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-blue-600">3.</span>
                תנאי כשירות
              </h2>
              <p className="text-slate-700 leading-relaxed mb-3">
                השירותים באתר מיועדים למבוגרים (מעל גיל 18) בעלי כשרות משפטית.
              </p>
              <div className="bg-amber-50 border-r-4 border-amber-500 pr-6 py-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700 text-sm">
                    על ידי שימוש באתר, אתה מצהיר ומאשר כי אתה בעל כשרות משפטית לבצע עסקאות מחייבות,
                    וכי המידע שתספק הוא נכון, מדויק ומלא.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-blue-600">4.</span>
                השירותים המוצעים
              </h2>
              <div className="space-y-4">
                <div className="bg-white border-2 border-blue-200 rounded-lg p-5">
                  <h3 className="font-bold text-slate-900 mb-2">4.1 תיאור השירותים</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    החברה מספקת שירותי ייעוץ בתחום זכויות כלכליות והחזרי מס לשכירים ופנסיונרים, כולל:
                    בדיקת זכאות, איסוף מסמכים, הכנה והגשת בקשות לרשות המסים, ומעקב אחר הליכי ההחזר.
                  </p>
                </div>

                <div className="bg-white border-2 border-blue-200 rounded-lg p-5">
                  <h3 className="font-bold text-slate-900 mb-2">4.2 תשלום בהצלחה בלבד</h3>
                  <p className="text-slate-700 text-sm leading-relaxed mb-2">
                    השירות פועל על בסיס "תשלום בהצלחה בלבד" - אתה משלם רק במקרה שתקבל החזר מס בפועל.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm mr-4">
                    <li>אם לא קיבלת החזר - לא משלמים כלום</li>
                    <li>העמלה מחושבת כאחוז קבוע מסכום ההחזר שהתקבל בפועל</li>
                    <li>האחוז המדויק יימסר לך במהלך תהליך הייעוץ הראשוני</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-blue-200 rounded-lg p-5">
                  <h3 className="font-bold text-slate-900 mb-2">4.3 תהליך מתן השירות</h3>
                  <ol className="list-decimal list-inside space-y-2 text-slate-700 text-sm mr-4">
                    <li>יצירת קשר ראשונית ובדיקת זכאות מקדימה (ללא עלות)</li>
                    <li>איסוף מסמכים ומידע רלוונטי</li>
                    <li>ביצוע בדיקה מקיפה והערכת זכאות מדויקת</li>
                    <li>הכנת הבקשה והגשתה לרשות המסים (באישורך)</li>
                    <li>מעקב ותקשורת עם רשות המסים עד לקבלת ההחזר</li>
                    <li>קבלת התשלום לאחר שההחזר הגיע לחשבונך</li>
                  </ol>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-blue-600">5.</span>
                זכויות קניין רוחני
              </h2>
              <div className="bg-slate-50 border border-slate-300 rounded-lg p-6">
                <p className="text-slate-700 leading-relaxed mb-3">
                  כל התוכן באתר, לרבות טקסטים, גרפיקה, לוגו, תמונות, עיצוב, קוד מקור ותוכנה,
                  הינו רכושה הבלעדי של החברה ומוגן על פי דיני זכויות יוצרים וקניין רוחני בישראל ובעולם.
                </p>
                <div className="bg-red-50 border-r-4 border-red-600 pr-6 py-4 mt-4">
                  <p className="text-slate-800 font-semibold mb-2">אסור בהחלט:</p>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm mr-4">
                    <li>העתקה, שכפול, הפצה או פרסום של תוכן מהאתר ללא אישור בכתב</li>
                    <li>שימוש מסחרי בתוכן האתר</li>
                    <li>שינוי, עיבוד או יצירת עבודות נגזרות</li>
                    <li>שימוש בסימנים מסחריים של החברה</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-blue-600">6.</span>
                התחייבויות המשתמש
              </h2>
              <div className="space-y-3">
                <div className="bg-white border border-slate-200 rounded-lg p-4">
                  <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    מסירת מידע נכון ומדויק
                  </h3>
                  <p className="text-slate-700 text-sm">
                    אתה מתחייב למסור מידע נכון, מדויק, שלם ועדכני. מסירת מידע כוזב עלולה להביא לביטול השירות ולאחריות משפטית.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-4">
                  <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    שימוש חוקי ומוסרי
                  </h3>
                  <p className="text-slate-700 text-sm">
                    אתה מתחייב להשתמש באתר ובשירותים רק למטרות חוקיות ובהתאם לתנאי שימוש אלה.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-4">
                  <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    איסור פעולות מזיקות
                  </h3>
                  <p className="text-slate-700 text-sm mb-2">אסור לבצע פעולות שעלולות לפגוע באתר או במשתמשים אחרים:</p>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm mr-4">
                    <li>העלאת וירוסים, תוכנות זדוניות או קוד מזיק</li>
                    <li>ניסיון לפרוץ לשרתים או למערכות</li>
                    <li>שימוש אוטומטי (בוטים, סקרייפרים) ללא אישור</li>
                    <li>הטרדה, איומים או התנכלות למשתמשים אחרים</li>
                  </ul>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-4">
                  <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    שמירה על סודיות
                  </h3>
                  <p className="text-slate-700 text-sm">
                    אם תקבל פרטי גישה (למשל לפורטל לקוחות עתידי), אתה אחראי לשמור עליהם בסודיות ולא לחשוף אותם לאחרים.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-blue-600">7.</span>
                ביטול ועדכון שירות
              </h2>
              <div className="bg-blue-50 border border-blue-300 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-3">7.1 ביטול על ידי המשתמש</h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-2">
                  אתה רשאי לבטל את השירות בכל עת עד להגשת הבקשה לרשות המסים, ללא עלות.
                  לאחר הגשת הבקשה, לא ניתן לבטל את התהליך מכיוון שהבקשה כבר בטיפול רשות המסים.
                </p>
                <p className="text-slate-700 text-sm">
                  <strong>לבקשת ביטול:</strong> פנה אלינו בטלפון או במייל לפני הגשת הבקשה.
                </p>

                <h3 className="font-bold text-slate-900 mb-3 mt-6">7.2 ביטול על ידי החברה</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  החברה שומרת לעצמה את הזכות לסרב לספק שירות או להפסיק את מתן השירות במקרים של:
                  מסירת מידע כוזב, הפרת תנאי שימוש, התנהגות פוגענית או פעילות לא חוקית.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-blue-600">8.</span>
                הגבלת אחריות וויתור
              </h2>
              <div className="bg-amber-50 border-2 border-amber-500 rounded-xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-800 font-bold">
                    אנא קרא סעיף זה בעיון - הוא מגביל את האחריות שלנו
                  </p>
                </div>

                <div className="space-y-4 text-slate-700 text-sm">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">8.1 שירות "AS IS"</h3>
                    <p className="leading-relaxed">
                      השירותים והתוכן באתר מסופקים "כמות שהם" (AS IS) ללא אחריות מכל סוג, מפורשת או משתמעת.
                      אנו לא מתחייבים לזמינות רציפה, ללא הפרעות או ללא שגיאות.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">8.2 אחריות מוגבלת</h3>
                    <p className="leading-relaxed">
                      החברה תעשה כמיטב יכולתה להשיג עבורך החזר מס מקסימלי, אך לא ניתן להבטיח תוצאה מסוימת.
                      האישור הסופי להחזר מס הוא בסמכות בלעדית של רשות המסים בישראל.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">8.3 אי-אחריות לנזקים</h3>
                    <p className="leading-relaxed mb-2">
                      החברה לא תישא באחריות לנזקים מכל סוג, לרבות:
                    </p>
                    <ul className="list-disc list-inside space-y-1 mr-4">
                      <li>נזקים ישירים או עקיפים</li>
                      <li>אובדן רווחים או הכנסות</li>
                      <li>אובדן מידע או נתונים</li>
                      <li>הפרעות לעסק</li>
                      <li>נזקים הנובעים משימוש או מאי-יכולת להשתמש באתר</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">8.4 קישורים לאתרים חיצוניים</h3>
                    <p className="leading-relaxed">
                      האתר עשוי לכלול קישורים לאתרים חיצוניים. אנו לא אחראים לתוכן, מדיניות או פעילות של אתרים אלה.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-blue-600">9.</span>
                שיפוי
              </h2>
              <div className="bg-slate-50 border border-slate-300 rounded-lg p-6">
                <p className="text-slate-700 leading-relaxed">
                  אתה מסכים לשפות את החברה, עובדיה, נציגיה ושותפיה מכל תביעה, דרישה, אחריות, נזק, הפסד או הוצאה
                  (לרבות שכר טרחת עורכי דין) הנובעים מהפרת תנאי שימוש אלה, שימוש לא חוקי באתר,
                  או הפרה של זכויות צד שלישי כלשהו.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-blue-600">10.</span>
                סמכות שיפוט ודין חל
              </h2>
              <div className="bg-blue-50 border border-blue-300 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Scale className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <h3 className="font-bold text-slate-900">דין ישראלי בלבד</h3>
                </div>
                <p className="text-slate-700 leading-relaxed mb-4">
                  תנאי שימוש אלה יפורשו ויקבלו תוקף בהתאם לדיני מדינת ישראל בלבד.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  <strong>סמכות שיפוט:</strong> כל מחלוקת או תביעה הנובעת מתנאי שימוש אלה או משימוש באתר
                  תהיה בסמכות השיפוט הבלעדית של בתי המשפט המוסמכים בתל אביב-יפו, ישראל.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-blue-600">11.</span>
                שינויים בתנאי השימוש
              </h2>
              <p className="text-slate-700 leading-relaxed mb-3">
                החברה שומרת לעצמה את הזכות לשנות, לעדכן או לתקן תנאי שימוש אלה בכל עת, לפי שיקול דעתה הבלעדי.
              </p>
              <div className="bg-blue-50 border-r-4 border-blue-600 pr-6 py-4">
                <p className="text-slate-700 text-sm">
                  <strong>הודעה על שינויים:</strong> שינויים מהותיים יפורסמו באתר עם ציון תאריך העדכון בראש העמוד.
                  המשך השימוש באתר לאחר פרסום השינויים מהווה הסכמה לתנאים המעודכנים.
                </p>
                <p className="text-slate-700 text-sm mt-2">
                  אנו ממליצים לבדוק עמוד זה מעת לעת כדי להיות מעודכן בשינויים.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-blue-600">12.</span>
                הוראות כלליות
              </h2>
              <div className="space-y-4 text-slate-700">
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <h3 className="font-semibold text-slate-900 mb-2">12.1 חלקיות תנאים</h3>
                  <p className="text-sm">
                    אם תנאי כלשהו מתנאי שימוש אלה ייקבע כלא חוקי, בטל או בלתי אכיף,
                    שאר התנאים ימשיכו לעמוד בתוקפם המלא.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <h3 className="font-semibold text-slate-900 mb-2">12.2 ויתור</h3>
                  <p className="text-sm">
                    אי-אכיפה של תנאי כלשהו לא תחשב כויתור על אותו תנאי או על זכות לאכוף אותו בעתיד.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <h3 className="font-semibold text-slate-900 mb-2">12.3 העברת זכויות</h3>
                  <p className="text-sm">
                    אתה לא רשאי להעביר או להמחות את זכויותיך או חובותיך לפי תנאי שימוש אלה ללא הסכמתנו בכתב.
                    החברה רשאית להעביר את זכויותיה בכל עת.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <h3 className="font-semibold text-slate-900 mb-2">12.4 הסכם שלם</h3>
                  <p className="text-sm">
                    תנאי שימוש אלה, יחד עם מדיניות הפרטיות והצהרת הנגישות, מהווים את ההסכם השלם והמלא
                    בינך לבין החברה ביחס לשימוש באתר ובשירותים.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <h3 className="font-semibold text-slate-900 mb-2">12.5 כותרות</h3>
                  <p className="text-sm">
                    כותרות הסעיפים מופיעות לנוחות בלבד ואין להן משמעות משפטית או חוזית.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-blue-600">13.</span>
                יצירת קשר
              </h2>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-xl p-6">
                <p className="text-slate-800 font-semibold mb-4">
                  לכל שאלה, בירור או תלונה בנוגע לתנאי שימוש אלה, ניתן ליצור קשר:
                </p>
                <div className="space-y-3 text-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">ע</span>
                    </div>
                    <div>
                      <p className="font-bold">יש לי זכות</p>
                      <p className="text-sm">ח.פ: 515123456</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mr-10">
                    <span className="text-blue-600 text-xl">✉</span>
                    <a href="mailto:info@eidan-tax.co.il" className="text-blue-600 hover:text-blue-700 font-semibold">
                      info@eidan-tax.co.il
                    </a>
                  </div>
                  <div className="flex items-center gap-3 mr-10">
                    <span className="text-blue-600 text-xl">📞</span>
                    <a href="tel:0533464288" className="text-blue-600 hover:text-blue-700 font-semibold">
                      053-3464288
                    </a>
                  </div>
                  <div className="flex items-start gap-3 mr-10">
                    <span className="text-blue-600 text-xl flex-shrink-0">📍</span>
                    <p>רחוב הארבעה 7, תל אביב, ישראל</p>
                  </div>
                  <div className="flex items-center gap-3 mr-10">
                    <span className="text-blue-600 text-xl">🕐</span>
                    <p>ראשון - חמישי: 9:00 - 18:00, שישי: 9:00 - 13:00</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="border-t-2 border-slate-200 pt-6">
              <div className="bg-blue-600 text-white rounded-lg p-6">
                <p className="font-bold text-lg mb-3">הצהרת קבלה</p>
                <p className="text-sm leading-relaxed text-blue-50">
                  על ידי שימוש באתר ובשירותים, אתה מאשר ומצהיר כי קראת, הבנת והסכמת להיות מחויב לתנאי שימוש אלה,
                  למדיניות הפרטיות ולהצהרת הנגישות.
                  אם אינך מסכים לתנאים אלה, אנא הפסק את השימוש באתר מיד.
                </p>
              </div>
            </section>

            <section className="border-t-2 border-slate-200 pt-6 mt-8">
              <p className="text-slate-600 text-sm leading-relaxed">
                תנאי שימוש אלה נכתבו בהתאם לדיני מדינת ישראל, לרבות חוק החוזים (חלק כללי), התשל"ג-1973,
                חוק הגנת הצרכן, התשמ"א-1981, וחוק המחשבים, התשנ"ה-1995.
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
