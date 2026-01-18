import { LayoutDashboard, PenTool, Fingerprint, Swords, Activity, Sparkles, MessageSquare, Quote, BarChart3, Settings, CreditCard } from "lucide-react";

export const SIDEBAR_ITEMS = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
    { name: "Article Writer", icon: PenTool, href: "/article-writer" },
    { name: "Brand Identity", icon: Fingerprint, href: "/brand-identity" },
    { name: "Competitors", icon: Swords, href: "/competitors" },
    { name: "Monitors", icon: Activity, href: "/monitors" },
    { name: "Prompts", icon: Sparkles, href: "/prompts" },
    { name: "Responses", icon: MessageSquare, href: "/responses" },
    { name: "Citations", icon: Quote, href: "/citations" },
    { name: "Insights", icon: BarChart3, href: "/insights" },
    { name: "Settings", icon: Settings, href: "/settings" },
    { name: "Billing", icon: CreditCard, href: "/billing" },
];
