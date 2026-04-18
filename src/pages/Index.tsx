import { Link } from "react-router-dom";
import { Phone, MapPin, Instagram, Star, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { useReveal } from "@/hooks/useReveal";
import salonInterior from "@/assets/salon-interior.png";
import salonStation from "@/assets/salon-station.png";
import nailsPink from "@/assets/nails-pink.png";
import nailsOmbre from "@/assets/nails-ombre.png";

const Index = () => {
  const r1 = useReveal();
  const r2 = useReveal();
  const r3 = useReveal();
  const r4 = useReveal();
  const r5 = useReveal();
  const r6 = useReveal();
  const r7 = useReveal();

  const services = [
    { name: "Coiffure", desc: "Coupe, coiffage, coloration et soins capillaires dans un écrin de douceur.", img: salonStation, link: "/prestations#coiffure" },
    { name: "Esthétique", desc: "Manucure, pédicure, beauté des mains et des pieds, mise en beauté.", img: nailsPink, link: "/prestations#esthetique" },
    { name: "Spa", desc: "Une parenthèse sensorielle pour relâcher, respirer et se retrouver.", img: salonInterior, link: "/spa-hammam" },
    { name: "Hammam", desc: "Le rituel ancestral revisité dans un cadre raffiné et apaisant.", img: nailsOmbre, link: "/spa-hammam" },
  ];

  return (
    <Layout>
      {/* HERO */}
      <section className="relative h-screen min-h-[680px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={salonInterior}
            alt="Intérieur élégant du centre de beauté Chez Leyla à Bouznika"
            className="w-full h-full object-cover scale-105 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 bg-noir/20" />
        </div>

        <div className="relative h-full container-luxe flex flex-col justify-end pb-24 md:pb-32">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="text-[10px] uppercase tracking-[0.5em] text-champagne mb-6 block">
              Bouznika · Maroc
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory leading-[0.95] mb-8">
              La beauté, comme<br />une <em className="italic text-champagne">expérience</em>.
            </h1>
            <p className="text-ivory/80 text-base md:text-lg max-w-xl leading-relaxed mb-10 font-light">
              Coiffure, esthétique, spa et hammam se rencontrent dans une atmosphère élégante,
              chaleureuse et sereine. Un lieu pensé pour vous.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+212610509938" className="btn-luxe bg-ivory text-noir hover:bg-champagne">
                Réserver un moment
              </a>
              <Link to="/prestations" className="btn-luxe border border-ivory/50 text-ivory hover:bg-ivory hover:text-noir">
                Découvrir
              </Link>
            </div>
          </div>

          {/* Service badges */}
          <div className="hidden md:flex items-center gap-8 mt-16 text-ivory/70 text-[10px] uppercase tracking-[0.3em]">
            <span>Coiffure</span><span className="w-1 h-1 rounded-full bg-champagne" />
            <span>Esthétique</span><span className="w-1 h-1 rounded-full bg-champagne" />
            <span>Spa</span><span className="w-1 h-1 rounded-full bg-champagne" />
            <span>Hammam</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 text-ivory/60">
          <span className="text-[9px] uppercase tracking-[0.4em]">Scroll</span>
          <div className="w-px h-12 bg-ivory/30 relative overflow-hidden">
            <span className="absolute top-0 left-0 w-full h-1/2 bg-champagne animate-float-slow" />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section ref={r1} className="reveal py-10 bg-ivory border-b border-border">
        <div className="container-luxe grid md:grid-cols-3 gap-8 items-center">
          <a href="https://maps.google.com/?q=55+quartier+Beau+Rivage+Bouznika" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
            <MapPin size={20} className="text-champagne-deep" strokeWidth={1.3} />
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Notre adresse</p>
              <p className="text-sm group-hover:text-champagne-deep transition-colors">55 quartier Beau Rivage, Bouznika</p>
            </div>
          </a>
          <a href="tel:+212610509938" className="flex items-center gap-4 group">
            <Phone size={20} className="text-champagne-deep" strokeWidth={1.3} />
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Réservation</p>
              <p className="text-sm group-hover:text-champagne-deep transition-colors">06 10 50 99 38</p>
            </div>
          </a>
          <a href="https://www.instagram.com/chez_leyla_centre_esthetique/" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
            <Instagram size={20} className="text-champagne-deep" strokeWidth={1.3} />
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Instagram</p>
              <p className="text-sm group-hover:text-champagne-deep transition-colors">@chez_leyla_centre_esthetique</p>
            </div>
          </a>
        </div>
      </section>

      {/* MANIFESTO */}
      <section ref={r2} className="reveal py-28 md:py-40 bg-gradient-warm">
        <div className="container-luxe grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <span className="eyebrow mb-6 block">Notre univers</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.05] mb-8">
              Une parenthèse <em className="italic text-champagne-deep">élégante</em> à Bouznika.
            </h2>
            <span className="divider-gold mb-8" />
            <div className="space-y-5 text-foreground/75 leading-relaxed">
              <p>
                Chez Leyla, chaque soin est un rituel. Chaque geste, une attention. Nous avons
                imaginé un lieu où la beauté ne se résume pas à un service, mais devient
                un moment de bien-être complet.
              </p>
              <p>
                Coiffure, esthétique, spa et hammam se déploient dans une atmosphère
                feutrée, chaleureuse et raffinée. Un écrin pensé pour celles qui cherchent
                bien plus qu'un salon : une expérience.
              </p>
            </div>
            <p className="font-serif italic text-2xl text-champagne-deep mt-10">
              Libre. Belle. Sereine.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-6">
            <div className="image-luxe aspect-[3/4] mt-12">
              <img src={salonStation} alt="Espace esthétique Chez Leyla" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="image-luxe aspect-[3/4]">
              <img src={salonInterior} alt="Salon principal de Chez Leyla" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section ref={r3} className="reveal py-28 md:py-40 bg-ivory">
        <div className="container-luxe">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <span className="eyebrow mb-6 block">Nos prestations</span>
            <h2 className="font-serif text-4xl md:text-6xl mb-6">
              L'art du soin <em className="italic text-champagne-deep">complet</em>
            </h2>
            <span className="divider-gold" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((s, i) => (
              <Link
                key={s.name}
                to={s.link}
                className="group block"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="image-luxe aspect-[3/4] mb-6 bg-secondary">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <h3 className="font-serif text-3xl mb-3 group-hover:text-champagne-deep transition-colors">{s.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-champagne-deep">
                  Découvrir <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section ref={r4} className="reveal py-28 md:py-40 bg-noir text-ivory relative overflow-hidden">
        <div className="container-luxe relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-champagne mb-6 block">Pourquoi Chez Leyla</span>
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-10">
                Le luxe d'un<br /><em className="italic text-champagne">moment pour soi</em>.
              </h2>
              <div className="space-y-8">
                {[
                  { n: "01", t: "L'expérience complète", d: "Coiffure, esthétique, spa et hammam réunis dans un même lieu." },
                  { n: "02", t: "Une atmosphère soignée", d: "Un écrin chaleureux, pensé pour le confort et la sérénité." },
                  { n: "03", t: "L'art de l'accueil", d: "Une attention sincère, un service à la hauteur de vos attentes." },
                  { n: "04", t: "La beauté comme rituel", d: "Des prestations pensées comme des moments de bien-être." },
                ].map((p) => (
                  <div key={p.n} className="flex gap-6 border-b border-ivory/10 pb-6">
                    <span className="font-serif text-3xl text-champagne italic">{p.n}</span>
                    <div>
                      <h3 className="font-serif text-xl mb-2">{p.t}</h3>
                      <p className="text-sm text-ivory/60 leading-relaxed">{p.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="image-luxe aspect-[4/5] hidden lg:block">
              <img src={salonInterior} alt="Atmosphère Chez Leyla" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section ref={r5} className="reveal py-28 md:py-40 bg-gradient-warm">
        <div className="container-luxe">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="eyebrow mb-6 block">Aperçu</span>
              <h2 className="font-serif text-4xl md:text-6xl">L'univers <em className="italic text-champagne-deep">Chez Leyla</em></h2>
            </div>
            <Link to="/galerie" className="text-[10px] uppercase tracking-[0.3em] text-champagne-deep inline-flex items-center gap-2 group">
              Voir la galerie complète <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div className="image-luxe aspect-square col-span-2 row-span-2 md:aspect-[4/5]">
              <img src={salonInterior} alt="Salon Chez Leyla" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="image-luxe aspect-square">
              <img src={nailsPink} alt="Manucure rose" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="image-luxe aspect-square">
              <img src={salonStation} alt="Poste de beauté" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="image-luxe aspect-square">
              <img src={nailsOmbre} alt="Nail art ombre" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="image-luxe aspect-square">
              <img src={salonStation} alt="Détail intérieur" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section ref={r6} className="reveal py-28 md:py-40 bg-ivory">
        <div className="container-luxe">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="eyebrow mb-6 block">Avis clientes</span>
            <h2 className="font-serif text-4xl md:text-6xl mb-6">
              Elles ont vécu <em className="italic text-champagne-deep">l'expérience</em>
            </h2>
            <div className="flex items-center justify-center gap-1 mt-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-champagne text-champagne" />
              ))}
              <span className="ml-3 text-sm text-muted-foreground">Avis vérifiés</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { q: "Un accueil chaleureux et un cadre magnifique. Je suis ressortie détendue et sublimée.", a: "Sara M." },
              { q: "Le hammam est un vrai moment de lâcher-prise. Service impeccable, ambiance feutrée.", a: "Imane R." },
              { q: "Mon adresse beauté à Bouznika. Professionnalisme, douceur et résultat parfait à chaque visite.", a: "Nour B." },
            ].map((t, i) => (
              <div key={i} className="bg-gradient-warm p-10 border border-border">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} className="fill-champagne text-champagne" />
                  ))}
                </div>
                <p className="font-serif text-xl italic text-foreground/80 leading-relaxed mb-8">
                  « {t.q} »
                </p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-champagne-deep">— {t.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/avis" className="btn-luxe border border-foreground text-foreground hover:bg-foreground hover:text-ivory">
              Lire tous les avis
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section ref={r7} className="reveal relative py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <img src={salonInterior} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-noir/70" />
        </div>
        <div className="relative container-luxe text-center text-ivory">
          <span className="text-[10px] uppercase tracking-[0.5em] text-champagne mb-6 block">Réservation</span>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-[1]">
            Offrez-vous un<br />moment <em className="italic text-champagne">Chez Leyla</em>.
          </h2>
          <p className="text-ivory/70 max-w-xl mx-auto mb-12 leading-relaxed">
            Notre équipe vous accueille avec attention et savoir-faire à Bouznika.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+212610509938" className="btn-luxe bg-champagne text-noir hover:bg-ivory">
              Appeler
            </a>
            <a href="https://wa.me/212610509938" target="_blank" rel="noreferrer" className="btn-luxe border border-ivory text-ivory hover:bg-ivory hover:text-noir">
              WhatsApp
            </a>
            <a href="https://maps.google.com/?q=55+quartier+Beau+Rivage+Bouznika" target="_blank" rel="noreferrer" className="btn-luxe border border-ivory/40 text-ivory hover:bg-ivory hover:text-noir">
              Itinéraire
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
