
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckIcon, Filter, Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

interface LegislationFilterProps {
  onFilterChange: (filters: {
    status: string[];
    categories: string[];
    searchTerm: string;
  }) => void;
}

export function LegislationFilter({ onFilterChange }: LegislationFilterProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [statuses, setStatuses] = useState<string[]>(["proposed", "in-review", "passed"]);
  const [categories, setCategories] = useState<string[]>(["all"]);
  
  const allStatuses = [
    { id: "proposed", label: "Proposed" },
    { id: "in-review", label: "In Review" },
    { id: "passed", label: "Passed" },
    { id: "rejected", label: "Rejected" },
  ];
  
  const allCategories = [
    { id: "all", label: "All Categories" },
    { id: "housing", label: "Housing" },
    { id: "transportation", label: "Transportation" },
    { id: "environment", label: "Environment" },
    { id: "education", label: "Education" },
    { id: "public-safety", label: "Public Safety" },
  ];

  const handleStatusToggle = (status: string) => {
    setStatuses((prev) => {
      const newStatuses = prev.includes(status)
        ? prev.filter((c) => c !== status)
        : [...prev, status];
      
      onFilterChange({
        status: newStatuses,
        categories,
        searchTerm,
      });
      
      return newStatuses;
    });
  };

  const handleCategoryToggle = (category: string) => {
    setCategories((prev) => {
      let newCategories;
      
      if (category === "all") {
        newCategories = prev.includes("all") ? [] : ["all"];
      } else {
        // If "all" is selected and we select a specific category, remove "all"
        if (prev.includes("all")) {
          newCategories = [category];
        } else {
          newCategories = prev.includes(category)
            ? prev.filter((c) => c !== category)
            : [...prev, category];
        }
      }
      
      onFilterChange({
        status: statuses,
        categories: newCategories,
        searchTerm,
      });
      
      return newCategories;
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onFilterChange({
      status: statuses,
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
              placeholder="Search legislation..."
              className="pl-8"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span>Status</span>
                </div>
                <CheckIcon className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="center">
              <DropdownMenuLabel>Filter by status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {allStatuses.map((status) => (
                <DropdownMenuCheckboxItem
                  key={status.id}
                  checked={statuses.includes(status.id)}
                  onCheckedChange={() => handleStatusToggle(status.id)}
                >
                  {status.label}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span>Category</span>
                </div>
                <CheckIcon className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel>Filter by category</DropdownMenuLabel>
              <DropdownMenuSeparator />
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
