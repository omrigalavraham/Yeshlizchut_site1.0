import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'למה שיגיע לי החזר מס?',
      answer: 'כ-80% מהשכירים בישראל זכאים להחזר מס — והמון אנשים בכלל לא מודעים לזה! ישנם עשרות קריטריונים שבגינם ניתן לקבל החזר, ואנחנו בודקים את כולם עבורך. בין הסיבות הנפוצות: שינוי במקום עבודה, לידה, ילדים, תואר, מגורים בפריפריה או נקודות זיכוי שלא נוצלו. אנחנו מטפלים בכל התהליך עבורך מול רשות המסים – כדי שתקבל את כל הכסף שמגיע לך, עד השקל האחרון.'
    },
    {
      question: 'כמה זמן לוקח לקבל את ההחזר?',
      answer: 'מרגע שליחת המסמכים, התהליך לוקח עד 21 יום עד לקבלת תשובה על גובה הזכאות שלכם. לאחר מכן, רשות המיסים מעבירה את הכסף ישירות לחשבון שלכם. אנחנו עושים הכל כדי לזרז את התהליך ולעדכן אתכם בכל שלב.'
    },
    {
      question: 'כמה עולה השירות?',
      answer: 'השירות שלנו עובד על בסיס "תשלום בהצלחה בלבד". אנחנו לוקחים אחוז קטן מההחזר שאתם מקבלים. אם לא קיבלתם החזר - לא משלמים כלום! זה פשוט כמו שזה נשמע. אין עלויות מראש, אין הפתעות, והכל שקוף לחלוטין.'
    },
    {
      question: 'מה קורה אם לא מגיע לי החזר?',
      answer: 'אם אחרי בדיקה מסתבר שלא מגיע לכם החזר, אתם פשוט לא משלמים כלום. זה הכל. אין עלויות, אין דמי ביטול, שום דבר. אנחנו מאמינים שצריך לשלם רק עבור תוצאות, לא עבור ניסיונות.'
    },
    {
      question: 'האם אני יכול לבטל בכל שלב?',
      answer: 'כן, אתם יכולים לבטל את התהליך בכל שלב עד להגשת הבקשה לרשות המסים. לאחר הגשת הבקשה, התהליך כבר בתנועה. אבל חשוב לציין - למה שתרצו לבטל? אנחנו עושים הכל בשבילכם!'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8 md:py-10 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            שאלות שמרבים לשאול
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            יש לכם שאלות? יש לנו תשובות! הנה התשובות לשאלות הנפוצות ביותר
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                id={`faq-question-${index}`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                className="w-full px-4 md:px-6 py-4 text-right flex items-center justify-between hover:bg-gray-50 transition-colors rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <div className={`transition-transform duration-300 ${openIndex === index ? 'rotate-0' : 'rotate-0'}`} aria-hidden="true">
                    {openIndex === index ? (
                      <Minus className="w-6 h-6 text-blue-600" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 flex-1">
                  {faq.question}
                </h3>
              </button>

              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-4 md:px-6 pb-4 pt-2">
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed text-right">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
