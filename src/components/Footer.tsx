import { Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="text-right space-y-4">
            <div className="text-right mb-6">
              <div className="text-3xl font-bold text-blue-400">יש לי זכות</div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              החברה המובילה בישראל להחזרי מס לשכירים. אנחנו עוזרים לאלפי ישראלים לקבל את הכסף שמגיע להם בצורה פשוטה, מהירה ובטוחה.
            </p>
            <div className="flex gap-4 justify-end pt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="text-right space-y-4">
            <h3 className="text-xl font-bold mb-6">קישורים מהירים</h3>
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection('about')}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                אודות החברה
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                השירותים שלנו
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                המלצות לקוחות
              </button>
              <Link to="/terms" className="block text-gray-400 hover:text-white transition-colors">
                תנאי שימוש
              </Link>
              <Link to="/privacy" className="block text-gray-400 hover:text-white transition-colors">
                מדיניות פרטיות
              </Link>
              <Link to="/accessibility" className="block text-gray-400 hover:text-white transition-colors">
                הצהרת נגישות
              </Link>
            </nav>
          </div>

          <div className="text-right space-y-6">
            <h3 className="text-xl font-bold mb-6">צור קשר</h3>
            <div className="space-y-4">

              <a href="tel:054-4499787" className="flex items-center gap-3 justify-end text-gray-400 hover:text-white transition-colors">
                <span className="font-medium">054-4499787</span>
                <Phone className="w-5 h-5" />
              </a>
              <a href="mailto:support@yesh-li-zchut.co.il" className="flex items-center gap-3 justify-end text-gray-400 hover:text-white transition-colors">
                <span className="font-medium">support@yesh-li-zchut.co.il</span>
                <Mail className="w-5 h-5" />
              </a>

              <div className="flex items-center gap-3 justify-end text-gray-400">
                <div className="text-right">
                  <div>ראשון - חמישי: 9:00 - 18:00</div>
                  <div>שישי: 9:00 - 13:00</div>
                </div>
                <Clock className="w-5 h-5 flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center">
            <div className="text-gray-400 text-sm">
              © 2025 יש לי זכות | כל הזכויות שמורות
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-xs">
          <p>
            האתר מספק מידע כללי בלבד ואינו מהווה ייעוץ מס או המלצה משפטית.
            יש להתייעץ עם יועץ מס מוסמך לפני קבלת החלטות פיננסיות.
          </p>
        </div>
      </div>
    </footer>
  );
}
