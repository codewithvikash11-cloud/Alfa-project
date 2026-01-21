"use client";

import { Package2 } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-300 py-16">
            <div className="container px-4 mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white mb-4">
                            <img src="/logo.png" alt="SeoPilot.ai Logo" className="h-8 w-auto" />
                            <span>SeoPilot.ai</span>
                        </Link>
                        <p className="text-sm text-slate-400">
                            The only AI-first SEO platform designed for modern growth teams. Automate your ranking strategy.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Product</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#" className="hover:text-primary transition-colors">Features</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Integrations</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Changelog</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Docs</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Company</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Legal</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>© 2024 SeoPilot.ai. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-white">Twitter</Link>
                        <Link href="#" className="hover:text-white">LinkedIn</Link>
                        <Link href="#" className="hover:text-white">GitHub</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
