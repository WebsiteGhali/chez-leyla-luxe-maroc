import Layout from "@/components/Layout";
import { Star } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const reviews = [
  { n: "Sara M.", q: "Un accueil chaleureux et un cadre vraiment magnifique. Je suis ressortie détendue et sublimée. Une adresse d'exception à Bouznika." },
  { n: "Imane R.", q: "Le hammam est un vrai moment de lâcher-prise. Service impeccable, ambiance feutrée, équipe professionnelle. Je recommande sans hésiter." },
  { n: "Nour B.", q: "Mon adresse beauté à Bouznika. Professionnalisme, douceur et résultat parfait à chaque visite. La coiffure est juste sublime." },
  { n: "Yasmine K.", q: "Une vraie parenthèse de bien-être. La manucure est d'une précision incroyable, et le cadre est tellement apaisant. J'y retourne sans hésiter." },
  { n: "Lina E.", q: "Premier soin spa, je suis conquise. L'attention au détail, la qualité des produits, l'écoute… tout est haut de gamme. Merci Chez Leyla." },
  { n: "Hajar T.", q: "Ambiance cosy, propreté irréprochable, équipe au top. C'est devenu mon rituel mensuel — un vrai luxe que je m'offre avec plaisir." },
];

const Reviews = () => {
  const r1 = useReveal();
  return (
    <Layout>
      <section className="pt-40 pb-20 bg-gradient-warm text-center">
        <div className="container-luxe">
          <span className="eyebrow mb-6 block">Avis clientes</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-[1]">
            Elles ont vécu <em className="italic text-champagne-deep">l'expérience</em>
          </h1>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-champagne text-champagne" />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">L'avis de celles qui nous font confiance.</p>
        </div>
      </section>

      <section ref={r1} className="reveal py-24 md:py-32 bg-ivory">
        <div className="container-luxe grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-gradient-warm p-10 border border-border flex flex-col">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={12} className="fill-champagne text-champagne" />
                ))}
              </div>
              <p className="font-serif text-xl italic text-foreground/80 leading-relaxed mb-8 flex-1">
                « {r.q} »
              </p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-champagne-deep">— {r.n}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-noir text-ivory text-center">
        <div className="container-luxe max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            À votre tour, <em className="italic text-champagne">Chez Leyla</em>.
          </h2>
          <p className="text-ivory/70 mb-10">Réservez votre moment de beauté et de détente.</p>
          <a href="tel:+212610509938" className="btn-luxe bg-champagne text-noir hover:bg-ivory">Réserver</a>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;
