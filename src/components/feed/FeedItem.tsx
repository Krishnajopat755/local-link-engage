
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { Calendar, MapPin, ThumbsUp, MessageCircle, Share2 } from "lucide-react";
import { useState } from "react";

interface FeedItemProps {
  item: {
    id: string;
    title: string;
    description: string;
    category: string;
    date: string;
    location: string;
    authorName: string;
    authorRole: string;
    authorAvatar: string;
    likesCount: number;
    commentsCount: number;
    image?: string;
  };
}

export function FeedItem({ item }: FeedItemProps) {
  const [liked, setLiked] = useState(false);
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "meeting":
        return "bg-blue-100 text-blue-800";
      case "legislation":
        return "bg-purple-100 text-purple-800";
      case "project":
        return "bg-orange-100 text-orange-800";
      case "safety":
        return "bg-red-100 text-red-800";
      case "permit":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <Card className="overflow-hidden animate-fade-in">
      <CardHeader className="p-4">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={item.authorAvatar} alt={item.authorName} />
            <AvatarFallback>{item.authorName[0]}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{item.authorName}</div>
            <div className="text-xs text-muted-foreground">{item.authorRole}</div>
          </div>
          <Badge
            variant="outline"
            className={`ml-auto ${getCategoryColor(item.category)}`}
          >
            {item.category}
          </Badge>
        </div>
      </CardHeader>
      
      {item.image && (
        <div className="relative aspect-video w-full overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="object-cover w-full h-full"
          />
        </div>
      )}
      
      <CardContent className="p-4">
        <CardTitle className="mb-2">{item.title}</CardTitle>
        <CardDescription className="mb-4">{item.description}</CardDescription>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="mr-1 h-4 w-4" />
            <span>{item.date}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="mr-1 h-4 w-4" />
            <span>{item.location}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between border-t mt-4">
        <div className="flex gap-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`flex gap-2 ${liked ? 'text-primary' : ''}`}
            onClick={handleLike}
          >
            <ThumbsUp className="h-4 w-4" />
            <span>{liked ? item.likesCount + 1 : item.likesCount}</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex gap-2">
            <MessageCircle className="h-4 w-4" />
            <span>{item.commentsCount}</span>
          </Button>
        </div>
        <Button variant="ghost" size="sm" className="flex gap-2">
          <Share2 className="h-4 w-4" />
          <span>Share</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
