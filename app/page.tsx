"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Users,
  Shield,
  Clock,
  Star,
  ArrowRight,
  Menu,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LamecLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Lamec.ma</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">
                Services
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                À propos
              </Link>
              <Link href="#process" className="text-gray-600 hover:text-blue-600 transition-colors">
                Processus
              </Link>
              <Link href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">
                FAQ
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() =>
                  window.open(
                    "https://wa.me/212602653893?text=Bonjour, je souhaite créer ma société au Maroc.",
                    "_blank",
                  )
                }
              >
                Commencer maintenant
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                  Services juridiques professionnels
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  LANCEZ VOTRE SOCIÉTÉ
                  <span className="block text-blue-600">MAINTENANT</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Créez votre entreprise au Maroc en quelques clics avec notre équipe d'experts juridiques. Simplifiez
                  vos démarches administratives avec Lamec.ma.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
                  onClick={() =>
                    window.open(
                      "https://wa.me/212602653893?text=Bonjour, je souhaite créer ma société au Maroc. Pouvez-vous m'aider ?",
                      "_blank",
                    )
                  }
                >
                  Créer votre société maintenant
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4 bg-transparent"
                  onClick={() =>
                    window.open(
                      "https://wa.me/212602653893?text=Bonjour, je souhaite découvrir vos services juridiques.",
                      "_blank",
                    )
                  }
                >
                  Découvrir nos services
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Sociétés créées</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">72h</div>
                  <div className="text-sm text-gray-600">Délai moyen</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/office-interior.png"
                alt="Bureau professionnel Lamec.ma - Espace de travail moderne"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                  <div>
                    <div className="font-semibold">Processus simplifié</div>
                    <div className="text-sm text-gray-600">100% en ligne</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Image
                src="/images/office-exterior.png"
                alt="Bureaux Lamec.ma - Bâtiment moderne au Maroc"
                width={500}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Créez votre société en ligne au Maroc !
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Chez Lamec.ma, nous vous accompagnons à simplifier la création juridique de votre entreprise au Maroc.
                  Notre équipe d'experts vous guide à travers toutes les étapes administratives, vous aidant à lancer
                  votre activité en toute sérénité.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Création de SARL</h3>
                    <p className="text-gray-600">Constitution complète de votre société à responsabilité limitée</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Création de SA</h3>
                    <p className="text-gray-600">
                      Mise en place de votre société anonyme avec tous les documents requis
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Services complémentaires</h3>
                    <p className="text-gray-600">
                      Compte bancaire, tenue de comptabilité, conseil juridique, social et fiscal
                    </p>
                  </div>
                </div>
              </div>

              <Button
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() =>
                  window.open(
                    "https://wa.me/212602653893?text=Bonjour, je souhaite voir vos services détaillés pour la création d'entreprise.",
                    "_blank",
                  )
                }
              >
                Voir nos services détaillés
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir <span className="text-blue-600">Lamec.ma</span> ?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="p-6 border-l-4 border-l-blue-600">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapidité</h3>
                    <p className="text-gray-600">
                      Création de votre société en 72h seulement grâce à notre platform optimisé et notre expertise.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-green-600">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Sécurité</h3>
                    <p className="text-gray-600">
                      Tous vos documents sont sécurisés et conformes à la réglementation marocaine en vigueur.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-purple-600">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Accompagnement</h3>
                    <p className="text-gray-600">
                      Notre équipe d'experts vous accompagne à chaque étape de la création de votre entreprise.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Simplicité</h3>
                <p className="text-blue-100 leading-relaxed">
                  Grâce à notre plateforme intuitive, Lamec vous offre une expérience simplifiée pour la création de
                  votre société. Fini les démarches administratives complexes !
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>Interface simple et intuitive</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>Suivi en temps réel</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>Support client dédié</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Explorez nos services de création d'entreprise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chez Lamec.ma, nous vous offrons une gamme complète de services pour créer votre entreprise au Maroc.
              Découvrez notre processus simple et efficace en 3 étapes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">01</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Création d'une SARL</h3>
              <p className="text-gray-600">
                Constitution complète de votre société à responsabilité limitée avec tous les documents légaux requis.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">02</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Création d'une SA/SAS</h3>
              <p className="text-gray-600">
                Mise en place de votre société anonyme ou par actions simplifiée selon vos besoins spécifiques.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">03</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Création d'entreprise au Maroc</h3>
              <p className="text-gray-600">
                Accompagnement complet pour toutes les formes juridiques d'entreprises au Maroc.
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() =>
                window.open(
                  "https://wa.me/212602653893?text=Bonjour, je souhaite voir le détail de votre processus de création d'entreprise.",
                  "_blank",
                )
              }
            >
              Voir le détail
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Réponses à vos questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explorez comment Lamec.ma peut vous aider à créer et à gérer votre entreprise plus facilement et
              efficacement. Nous répondons aux questions les plus fréquentes.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Comment puis-je payer pour les services comptables ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Nous acceptons plusieurs modes de paiement : virement bancaire, carte bancaire, et paiement en ligne
                  sécurisé. Vous pouvez également opter pour un paiement échelonné selon vos besoins.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Puis-je utiliser Lamec.ma sans aucune connaissance du droit ou de l'entrepreneuriat ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Absolument ! Notre plateforme est conçue pour être accessible à tous, même sans connaissances
                  juridiques préalables. Notre équipe d'experts vous guide à chaque étape et s'occupe de toutes les
                  complexités administratives.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Comment puis-je prendre contact avec un expert de Lamec.ma ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Vous pouvez nous contacter par téléphone, email, ou via notre chat en ligne. Nos experts sont
                  disponibles du lundi au vendredi de 9h à 18h pour répondre à toutes vos questions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center mt-8">
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  window.open(
                    "https://wa.me/212602653893?text=Bonjour, j'ai une question concernant vos services juridiques.",
                    "_blank",
                  )
                }
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contacter notre équipe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Ce que disent nos clients</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Service exceptionnel ! L'équipe de Lamec.ma a créé ma SARL en moins de 48h. Processus simple et
                accompagnement professionnel."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <div className="font-semibold">Amina B.</div>
                  <div className="text-sm text-gray-600">Fondatrice, Tech Startup</div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Très satisfait du service. L'équipe est réactive et professionnelle. Je recommande vivement Lamec.ma
                pour la création d'entreprise."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <div className="font-semibold">Youssef M.</div>
                  <div className="text-sm text-gray-600">Directeur, Import/Export</div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Plateforme intuitive et équipe compétente. Lamec.ma m'a fait gagner un temps précieux dans la création
                de mon entreprise."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <div className="font-semibold">Fatima Z.</div>
                  <div className="text-sm text-gray-600">Consultante</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Besoin d'être accompagné ?</h2>
            <p className="text-xl text-blue-100">
              Nos experts se tiennent prêts pour vous aider dans toutes vos démarches. Contactez-nous dès maintenant
              pour un accompagnement personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-4"
                onClick={() =>
                  window.open(
                    "https://wa.me/212602653893?text=Bonjour, je souhaite prendre rendez-vous pour créer ma société.",
                    "_blank",
                  )
                }
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contacter via WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
                onClick={() =>
                  window.open(
                    "mailto:k.lamhaouar@lameconseil.com?subject=Demande de création de société&body=Bonjour, je souhaite créer ma société au Maroc. Pouvez-vous me contacter ?",
                    "_blank",
                  )
                }
              >
                Nous contacter par email
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">L</span>
                </div>
                <span className="text-xl font-bold">Lamec.ma</span>
              </div>
              <p className="text-gray-400">
                Votre partenaire de confiance pour la création et la gestion d'entreprise au Maroc.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+212 602653893</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>k.lamhaouar@lameconseil.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <a
                    href="https://wa.me/212602653893"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    WhatsApp: +212 602653893
                  </a>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-1" />
                  <div className="text-sm">
                    <div>Lot Diamant Vert, Ichrak Center</div>
                    <div>Imm n°B11, 3ème étage, bureau 35</div>
                    <div>Hay Hassani, Casablanca</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Liens utiles</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Liens Rapides</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Création SARL
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Création SA
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Domiciliation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Comptabilité
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Restez informé de nos dernières actualités et conseils.</p>
              <div className="space-y-2">
                <Input type="email" placeholder="Votre email" className="bg-gray-800 border-gray-700 text-white" />
                <Button className="w-full bg-blue-600 hover:bg-blue-700">S'abonner</Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Lamec.ma. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
