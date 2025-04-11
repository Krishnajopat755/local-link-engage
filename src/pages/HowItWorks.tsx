
import { Layout } from "@/components/layout/Layout";
import { 
  Card, 
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ClipboardCheck,
  MessageSquare,
  Vote,
  MapPin,
  Bell,
  UserCheck,
  FileText
} from "lucide-react";

const HowItWorks = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight">How LocalLink Works</h1>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            LocalLink connects citizens with their local government, making civic participation 
            straightforward and impactful. Here's how our platform transforms the way you engage 
            with your community.
          </p>
        </div>

        <div className="space-y-24">
          {/* Section 1: Getting Started */}
          <div>
            <h2 className="text-2xl font-semibold mb-8 text-center">Getting Started</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="flex flex-col">
                <CardContent className="pt-6 flex-grow">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <UserCheck className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">Create Your Account</CardTitle>
                  <CardDescription className="text-base">
                    Register with your address to verify your residency and customize your 
                    experience based on your location and interests.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link to="/register" className="w-full">
                    <Button variant="outline" className="w-full">Register Now</Button>
                  </Link>
                </CardFooter>
              </Card>
              
              <Card className="flex flex-col">
                <CardContent className="pt-6 flex-grow">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">Set Your Location</CardTitle>
                  <CardDescription className="text-base">
                    Specify your neighborhood and interests to receive updates about issues 
                    that matter most to you and your community.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link to="/feed" className="w-full">
                    <Button variant="outline" className="w-full">View Local Feed</Button>
                  </Link>
                </CardFooter>
              </Card>
              
              <Card className="flex flex-col">
                <CardContent className="pt-6 flex-grow">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Bell className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">Stay Informed</CardTitle>
                  <CardDescription className="text-base">
                    Receive notifications about local government meetings, proposed legislation, 
                    and community initiatives relevant to your area.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link to="/legislation" className="w-full">
                    <Button variant="outline" className="w-full">View Legislation</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* Section 2: Key Features */}
          <div>
            <h2 className="text-2xl font-semibold mb-8 text-center">Key Platform Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg mb-2">Legislative Summaries</CardTitle>
                  <CardDescription>
                    Complex policies simplified with plain language summaries and impact assessments
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg mb-2">Direct Communication</CardTitle>
                  <CardDescription>
                    Connect with elected officials and get responses to your concerns
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Vote className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg mb-2">Community Polling</CardTitle>
                  <CardDescription>
                    Share your opinion on local issues and see how others in your community feel
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <ClipboardCheck className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg mb-2">Issue Reporting</CardTitle>
                  <CardDescription>
                    Report local problems directly to the relevant government departments
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Section 3: Process Flow */}
          <div>
            <h2 className="text-2xl font-semibold mb-8 text-center">The Participation Process</h2>
            <div className="relative">
              {/* Connection line */}
              <div className="absolute left-1/2 top-10 bottom-10 -ml-[1px] border-l-2 border-dashed border-muted-foreground/30 hidden md:block"></div>
              
              <div className="space-y-12 relative">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right mb-6 md:mb-0 md:pr-8">
                    <h3 className="text-xl font-medium">Discover Issues</h3>
                    <p className="text-muted-foreground mt-2">
                      Browse through the neighborhood feed to find issues that affect your community.
                    </p>
                  </div>
                  <div className="relative md:pl-8">
                    <div className="h-10 w-10 rounded-full bg-primary absolute left-0 top-1/2 -mt-5 -ml-5 flex items-center justify-center z-10 hidden md:flex">
                      <span className="text-white font-medium">1</span>
                    </div>
                    <div className="border rounded-lg p-4 md:ml-6">
                      <p className="text-sm">
                        "I discovered a proposed development project near my neighborhood through LocalLink's feed."
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="order-last md:text-left mb-6 md:mb-0 md:pl-8">
                    <h3 className="text-xl font-medium">Research & Learn</h3>
                    <p className="text-muted-foreground mt-2">
                      Read simplified summaries of legislation and understand how policies affect you.
                    </p>
                  </div>
                  <div className="relative md:pr-8">
                    <div className="h-10 w-10 rounded-full bg-primary absolute right-0 top-1/2 -mt-5 -mr-5 flex items-center justify-center z-10 hidden md:flex">
                      <span className="text-white font-medium">2</span>
                    </div>
                    <div className="border rounded-lg p-4 md:mr-6">
                      <p className="text-sm">
                        "The plain language summary helped me understand the impact this project would have on traffic and local businesses."
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right mb-6 md:mb-0 md:pr-8">
                    <h3 className="text-xl font-medium">Share Your Voice</h3>
                    <p className="text-muted-foreground mt-2">
                      Participate in polls, discussions, and provide feedback on local issues.
                    </p>
                  </div>
                  <div className="relative md:pl-8">
                    <div className="h-10 w-10 rounded-full bg-primary absolute left-0 top-1/2 -mt-5 -ml-5 flex items-center justify-center z-10 hidden md:flex">
                      <span className="text-white font-medium">3</span>
                    </div>
                    <div className="border rounded-lg p-4 md:ml-6">
                      <p className="text-sm">
                        "I shared my concerns about pedestrian safety in the community discussion and participated in the poll."
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="order-last md:text-left mb-6 md:mb-0 md:pl-8">
                    <h3 className="text-xl font-medium">See Results</h3>
                    <p className="text-muted-foreground mt-2">
                      Track how your input influences decisions and community outcomes.
                    </p>
                  </div>
                  <div className="relative md:pr-8">
                    <div className="h-10 w-10 rounded-full bg-primary absolute right-0 top-1/2 -mt-5 -mr-5 flex items-center justify-center z-10 hidden md:flex">
                      <span className="text-white font-medium">4</span>
                    </div>
                    <div className="border rounded-lg p-4 md:mr-6">
                      <p className="text-sm">
                        "The developer revised their plans to include a pedestrian crossing and more green space based on community feedback."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-primary/5 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to Make a Difference?</h2>
            <p className="max-w-2xl mx-auto mb-6">
              Your voice matters in shaping your community. Join thousands of engaged citizens 
              using LocalLink to create positive change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg">Create an Account</Button>
              </Link>
              <Link to="/report-problem">
                <Button variant="outline" size="lg">Report an Issue</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HowItWorks;
