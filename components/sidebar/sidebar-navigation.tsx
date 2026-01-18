"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SIDEBAR_ITEMS } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function SidebarNavigation() {
    const pathname = usePathname();

    return (
        <nav className="space-y-1">
            {SIDEBAR_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                    <Link key={item.href} href={item.href} passHref legacyBehavior>
                        {/* Wraps button to avoid hydration issues with nested a tags if button renders a */}
                        {/* Actually Button renders a 'button' by default. But for navigation we want Accessible text. */}
                        {/* Using Button asChild pattern is better */}
                        <Button
                            variant={isActive ? "secondary" : "ghost"}
                            className={cn(
                                "w-full justify-start gap-4 px-4 py-6 font-medium cursor-pointer",
                                isActive && "bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-950/50 dark:text-blue-400"
                            )}
                            asChild
                        >
                            <a href={item.href}>
                                <item.icon className={cn("h-5 w-5", isActive ? "text-blue-600 dark:text-blue-400" : "text-muted-foreground")} />
                                {item.name}
                            </a>
                        </Button>
                    </Link>
                );
            })}
        </nav>
    );
}
