"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-12">
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
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted transition-colors"
              >
                <Phone className="text-accent mt-1" size={24} />
                <div>
                  <h4 className="font-semibold">Whatssapp</h4>
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
        </div>
      </div>
    </section>
  );
}
