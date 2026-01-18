"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const testimonials = [
    {
        name: "Sarah Jenks",
        role: "CMO at TechFlow",
        content: "We've seen a 300% increase in organic traffic since using SEOForge. The AI agents are incredibly accurate.",
        image: "/avatars/avatar-1.png"
    },
    {
        name: "Michael Chen",
        role: "Founder, StartUp",
        content: "The competitor analysis tool is a game changer. I know exactly what keywords to target before writing a single word.",
        image: "/avatars/avatar-2.png"
    },
    {
        name: "Jessica Lee",
        role: "Head of Growth",
        content: "Finally, an SEO tool that actually automates the work. I just approve the content and watch the rankings climb.",
        image: "/avatars/avatar-3.png"
    },
    {
        name: "David Ross",
        role: "SEO Specialist",
        content: "I manage 10 clients with this tool. It saves me about 40 hours a week on research and reporting.",
        image: "/avatars/avatar-4.png"
    },
    {
        name: "Emily Watson",
        role: "Blogger",
        content: "My blog traffic doubled in two months. The content generator writes better than most freelancers I've hired.",
        image: "/avatars/avatar-5.png"
    },
    {
        name: "Alex Johnson",
        role: "Agency Owner",
        content: "Solid platform. The reporting features make me look like a rockstar to my clients.",
        image: "/avatars/avatar-6.png"
    }
];

export function Testimonials() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4 flex items-center justify-center gap-2">
                        Loved by Our Users <span className="text-red-500">❤️</span>
                    </h2>
                    <p className="text-muted-foreground">
                        Join 10,000+ marketers automation their SEO growth.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-4 mb-4">
                                    <Avatar>
                                        <AvatarImage src={t.image} />
                                        <AvatarFallback>{t.name[0]}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className="font-semibold text-sm">{t.name}</h4>
                                        <p className="text-xs text-muted-foreground">{t.role}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                    "{t.content}"
                                </p>
                                <div className="mt-4 flex gap-1">
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
