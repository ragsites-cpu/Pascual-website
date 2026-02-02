import { Wrench } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 py-12">
            <div className="container px-4 mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="bg-primary p-1.5 rounded-full text-black">
                                <Wrench className="h-5 w-5" />
                            </div>
                            <span className="font-bold text-xl tracking-tight">Jonathan Drain Cleaning</span>
                        </Link>
                        <p className="text-muted-foreground max-w-sm">
                            Jetting service at its best 24/7. Professional drain cleaning and plumbing services in Los Angeles and surrounding areas.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-white">Services</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors">Plumbing Repair</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Water Heaters</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Drain Cleaning</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Bathroom Remodeling</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Kitchen Renovations</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-white">Contact</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex flex-col">
                                <span className="text-xs text-primary font-bold">EMERGENCY 24/7</span>
                                <a href="tel:818-689-0512" className="hover:text-white transition-colors">818-689-0512</a>
                            </li>
                            <li className="flex flex-col mt-2">
                                <span className="text-xs text-primary font-bold">EMAIL</span>
                                <a href="mailto:Jonathandraincleaning78@gmail.com" className="hover:text-white transition-colors">Jonathandraincleaning78@gmail.com</a>
                            </li>
                            <li className="flex flex-col mt-2">
                                <span className="text-xs text-primary font-bold">ADDRESS</span>
                                <span>8526 Willis Ave, Unit 1</span>
                                <span>Panorama City, CA 91402</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Jonathan Drain Cleaning. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
