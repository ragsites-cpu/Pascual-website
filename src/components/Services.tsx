"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Droplets, Flame, Hammer, Bath, ChefHat, LayoutGrid, DoorOpen, Home, Construction } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        title: "Plumbing Services",
        description: "Expert solutions for all your plumbing needs.",
        items: [
            { name: "Pipes & Leaks", icon: Wrench },
            { name: "Water Heaters", icon: Flame },
            { name: "Drain Cleaning", icon: Droplets },
            { name: "Installation & Repair", icon: Hammer },
        ]
    },
    {
        title: "Remodeling & Repair",
        description: "Complete home improvement services.",
        items: [
            { name: "Bathroom", icon: Bath },
            { name: "Kitchen", icon: ChefHat },
            { name: "Flooring", icon: LayoutGrid },
            { name: "Doors & Windows", icon: DoorOpen },
            { name: "Roofing & Siding", icon: Home },
            { name: "Drywall", icon: Construction },
        ]
    }
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-background relative overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        We provide comprehensive plumbing and remodeling solutions for your home and business.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                        >
                            <Card className="h-full bg-card/50 border-white/5 backdrop-blur-sm overflow-hidden group hover:border-primary/50 transition-colors duration-500">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold text-primary mb-2">
                                        {category.title}
                                    </CardTitle>
                                    <p className="text-muted-foreground">{category.description}</p>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {category.items.map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                                <div className="p-2 rounded-full bg-primary/10 text-primary">
                                                    <item.icon className="w-5 h-5" />
                                                </div>
                                                <span className="font-medium">{item.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
