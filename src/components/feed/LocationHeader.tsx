
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export function LocationHeader() {
  return (
    <div className="w-full bg-civic-100 py-6">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Downtown, Any Town</h2>
            </div>
            <p className="text-muted-foreground mt-1">Showing updates within your selected radius</p>
          </div>
          <Button variant="outline" className="flex gap-2">
            <MapPin className="h-4 w-4" />
            <span>Change Location</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
