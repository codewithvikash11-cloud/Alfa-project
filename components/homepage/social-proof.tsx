"use client";

import Image from "next/image";

const LOGOS = [
    { name: "Google", src: "/logos/google.svg" }, // Placeholders
    { name: "Microsoft", src: "/logos/microsoft.svg" },
    { name: "Amazon", src: "/logos/amazon.svg" },
    { name: "Netflix", src: "/logos/netflix.svg" },
    { name: "Spotify", src: "/logos/spotify.svg" },
    { name: "Adobe", src: "/logos/adobe.svg" }
];

export function SocialProof() {
    return (
        <section className="py-10 border-y border-slate-100 bg-slate-50/50">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
                    Trusted by innovative teams at
                </p>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Using text placeholders since we don't have SVGs yet, 
              but typically these would be <Image> components */}
                    <span className="text-xl font-bold font-sans text-slate-400">Google</span>
                    <span className="text-xl font-bold font-sans text-slate-400">Microsoft</span>
                    <span className="text-xl font-bold font-sans text-slate-400">Amazon</span>
                    <span className="text-xl font-bold font-sans text-slate-400">Netflix</span>
                    <span className="text-xl font-bold font-sans text-slate-400">Spotify</span>
                </div>
            </div>
        </section>
    );
}
