import Layout from "@/components/Layout";
import { Phone, Instagram, MapPin, MessageCircle, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Bonjour Chez Leyla, je suis ${form.name}. ${form.message} (Tél: ${form.phone})`;
    window.open(`https://wa.me/212610509938?text=${encodeURIComponent(text)}`, "_blank");
    toast.success("Redirection vers WhatsApp...");
  };

  return (
    <Layout>
      <section className="pt-40 pb-16 bg-gradient-warm text-center">
        <div className="container-luxe">
          <span className="eyebrow mb-6 block">Contact</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-[1]">
            Prenons <em className="italic text-champagne-deep">rendez-vous</em>
          </h1>
          <span className="divider-gold inline-block" />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-ivory">
        <div className="container-luxe grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl mb-8">Nous trouver</h2>
            <div className="space-y-8">
              <a href="https://maps.google.com/?q=55+quartier+Beau+Rivage+Bouznika" target="_blank" rel="noreferrer" className="flex items-start gap-5 group">
                <MapPin className="text-champagne-deep mt-1 shrink-0" size={22} strokeWidth={1.3} />
                <div>
                  <p className="eyebrow mb-2">Adresse</p>
                  <p className="text-foreground group-hover:text-champagne-deep transition-colors">55 quartier Beau Rivage,<br />Bouznika, Maroc</p>
                </div>
              </a>
              <a href="tel:+212610509938" className="flex items-start gap-5 group">
                <Phone className="text-champagne-deep mt-1 shrink-0" size={22} strokeWidth={1.3} />
                <div>
                  <p className="eyebrow mb-2">Téléphone principal</p>
                  <p className="text-foreground group-hover:text-champagne-deep transition-colors">06 10 50 99 38</p>
                </div>
              </a>
              <a href="tel:+212711367151" className="flex items-start gap-5 group">
                <Phone className="text-champagne-deep mt-1 shrink-0" size={22} strokeWidth={1.3} />
                <div>
                  <p className="eyebrow mb-2">Téléphone secondaire</p>
                  <p className="text-foreground group-hover:text-champagne-deep transition-colors">07 11 36 71 51</p>
                </div>
              </a>
              <a href="https://wa.me/212610509938" target="_blank" rel="noreferrer" className="flex items-start gap-5 group">
                <MessageCircle className="text-champagne-deep mt-1 shrink-0" size={22} strokeWidth={1.3} />
                <div>
                  <p className="eyebrow mb-2">WhatsApp</p>
                  <p className="text-foreground group-hover:text-champagne-deep transition-colors">Écrivez-nous directement</p>
                </div>
              </a>
              <a href="https://www.instagram.com/chez_leyla_centre_esthetique/" target="_blank" rel="noreferrer" className="flex items-start gap-5 group">
                <Instagram className="text-champagne-deep mt-1 shrink-0" size={22} strokeWidth={1.3} />
                <div>
                  <p className="eyebrow mb-2">Instagram</p>
                  <p className="text-foreground group-hover:text-champagne-deep transition-colors">@chez_leyla_centre_esthetique</p>
                </div>
              </a>
              <div className="flex items-start gap-5">
                <Clock className="text-champagne-deep mt-1 shrink-0" size={22} strokeWidth={1.3} />
                <div>
                  <p className="eyebrow mb-2">Horaires</p>
                  <p className="text-foreground/70 text-sm italic">Contactez-nous pour connaître nos horaires d'ouverture.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gradient-warm p-10 md:p-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-2">Écrivez-nous</h2>
            <p className="text-sm text-muted-foreground mb-8">Votre message sera transmis via WhatsApp.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="eyebrow mb-2 block">Nom</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-b border-foreground/30 py-3 outline-none focus:border-champagne-deep transition-colors"
                />
              </div>
              <div>
                <label className="eyebrow mb-2 block">Téléphone</label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-transparent border-b border-foreground/30 py-3 outline-none focus:border-champagne-deep transition-colors"
                />
              </div>
              <div>
                <label className="eyebrow mb-2 block">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Je souhaiterais réserver…"
                  className="w-full bg-transparent border-b border-foreground/30 py-3 outline-none focus:border-champagne-deep transition-colors resize-none"
                />
              </div>
              <button type="submit" className="btn-luxe bg-foreground text-ivory hover:bg-champagne-deep w-full">
                Envoyer via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-noir">
        <iframe
          title="Chez Leyla Bouznika"
          src="https://maps.google.com/maps?q=Beau+Rivage+Bouznika&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="450"
          className="border-0 grayscale"
          loading="lazy"
        />
      </section>
    </Layout>
  );
};

export default Contact;
