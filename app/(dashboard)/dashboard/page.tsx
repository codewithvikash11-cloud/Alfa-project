"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Monitor,
    MessageSquare,
    FileText,
    Link as LinkIcon,
    BarChart2,
    Plus,
    Calendar,
    Pencil,
    Trash2,
    Bot
} from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="space-y-8 p-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                    <p className="text-muted-foreground mt-2">Overview of your project's performance and AI interactions.</p>
                </div>
                <Button variant="outline">New View</Button>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">

                {/* Active Monitors */}
                <Card className="shadow-sm">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between space-y-0 pb-2">
                            <span className="text-sm font-medium text-muted-foreground">Active Monitors</span>
                            <div className="h-8 w-8 rounded-md bg-blue-50 flex items-center justify-center text-blue-600">
                                <Monitor className="h-4 w-4" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="text-2xl font-bold">1</div>
                            <p className="text-xs text-muted-foreground mt-1">1 total monitors</p>
                        </div>
                    </CardContent>
                </Card>

                {/* Active Prompts */}
                <Card className="shadow-sm">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between space-y-0 pb-2">
                            <span className="text-sm font-medium text-muted-foreground">Active Prompts</span>
                            <div className="h-8 w-8 rounded-md bg-purple-50 flex items-center justify-center text-purple-600">
                                <MessageSquare className="h-4 w-4" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="text-2xl font-bold">0</div>
                            <p className="text-xs text-muted-foreground mt-1">0 total prompts</p>
                        </div>
                    </CardContent>
                </Card>

                {/* Total Responses */}
                <Card className="shadow-sm">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between space-y-0 pb-2">
                            <span className="text-sm font-medium text-muted-foreground">Total Responses</span>
                            <div className="h-8 w-8 rounded-md bg-green-50 flex items-center justify-center text-green-600">
                                <FileText className="h-4 w-4" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="text-2xl font-bold">0</div>
                            <p className="text-xs text-muted-foreground mt-1">Total responses</p>
                        </div>
                    </CardContent>
                </Card>

                {/* Organic Brand Mentions */}
                <Card className="shadow-sm">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between space-y-0 pb-2">
                            <span className="text-sm font-medium text-muted-foreground leading-tight">Organic Brand <br /> Mentions</span>
                            <div className="h-8 w-8 rounded-md bg-orange-50 flex items-center justify-center text-orange-600">
                                <LinkIcon className="h-4 w-4" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="text-2xl font-bold">0</div>
                            <p className="text-xs text-muted-foreground mt-1">Total organic brand</p>
                            <p className="text-xs text-muted-foreground">mentions</p>
                        </div>
                    </CardContent>
                </Card>

                {/* Share of Voice */}
                <Card className="shadow-sm">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between space-y-0 pb-2">
                            <span className="text-sm font-medium text-muted-foreground">Share of Voice</span>
                            <div className="h-8 w-8 rounded-md bg-sky-50 flex items-center justify-center text-sky-600">
                                <BarChart2 className="h-4 w-4" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="text-2xl font-bold">0%</div>
                            <p className="text-xs text-muted-foreground mt-1">of responses mention your</p>
                            <p className="text-xs text-muted-foreground">brand</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Monitors Section */}
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold tracking-tight">Monitors</h2>
                    <Button className="gap-2 bg-blue-600 hover:bg-blue-700 text-white">
                        <Plus className="h-4 w-4" /> Add Monitor
                    </Button>
                </div>

                {/* Monitor List Card */}
                <Card className="shadow-sm border border-slate-200">
                    <CardContent className="p-0">
                        {/* Card Header Row */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between p-6 border-b border-slate-100">
                            <div className="flex items-center gap-4">
                                <h3 className="text-lg font-bold">vikash</h3>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 md:gap-8 text-sm text-slate-500 mt-4 md:mt-0">
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    <span>Jan 17, 2026</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    <span>Jan 17, 2026</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FileText className="h-4 w-4" />
                                    <span>0 Prompts</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MessageSquare className="h-4 w-4" />
                                    <span>0 Responses</span>
                                </div>

                                <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-0 px-3 py-1">Active</Badge>

                                <div className="flex items-center gap-2 ml-2">
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-600">
                                        <Pencil className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-red-600">
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">

                            {/* Visibility Score */}
                            <div className="p-6 space-y-4">
                                <span className="text-sm font-medium text-slate-500">Visibility Score</span>
                                <div>
                                    <div className="text-2xl font-bold">0%</div>
                                    <p className="text-xs text-muted-foreground mt-1">Based on 0 prompts</p>
                                </div>
                            </div>

                            {/* Models */}
                            <div className="p-6 space-y-4">
                                <span className="text-sm font-medium text-slate-500">Models</span>
                                <div className="flex items-center gap-2">
                                    <Bot className="h-4 w-4 text-slate-700" />
                                    <span className="text-sm font-medium">ChatGPT Search</span>
                                </div>
                            </div>

                            {/* Visibility */}
                            <div className="p-6 space-y-4 relative">
                                <span className="text-sm font-medium text-slate-500">Visibility</span>
                                <div className="text-2xl font-bold text-blue-600">0%</div>
                                <div className="absolute bottom-6 left-6 right-6 h-0.5 bg-blue-500 rounded-full" />
                            </div>

                            {/* Mentions */}
                            <div className="p-6 space-y-4 relative">
                                <span className="text-sm font-medium text-slate-500">Mentions</span>
                                <div className="text-2xl font-bold text-orange-500">0</div>
                                <div className="absolute bottom-6 left-6 right-6 h-0.5 bg-orange-500 rounded-full" />
                            </div>

                            {/* Responses */}
                            <div className="p-6 space-y-4 relative">
                                <span className="text-sm font-medium text-slate-500">Responses</span>
                                <div className="text-2xl font-bold text-green-500">0</div>
                                <div className="absolute bottom-6 left-6 right-6 h-0.5 bg-green-500 rounded-full" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Floating Chat Button (Bottom Right) */}
            <div className="fixed bottom-6 right-6">
                <Button size="icon" className="h-14 w-14 rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 text-white">
                    <MessageSquare className="h-6 w-6" />
                </Button>
            </div>
        </div>
    );
}
