import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PenTool, Plus } from "lucide-react";

export default function ArticleWriterPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Article Writer</h1>
                <Button className="gap-2">
                    <Plus className="h-4 w-4" /> New Article
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Empty State / Placeholder */}
                <Card className="col-span-full border-dashed">
                    <CardHeader className="text-center">
                        <div className="mx-auto bg-muted h-12 w-12 rounded-full flex items-center justify-center mb-4">
                            <PenTool className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <CardTitle>No articles yet</CardTitle>
                        <CardDescription>
                            Start writing your first SEO-optimized article using our AI agents.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center pb-6">
                        <Button variant="outline">Create Initial Draft</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
