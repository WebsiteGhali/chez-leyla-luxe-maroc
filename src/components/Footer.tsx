import { Link } from "react-router-dom";
import { Phone, Instagram, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-noir text-ivory pt-24 pb-10">
      <div className="container-luxe">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="text-[10px] uppercase tracking-[0.45em] text-champagne mb-2 block">
              Centre de Beauté
            </span>
            <h3 className="font-serif text-4xl italic mb-4">Chez Leyla</h3>
            <p className="text-ivory/60 text-sm leading-relaxed mb-6">
              Coiffure • Esthétique • Spa • Hammam
            </p>
            <p className="font-serif italic text-champagne text-lg">
              Libre. Belle. Sereine.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="eyebrow text-champagne mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm text-ivory/70">
              <li><Link to="/" className="hover:text-champagne transition-colors">Accueil</Link></li>
              <li><Link to="/a-propos" className="hover:text-champagne transition-colors">À propos</Link></li>
              <li><Link to="/prestations" className="hover:text-champagne transition-colors">Prestations</Link></li>
              <li><Link to="/spa-hammam" className="hover:text-champagne transition-colors">Spa & Hammam</Link></li>
              <li><Link to="/galerie" className="hover:text-champagne transition-colors">Galerie</Link></li>
              <li><Link to="/avis" className="hover:text-champagne transition-colors">Avis</Link></li>
              <li><Link to="/contact" className="hover:text-champagne transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="eyebrow text-champagne mb-6">Nous contacter</h4>
            <ul className="space-y-4 text-sm text-ivory/70">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-champagne mt-1 shrink-0" strokeWidth={1.5} />
                <span>55 quartier Beau Rivage<br />Bouznika, Maroc</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-champagne shrink-0" strokeWidth={1.5} />
                <a href="tel:+212610509938" className="hover:text-champagne transition-colors">06 10 50 99 38</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-champagne shrink-0" strokeWidth={1.5} />
                <a href="tel:+212711367151" className="hover:text-champagne transition-colors">07 11 36 71 51</a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={16} className="text-champagne shrink-0" strokeWidth={1.5} />
                <a
                  href="https://www.instagram.com/chez_leyla_centre_esthetique/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-champagne transition-colors"
                >
                  @chez_leyla_centre_esthetique
                </a>
              </li>
            </ul>
          </div>

          {/* Réserver */}
          <div>
            <h4 className="eyebrow text-champagne mb-6">Une parenthèse</h4>
            <p className="text-sm text-ivory/70 mb-6 leading-relaxed">
              Offrez-vous un moment de beauté et de bien-être à Bouznika.
            </p>
            <a
              href="tel:+212610509938"
              className="btn-luxe border border-champagne text-champagne hover:bg-champagne hover:text-noir w-full"
            >
              Réserver
            </a>
          </div>
        </div>

        <div className="border-t border-ivory/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ivory/40">
          <p>© {new Date().getFullYear()} Chez Leyla — Centre de beauté, coiffure, esthétique, spa et hammam.</p>
          <p className="font-serif italic">Bouznika · Maroc</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
