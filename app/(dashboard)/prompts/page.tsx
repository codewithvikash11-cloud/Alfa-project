import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Copy } from "lucide-react";

export default function PromptsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Prompt Library</h1>
                <Button>Create Prompt</Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card key={i} className="hover:shadow-md transition-shadow cursor-pointer">
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <Badge variant="outline">Blog Post</Badge>
                                <Button variant="ghost" size="icon" className="h-6 w-6"><Copy className="h-4 w-4" /></Button>
                            </div>
                            <CardTitle className="mt-2 text-lg">SEO Article Generator v{i}</CardTitle>
                            <CardDescription className="line-clamp-2">
                                Generate comprehensive SEO articles with proper h-tags, meta descriptions, and keyword density...
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MessageSquare className="h-4 w-4" /> 1.{i}k uses
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
