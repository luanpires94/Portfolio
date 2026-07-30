"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contato do portfólio — ${form.name}`);
    const body = encodeURIComponent(
      `Nome: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:luan.94pires@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Informações de Contato</h3>
              <p className="text-muted-foreground">
                Entre em contato comigo através dos canais abaixo ou preencha o
                formulário.
              </p>
            </div>

            {/* Contact Methods */}
            <motion.div className="space-y-6">
              <motion.a
                href="mailto:luan.94pires@gmail.com"
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted transition-colors"
              >
                <Mail className="text-accent mt-1" size={24} />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">
                    luan.94pires@gmail.com
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/5521987112748"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted transition-colors"
              >
                <Phone className="text-accent mt-1" size={24} />
                <div>
                  <h4 className="font-semibold">WhatsApp</h4>
                  <p className="text-muted-foreground">21 98711-2748</p>
                </div>
              </motion.a>

              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted transition-colors">
                <MapPin className="text-accent mt-1" size={24} />
                <div>
                  <h4 className="font-semibold">Localização</h4>
                  <p className="text-muted-foreground">Rio de Janeiro</p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-3">Redes Sociais</h4>
              <div className="flex gap-3">
                {[
                  { name: "GitHub", url: "https://github.com/luanpires94" },
                  {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/luanpires94/",
                  },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 rounded-lg border border-border hover:border-accent text-muted-foreground hover:text-accent transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-5 p-6 rounded-xl border border-border bg-card/60 backdrop-blur-sm"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Nome
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
                placeholder="Seu nome"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
                placeholder="seu@email.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Mensagem
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors resize-none"
                placeholder="Como posso ajudar?"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-background font-semibold transition-shadow hover:shadow-[0_0_24px_rgba(0,217,255,0.4)]"
            >
              <Send size={18} />
              Enviar mensagem
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
