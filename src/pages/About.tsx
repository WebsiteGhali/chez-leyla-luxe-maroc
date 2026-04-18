import Layout from "@/components/Layout";
import { useReveal } from "@/hooks/useReveal";
import { Link } from "react-router-dom";
import salonInterior from "@/assets/salon-interior.png";
import salonStation from "@/assets/salon-station.png";

const About = () => {
  const r1 = useReveal();
  const r2 = useReveal();
  const r3 = useReveal();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[480px] overflow-hidden">
        <img src={salonInterior} alt="Centre de beauté Chez Leyla" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-noir/50" />
        <div className="relative h-full container-luxe flex flex-col justify-end pb-20 text-ivory">
          <span className="text-[10px] uppercase tracking-[0.5em] text-champagne mb-6">À propos</span>
          <h1 className="font-serif text-5xl md:text-7xl max-w-3xl leading-[1]">
            L'âme d'un lieu, <em className="italic text-champagne">l'art du soin</em>.
          </h1>
        </div>
      </section>

      {/* Vision */}
      <section ref={r1} className="reveal py-28 md:py-40 bg-gradient-warm">
        <div className="container-luxe grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 lg:col-start-1">
            <span className="eyebrow mb-6 block">Notre vision</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-[1.1]">
              La beauté, <em className="italic text-champagne-deep">avant tout</em>, un bien-être.
            </h2>
            <span className="divider-gold mb-8" />
            <div className="space-y-5 text-foreground/75 leading-relaxed">
              <p>
                Chez Leyla est née d'une conviction simple : prendre soin de soi devrait toujours
                ressembler à un rituel. Un instant suspendu, où l'on s'écoute, où l'on se choisit.
              </p>
              <p>
                À Bouznika, nous avons imaginé un lieu où coiffure, esthétique, spa et hammam
                cohabitent dans une même promesse — celle d'une beauté vécue, jamais imposée.
              </p>
              <p>
                Loin du superflu, proche de l'essentiel : la chaleur d'un accueil, la précision
                d'un geste, le silence apaisant d'une cabine de soin.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="image-luxe aspect-[4/5]">
              <img src={salonInterior} alt="Espace d'accueil Chez Leyla" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section ref={r2} className="reveal py-28 md:py-40 bg-ivory">
        <div className="container-luxe">
          <div className="max-w-2xl mb-20">
            <span className="eyebrow mb-6 block">Notre philosophie</span>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1]">
              Un lieu pensé pour <em className="italic text-champagne-deep">se sentir bien</em>.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { t: "L'écoute", d: "Avant chaque soin, un temps d'échange. Comprendre, conseiller, ajuster." },
              { t: "Le détail", d: "Une lumière, un parfum, une texture : le luxe se cache toujours dans le détail." },
              { t: "La sérénité", d: "Un cadre apaisant où l'on se déconnecte pour mieux se retrouver." },
            ].map((p, i) => (
              <div key={p.t} className="border-t border-champagne-deep pt-8">
                <span className="font-serif italic text-champagne-deep text-lg mb-4 block">0{i + 1}</span>
                <h3 className="font-serif text-3xl mb-4">{p.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emotional block */}
      <section ref={r3} className="reveal py-28 md:py-40 bg-noir text-ivory">
        <div className="container-luxe grid lg:grid-cols-2 gap-16 items-center">
          <div className="image-luxe aspect-[4/5] order-2 lg:order-1">
            <img src={salonStation} alt="Espace soin Chez Leyla" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-[10px] uppercase tracking-[0.4em] text-champagne mb-6 block">L'expérience</span>
            <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-[1.05]">
              Chaque visite, <em className="italic text-champagne">une histoire</em>.
            </h2>
            <p className="text-ivory/70 leading-relaxed mb-6">
              On entre Chez Leyla pour une coupe, un soin, un massage. On en repart avec
              l'impression d'avoir pris du temps pour soi — vraiment.
            </p>
            <p className="text-ivory/70 leading-relaxed mb-10">
              Notre engagement : que chaque cliente se sente attendue, écoutée, valorisée.
              Une expérience pensée comme une véritable parenthèse.
            </p>
            <p className="font-serif italic text-2xl text-champagne mb-10">
              Libre. Belle. Sereine.
            </p>
            <Link to="/contact" className="btn-luxe border border-champagne text-champagne hover:bg-champagne hover:text-noir">
              Nous rencontrer
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
