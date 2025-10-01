
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, Calendar, Award } from "lucide-react";

const Community = () => {
  const communityStats = [
    { icon: Users, label: "Active Members", value: "25,000+" },
    { icon: MessageSquare, label: "Discussions", value: "15,000+" },
    { icon: Calendar, label: "Events per Month", value: "20+" },
    { icon: Award, label: "Expert Contributors", value: "500+" }
  ];

  const forumCategories = [
    {
      title: "General Discussion",
      description: "General topics and community conversations",
      posts: 1250,
      members: 5600
    },
    {
      title: "Feature Requests",
      description: "Suggest new features and improvements",
      posts: 890,
      members: 3200
    },
    {
      title: "Technical Support",
      description: "Get help with technical issues",
      posts: 2100,
      members: 7800
    },
    {
      title: "Best Practices",
      description: "Share tips, tricks, and best practices",
      posts: 760,
      members: 2900
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Community</h1>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Join thousands of developers, designers, and professionals sharing knowledge and building together.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Forum Categories</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {forumCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-muted-foreground mb-4">
                    <span>{category.posts} posts</span>
                    <span>{category.members} members</span>
                  </div>
                  <Button variant="outline" className="w-full">View Category</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center bg-muted/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Connect with like-minded professionals, share your expertise, and learn from the community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Join Community</Button>
            <Button variant="outline" size="lg">Browse as Guest</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Community;
