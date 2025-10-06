'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts, BlogPost } from '@/data/blogs';

interface BlogPostProps {
  slug: string;
}

export default function BlogPostComponent({ slug }: BlogPostProps) {
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            href="/blogs"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 py-16 sm:py-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
            <span className="text-white/80 text-sm">{post.readTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
            {post.title}
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-lg">
              {post.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="font-semibold text-white">{post.author}</p>
              <p className="text-white/80 text-sm">{post.publishedAt}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 sm:p-12"
        >
          {/* Excerpt */}
          <div className="text-xl text-gray-600 leading-relaxed mb-8 p-6 bg-gray-50 rounded-xl">
            {post.excerpt}
          </div>

          {/* Content */}
          <div 
            className="prose prose-xl max-w-none 
              prose-headings:text-gray-900 prose-headings:font-bold
              prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-h2:leading-tight prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-3
              prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-10 prose-h3:mb-5 prose-h3:leading-tight
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base sm:prose-p:text-lg
              prose-strong:text-gray-900 prose-strong:font-bold
              prose-em:text-gray-600 prose-em:italic
              prose-ul:list-disc prose-ul:pl-6 sm:prose-ul:pl-8 prose-ul:mb-8 prose-ul:space-y-2
              prose-ol:list-decimal prose-ol:pl-6 sm:prose-ol:pl-8 prose-ol:mb-8 prose-ol:space-y-2
              prose-li:text-gray-700 prose-li:leading-relaxed prose-li:text-base sm:prose-li:text-lg
              prose-blockquote:border-l-4 prose-blockquote:border-purple-500 prose-blockquote:pl-4 sm:prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600 prose-blockquote:my-8
              prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
              prose-pre:bg-gray-900 prose-pre:text-white prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:text-sm sm:prose-pre:text-base"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.author}</h3>
                <p className="text-gray-600">
                  Expert in AI-powered content creation and creator economy strategies.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedPost.thumbnail}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-md text-xs font-medium">
                        {relatedPost.category}
                      </span>
                      <span className="text-gray-500 text-sm">{relatedPost.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 sm:p-12 text-white"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Implement These Strategies?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Start your AI-powered content creation journey today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.chatpersona.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </a>
            <a
              href="https://chromewebstore.google.com/detail/ai-chat-tool-chatpersona/bgefplnmcbmcfjmggpjiadldmfiiecma?hl=en&authuser=0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
            >
              Get Extension
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
