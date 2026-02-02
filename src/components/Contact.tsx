"use client";

import { Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-black/40">
            <div className="container px-4 mx-auto">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Get In Touch
                            <br />
                            <span className="text-primary">We're Here to Help</span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-12">
                            Emergency? Don't wait. Call us immediately for 24/7 service.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <a href="tel:818-689-0512" className="flex flex-col items-center gap-4 p-6 rounded-xl bg-white/5 border border-white/10 group hover:border-primary/50 transition-all">
                                <div className="p-4 rounded-full bg-primary text-black group-hover:scale-110 transition-transform">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div className="text-center">
                                    <p className="text-sm text-muted-foreground">Emergency Hotline</p>
                                    <p className="text-xl font-bold group-hover:text-primary transition-colors">818-689-0512</p>
                                </div>
                            </a>

                            <a href="mailto:Jonathandraincleaning78@gmail.com" className="flex flex-col items-center gap-4 p-6 rounded-xl bg-white/5 border border-white/10 group hover:border-primary/50 transition-all">
                                <div className="p-4 rounded-full bg-white/10 text-white group-hover:bg-primary group-hover:text-black transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm text-muted-foreground">Email</p>
                                    <p className="text-lg font-bold group-hover:text-primary transition-colors break-all">Jonathandraincleaning78@gmail.com</p>
                                </div>
                            </a>

                            <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-white/5 border border-white/10">
                                <div className="p-4 rounded-full bg-white/10 text-white">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div className="text-center">
                                    <p className="text-sm text-muted-foreground">Hours</p>
                                    <p className="text-xl font-bold">24 Hours / 7 Days</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-white/5 border border-white/10">
                                <div className="p-4 rounded-full bg-white/10 text-white">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div className="text-center">
                                    <p className="text-sm text-muted-foreground">Service Area</p>
                                    <p className="text-xl font-bold">Los Angeles & Surrounding Areas</p>
                                    <p className="text-sm text-muted-foreground mt-1">Beverly Hills • Calabasas • Thousand Oaks • Pasadena • Santa Clarita • Pacific Palisades • Rancho Palos Verdes</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10">
                            <p className="text-sm text-muted-foreground">
                                <span className="font-bold text-white">Address:</span> 8526 Willis Ave, Unit 1, Panorama City, CA 91402
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
