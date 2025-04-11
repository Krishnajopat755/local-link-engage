
import { Layout } from "@/components/layout/Layout";
import { FeedFilter } from "@/components/feed/FeedFilter";
import { FeedItem } from "@/components/feed/FeedItem";
import { LocationHeader } from "@/components/feed/LocationHeader";
import { useState } from "react";

const Feed = () => {
  // Mock data for feed items
  const initialFeedItems = [
    {
      id: "1",
      title: "New Park Project Approval",
      description: "The city council has approved the development of a new community park at Oak Street. Construction is scheduled to begin next month and will include playgrounds, walking paths, and a community garden.",
      category: "project",
      date: "Mar 15, 2025",
      location: "Oak Street & 5th Ave",
      authorName: "Parks Department",
      authorRole: "Official",
      authorAvatar: "",
      likesCount: 24,
      commentsCount: 8,
      image: "https://images.unsplash.com/photo-1580661669078-42hilMMERkc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    },
    {
      id: "2",
      title: "Downtown Traffic Study Results",
      description: "Results from the recent traffic study are now available. Findings indicate a 15% increase in congestion during peak hours. The transportation department is recommending several solutions including timing changes to traffic signals and new bike lanes.",
      category: "project",
      date: "Mar 12, 2025",
      location: "Downtown",
      authorName: "Transportation Dept",
      authorRole: "Official",
      authorAvatar: "",
      likesCount: 11,
      commentsCount: 15,
    },
    {
      id: "3",
      title: "Public Budget Hearing",
      description: "The city council will hold a public hearing on the proposed 2026 budget on April 5th at 7 PM in the City Hall chambers. All residents are encouraged to attend and provide feedback on proposed allocations.",
      category: "meeting",
      date: "Apr 5, 2025",
      location: "City Hall",
      authorName: "City Council",
      authorRole: "Official",
      authorAvatar: "",
      likesCount: 8,
      commentsCount: 3,
    },
    {
      id: "4",
      title: "Zoning Change Proposal",
      description: "A proposal has been submitted to change zoning in the River District from residential to mixed-use. This would allow for retail and office space on ground floors while maintaining residential units above. A community meeting will be held on March 25th.",
      category: "legislation",
      date: "Mar 25, 2025",
      location: "River District",
      authorName: "Planning Commission",
      authorRole: "Official",
      authorAvatar: "",
      likesCount: 32,
      commentsCount: 21,
      image: "https://images.unsplash.com/photo-1577760258779-e8c1f8eba4d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: "5",
      title: "Community Safety Alert",
      description: "There have been reports of car break-ins near Central Park over the past week. Police have increased patrols in the area. Residents are advised to lock vehicles and not leave valuables visible.",
      category: "safety",
      date: "Mar 10, 2025",
      location: "Central Park Area",
      authorName: "Police Department",
      authorRole: "Official",
      authorAvatar: "",
      likesCount: 45,
      commentsCount: 12,
    },
  ];

  const [feedItems, setFeedItems] = useState(initialFeedItems);
  
  const handleFilterChange = (filters: {
    radius: number;
    categories: string[];
    searchTerm: string;
  }) => {
    console.log("Filters applied:", filters);
    // In a real app, we would filter the feed items based on the filters
    // For now, we'll just log the filters
  };

  return (
    <Layout>
      <LocationHeader />
      <FeedFilter onFilterChange={handleFilterChange} />
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-6">
          {feedItems.map((item) => (
            <FeedItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Feed;
