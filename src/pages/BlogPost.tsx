
import { useParams, Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BlogPost = () => {
  const { slug } = useParams();

  // Sample blog posts data - in a real app this would come from an API or CMS
  const blogPosts = {
    "future-mobile-development": {
      title: "The Future of Mobile App Development",
      content: `
        <p>The mobile app development landscape is evolving at an unprecedented pace. As we look ahead to 2024 and beyond, several key trends are shaping how developers approach mobile applications.</p>
        
        <h2>Cross-Platform Development</h2>
        <p>Cross-platform frameworks like React Native, Flutter, and Progressive Web Apps (PWAs) continue to gain traction. These technologies allow developers to write code once and deploy across multiple platforms, significantly reducing development time and costs.</p>
        
        <h2>AI Integration</h2>
        <p>Artificial Intelligence is becoming increasingly integrated into mobile applications. From chatbots to personalized recommendations, AI is enhancing user experiences and providing valuable insights.</p>
        
        <h2>5G and Enhanced Performance</h2>
        <p>The widespread adoption of 5G networks is opening new possibilities for mobile applications. Faster speeds and lower latency enable more complex applications and real-time features.</p>
        
        <h2>Security First Approach</h2>
        <p>With increasing concerns about data privacy, security is becoming a primary consideration in mobile app development. Developers are implementing security measures from the ground up.</p>
      `,
      excerpt: "Exploring the latest trends and technologies shaping the mobile app landscape in 2024.",
      date: "March 15, 2024",
      author: "Sarah Johnson",
      category: "Technology",
      readTime: "5 min read",
      image: "/placeholder.svg"
    },
    "building-secure-apps": {
      title: "Building Secure Mobile Applications",
      content: `
        <p>Security in mobile applications is not just an afterthought—it's a fundamental requirement. With cyber threats becoming more sophisticated, developers must implement robust security measures from the start.</p>
        
        <h2>Data Encryption</h2>
        <p>All sensitive data should be encrypted both in transit and at rest. Use industry-standard encryption algorithms and ensure proper key management.</p>
        
        <h2>Authentication and Authorization</h2>
        <p>Implement strong authentication mechanisms including multi-factor authentication where appropriate. Ensure proper session management and token handling.</p>
        
        <h2>Code Obfuscation</h2>
        <p>Protect your application code from reverse engineering by implementing code obfuscation techniques. This makes it harder for attackers to understand your app's logic.</p>
        
        <h2>Regular Security Audits</h2>
        <p>Conduct regular security assessments and penetration testing to identify and address vulnerabilities before they can be exploited.</p>
      `,
      excerpt: "Best practices for implementing security measures in modern mobile applications.",
      date: "March 10, 2024",
      author: "Mike Chen",
      category: "Security",
      readTime: "7 min read",
      image: "/placeholder.svg"
    },
    "ux-design-principles": {
      title: "User Experience Design Principles",
      content: `
        <p>Creating exceptional user experiences in mobile applications requires understanding both user psychology and design principles. Here's how to create apps that users love.</p>
        
        <h2>Simplicity is Key</h2>
        <p>Keep interfaces clean and intuitive. Users should be able to accomplish their goals with minimal friction and confusion.</p>
        
        <h2>Consistency Across Platforms</h2>
        <p>Maintain consistent design patterns and interactions throughout your application. This helps users build mental models of how your app works.</p>
        
        <h2>Performance Matters</h2>
        <p>Fast loading times and smooth animations are crucial for good user experience. Optimize your app's performance from the beginning.</p>
        
        <h2>Accessibility First</h2>
        <p>Design your app to be accessible to users with disabilities. This not only expands your user base but often results in better design for everyone.</p>
      `,
      excerpt: "How to create intuitive and engaging user experiences for mobile applications.",
      date: "March 5, 2024",
      author: "Emily Rodriguez",
      category: "Design",
      readTime: "6 min read",
      image: "/placeholder.svg"
    },
    "performance-optimization": {
      title: "Performance Optimization Tips",
      content: `
        <p>App performance directly impacts user satisfaction and retention. Here are proven strategies to optimize your mobile application's performance.</p>
        
        <h2>Image Optimization</h2>
        <p>Compress images and use appropriate formats. Consider using WebP for better compression ratios and faster loading times.</p>
        
        <h2>Lazy Loading</h2>
        <p>Implement lazy loading for content that's not immediately visible. This reduces initial loading times and improves perceived performance.</p>
        
        <h2>Caching Strategies</h2>
        <p>Implement effective caching strategies for both data and assets. This reduces network requests and improves offline functionality.</p>
        
        <h2>Code Splitting</h2>
        <p>Split your code into smaller chunks that can be loaded on demand. This reduces the initial bundle size and improves startup times.</p>
      `,
      excerpt: "Proven strategies to improve your mobile app's performance and user satisfaction.",
      date: "February 28, 2024",
      author: "David Park",
      category: "Performance",
      readTime: "8 min read",
      image: "/placeholder.svg"
    }
  };

  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" asChild className="mb-8">
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
            
            <div className="mb-6">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 object-cover rounded-lg mb-8"
                />
                
                <div className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                {/* Share Section */}
                <div className="mt-12 pt-8 border-t">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Share this article</h3>
                    <Button variant="outline">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-8">
                  {/* Author Info */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4">About the Author</h3>
                      <div className="space-y-3">
                        <div className="w-16 h-16 bg-muted rounded-full"></div>
                        <div>
                          <div className="font-medium">{post.author}</div>
                          <div className="text-sm text-muted-foreground">Senior Developer</div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Expert in mobile development with over 8 years of experience building scalable applications.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Related Posts */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4">Related Posts</h3>
                      <div className="space-y-4">
                        {Object.entries(blogPosts)
                          .filter(([key]) => key !== slug)
                          .slice(0, 3)
                          .map(([key, relatedPost]) => (
                            <Link 
                              key={key} 
                              to={`/blog/${key}`}
                              className="block group"
                            >
                              <h4 className="text-sm font-medium group-hover:text-primary transition-colors">
                                {relatedPost.title}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-1">
                                {relatedPost.date}
                              </p>
                            </Link>
                          ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;
