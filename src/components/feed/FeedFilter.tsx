
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { CheckIcon, MapPin, Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

interface FeedFilterProps {
  onFilterChange: (filters: {
    radius: number;
    categories: string[];
    searchTerm: string;
  }) => void;
}

export function FeedFilter({ onFilterChange }: FeedFilterProps) {
  const [radius, setRadius] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [categories, setCategories] = useState<string[]>(["meetings", "legislation", "projects"]);
  
  const allCategories = [
    { id: "meetings", label: "Public Meetings" },
    { id: "legislation", label: "Legislation" },
    { id: "projects", label: "Infrastructure Projects" },
    { id: "safety", label: "Public Safety" },
    { id: "permits", label: "Permit Applications" },
  ];

  const handleCategoryToggle = (category: string) => {
    setCategories((prev) => {
      const newCategories = prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category];
      
      onFilterChange({
        radius,
        categories: newCategories,
        searchTerm,
      });
      
      return newCategories;
    });
  };

  const handleRadiusChange = (value: number[]) => {
    const newRadius = value[0];
    setRadius(newRadius);
    onFilterChange({
      radius: newRadius,
      categories,
      searchTerm,
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onFilterChange({
      radius,
      categories,
      searchTerm: e.target.value,
    });
  };

  return (
    <div className="sticky top-16 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full py-4 border-b">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search updates..."
              className="pl-8"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <div className="flex-1">
              <p className="text-sm font-medium mb-1">Distance: {radius} mile{radius !== 1 ? "s" : ""}</p>
              <Slider
                value={[radius]}
                min={0.5}
                max={5}
                step={0.5}
                onValueChange={handleRadiusChange}
              />
            </div>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                <span>Filter by category</span>
                <CheckIcon className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              {allCategories.map((category) => (
                <DropdownMenuCheckboxItem
                  key={category.id}
                  checked={categories.includes(category.id)}
                  onCheckedChange={() => handleCategoryToggle(category.id)}
                >
                  {category.label}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
