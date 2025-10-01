
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

interface BlogPostProps {
  title: string;
  content: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  excerpt: string;
}

const BlogPost = ({ title, content, date, author, category, readTime, excerpt }: BlogPostProps) => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Button asChild variant="ghost" className="mb-8">
          <Link to="/blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </Button>

        <article>
          <header className="mb-8">
            <div className="mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                {category}
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{excerpt}</p>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {date}
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {author}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {readTime}
              </div>
            </div>
          </header>

          <Card>
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
            </CardContent>
          </Card>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
