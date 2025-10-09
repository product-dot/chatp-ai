import Header from '@/components/Header';
import BlogPost from '@/components/BlogPost';
import Footer from '@/components/Footer';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <main className="min-h-screen page-transition">
      <Header />
      <BlogPost slug={params.slug} />
      <Footer />
    </main>
  );
}


