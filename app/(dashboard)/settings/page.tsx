import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsPage() {
    return (
        <div className="space-y-6 max-w-4xl">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
                <p className="text-muted-foreground">Manage your account settings and preferences.</p>
            </div>
            <Separator />

            <Card>
                <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>Update your personal details.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label>First Name</Label>
                            <Input defaultValue="Rahul" />
                        </div>
                        <div className="space-y-2">
                            <Label>Last Name</Label>
                            <Input defaultValue="User" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label>Email</Label>
                        <Input defaultValue="rahul@example.com" readOnly className="bg-muted" />
                    </div>
                </CardContent>
                <div className="p-6 pt-0 flex justify-end">
                    <Button>Save Changes</Button>
                </div>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                    <CardDescription>Configure how you receive alerts.</CardDescription>
                </CardHeader>
                <CardContent>
                    {/* Toggles would go here */}
                    <p className="text-sm text-muted-foreground">Email notifications are enabled for monitor alerts.</p>
                </CardContent>
            </Card>
        </div>
    );
}
