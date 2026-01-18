import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function CompetitorsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Competitor Intelligence</h1>
                <Button>Add Competitor</Button>
            </div>

            <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input className="pl-9 max-w-sm" placeholder="Search competitors..." />
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {[1, 2, 3].map((i) => (
                    <Card key={i}>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg">Competitor {i}</CardTitle>
                            <CardDescription>competitor{i}.com</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Domain Authority</span>
                                    <span className="font-bold">4{i}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Est. Traffic</span>
                                    <span className="font-bold">{i}5k/mo</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Backlinks</span>
                                    <span className="font-bold">1.{i}k</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
