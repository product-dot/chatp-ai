import Header from '@/components/Header';
import Blogs from '@/components/Blogs';
import Footer from '@/components/Footer';

export default function BlogsPage() {
  return (
    <main className="min-h-screen page-transition">
      <Header />
      <Blogs />
      <Footer />
    </main>
  );
}
