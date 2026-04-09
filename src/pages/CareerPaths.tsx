import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Compass } from "lucide-react";

export default function CareerPaths() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight">Explore Career Paths</h1>
        <p className="text-muted-foreground text-lg">Discover your passion among hundreds of professional opportunities.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i} className="overflow-hidden">
            <div className="aspect-video bg-muted relative">
              <img src={`https://picsum.photos/seed/career${i}/400/225`} alt="Career" className="object-cover w-full h-full" referrerPolicy="no-referrer" />
            </div>
            <CardHeader>
              <CardTitle>Career Path {i}</CardTitle>
              <CardDescription>A brief description of the career path and its impact.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Compass className="h-4 w-4" />
                <span>95% Match</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
