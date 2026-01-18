import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, CheckCircle2, AlertCircle } from "lucide-react";

export default function MonitorsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Active Monitors</h1>
                <Button>New Monitor</Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>SEO Keyword Tracking</CardTitle>
                    <CardDescription>Real-time ranking positions for your target keywords.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {/* Mock Table Row 1 */}
                        <div className="flex items-center justify-between p-4 border rounded-lg bg-card hover:bg-accent/50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                                    <Activity className="h-5 w-5 text-green-600" />
                                </div>
                                <div>
                                    <p className="font-medium">AI Agent Platform</p>
                                    <p className="text-sm text-muted-foreground">google.com • Mobile</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="text-center">
                                    <p className="text-xs text-muted-foreground uppercase">Rank</p>
                                    <p className="font-bold text-xl">#3</p>
                                </div>
                                <div className="text-center hidden md:block">
                                    <p className="text-xs text-muted-foreground uppercase">Volume</p>
                                    <p className="font-medium">12k</p>
                                </div>
                                <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
                            </div>
                        </div>

                        {/* Mock Table Row 2 */}
                        <div className="flex items-center justify-between p-4 border rounded-lg bg-card hover:bg-accent/50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                                    <AlertCircle className="h-5 w-5 text-yellow-600" />
                                </div>
                                <div>
                                    <p className="font-medium">SEO Automation Tools</p>
                                    <p className="text-sm text-muted-foreground">google.com • Desktop</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="text-center">
                                    <p className="text-xs text-muted-foreground uppercase">Rank</p>
                                    <p className="font-bold text-xl">#12</p>
                                </div>
                                <div className="text-center hidden md:block">
                                    <p className="text-xs text-muted-foreground uppercase">Vol</p>
                                    <p className="font-medium">5.4k</p>
                                </div>
                                <Badge variant="secondary">Check Pending</Badge>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
