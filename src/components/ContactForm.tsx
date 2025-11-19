import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { CheckCircle, AlertCircle, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ContactFormProps {
  onClose: () => void;
}

export default function ContactForm({ onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    type: 'employee',
    consent: false
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    consent: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateName = (name: string) => {
    if (name.trim().length < 2) {
      return 'נא להזין שם מלא (לפחות 2 תווים)';
    }
    if (!/^[\u0590-\u05FFa-zA-Z\s]+$/.test(name)) {
      return 'השם יכול להכיל רק אותיות ורווחים';
    }
    return '';
  };

  const validatePhone = (phone: string) => {
    const phoneDigits = phone.replace(/[^0-9]/g, '');
    if (phoneDigits.length < 9 || phoneDigits.length > 10) {
      return 'נא להזין מספר טלפון תקין (9-10 ספרות)';
    }
    if (!/^0(5[0-9]|[2-4]|7[0-9]|8|9)/.test(phoneDigits)) {
      return 'מספר הטלפון אינו תקין';
    }
    return '';
  };

  const handleNameChange = (value: string) => {
    setFormData({ ...formData, name: value });
    if (errors.name) {
      setErrors({ ...errors, name: validateName(value) });
    }
  };

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, phone: value });
    if (errors.phone) {
      setErrors({ ...errors, phone: validatePhone(value) });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nameError = validateName(formData.name);
    const phoneError = validatePhone(formData.phone);
    const consentError = !formData.consent ? 'יש לאשר יצירת קשר' : '';

    if (nameError || phoneError || consentError) {
      setErrors({
        name: nameError,
        phone: phoneError,
        consent: consentError
      });
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      type: formData.type === 'employee' ? 'שכיר/ה' : 'פנסיונר/ית',
      consent: formData.consent ? 'מאושר' : 'לא מאושר'
    };

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert(`תודה ${formData.name}! פנייתך התקבלה בהצלחה ונחזור אליך בהקדם.`);
        setFormData({ name: '', phone: '', email: '', type: 'employee', consent: false });
        setErrors({ name: '', phone: '', consent: '' });
        onClose();
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('אירעה שגיאה בשליחת הטופס. אנא נסה שנית או צור קשר טלפוני.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative animate-slide-up">
        <button
          onClick={onClose}
          className="absolute left-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="סגור"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">בדיקת זכאות חינם</h2>
          <p className="text-gray-600">מלאו פרטים ונחזור אליכם תוך 24 שעות</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-right text-gray-700 font-medium mb-2">
              שם מלא
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => handleNameChange(e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg text-right focus:ring-2 focus:border-transparent transition-all ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                }`}
              placeholder="הכנס את שמך המלא"
            />
            {errors.name && (
              <div className="flex items-center gap-2 mt-2 text-red-600 text-sm justify-end">
                <span>{errors.name}</span>
                <AlertCircle className="w-4 h-4" />
              </div>
            )}
          </div>

          <div>
            <label className="block text-right text-gray-700 font-medium mb-2">
              טלפון
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg text-right focus:ring-2 focus:border-transparent transition-all ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                }`}
              placeholder="050-XXX-XXXX"
            />
            {errors.phone && (
              <div className="flex items-center gap-2 mt-2 text-red-600 text-sm justify-end">
                <span>{errors.phone}</span>
                <AlertCircle className="w-4 h-4" />
              </div>
            )}
          </div>

          <div>
            <label className="block text-right text-gray-700 font-medium mb-2">
              אימייל (אופציונלי)
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-right focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="example@mail.com"
            />
          </div>

          <div>
            <label htmlFor="user-type-select" className="block text-right text-gray-700 font-medium mb-2">
              סוג
            </label>
            <select
              id="user-type-select"
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-right focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
            >
              <option value="employee">שכיר/ה</option>
              <option value="pensioner">פנסיונר/ית</option>
            </select>
          </div>

          <div>
            <label className="flex items-center justify-end gap-2 cursor-pointer">
              <span className="text-gray-700 text-sm">
                אני מאשר/ת את{' '}
                <Link to="/privacy" target="_blank" className="text-blue-600 underline hover:text-blue-700">
                  מדיניות הפרטיות
                </Link>
                {' '}ומסכים/ה ליצירת קשר לצורך בדיקת זכאות
              </span>
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                aria-label="אישור מדיניות פרטיות והסכמה ליצירת קשר"
              />
            </label>
            {errors.consent && (
              <div className="flex items-center gap-2 mt-2 text-red-600 text-sm justify-end">
                <span>{errors.consent}</span>
                <AlertCircle className="w-4 h-4" />
              </div>
            )}
            <p className="text-xs text-gray-500 text-right mt-2">
              המידע שלך מוגן ומאובטח. לא נעביר את הפרטים שלך לצדדים שלישיים ללא הסכמתך.
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:from-green-600 hover:to-green-700 hover:shadow-xl hover:scale-105'
              }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                שולח...
              </>
            ) : (
              <>
                <CheckCircle className="w-6 h-6" />
                בדיקת זכאות חינם
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <span>✓ מאובטח ב-SSL</span>
            <span>•</span>
            <span>✓ ללא התחייבות</span>
          </div>
        </form>
      </div>
    </div>
  );
}
