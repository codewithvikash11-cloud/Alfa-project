import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function BrandIdentityPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Brand Identity</h1>
                <Button variant="outline">Import from URL</Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Core Identity</CardTitle>
                        <CardDescription>Define your brand's voice and basic info.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label>Brand Name</Label>
                            <Input placeholder="Acme Inc." />
                        </div>
                        <div className="space-y-2">
                            <Label>Brand Voice / Tone</Label>
                            <Input placeholder="Professional, Friendly, Authoritative" />
                        </div>
                        <div className="space-y-2">
                            <Label>Mission Statement</Label>
                            <Textarea placeholder="We help companies..." />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Visual Assets</CardTitle>
                        <CardDescription>Upload logos and define colors.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-10 border-2 border-dashed rounded-lg flex items-center justify-center text-muted-foreground">
                            Logo Upload Placeholder
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Primary Color</Label>
                                <div className="flex items-center gap-2">
                                    <div className="h-10 w-10 rounded bg-blue-600 border" />
                                    <Input value="#2563EB" readOnly className="font-mono" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label>Secondary Color</Label>
                                <div className="flex items-center gap-2">
                                    <div className="h-10 w-10 rounded bg-slate-900 border" />
                                    <Input value="#0F172A" readOnly className="font-mono" />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
