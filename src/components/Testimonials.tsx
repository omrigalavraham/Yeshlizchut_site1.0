import { useState, useEffect } from 'react';
import { Star, ChevronRight, ChevronLeft, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    { name: 'אולגה קוזלובסקי', age: 67, city: 'חיפה', rating: 5, text: 'כפנסיונרית בת 67 לא חשבתי שמגיע לי משהו. בני המליץ לי לפנות לכאן ולהפתעתי קיבלתי ₪18,240 החזר מס! הנציגה שטיפלה בי הייתה מאוד סבלנית, הסבירה הכל בשפה פשוטה. תודה ענקית!' },
    { name: 'דני כהן', age: 34, city: 'תל אביב', rating: 5, text: 'קיבלתי ₪8,450 החזר! לא האמנתי שכל כך פשוט - הם אספו את כל המסמכים בעצמם ותוך 3 שבועות הכסף היה בחשבון. תודה רבה!' },
    { name: 'פאדי ח\'ורי', age: 29, city: 'נצרת', rating: 5, text: 'אני מהנדס צעיר ועבדתי בכמה מקומות בשנים האחרונות. הצוות עזר לי לאסוף את כל האישורים מכל המעסיקים. קיבלתי ₪11,680 החזר והשירות היה מהיר ומקצועי!' },
    { name: 'מיכל גולדשטיין', age: 52, city: 'רחובות', rating: 5, text: 'כעובדת הוראה במשך 28 שנה, חשבתי שאני מכירה את כל הזכויות שלי. התברר שטעיתי! קיבלתי ₪27,340 החזר מהשנים האחרונות. השירות היה מקצועי והכל הוסבר לי בסבלנות. ממליצה בחום!' },
    { name: 'אברהם טסמה', age: 61, city: 'נתניה', rating: 5, text: 'אני פנסיונר ממערכת הבטחון ולא ידעתי שיש לי זכויות נוספות. בדקו לי את כל התיקים והתברר שיש לי הרבה דברים שלא ידעתי עליהם. קיבלתי ₪24,890 החזר! תודה רבה!' },
    { name: 'יוסי אברהם', age: 42, city: 'באר שבע', rating: 5, text: 'עבדתי עם כמה חברות בעבר, אבל כאן הכי מקצועיים. קיבלתי ₪15,470 החזר! השירות מהיר ומקצועי.' },
    { name: 'איגור ברזובסקי', age: 38, city: 'אשדוד', rating: 5, text: 'אני עובד בהייטק כבר 12 שנה וחשבתי שהכל מסודר אצלי. הנציג שטיפל בי בדק והראה לי שיש המון דברים שפספסתי. קיבלתי בסוף ₪31,250 החזר מהשנים האחרונות! השירות היה מקצועי ביותר. ממליץ!' },
    { name: 'שירה מזרחי', age: 38, city: 'ירושלים', rating: 5, text: 'אחרי שנים שלא הגשתי בקשה להחזר מס, סוף סוף עשיתי את זה. קיבלתי ₪9,780 החזר! התהליך היה פשוט. כדאי לכולם!' },
    { name: 'ליאת אסייג', age: 23, city: 'מודיעין', rating: 5, text: 'בתור מישהי שזה עתה סיימה את הצבא ומתחילה לעבוד, חשבתי שאין לי זכות לכלום. קיבלתי ₪6,340 החזר והכל היה מוסבר בצורה ברורה. ממליצה לכל החברים שלי!' },
    { name: 'אבי שמש', age: 31, city: 'רעננה', rating: 5, text: 'לא האמנתי שיש לי זכות להחזר כל כך גדול. בדקו לי את 4 השנים האחרונות. קיבלתי ₪13,920 החזר!' },
    { name: 'פטימה עבאס', age: 46, city: 'טייבה', rating: 5, text: 'כאחות במשך 20 שנה, עבדתי קשה והייתי בטוחה שאין לי זכויות נוספות. התברר שטעיתי! קיבלתי ₪19,560 החזר מהשנים האחרונות. הנציג היה סבלני והסביר הכל. תודה ענקית!' },
    { name: 'רונית דוד', age: 45, city: 'פתח תקווה', rating: 5, text: 'שירות ברמה גבוהה! קיבלתי ₪12,150 החזר והכל היה מקצועי.' },
    { name: 'דימיטרי פופוב', age: 55, city: 'נשר', rating: 5, text: 'אני עולה מרוסיה כבר 15 שנה. הנציגה עזרה לי להבין את המערכת בישראל. קיבלתי ₪16,780 החזר! היא דיברה איתי בסבלנות. ממליץ בחום!' },
    { name: 'סלים חג\'אזי', age: 36, city: 'לוד', rating: 5, text: 'יש לי 3 ילדים והצוות מצא לי המון זכויות שלא ידעתי עליהן. קיבלתי ₪10,430 החזר והשירות היה מהיר. תודה רבה!' },
    { name: 'משה ויזגן', age: 63, city: 'קרית גת', rating: 5, text: 'כפנסיונר חשבתי שסיימתי עם מס הכנסה. התברר שיש לי עדיין זכויות רבות. קיבלתי ₪22,340 החזר מ-6 השנים האחרונות! השירות היה מסודר ומקצועי. תודה רבה!' },
    { name: 'רועי אלמוג', age: 28, city: 'ראשון לציון', rating: 5, text: 'השירות היה מקצועי. החזר של ₪7,890 הגיע תוך חודש!' },
    { name: 'טל בן חיים', age: 40, city: 'כפר סבא', rating: 5, text: 'עבודה מעולה! אספו את כל המסמכים, אני רק חתמתי והכסף הגיע. קיבלתי ₪11,250 החזר!' },
    { name: 'סבטלנה בוריסוב', age: 49, city: 'באר שבע', rating: 5, text: 'אני עולה מרוסיה ועובדת בישראל 20 שנה. הנציגה עזרה לי להבין הכל. קיבלתי ₪17,640 החזר! היא הייתה סבלנית מאוד. ממליצה בחום!' },
    { name: 'עלי זועבי', age: 32, city: 'עכו', rating: 5, text: 'אבא ל-2 ילדים. מצאו לי דברים שלא ידעתי עליהם. קיבלתי ₪13,280 החזר!' },
    { name: 'ענת כץ', age: 51, city: 'רחובות', rating: 5, text: 'כפנסיונרית חשבתי שלא זכאית לכלום. התברר שטעיתי! קיבלתי ₪9,470 החזר. תודה!' },
    { name: 'ליאור שפירא', age: 26, city: 'מודיעין', rating: 5, text: 'אחרי שהמליצו לי חברים, פניתי לכאן. קיבלתי ₪8,120 שלא ידעתי שמגיעים לי. שווה!' },
    { name: 'גיא ברק', age: 35, city: 'נס ציונה', rating: 5, text: 'השירות היה מהיר ומקצועי. קיבלתי ₪10,780 החזר.' },
    { name: 'דנה אוחנה', age: 44, city: 'אשדוד', rating: 5, text: 'בדקו את התיק שלי וקיבלתי ₪12,980 החזר. תודה רבה!' },
    { name: 'יעקב סלומון', age: 48, city: 'בני ברק', rating: 5, text: 'תהליך פשוט ומהיר. אספו את כל המסמכים בעצמם. קיבלתי ₪14,320 החזר. שירות אמין!' },
    { name: 'טניה וולקוב', age: 41, city: 'חדרה', rating: 5, text: 'עולה מרוסיה, עובדת כרופאה 15 שנה. הסבירו לי הכל בסבלנות. קיבלתי ₪21,450 החזר! השירות היה מקצועי ברמה גבוהה.' },
    { name: 'שלומית גולן', age: 32, city: 'חולון', rating: 5, text: 'לא ידעתי שיש לי כל כך הרבה נקודות זיכוי. קיבלתי ₪9,240 החזר. ממליצה!' },
    { name: 'איתי ממן', age: 39, city: 'רמת גן', rating: 5, text: 'השירות היה מקצועי. קיבלתי ₪11,560 החזר והכסף הגיע בזמן!' },
    { name: 'מורן שרון', age: 27, city: 'גבעתיים', rating: 5, text: 'חוויה טובה! קיבלתי ₪7,680 החזר מס שלא ציפיתי לו.' },
    { name: 'יוסף אדיסו', age: 45, city: 'נתניה', rating: 5, text: 'עולה מאתיופיה, עובד במפעל 20 שנה עם 3 ילדים. עזרו לי להבין את כל המערכת בסבלנות. קיבלתי ₪15,340 החזר! תודה רבה!' },
    { name: 'עופר נחום', age: 43, city: 'קריית אונו', rating: 5, text: 'השירות היה מצוין. מענה זמין, עבודה מסודרת. החזר של ₪13,470 הגיע תוך 3 שבועות!' },
    { name: 'רחל ברנס', age: 56, city: 'הוד השרון', rating: 5, text: 'כפנסיונרית קיבלתי שירות אישי ומקצועי. החזר של ₪10,890 הגיע בדיוק כמו שהובטח!' },
    { name: 'אנה קרסני', age: 35, city: 'קרית ים', rating: 5, text: 'עולה מאוקראינה, עובדת כמהנדסת תוכנה. קיבלתי ₪12,760 החזר והשירות היה מקצועי ומהיר!' },
    { name: 'אורי זילברמן', age: 30, city: 'רמת השרון', rating: 5, text: 'לא ציפיתי שהתהליך יהיה כל כך פשוט! קיבלתי ₪9,550 החזר. שירות מעולה!' },
    { name: 'לינא קעדאן', age: 28, city: 'חיפה', rating: 5, text: 'רוקחת צעירה שהתחילה לעבוד לאחרונה. חשבתי שאין לי זכויות - התברר שטעיתי! קיבלתי ₪8,930 החזר. ממליצה בחום!' },
    { name: 'מאיה חזן', age: 36, city: 'יבנה', rating: 5, text: 'המלצה של חברה הובילה אותי לפה. קיבלתי ₪10,120 החזר והכל היה מקצועי ומהיר.' },
    { name: 'אייל כרמי', age: 41, city: 'אור יהודה', rating: 5, text: 'שירות מעולה מהרגע הראשון. בדקו את כל השנים. החזר של ₪12,340 הגיע בדיוק בזמן. ממליץ!' },
    { name: 'אברהם אוחנה', age: 64, city: 'אשקלון', rating: 5, text: 'פנסיונר בן 64. חשבתי שסיימתי עם כל הנושאים הפיננסיים. הראו לי שיש עדיין זכויות על תרומות, הוצאות רפואיות ועוד. קיבלתי ₪25,670 החזר מ-6 השנים האחרונות! השירות היה מקצועי ביותר. תודה רבה!' },
    { name: 'סיגל אטיאס', age: 47, city: 'באר יעקב', rating: 5, text: 'חשבתי שאין לי זכות להחזרים, אבל גילו לי המון זכויות שפספסתי. קיבלתי ₪11,890 החזר. תודה!' },
    { name: 'בועז רוזנברג', age: 52, city: 'קריית מוצקין', rating: 5, text: 'עבודה מקצועית ואמינה. החזר של ₪14,780 הגיע כפי שהובטח!' },
    { name: 'נינה קושניר', age: 60, city: 'נהריה', rating: 5, text: 'עולה מרוסיה ופנסיונרית. הצוות עזר לי להבין את כל הזכויות. קיבלתי ₪16,230 החזר! הנציג היה סבלני ביותר והסביר הכל בשפה פשוטה. ממליצה בחום!' },
    { name: 'ג\'מאל כיאל', age: 37, city: 'באקה אל-גרבייה', rating: 5, text: 'מורה בחינוך הערבי עם 2 ילדים. קיבלתי ₪12,560 החזר והשירות היה מקצועי ומהיר. תודה!' },
    { name: 'חן לוי', age: 29, city: 'תל אביב', rating: 5, text: 'עובדת במשרד הייטק. קיבלתי ₪9,120 החזר! שירות מהיר.' },
    { name: 'זאב גרינברג', age: 66, city: 'ירושלים', rating: 5, text: 'פנסיונר. לא האמנתי שמגיע לי עוד כסף. קיבלתי ₪14,560 החזר!' },
    { name: 'נדב אוחיון', age: 33, city: 'חולון', rating: 5, text: 'עובד בחברת הייטק. מצאו לי זכויות שלא ידעתי עליהן. קיבלתי ₪10,890 החזר.' },
    { name: 'רינה שמש', age: 58, city: 'נתניה', rating: 5, text: 'פנסיונרית, הייתי מלמדת בעבר. קיבלתי ₪18,340 החזר והשירות היה מעולה!' },
    { name: 'אסף דהן', age: 35, city: 'פתח תקווה', rating: 5, text: 'עובד במפעל כבר 10 שנים. קיבלתי ₪13,670 החזר. ממליץ בחום!' },
    { name: 'יעל כהן', age: 42, city: 'הרצליה', rating: 5, text: 'עובדת במערכת הבריאות. השירות היה מקצועי. קיבלתי ₪15,230 החזר!' },
    { name: 'מוחסן אבו רומי', age: 44, city: 'טייבה', rating: 5, text: 'עובד בחינוך 18 שנה. הצוות עזר לי בכל שלב. קיבלתי ₪17,890 החזר!' },
    { name: 'תמר אברמוב', age: 31, city: 'רחובות', rating: 5, text: 'עובדת כאחות. בדקו את כל התיקים וקיבלתי ₪11,340 החזר.' },
    { name: 'דוד עזרא', age: 62, city: 'אשדוד', rating: 5, text: 'פנסיונר, עבדתי במדינה. קיבלתי ₪19,670 החזר. תודה רבה!' },
    { name: 'ורד מלכה', age: 38, city: 'ראשון לציון', rating: 5, text: 'עובדת סוציאלית במשך 12 שנה. קיבלתי ₪14,120 החזר והכל היה מסודר!' },
    { name: 'אמיר סלים', age: 27, city: 'נצרת', rating: 5, text: 'עובד בהייטק שנתיים. קיבלתי ₪6,780 החזר. לא ידעתי שמגיע לי!' },
    { name: 'מרים לוי', age: 65, city: 'חיפה', rating: 5, text: 'פנסיונרית. בני המליץ לי לפנות לכאן. קיבלתי ₪15,230 החזר!' },
    { name: 'רון שפירא', age: 36, city: 'גבעתיים', rating: 5, text: 'עובד במשרד פרסום. השירות היה מעולה. קיבלתי ₪12,450 החזר!' },
    { name: 'הדר כהן', age: 25, city: 'תל אביב', rating: 5, text: 'עובדת כמהנדסת. קיבלתי ₪8,340 החזר. ממליצה!' },
    { name: 'משה אוחנה', age: 61, city: 'באר שבע', rating: 5, text: 'פנסיונר. חשבתי שסיימתי עם כל הנושאים האלה. קיבלתי ₪21,560 החזר!' },
    { name: 'עידן שמואל', age: 32, city: 'מודיעין', rating: 5, text: 'עובד בתחום החינוך. קיבלתי ₪10,120 החזר. תודה!' },
    { name: 'לי אברהם', age: 28, city: 'רעננה', rating: 5, text: 'עובדת כמדריכת כושר. קיבלתי ₪7,450 החזר!' },
    { name: 'אביבה גרינברג', age: 59, city: 'נתניה', rating: 5, text: 'פנסיונרית, עבדתי באחיות. קיבלתי ₪16,890 החזר והשירות היה נהדר!' },
    { name: 'דוד מזרחי', age: 40, city: 'פתח תקווה', rating: 5, text: 'עובד בחברת היי-טק. קיבלתי ₪13,230 החזר והכל היה מסודר!' },
    { name: 'שירלי כהן', age: 34, city: 'חולון', rating: 5, text: 'עובדת כגרפיקאית. קיבלתי ₪9,680 החזר. תודה רבה!' },
    { name: 'יצחק לוי', age: 64, city: 'ירושלים', rating: 5, text: 'פנסיונר. הראו לי זכויות שלא ידעתי עליהן. קיבלתי ₪23,450 החזר!' },
    { name: 'מיכל דהן', age: 37, city: 'באר שבע', rating: 5, text: 'עובדת כמזכירה רפואית. קיבלתי ₪11,780 החזר!' },
    { name: 'אלכס פרידמן', age: 30, city: 'אשדוד', rating: 5, text: 'עובד כטכנאי. קיבלתי ₪8,920 החזר. שירות מקצועי!' },
    { name: 'שרה אוחנה', age: 67, city: 'חיפה', rating: 5, text: 'פנסיונרית. בת שלי עזרה לי לפנות לכאן. קיבלתי ₪17,340 החזר!' }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="relative py-8 md:py-10 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* רקע דקורטיבי */}
      <div className="absolute inset-0 opacity-[0.008]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(0deg, rgba(16, 185, 129, 0.05) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-[0.01]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400 rounded-full filter blur-3xl opacity-[0.01]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            מה הלקוחות שלנו אומרים?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            אלפי לקוחות מרוצים כבר קיבלו את הכסף שמגיע להם. הנה מה שהם אומרים על השירות שלנו
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-10 relative border border-slate-200/50">
              <Quote className="absolute top-4 left-4 w-12 h-12 md:w-16 md:h-16 text-blue-100" />

              <div className="text-center space-y-4 md:space-y-6">
                <div className="flex justify-center gap-1 mb-3">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-base md:text-xl text-slate-700 leading-relaxed italic relative z-10">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="pt-4 border-t border-slate-200">
                  <div className="font-bold text-lg md:text-xl text-slate-900">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm md:text-base text-slate-600">
                    {testimonials[currentIndex].age} • {testimonials[currentIndex].city}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -right-4 md:-right-16 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-slate-200"
            aria-label="Previous testimonial"
          >
            <ChevronRight className="w-6 h-6 text-slate-700" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -left-4 md:-left-16 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-slate-200"
            aria-label="Next testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-slate-700" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg text-center border border-slate-200/50 hover:shadow-xl transition-all duration-300">
            <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-l from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2">4.87/5</div>
            <div className="text-xs md:text-sm text-slate-600 font-medium">דירוג ממוצע</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg text-center border border-slate-200/50 hover:shadow-xl transition-all duration-300">
            <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-l from-emerald-600 to-emerald-700 bg-clip-text text-transparent mb-2">6,200+</div>
            <div className="text-xs md:text-sm text-slate-600 font-medium">לקוחות מרוצים</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg text-center border border-slate-200/50 hover:shadow-xl transition-all duration-300">
            <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-l from-violet-600 to-violet-700 bg-clip-text text-transparent mb-2">96.8%</div>
            <div className="text-xs md:text-sm text-slate-600 font-medium">שביעות רצון</div>
          </div>
        </div>
      </div>
    </section>
  );
}
