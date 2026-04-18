import { useState } from "react";
import Layout from "@/components/Layout";
import { X } from "lucide-react";
import salonInterior from "@/assets/salon-interior.png";
import salonStation from "@/assets/salon-station.png";
import nailsPink from "@/assets/nails-pink.png";
import nailsOmbre from "@/assets/nails-ombre.png";

const items = [
  { src: salonInterior, alt: "Salon principal", cat: "Ambiance" },
  { src: nailsPink, alt: "Manucure rose", cat: "Esthétique" },
  { src: salonStation, alt: "Poste de soin", cat: "Détails" },
  { src: nailsOmbre, alt: "Nail art ombre", cat: "Esthétique" },
  { src: salonInterior, alt: "Espace accueil", cat: "Ambiance" },
  { src: salonStation, alt: "Esthétique poste", cat: "Détails" },
  { src: nailsPink, alt: "Manucure premium", cat: "Esthétique" },
  { src: salonInterior, alt: "Vue intérieure", cat: "Ambiance" },
  { src: nailsOmbre, alt: "Beauté des mains", cat: "Esthétique" },
];

const filters = ["Tout", "Ambiance", "Esthétique", "Détails"];

const Gallery = () => {
  const [active, setActive] = useState("Tout");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "Tout" ? items : items.filter((i) => i.cat === active);

  return (
    <Layout>
      <section className="pt-40 pb-16 bg-gradient-warm text-center">
        <div className="container-luxe">
          <span className="eyebrow mb-6 block">Galerie</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-6">L'univers <em className="italic text-champagne-deep">Chez Leyla</em></h1>
          <span className="divider-gold inline-block" />
        </div>
      </section>

      <section className="py-12 bg-ivory">
        <div className="container-luxe">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-6 py-3 text-[10px] uppercase tracking-[0.3em] border transition-all ${
                  active === f
                    ? "bg-foreground text-ivory border-foreground"
                    : "border-border text-foreground hover:border-champagne-deep hover:text-champagne-deep"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {filtered.map((it, i) => (
              <button
                key={i}
                onClick={() => setLightbox(it.src)}
                className={`image-luxe ${i % 5 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"} bg-secondary group`}
              >
                <img src={it.src} alt={it.alt} className="w-full h-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-noir/95 flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-ivory hover:text-champagne"
            aria-label="Fermer"
          >
            <X size={28} strokeWidth={1.5} />
          </button>
          <img src={lightbox} alt="" className="max-h-[90vh] max-w-[90vw] object-contain" />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
