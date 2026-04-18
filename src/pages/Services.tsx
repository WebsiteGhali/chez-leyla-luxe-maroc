import Layout from "@/components/Layout";
import { useReveal } from "@/hooks/useReveal";
import salonStation from "@/assets/salon-station.png";
import nailsPink from "@/assets/nails-pink.png";
import salonInterior from "@/assets/salon-interior.png";
import nailsOmbre from "@/assets/nails-ombre.png";

const categories = [
  {
    id: "coiffure",
    name: "Coiffure",
    img: salonStation,
    intro: "Du brushing au coiffage de mariée, chaque geste est pensé pour révéler la beauté naturelle de vos cheveux.",
    items: ["Coupe femme", "Brushing", "Coloration", "Mèches & balayages", "Soin capillaire profond", "Coiffage & mise en beauté"],
  },
  {
    id: "esthetique",
    name: "Esthétique",
    img: nailsPink,
    intro: "Manucure, pédicure et soins esthétiques pour des mains et des pieds à votre image — soignés, élégants, lumineux.",
    items: ["Manucure classique", "Pose vernis semi-permanent", "Pédicure spa", "Beauté des mains", "Beauté des pieds", "Mise en beauté"],
  },
  {
    id: "spa",
    name: "Spa",
    img: salonInterior,
    intro: "Une parenthèse sensorielle pour relâcher le corps, apaiser l'esprit et retrouver son équilibre.",
    items: ["Moments de détente", "Soins du visage", "Soins corps", "Massage relaxant", "Rituel bien-être", "Expérience sensorielle"],
  },
  {
    id: "hammam",
    name: "Hammam",
    img: nailsOmbre,
    intro: "Le rituel ancestral marocain, revisité dans un cadre raffiné. Purifier, adoucir, sublimer.",
    items: ["Hammam traditionnel", "Gommage savon noir", "Rituel ghassoul", "Soin purifiant", "Modelage à l'huile d'argan", "Rituel complet"],
  },
];

const Services = () => {
  const r1 = useReveal();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-gradient-warm">
        <div className="container-luxe text-center">
          <span className="eyebrow mb-6 block">Nos prestations</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-[1]">
            L'art du soin <em className="italic text-champagne-deep">complet</em>
          </h1>
          <span className="divider-gold mb-8 block mx-auto" />
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Coiffure, esthétique, spa et hammam : quatre univers, une même exigence du détail
            et du soin. Découvrez nos prestations signature.
          </p>
        </div>
      </section>

      {/* Categories */}
      {categories.map((cat, idx) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`py-24 md:py-32 ${idx % 2 === 0 ? "bg-ivory" : "bg-gradient-warm"}`}
        >
          <div className="container-luxe">
            <div className={`grid lg:grid-cols-12 gap-12 lg:gap-16 items-center ${idx % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
              <div className={`lg:col-span-6 [direction:ltr]`}>
                <div className="image-luxe aspect-[4/5]">
                  <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
              <div className="lg:col-span-6 [direction:ltr]">
                <span className="font-serif italic text-champagne-deep text-lg mb-4 block">0{idx + 1}</span>
                <h2 className="font-serif text-4xl md:text-6xl mb-6 leading-[1.05]">{cat.name}</h2>
                <span className="divider-gold mb-6" />
                <p className="text-foreground/75 leading-relaxed mb-10 max-w-xl">{cat.intro}</p>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                  {cat.items.map((it) => (
                    <li key={it} className="flex items-baseline gap-3 text-foreground/80 border-b border-border pb-3">
                      <span className="text-champagne-deep text-xs">✦</span>
                      <span className="text-sm">{it}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs italic text-muted-foreground mb-6">
                  Carte complète et tarifs sur demande, selon disponibilité.
                </p>
                <a href="tel:+212610509938" className="btn-luxe bg-foreground text-ivory hover:bg-champagne-deep">
                  Réserver / Demander la carte
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA */}
      <section ref={r1} className="reveal py-24 bg-noir text-ivory text-center">
        <div className="container-luxe">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Une question, un conseil ?
          </h2>
          <p className="text-ivory/70 mb-10 max-w-xl mx-auto">
            Notre équipe vous accompagne dans le choix du soin adapté à vos envies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+212610509938" className="btn-luxe bg-champagne text-noir hover:bg-ivory">Appeler</a>
            <a href="https://wa.me/212610509938" target="_blank" rel="noreferrer" className="btn-luxe border border-ivory text-ivory hover:bg-ivory hover:text-noir">WhatsApp</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
