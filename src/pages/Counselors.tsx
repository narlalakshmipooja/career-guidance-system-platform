import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Counselors() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight">Meet Our Counselors</h1>
        <p className="text-muted-foreground text-lg">Connect with experts who can guide you through your career decisions.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={`https://picsum.photos/seed/counselor${i}/100/100`} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <CardTitle>Counselor Name {i}</CardTitle>
                <CardDescription>Senior Career Advisor</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">Expert in tech careers and resume building with 10+ years of experience.</p>
              <Button className="w-full">Book Session</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
