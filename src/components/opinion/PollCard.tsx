
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart2, MessageCircle, Share2, Users } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface PollOption {
  id: string;
  text: string;
  votePercentage: number;
  votes: number;
}

interface PollCardProps {
  poll: {
    id: string;
    title: string;
    description: string;
    category: string;
    deadline: string;
    totalVotes: number;
    options: PollOption[];
  };
}

export function PollCard({ poll }: PollCardProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  
  const handleVote = () => {
    if (selectedOption) {
      setHasVoted(true);
    }
  };

  return (
    <Card className="overflow-hidden animate-fade-in">
      <CardHeader className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="bg-civic-100 text-civic-900">
            {poll.category}
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="h-4 w-4 mr-1" />
            <span>{poll.totalVotes} votes</span>
          </div>
        </div>
        <CardTitle>{poll.title}</CardTitle>
        <CardDescription className="mt-1">{poll.description}</CardDescription>
        <div className="text-sm text-muted-foreground mt-2">
          Open until: {poll.deadline}
        </div>
      </CardHeader>
      
      <CardContent className="p-4 pt-0">
        {hasVoted ? (
          <div className="space-y-4">
            {poll.options.map((option) => (
              <div key={option.id} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{option.text}</span>
                  <span>{option.votePercentage}%</span>
                </div>
                <Progress 
                  value={option.votePercentage} 
                  className="h-2"
                  indicator={option.id === selectedOption ? "bg-primary" : "bg-muted-foreground"} 
                />
                <div className="text-xs text-muted-foreground text-right">
                  {option.votes} votes
                </div>
              </div>
            ))}
            <div className="flex justify-center mt-2">
              <Badge variant="outline" className="bg-muted text-muted-foreground">
                You have voted
              </Badge>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <RadioGroup onValueChange={setSelectedOption} value={selectedOption || ""}>
              {poll.options.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.id} id={option.id} />
                  <Label htmlFor={option.id} className="flex-grow cursor-pointer">
                    {option.text}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            <Button 
              onClick={handleVote} 
              disabled={!selectedOption}
              className="w-full"
            >
              Submit Vote
            </Button>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="p-4 pt-2 flex justify-between border-t mt-2">
        <Button variant="ghost" size="sm" className="flex gap-2">
          <BarChart2 className="h-4 w-4" />
          <span>Demographics</span>
        </Button>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" className="flex gap-2">
            <MessageCircle className="h-4 w-4" />
            <span>Discuss</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex gap-2">
            <Share2 className="h-4 w-4" />
            <span>Share</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
