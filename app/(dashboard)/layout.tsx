import { Sidebar } from "@/components/sidebar/sidebar";
import { Header } from "@/components/layout/header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-muted/20">
            <Sidebar />
            <div className="flex flex-col md:pl-64 min-h-screen transition-all duration-300">
                <Header />
                <main className="flex-1 p-4 lg:p-8 animate-in fade-in duration-500">
                    {children}
                </main>
            </div>
        </div>
    );
}
