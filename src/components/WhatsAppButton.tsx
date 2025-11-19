import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '972533464288';
  const message = encodeURIComponent('שלום, אני מעוניין/ת לבדוק זכאות להחזר מס');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 z-50 group"
      aria-label="דברו איתנו בוואטסאפ"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
      <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        דברו איתי בוואטסאפ
      </span>
    </a>
  );
}
