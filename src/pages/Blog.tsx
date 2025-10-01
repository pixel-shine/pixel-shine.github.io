
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Mobile App Development",
      excerpt: "Exploring the latest trends and technologies shaping the mobile app landscape in 2024.",
      date: "March 15, 2024",
      author: "Sarah Johnson",
      category: "Technology",
      slug: "future-mobile-development"
    },
    {
      title: "Building Secure Mobile Applications",
      excerpt: "Best practices for implementing security measures in modern mobile applications.",
      date: "March 10, 2024",
      author: "Mike Chen",
      category: "Security",
      slug: "building-secure-apps"
    },
    {
      title: "User Experience Design Principles",
      excerpt: "How to create intuitive and engaging user experiences for mobile applications.",
      date: "March 5, 2024",
      author: "Emily Rodriguez",
      category: "Design",
      slug: "ux-design-principles"
    },
    {
      title: "Performance Optimization Tips",
      excerpt: "Proven strategies to improve your mobile app's performance and user satisfaction.",
      date: "February 28, 2024",
      author: "David Park",
      category: "Performance",
      slug: "performance-optimization"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Stay updated with the latest insights, tips, and news from our team of experts.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow group cursor-pointer">
              <CardHeader>
                <div className="mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm">{post.excerpt}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                </div>
                <a 
                  href={`/blog/${post.slug}`}
                  className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                >
                  Read More →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
