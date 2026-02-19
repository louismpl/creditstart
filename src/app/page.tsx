"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Shield,
  Brain,
  Users,
  ChevronRight,
  Star,
  CheckCircle,
  BarChart3,
  BookOpen,
  Lightbulb,
  ArrowRight,
  Menu,
  X,
  CreditCard,
  Zap,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const steps = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Crée ton profil",
    desc: "Réponds à quelques questions simples sur ta situation financière actuelle. Aucune information sensible requise au départ.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "L'IA analyse ta situation",
    desc: "Notre intelligence artificielle évalue ton profil et génère un parcours personnalisé adapté à tes objectifs.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Suis ta progression",
    desc: "Consulte ton tableau de bord en temps réel, complete des missions crédit et regarde ton score monter.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Accède aux produits financiers",
    desc: "Avec un crédit solide, obtiens des cartes, des prêts étudiants et des offres adaptées à ton profil.",
    color: "bg-orange-100 text-orange-600",
  },
];

const features = [
  {
    icon: <Brain className="w-7 h-7 text-blue-600" />,
    title: "Conseils IA personnalisés",
    desc: "Un assistant intelligent disponible 24h/24 qui parle ta langue et comprend ta situation d'étudiant ou d'immigrant.",
    badge: "IA",
  },
  {
    icon: <BarChart3 className="w-7 h-7 text-green-600" />,
    title: "Suivi de score en temps réel",
    desc: "Visualise l'évolution de ton score de crédit semaine après semaine avec des explications claires et actionnables.",
    badge: "Dashboard",
  },
  {
    icon: <BookOpen className="w-7 h-7 text-purple-600" />,
    title: "Éducation financière",
    desc: "Des modules d'apprentissage gamifiés sur le crédit, les budgets, l'épargne — en français, adaptés au contexte canadien.",
    badge: "Éducation",
  },
  {
    icon: <Shield className="w-7 h-7 text-red-600" />,
    title: "Données sécurisées",
    desc: "Tes informations sont protégées avec un chiffrement de niveau bancaire. Tu contrôles ce que tu partages.",
    badge: "Sécurité",
  },
  {
    icon: <Lightbulb className="w-7 h-7 text-yellow-600" />,
    title: "Missions crédit",
    desc: "Accomplis des défis hebdomadaires (payer à temps, diversifier, réduire l'utilisation) et gagne des points.",
    badge: "Gamification",
  },
  {
    icon: <Globe className="w-7 h-7 text-teal-600" />,
    title: "100% en français",
    desc: "Interface, conseils et support entièrement en français. Conçu pour la diaspora francophone au Canada.",
    badge: "Francophone",
  },
];

const testimonials = [
  {
    name: "Aminata D.",
    role: "Étudiante, Montréal",
    avatar: "AD",
    text: "Arrivée au Québec il y a 8 mois sans historique de crédit, j'ai atteint 680 points en 6 mois grâce aux conseils personnalisés. Incroyable!",
    score: "+210 pts",
    color: "bg-blue-600",
  },
  {
    name: "Jean-Pierre K.",
    role: "Ingénieur, Toronto",
    avatar: "JK",
    text: "Les modules en français m'ont vraiment aidé à comprendre le système canadien. Maintenant j'ai ma première carte de crédit!",
    score: "+185 pts",
    color: "bg-purple-600",
  },
  {
    name: "Fatou M.",
    role: "Étudiante MBA, Ottawa",
    avatar: "FM",
    text: "Les missions hebdomadaires rendent la construction du crédit ludique et motivante. J'adore voir ma progression.",
    score: "+240 pts",
    color: "bg-green-600",
  },
];

const plans = [
  {
    name: "Démarrage",
    price: "Gratuit",
    period: "",
    desc: "Parfait pour commencer",
    features: [
      "Profil de crédit de base",
      "5 modules éducatifs",
      "Suivi mensuel du score",
      "Conseils généraux IA",
    ],
    cta: "Commencer gratuitement",
    highlighted: false,
  },
  {
    name: "Croissance",
    price: "9,99$",
    period: "/ mois",
    desc: "Le plus populaire",
    features: [
      "Tout Démarrage inclus",
      "Suivi du score en temps réel",
      "Modules illimités",
      "IA personnalisée",
      "Missions crédit hebdomadaires",
      "Recommandations de produits",
    ],
    cta: "Essai gratuit 30 jours",
    highlighted: true,
  },
  {
    name: "Accélérateur",
    price: "19,99$",
    period: "/ mois",
    desc: "Pour aller plus vite",
    features: [
      "Tout Croissance inclus",
      "Connexion bancaire (Plaid)",
      "Coach crédit dédié",
      "Analyse Experian/Equifax",
      "Alertes fraude",
      "Support prioritaire",
    ],
    cta: "Choisir Accélérateur",
    highlighted: false,
  },
];

const faqs = [
  {
    q: "Est-ce que je dois avoir un historique de crédit pour m'inscrire?",
    a: "Non, absolument pas! CréditStart est spécialement conçu pour les personnes qui partent de zéro. Que tu sois nouvel immigrant ou étudiant sans historique, on t'accompagne dès le premier jour.",
  },
  {
    q: "Est-ce que l'application est disponible en dehors du Québec?",
    a: "Oui! CréditStart fonctionne dans toutes les provinces canadiennes. Le système de crédit est fédéral, donc nos conseils s'appliquent partout au Canada.",
  },
  {
    q: "Comment l'IA protège-t-elle mes données?",
    a: "Tes données sont chiffrées AES-256 et ne sont jamais vendues. L'IA utilise tes données uniquement pour générer des recommandations personnalisées, de manière anonymisée.",
  },
  {
    q: "En combien de temps puis-je voir des résultats?",
    a: "La plupart de nos utilisateurs voient une amélioration de 50 à 100 points dans les 3 premiers mois en suivant les recommandations de l'IA. Les résultats varient selon la situation de chacun.",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-xl text-foreground">
              Crédit<span className="text-primary">Start</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#fonctionnement" className="text-muted-foreground hover:text-foreground transition-colors">
              Comment ça marche
            </a>
            <a href="#fonctionnalites" className="text-muted-foreground hover:text-foreground transition-colors">
              Fonctionnalités
            </a>
            <a href="#tarifs" className="text-muted-foreground hover:text-foreground transition-colors">
              Tarifs
            </a>
            <a href="#temoignages" className="text-muted-foreground hover:text-foreground transition-colors">
              Témoignages
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">Connexion</Button>
            <Button size="sm">Commencer gratuitement</Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-4">
            <a href="#fonctionnement" className="text-sm font-medium">Comment ça marche</a>
            <a href="#fonctionnalites" className="text-sm font-medium">Fonctionnalités</a>
            <a href="#tarifs" className="text-sm font-medium">Tarifs</a>
            <a href="#temoignages" className="text-sm font-medium">Témoignages</a>
            <Button className="w-full">Commencer gratuitement</Button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100 px-4 py-1.5 text-sm font-medium">
            <Zap className="w-3.5 h-3.5 mr-1.5" />
            Plateforme francophone #1 pour construire son crédit
          </Badge>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground leading-tight mb-6">
            Construis ton crédit{" "}
            <span className="text-primary">à partir de zéro</span>
            <br className="hidden sm:block" /> en toute confiance
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            La plateforme conçue pour les étudiants et les immigrants francophones au Canada.
            IA personnalisée, éducation financière et suivi de score — en français.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="w-full sm:w-auto text-base px-8 py-6 shadow-lg">
              Commencer gratuitement
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8 py-6">
              Voir la démo
            </Button>
          </div>

          {/* Score preview card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-2xl mx-auto bg-white rounded-2xl border border-border shadow-xl p-6 sm:p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Score de crédit simulé</p>
                <p className="text-4xl font-bold text-foreground">680</p>
                <p className="text-sm text-green-600 font-medium mt-1">+210 pts en 6 mois</p>
              </div>
              <div className="text-right">
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100 mb-2">Bon</Badge>
                <p className="text-sm text-muted-foreground">Objectif: 720</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { label: "Historique de paiement", value: 85, color: "bg-green-500" },
                { label: "Taux d'utilisation", value: 62, color: "bg-blue-500" },
                { label: "Durée de l'historique", value: 40, color: "bg-purple-500" },
                { label: "Diversité du crédit", value: 55, color: "bg-orange-500" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-medium">{item.value}%</span>
                  </div>
                  <Progress value={item.value} className="h-2" />
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-border flex items-center gap-2 text-sm text-muted-foreground">
              <Brain className="w-4 h-4 text-primary" />
              <span>
                <strong className="text-foreground">Conseil IA:</strong> Réduire ton taux d'utilisation sous 30% augmenterait ton score de ~40 pts.
              </span>
            </div>
          </motion.div>

          {/* Social proof */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span>4.9/5 (2 400+ avis)</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span>15 000+ utilisateurs actifs</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-600" />
              <span>Données 100% sécurisées</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Comment ça marche */}
      <section id="fonctionnement" className="py-20 bg-muted/50 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">Comment ça marche</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">4 étapes vers ton objectif crédit</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Un parcours simple, guidé par l'IA, pensé pour toi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center mb-4`}>
                      {step.icon}
                    </div>
                    <div className="text-xs font-bold text-muted-foreground mb-2">ÉTAPE {i + 1}</div>
                    <h3 className="font-bold text-base mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section id="fonctionnalites" className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-100">Fonctionnalités</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tout ce qu'il te faut pour réussir</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Des outils puissants conçus spécifiquement pour la communauté francophone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:scale-110 transition-transform">
                        {f.icon}
                      </div>
                      <Badge variant="secondary" className="text-xs">{f.badge}</Badge>
                    </div>
                    <h3 className="font-bold text-base mb-2">{f.title}</h3>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section id="temoignages" className="py-20 bg-muted/50 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Témoignages</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ils ont transformé leur avenir financier</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground flex-1">"{t.text}"</p>
                    <div className="flex items-center gap-3 pt-2 border-t border-border">
                      <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm`}>
                        {t.avatar}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100 text-xs font-bold">
                        {t.score}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section id="tarifs" className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">Tarifs</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Un plan pour chaque étape</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Commence gratuitement, évolue quand tu es prêt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={plan.highlighted ? "md:-mt-4 md:mb-4" : ""}
              >
                <Card className={`h-full ${plan.highlighted ? "border-primary border-2 shadow-xl" : ""}`}>
                  {plan.highlighted && (
                    <div className="bg-primary text-white text-xs font-bold text-center py-2 rounded-t-xl">
                      LE PLUS POPULAIRE
                    </div>
                  )}
                  <CardContent className="p-6 flex flex-col gap-5">
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">{plan.desc}</p>
                      <h3 className="text-xl font-bold">{plan.name}</h3>
                      <div className="mt-2">
                        <span className="text-3xl font-extrabold">{plan.price}</span>
                        <span className="text-muted-foreground text-sm">{plan.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 flex-1">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant={plan.highlighted ? "default" : "outline"}
                      className="w-full"
                    >
                      {plan.cta}
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/50 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">FAQ</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Questions fréquentes</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Card
                key={i}
                className="cursor-pointer hover:shadow-sm transition-shadow"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <CardContent className="p-5">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-semibold text-sm sm:text-base">{faq.q}</p>
                    <ChevronRight
                      className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${openFaq === i ? "rotate-90" : ""}`}
                    />
                  </div>
                  {openFaq === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-3 text-sm text-muted-foreground"
                    >
                      {faq.a}
                    </motion.p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-primary rounded-3xl p-10 sm:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_50%,white,transparent)]" />
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 relative">
                Ton avenir financier commence aujourd'hui
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto relative">
                Rejoins 15 000+ étudiants et immigrants qui bâtissent leur crédit avec CréditStart.
                C'est gratuit pour commencer.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base px-8 py-6 font-bold">
                  Créer mon compte gratuit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              <p className="mt-5 text-white/60 text-sm relative">
                Aucune carte de crédit requise • Annulation à tout moment
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <TrendingUp className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-bold text-lg">
              Crédit<span className="text-primary">Start</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © 2026 CréditStart. Conçu avec soin pour la communauté francophone du Canada.
          </p>
          <div className="flex gap-5 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-foreground transition-colors">Conditions</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
