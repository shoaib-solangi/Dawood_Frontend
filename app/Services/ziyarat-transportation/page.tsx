"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Check, MapPin, Clock, Users, Calendar, Car, Phone, Mail, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navbar from "@/app/components/Navbar"

export default function ZiyaratServices() {
  const [activeTab, setActiveTab] = useState("makkah")

  const ziyaratTours = {
    makkah: {
      title: "Makkah Ziyarat Tours",
      description: "Visit the historical and spiritual sites in and around Makkah with our guided Ziyarat tours.",
      image: "/placeholder.svg?height=600&width=800",
      highlights: [
        "Visit Jabal al-Nour and Cave of Hira",
        "Explore Jabal Thawr and Cave of Thawr",
        "Visit the historical site of Hudaybiyyah",
        "Tour the birthplace of Prophet Muhammad (PBUH)",
        "Visit the historical Jannatul Mualla cemetery",
        "Explore the Museum of the Two Holy Mosques",
      ],
      duration: "4-8 hours",
      groupSize: "1-15 people",
      includes: [
        "Professional religious guide",
        "Luxury air-conditioned vehicle",
        "Hotel pickup and drop-off",
        "Bottled water",
        "All entrance fees",
      ],
      pricing: [
        { type: "Standard Tour (4 hours)", price: "SAR 600", persons: "1-4" },
        { type: "Extended Tour (8 hours)", price: "SAR 1000", persons: "1-4" },
        { type: "Group Tour (4 hours)", price: "SAR 1500", persons: "5-15" },
      ],
    },
    madinah: {
      title: "Madinah Ziyarat Tours",
      description:
        "Experience the spiritual journey through the historical sites of Madinah related to the Prophet's life.",
      image: "/placeholder.svg?height=600&width=800",
      highlights: [
        "Visit Masjid Quba, the first mosque in Islam",
        "Explore Masjid Qiblatain (Mosque of the Two Qiblas)",
        "Visit the site of the Battle of Uhud and Martyrs of Uhud",
        "Tour the Seven Mosques (Sab'u Masajid)",
        "Visit Masjid Al-Jumua (Friday Mosque)",
        "Explore the historical Baqi Cemetery",
      ],
      duration: "4-8 hours",
      groupSize: "1-15 people",
      includes: [
        "Professional religious guide",
        "Luxury air-conditioned vehicle",
        "Hotel pickup and drop-off",
        "Bottled water",
        "All entrance fees",
      ],
      pricing: [
        { type: "Standard Tour (4 hours)", price: "SAR 600", persons: "1-4" },
        { type: "Extended Tour (8 hours)", price: "SAR 1000", persons: "1-4" },
        { type: "Group Tour (4 hours)", price: "SAR 1500", persons: "5-15" },
      ],
    },
    combined: {
      title: "Combined Makkah & Madinah Ziyarat",
      description:
        "Comprehensive Ziyarat package covering the significant historical and spiritual sites in both holy cities.",
      image: "/placeholder.svg?height=600&width=800",
      highlights: [
        "All major Ziyarat sites in Makkah",
        "All major Ziyarat sites in Madinah",
        "Transportation between Makkah and Madinah",
        "Flexible scheduling based on your Umrah or Hajj plans",
        "Knowledgeable guides with deep religious understanding",
        "Comfortable and convenient transportation",
      ],
      duration: "2-3 days",
      groupSize: "1-15 people",
      includes: [
        "Professional religious guide",
        "Luxury air-conditioned vehicle",
        "Hotel pickup and drop-off",
        "Bottled water",
        "All entrance fees",
        "Transportation between cities",
      ],
      pricing: [
        { type: "Standard Package (2 days)", price: "SAR 2500", persons: "1-4" },
        { type: "Extended Package (3 days)", price: "SAR 3500", persons: "1-4" },
        { type: "Group Package (2 days)", price: "SAR 5000", persons: "5-15" },
      ],
    },
  }

  const activeTour = ziyaratTours[activeTab as keyof typeof ziyaratTours]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Ziyarat Tours Background"
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80" />
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ziyarat Transportation</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto my-6"></div>
            <p className="text-lg text-gray-300 mb-8">
              Discover the historical and spiritual sites of the holy cities with our comprehensive Ziyarat
              transportation services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Ziyarat Selection Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Select Your Ziyarat Tour</h2>
              <Tabs defaultValue="makkah" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="makkah">Makkah Ziyarat</TabsTrigger>
                  <TabsTrigger value="madinah">Madinah Ziyarat</TabsTrigger>
                  <TabsTrigger value="combined">Combined Package</TabsTrigger>
                </TabsList>
              </Tabs>
            </motion.div>

            {/* Selected Ziyarat Tour Content */}
            <motion.div key={activeTab} initial="hidden" animate="visible" variants={fadeIn} className="space-y-12">
              {/* Tour Overview */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2 relative h-64 md:h-auto">
                    <Image
                      src={activeTour.image || "/placeholder.svg"}
                      alt={activeTour.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 md:w-1/2">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{activeTour.title}</h3>
                    <p className="text-gray-600 mb-6">{activeTour.description}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-orange-500 mr-2" />
                        <span className="text-gray-700">{activeTour.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-orange-500 mr-2" />
                        <span className="text-gray-700">{activeTour.groupSize}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 text-orange-500 mr-2" />
                        <span className="text-gray-700">Multiple Locations</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-orange-500 mr-2" />
                        <span className="text-gray-700">Available Daily</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tour Highlights */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Ziyarat Highlights</h3>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="grid md:grid-cols-2 gap-4"
                >
                  {activeTour.highlights.map((highlight, index) => (
                    <motion.div key={index} variants={fadeIn} className="flex items-start">
                      <div className="bg-orange-100 rounded-full p-1 mr-3 mt-1">
                        <Check className="h-4 w-4 text-orange-600" />
                      </div>
                      <p className="text-gray-700">{highlight}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* What's Included */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">What's Included</h3>
                <div className="bg-gray-50 rounded-xl p-6">
                  <ul className="grid md:grid-cols-2 gap-4">
                    {activeTour.includes.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <div className="bg-green-100 rounded-full p-1 mr-3">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pricing */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Tour Pricing</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {activeTour.pricing.map((price, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="bg-gradient-to-r from-orange-600 to-orange-500 py-4 px-6 text-white">
                        <h4 className="font-bold text-lg">{price.type}</h4>
                      </div>
                      <CardContent className="p-6">
                        <div className="text-center mb-4">
                          <span className="text-3xl font-bold text-gray-800">{price.price}</span>
                          <span className="text-gray-500 block text-sm">For {price.persons} persons</span>
                        </div>
                        <Button className="w-full bg-orange-600 hover:bg-orange-700">Book Now</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Booking Process */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">How to Book</h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="h-8 w-8 text-orange-600" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">1. Select Date & Time</h4>
                    <p className="text-gray-600">Choose your preferred date and time for the Ziyarat tour</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-orange-600" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">2. Provide Details</h4>
                    <p className="text-gray-600">Enter the number of participants and your contact information</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Car className="h-8 w-8 text-orange-600" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">3. Confirm Booking</h4>
                    <p className="text-gray-600">Receive confirmation and prepare for your spiritual journey</p>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h3>
                <Accordion type="single" collapsible className="bg-white rounded-xl shadow-md">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="px-6">
                      What is the difference between a city tour and a Ziyarat tour?
                    </AccordionTrigger>
                    <AccordionContent className="px-6">
                      While city tours focus on general landmarks and attractions, Ziyarat tours specifically focus on
                      sites of religious and historical significance in Islam. Our Ziyarat tours are led by guides with
                      deep religious knowledge who can provide spiritual context and historical information about each
                      site.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="px-6">
                      Are women allowed to visit all the Ziyarat sites?
                    </AccordionTrigger>
                    <AccordionContent className="px-6">
                      Most Ziyarat sites are accessible to both men and women. However, some locations may have separate
                      visiting areas or times for men and women. Our guides will inform you about any restrictions and
                      ensure that all members of your group can participate appropriately.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="px-6">How long do the Ziyarat tours typically take?</AccordionTrigger>
                    <AccordionContent className="px-6">
                      Our standard Ziyarat tours in either Makkah or Madinah typically take 4 hours, while extended
                      tours can take up to 8 hours. The combined Makkah and Madinah package is spread over 2-3 days.
                      However, we can customize the duration based on your schedule and preferences.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="px-6">
                      Can I combine a Ziyarat tour with my Umrah trip?
                    </AccordionTrigger>
                    <AccordionContent className="px-6">
                      Yes, our Ziyarat tours are designed to complement your Umrah or Hajj journey. We can schedule the
                      tours around your religious obligations to ensure you have a comprehensive spiritual experience.
                      Many pilgrims choose to do Ziyarat tours after completing their Umrah rituals.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Testimonials */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">What Our Customers Say</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex mb-4">
                      {[1, 2, 3, 4, 5].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-4">
                      "The Ziyarat tour in Madinah was a deeply moving experience. Our guide was knowledgeable about the
                      historical significance of each site and provided spiritual context that enhanced our visit.
                      Highly recommended!"
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                      <div>
                        <p className="font-medium">Mohammad K.</p>
                        <p className="text-sm text-gray-500">Pakistan</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex mb-4">
                      {[1, 2, 3, 4, 5].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-4">
                      "The combined Makkah and Madinah package was perfect for our family. The transportation was
                      comfortable, and the guide was patient with our elderly parents. We learned so much about Islamic
                      history!"
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                      <div>
                        <p className="font-medium">Aisha N.</p>
                        <p className="text-sm text-gray-500">United States</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl overflow-hidden shadow-xl">
                <div className="p-8 md:p-12 text-center text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Enrich Your Spiritual Journey</h3>
                  <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                    Book your Ziyarat tour today and deepen your connection to Islamic history and heritage.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-white text-orange-600 hover:bg-gray-100">Book Now</Button>
                    <Button variant="outline" className="text-white border-white/30 hover:bg-white/10">
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Need More Information?</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <div className="bg-orange-100 rounded-full p-3 mr-4">
                        <Phone className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Call Us</p>
                        <p className="text-gray-600">+966 58 056 3933</p>
                        <p className="text-gray-600">Available 24/7</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-orange-100 rounded-full p-3 mr-4">
                        <Mail className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Email Us</p>
                        <p className="text-gray-600">DiamondDawood@gmail.com</p>
                        <p className="text-gray-600">We'll respond within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
