import Layout from "@/components/Layout";
import { useReveal } from "@/hooks/useReveal";
import salonInterior from "@/assets/salon-interior.png";
import salonStation from "@/assets/salon-station.png";

const SpaHammam = () => {
  const r1 = useReveal();
  const r2 = useReveal();
  const r3 = useReveal();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <img src={salonInterior} alt="Spa & Hammam Chez Leyla" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-noir/55" />
        <div className="relative h-full container-luxe flex flex-col justify-center text-ivory text-center">
          <span className="text-[10px] uppercase tracking-[0.5em] text-champagne mb-8">Spa & Hammam</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 max-w-4xl mx-auto leading-[1]">
            Une parenthèse, <em className="italic text-champagne">hors du temps</em>.
          </h1>
          <p className="max-w-xl mx-auto text-ivory/80 leading-relaxed">
            Respirez. Relâchez. Laissez la chaleur, la lumière et le silence prendre soin de vous.
          </p>
        </div>
      </section>

      {/* Sensorial intro */}
      <section ref={r1} className="reveal py-28 md:py-40 bg-gradient-warm">
        <div className="container-luxe max-w-3xl text-center">
          <span className="eyebrow mb-6 block">Une expérience sensorielle</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-10 leading-[1.1]">
            Le rituel comme <em className="italic text-champagne-deep">art de vivre</em>.
          </h2>
          <span className="divider-gold mb-10 inline-block" />
          <div className="space-y-6 text-foreground/75 leading-relaxed text-left md:text-center">
            <p>
              Pousser la porte de notre espace bien-être, c'est entrer dans un autre temps.
              Une lumière douce, un parfum apaisant, des matières chaudes — tout est pensé
              pour vous inviter au lâcher-prise.
            </p>
            <p>
              Que vous choisissiez le hammam pour son rituel purifiant, ou le spa pour
              une parenthèse de détente profonde, l'expérience reste la même : prendre
              soin de vous, vraiment.
            </p>
          </div>
        </div>
      </section>

      {/* Hammam */}
      <section ref={r2} className="reveal py-28 md:py-40 bg-ivory">
        <div className="container-luxe grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-serif italic text-champagne-deep text-lg mb-4 block">Hammam</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-[1.1]">
              Le rituel <em className="italic text-champagne-deep">ancestral</em>, revisité.
            </h2>
            <span className="divider-gold mb-6" />
            <div className="space-y-5 text-foreground/75 leading-relaxed">
              <p>
                Vapeur enveloppante, gommage au savon noir, masque au ghassoul : le hammam
                marocain dans toute sa noblesse, pratiqué dans un cadre raffiné et soigné.
              </p>
              <p>
                Une expérience qui purifie la peau, détend le corps et reconnecte au plaisir
                simple d'un rituel ancien.
              </p>
            </div>
            <a href="tel:+212610509938" className="btn-luxe bg-foreground text-ivory hover:bg-champagne-deep mt-10">
              Réserver le hammam
            </a>
          </div>
          <div className="image-luxe aspect-[4/5]">
            <img src={salonInterior} alt="Hammam Chez Leyla" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Spa */}
      <section ref={r3} className="reveal py-28 md:py-40 bg-noir text-ivory">
        <div className="container-luxe grid lg:grid-cols-2 gap-16 items-center">
          <div className="image-luxe aspect-[4/5] order-2 lg:order-1">
            <img src={salonStation} alt="Spa Chez Leyla" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="font-serif italic text-champagne text-lg mb-4 block">Spa</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-[1.1]">
              Le luxe d'un <em className="italic text-champagne">moment pour soi</em>.
            </h2>
            <span className="divider-gold mb-6 bg-champagne" />
            <div className="space-y-5 text-ivory/70 leading-relaxed">
              <p>
                Modelages, soins du visage, soins du corps : chaque rituel est conçu comme
                une invitation au lâcher-prise. Des gestes précis, des produits choisis, un
                cadre apaisant.
              </p>
              <p>
                Offrez-vous le temps. Le vôtre.
              </p>
            </div>
            <a href="tel:+212610509938" className="btn-luxe border border-champagne text-champagne hover:bg-champagne hover:text-noir mt-10">
              Réserver un soin spa
            </a>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-24 md:py-32 bg-gradient-warm text-center">
        <div className="container-luxe max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-[1.1]">
            Un moment <em className="italic text-champagne-deep">pour soi</em>.
          </h2>
          <p className="text-foreground/70 mb-10 leading-relaxed">
            Réservez votre instant de bien-être à Bouznika. Notre équipe vous accueille
            avec attention et discrétion.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+212610509938" className="btn-luxe bg-foreground text-ivory hover:bg-champagne-deep">Appeler</a>
            <a href="https://wa.me/212610509938" target="_blank" rel="noreferrer" className="btn-luxe border border-foreground text-foreground hover:bg-foreground hover:text-ivory">WhatsApp</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SpaHammam;
