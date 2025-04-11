
import { Layout } from "@/components/layout/Layout";
import { LegislationFilter } from "@/components/legislation/LegislationFilter";
import { LegislationCard } from "@/components/legislation/LegislationCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Legislation = () => {
  // Mock data for legislation items
  const initialLegislationItems = [
    {
      id: "1",
      title: "Ordinance 2025-42: Affordable Housing Requirements",
      summary: "This ordinance would require new residential developments with more than 10 units to designate 15% of units as affordable housing. Developers would also have the option to pay into the city's housing fund instead of building affordable units. The ordinance aims to address the growing housing affordability crisis in our community.",
      status: "in-review" as const,
      category: "Housing",
      date: "Mar 15, 2025",
      readTime: "5 min",
    },
    {
      id: "2",
      title: "Resolution 2025-18: Climate Action Plan",
      summary: "This resolution would adopt a comprehensive climate action plan with the goal of reducing city-wide carbon emissions by 50% by 2035 and achieving carbon neutrality by 2050. The plan includes initiatives for renewable energy transition, building efficiency standards, transportation electrification, and urban forestry expansion.",
      status: "proposed" as const,
      category: "Environment",
      date: "Mar 10, 2025",
      readTime: "8 min",
    },
    {
      id: "3",
      title: "Ordinance 2025-37: Downtown Parking Reform",
      summary: "This ordinance would eliminate minimum parking requirements for new developments in the downtown district and establish maximum parking limits instead. It would also implement demand-based pricing for street parking and create a 'park once' district to encourage shared parking between businesses and residents.",
      status: "passed" as const,
      category: "Transportation",
      date: "Feb 28, 2025",
      readTime: "4 min",
    },
    {
      id: "4",
      title: "Ordinance 2025-29: Short-Term Rental Regulations",
      summary: "This ordinance would establish new regulations for short-term rentals (less than 30 days) in residential areas. It would require property owners to obtain a license, limit the number of days a property can be rented annually, establish occupancy limits, and create a complaint process for neighbors.",
      status: "rejected" as const,
      category: "Housing",
      date: "Feb 15, 2025",
      readTime: "6 min",
    },
    {
      id: "5",
      title: "Resolution 2025-12: Public School Funding",
      summary: "This resolution would increase the city's contribution to the school district by $5 million annually for the next five years. The funds would be earmarked for teacher salary increases, facility improvements, and expanded after-school programs in underserved neighborhoods.",
      status: "in-review" as const,
      category: "Education",
      date: "Feb 10, 2025",
      readTime: "7 min",
    },
  ];

  const [legislationItems, setLegislationItems] = useState(initialLegislationItems);
  
  const handleFilterChange = (filters: {
    status: string[];
    categories: string[];
    searchTerm: string;
  }) => {
    console.log("Filters applied:", filters);
    // In a real app, we would filter the legislation items based on the filters
    // For now, we'll just log the filters
  };

  return (
    <Layout>
      <div className="w-full bg-civic-100 py-6">
        <div className="container">
          <h1 className="text-2xl font-bold mb-2">Local Legislation</h1>
          <p className="text-muted-foreground">
            Stay informed about proposed and passed legislation in your community
          </p>
        </div>
      </div>
      
      <LegislationFilter onFilterChange={handleFilterChange} />
      
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {legislationItems.map((item) => (
            <LegislationCard key={item.id} legislation={item} />
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <Button variant="outline">Load More</Button>
        </div>
      </div>
    </Layout>
  );
};

export default Legislation;
