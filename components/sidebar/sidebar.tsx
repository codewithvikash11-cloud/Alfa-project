import Link from "next/link";
import { SidebarNavigation } from "./sidebar-navigation";
import { Package2 } from "lucide-react";

export function Sidebar() {
    return (
        <aside className="fixed inset-y-0 left-0 w-64 border-r bg-background hidden md:flex flex-col z-30">
            <div className="flex h-16 items-center border-b px-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
                    <img src="/logo.png" alt="SeoPilot.ai Logo" className="h-8 w-auto mix-blend-multiply" />
                    <span>SeoPilot.ai</span>
                </Link>
            </div>
            <div className="flex-1 overflow-y-auto py-4 px-3">
                <SidebarNavigation />
            </div>
        </aside>
    );
}
