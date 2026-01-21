"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { SidebarNavigation } from "@/components/sidebar/sidebar-navigation";
import { Package2 } from "lucide-react";
import Link from "next/link";

export function Header() {
    return (
        <header className="flex h-16 items-center gap-4 border-b bg-background px-6 sticky top-0 z-40 w-full">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col w-[300px] sm:w-[400px] pl-0">
                    <nav className="grid gap-2 text-lg font-medium px-6">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary mb-6">
                            <img src="/logo.png" alt="SeoPilot.ai Logo" className="h-10 w-auto" />
                        </Link>
                        <SidebarNavigation />
                    </nav>
                </SheetContent>
            </Sheet>
            <div className="w-full flex-1">
                {/* Placeholder for Search or Breadcrumbs */}
            </div>
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="rounded-full">
                    <span className="sr-only">User menu</span>
                    <div className="h-8 w-8 rounded-full bg-primary/10 border flex items-center justify-center text-xs font-medium text-primary">
                        JD
                    </div>
                </Button>
            </div>
        </header>
    );
}
