
import { Layout } from "@/components/layout/Layout";
import { PollCard } from "@/components/opinion/PollCard";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { useState } from "react";

const Opinion = () => {
  // Mock data for polls
  const initialPolls = [
    {
      id: "1",
      title: "Downtown Revitalization Project",
      description: "Which aspect of the downtown revitalization project should receive priority funding in the next fiscal year?",
      category: "Infrastructure",
      deadline: "Mar 30, 2025",
      totalVotes: 234,
      options: [
        {
          id: "1a",
          text: "Streetscape improvements (lighting, benches, landscaping)",
          votePercentage: 45,
          votes: 106,
        },
        {
          id: "1b",
          text: "Building facade restoration grants",
          votePercentage: 28,
          votes: 65,
        },
        {
          id: "1c",
          text: "Public plaza and event space",
          votePercentage: 27,
          votes: 63,
        },
      ],
    },
    {
      id: "2",
      title: "Community Center Programs",
      description: "What new programs would you like to see offered at the community center?",
      category: "Recreation",
      deadline: "Apr 5, 2025",
      totalVotes: 187,
      options: [
        {
          id: "2a",
          text: "Youth coding and technology classes",
          votePercentage: 38,
          votes: 71,
        },
        {
          id: "2b",
          text: "Senior fitness and wellness programs",
          votePercentage: 32,
          votes: 60,
        },
        {
          id: "2c",
          text: "Community art studio and workshops",
          votePercentage: 30,
          votes: 56,
        },
      ],
    },
    {
      id: "3",
      title: "Traffic Safety Improvements",
      description: "Which traffic safety improvement is most needed in our neighborhood?",
      category: "Transportation",
      deadline: "Mar 25, 2025",
      totalVotes: 312,
      options: [
        {
          id: "3a",
          text: "Speed bumps on residential streets",
          votePercentage: 22,
          votes: 69,
        },
        {
          id: "3b",
          text: "Additional crosswalks with pedestrian signals",
          votePercentage: 48,
          votes: 150,
        },
        {
          id: "3c",
          text: "Dedicated bike lanes",
          votePercentage: 30,
          votes: 93,
        },
      ],
    },
    {
      id: "4",
      title: "Park Improvements",
      description: "What new feature would you most like to see added to Central Park?",
      category: "Parks",
      deadline: "Apr 10, 2025",
      totalVotes: 275,
      options: [
        {
          id: "4a",
          text: "Water splash pad for children",
          votePercentage: 35,
          votes: 96,
        },
        {
          id: "4b",
          text: "Dog park area",
          votePercentage: 25,
          votes: 69,
        },
        {
          id: "4c",
          text: "Community garden plots",
          votePercentage: 20,
          votes: 55,
        },
        {
          id: "4d",
          text: "Outdoor fitness equipment",
          votePercentage: 20,
          votes: 55,
        },
      ],
    },
  ];

  // Mock data for discussions
  const discussions = [
    {
      id: "1",
      title: "Should we implement a city-wide composting program?",
      comments: 24,
      participants: 18,
      lastActivity: "2 hours ago",
    },
    {
      id: "2",
      title: "Ideas for reducing traffic congestion on Main Street",
      comments: 37,
      participants: 22,
      lastActivity: "5 hours ago",
    },
    {
      id: "3",
      title: "Pros and cons of the proposed school redistricting plan",
      comments: 56,
      participants: 31,
      lastActivity: "1 day ago",
    },
  ];

  const [activeTab, setActiveTab] = useState("polls");
  const [polls, setPolls] = useState(initialPolls);

  return (
    <Layout>
      <div className="w-full bg-civic-100 py-6">
        <div className="container">
          <h1 className="text-2xl font-bold mb-2">Community Opinion</h1>
          <p className="text-muted-foreground">
            Share your thoughts on local issues and see what your neighbors think
          </p>
        </div>
      </div>
      
      <div className="container py-8">
        <Tabs defaultValue="polls" onValueChange={setActiveTab} value={activeTab} className="w-full">
          <div className="flex justify-between items-center mb-6">
            <TabsList>
              <TabsTrigger value="polls">Polls</TabsTrigger>
              <TabsTrigger value="discussions">Discussions</TabsTrigger>
            </TabsList>
            <Button>Create New {activeTab === "polls" ? "Poll" : "Discussion"}</Button>
          </div>
          
          <TabsContent value="polls" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {polls.map((poll) => (
                <PollCard key={poll.id} poll={poll} />
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <Button variant="outline">Load More</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="discussions" className="mt-0">
            <div className="grid grid-cols-1 gap-4">
              {discussions.map((discussion) => (
                <div key={discussion.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">{discussion.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {discussion.comments} comments • {discussion.participants} participants • Last activity {discussion.lastActivity}
                    </p>
                  </div>
                  <Button variant="outline">Join</Button>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <Button variant="outline">Load More</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Opinion;
