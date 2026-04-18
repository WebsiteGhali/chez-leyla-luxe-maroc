import { Phone, MessageCircle } from "lucide-react";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/212610509938"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-luxe hover:scale-110 transition-transform duration-300"
      >
        <MessageCircle size={22} strokeWidth={1.8} />
      </a>
      <a
        href="tel:+212610509938"
        aria-label="Appeler"
        className="w-14 h-14 rounded-full bg-foreground text-ivory flex items-center justify-center shadow-luxe hover:scale-110 transition-transform duration-300"
      >
        <Phone size={20} strokeWidth={1.8} />
      </a>
    </div>
  );
};

export default FloatingCTA;
