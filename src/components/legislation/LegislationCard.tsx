
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, FileText, ThumbsUp, MessageCircle, Share2, Clock } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

interface LegislationCardProps {
  legislation: {
    id: string;
    title: string;
    summary: string;
    status: "proposed" | "in-review" | "passed" | "rejected";
    category: string;
    date: string;
    readTime: string;
  };
}

export function LegislationCard({ legislation }: LegislationCardProps) {
  const [expanded, setExpanded] = useState(false);
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "proposed":
        return "bg-amber-100 text-amber-800";
      case "in-review":
        return "bg-blue-100 text-blue-800";
      case "passed":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  
  const getStatusProgress = (status: string) => {
    switch (status) {
      case "proposed":
        return 25;
      case "in-review":
        return 50;
      case "passed":
        return 100;
      case "rejected":
        return 100;
      default:
        return 0;
    }
  };

  return (
    <Card className="overflow-hidden animate-fade-in">
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start">
          <Badge
            variant="outline"
            className={`${getStatusColor(legislation.status)}`}
          >
            {legislation.status.replace("-", " ")}
          </Badge>
          <Badge variant="outline">
            {legislation.category}
          </Badge>
        </div>
        
        <div className="mt-2">
          <CardTitle className="mb-2">{legislation.title}</CardTitle>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              <span>{legislation.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              <span>{legislation.readTime} read</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <CardDescription className={`${expanded ? '' : 'line-clamp-3'}`}>
          {legislation.summary}
        </CardDescription>
        
        <Button 
          variant="link" 
          onClick={() => setExpanded(!expanded)} 
          className="p-0 h-auto mt-2"
        >
          {expanded ? "Show less" : "Read more"}
        </Button>
        
        <div className="mt-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{getStatusProgress(legislation.status)}%</span>
                  </div>
                  <Progress value={getStatusProgress(legislation.status)} className="h-2" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Current status: {legislation.status.replace("-", " ")}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-2 flex justify-between border-t mt-2">
        <div className="flex gap-4">
          <Button variant="ghost" size="sm" className="flex gap-2">
            <ThumbsUp className="h-4 w-4" />
            <span>Support</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex gap-2">
            <MessageCircle className="h-4 w-4" />
            <span>Comment</span>
          </Button>
        </div>
        <Button variant="ghost" size="sm" className="flex gap-2">
          <FileText className="h-4 w-4" />
          <span>Full Document</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
