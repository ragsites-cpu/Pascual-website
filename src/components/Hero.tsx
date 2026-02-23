"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-background z-10" />

            {/* Abstract Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="container relative z-20 px-4 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
                >
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">
                        24/7 Emergency Service
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6"
                >
                    PLUMBING AND HOME REMODELING <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">
                        EXPERTS
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
                >
                    Professional drain cleaning and jetting services in Los Angeles.
                    Serving Beverly Hills, Calabasas, Thousand Oaks, Pasadena & more.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4"
                >
                    <Button
                        size="lg"
                        className="bg-primary text-black hover:bg-primary/90 text-lg h-14 px-8 rounded-full w-full md:w-auto font-heading font-black uppercase tracking-wider shadow-[0_0_30px_rgba(132,204,22,0.6)] hover:shadow-[0_0_50px_rgba(132,204,22,1)] transition-all duration-300"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Request Service <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </motion.div>

                {/* Floating Badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
                >
                    {["Licensed & Insured", "Rapid Response", "Free Estimates", "Satisfaction Guaranteed"].map((item, i) => (
                        <div key={i} className="flex items-center justify-center gap-2 text-sm text-gray-400 border border-white/5 rounded-lg py-3 px-4 bg-white/5 backdrop-blur-sm">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            {item}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
