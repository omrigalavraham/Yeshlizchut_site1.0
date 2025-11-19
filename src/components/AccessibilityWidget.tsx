import { useState, useEffect } from 'react';
import { Accessibility, X, Plus, Minus, Eye, Moon, Sun, RefreshCw } from 'lucide-react';

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    fontSize: 100,
    contrast: false,
    darkMode: false,
    highlightLinks: false,
    lineHeight: 1.5,
    letterSpacing: 0,
  });

  useEffect(() => {
    // טעינת הגדרות שמורות
    const saved = localStorage.getItem('accessibilitySettings');
    if (saved) {
      const parsed = JSON.parse(saved);
      setSettings(parsed);
      applySettings(parsed);
    }
  }, []);

  const applySettings = (newSettings: typeof settings) => {
    const root = document.documentElement;

    // גודל פונט
    root.style.fontSize = `${newSettings.fontSize}%`;

    // ניגודיות גבוהה
    if (newSettings.contrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // מצב כהה
    if (newSettings.darkMode) {
      root.classList.add('dark-mode');
    } else {
      root.classList.remove('dark-mode');
    }

    // הדגשת קישורים
    if (newSettings.highlightLinks) {
      root.classList.add('highlight-links');
    } else {
      root.classList.remove('highlight-links');
    }

    // גובה שורה
    root.style.setProperty('--line-height', newSettings.lineHeight.toString());

    // ריווח בין אותיות
    root.style.setProperty('--letter-spacing', `${newSettings.letterSpacing}px`);
  };

  const updateSetting = (key: keyof typeof settings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
    localStorage.setItem('accessibilitySettings', JSON.stringify(newSettings));
  };

  const resetSettings = () => {
    const defaultSettings = {
      fontSize: 100,
      contrast: false,
      darkMode: false,
      highlightLinks: false,
      lineHeight: 1.5,
      letterSpacing: 0,
    };
    setSettings(defaultSettings);
    applySettings(defaultSettings);
    localStorage.removeItem('accessibilitySettings');
  };

  return (
    <>
      {/* כפתור פתיחה */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 z-[60] group"
        aria-label="פתח תפריט נגישות"
        title="נגישות"
      >
        <Accessibility className="w-7 h-7 group-hover:scale-110 transition-transform" />
        <span className="absolute -top-12 right-1/2 translate-x-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          תפריט נגישות
        </span>
      </button>

      {/* פאנל נגישות */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[70] flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-slide-up">
            {/* כותרת */}
            <div className="sticky top-0 bg-blue-600 text-white p-6 rounded-t-2xl flex items-center justify-between">
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-blue-700 p-2 rounded-lg transition-colors"
                aria-label="סגור תפריט נגישות"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold">הגדרות נגישות</h2>
                <Accessibility className="w-6 h-6" />
              </div>
            </div>

            {/* תוכן */}
            <div className="p-6 space-y-6">
              {/* גודל טקסט */}
              <div className="space-y-3">
                <label className="flex items-center justify-between font-semibold text-gray-900">
                  <span className="text-sm text-gray-600">{settings.fontSize}%</span>
                  <span>גודל טקסט</span>
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateSetting('fontSize', Math.max(80, settings.fontSize - 10))}
                    className="bg-gray-200 hover:bg-gray-300 p-3 rounded-lg transition-colors"
                    aria-label="הקטן טקסט"
                    disabled={settings.fontSize <= 80}
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <input
                    type="range"
                    min="80"
                    max="150"
                    step="10"
                    value={settings.fontSize}
                    onChange={(e) => updateSetting('fontSize', parseInt(e.target.value))}
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    aria-label="בחר גודל טקסט"
                  />
                  <button
                    onClick={() => updateSetting('fontSize', Math.min(150, settings.fontSize + 10))}
                    className="bg-gray-200 hover:bg-gray-300 p-3 rounded-lg transition-colors"
                    aria-label="הגדל טקסט"
                    disabled={settings.fontSize >= 150}
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* ניגודיות */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <button
                  onClick={() => updateSetting('contrast', !settings.contrast)}
                  className={`w-14 h-7 rounded-full transition-colors relative ${
                    settings.contrast ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  role="switch"
                  aria-checked={settings.contrast}
                  aria-label="ניגודיות גבוהה"
                >
                  <div
                    className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${
                      settings.contrast ? 'left-0.5' : 'right-0.5'
                    }`}
                  />
                </button>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">ניגודיות גבוהה</span>
                  <Eye className="w-5 h-5 text-gray-600" />
                </div>
              </div>

              {/* מצב כהה */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <button
                  onClick={() => updateSetting('darkMode', !settings.darkMode)}
                  className={`w-14 h-7 rounded-full transition-colors relative ${
                    settings.darkMode ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  role="switch"
                  aria-checked={settings.darkMode}
                  aria-label="מצב כהה"
                >
                  <div
                    className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${
                      settings.darkMode ? 'left-0.5' : 'right-0.5'
                    }`}
                  />
                </button>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">מצב כהה</span>
                  {settings.darkMode ? (
                    <Moon className="w-5 h-5 text-gray-600" />
                  ) : (
                    <Sun className="w-5 h-5 text-gray-600" />
                  )}
                </div>
              </div>

              {/* הדגשת קישורים */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <button
                  onClick={() => updateSetting('highlightLinks', !settings.highlightLinks)}
                  className={`w-14 h-7 rounded-full transition-colors relative ${
                    settings.highlightLinks ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  role="switch"
                  aria-checked={settings.highlightLinks}
                  aria-label="הדגש קישורים"
                >
                  <div
                    className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${
                      settings.highlightLinks ? 'left-0.5' : 'right-0.5'
                    }`}
                  />
                </button>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">הדגש קישורים</span>
                </div>
              </div>

              {/* גובה שורה */}
              <div className="space-y-3">
                <label className="flex items-center justify-between font-semibold text-gray-900">
                  <span className="text-sm text-gray-600">{settings.lineHeight.toFixed(1)}</span>
                  <span>גובה שורה</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="2.5"
                  step="0.1"
                  value={settings.lineHeight}
                  onChange={(e) => updateSetting('lineHeight', parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  aria-label="בחר גובה שורה"
                />
              </div>

              {/* ריווח בין אותיות */}
              <div className="space-y-3">
                <label className="flex items-center justify-between font-semibold text-gray-900">
                  <span className="text-sm text-gray-600">{settings.letterSpacing}px</span>
                  <span>ריווח בין אותיות</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="5"
                  step="0.5"
                  value={settings.letterSpacing}
                  onChange={(e) => updateSetting('letterSpacing', parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  aria-label="בחר ריווח בין אותיות"
                />
              </div>

              {/* כפתור איפוס */}
              <button
                onClick={resetSettings}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 py-3 px-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                <span>איפוס הגדרות</span>
              </button>

              {/* הודעה */}
              <p className="text-xs text-gray-500 text-center leading-relaxed">
                ההגדרות נשמרות אוטומטית ויישארו גם לאחר סגירת הדפדפן
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
