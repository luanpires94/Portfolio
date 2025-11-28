"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formState);
    setSubmitted(true);
    setTimeout(() => {
      setFormState({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Tenho interesse em projetos desafiadores, feedbacks ou apenas uma
            conversa sobre tech.
          </p>
          <div className="w-12 h-1 bg-accent rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
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
                href="tel:+21987112748"
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

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Nome</label>
                <motion.input
                  whileFocus={{ boxShadow: "0 0 20px rgba(0, 217, 255, 0.2)" }}
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <motion.input
                  whileFocus={{ boxShadow: "0 0 20px rgba(0, 217, 255, 0.2)" }}
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Mensagem</label>
                <motion.textarea
                  whileFocus={{ boxShadow: "0 0 20px rgba(0, 217, 255, 0.2)" }}
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Sua mensagem aqui..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2 ${
                  submitted
                    ? "bg-green-500/20 text-green-400 border border-green-500/50"
                    : "bg-accent text-black hover:bg-accent-dark"
                }`}
              >
                {submitted ? (
                  <>
                    <span>✓ Enviado com sucesso!</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
