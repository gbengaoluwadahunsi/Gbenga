"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  summary: string;
  date: string;
  slug: string; // This can be an external URL for the new post
  imageUrl: string;
  isExternalLink?: boolean; // Optional: to denote if the slug is an external link
}

const blogPostsData: BlogPost[] = [
  {
    id: "clemachem-intro",
    title: "Introducing ClemaChem: AI Chemistry Tutor",
    summary: "Introducing ClemaChem, an AI-powered, offline-first Chemistry tutor for Nigerian students, packed with practice questions and teacher tools to revolutionize learning.",
    date: "2025-04-13",
    slug: "https://www.linkedin.com/posts/gbengaoluwadahunsi_clemachem-chemistryeducation-edtechnigeria-activity-7315949798669307904-c-4y?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADVGNJEBFqZA6a5rZG3h7fXi2q0q7sGYT2w",
    imageUrl: "/tech-room.jpeg",
    isExternalLink: true,
  },
  {
    id: "novate-ai-healthtech",
    title: "Co-founding Novate AI to Revolutionize HealthTech",
    summary: "Excited to announce the co-founding of Novate AI with Dr. Afif! We are now on a mission to revolutionize the HealthTech space with innovative AI solutions.",
    date: "2025-05-31",
    slug: "https://www.linkedin.com/company/107280268/admin/dashboard/",
    imageUrl: "/novate-ai.png",
    isExternalLink: true,
  },
];

const POSTS_PER_PAGE = 3; // Updated to 3 as per user request

const BlogSection = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(blogPostsData.length / POSTS_PER_PAGE);
  const startIndex = currentPage * POSTS_PER_PAGE;
  // Reverse the order to show latest posts first
  const reversedPosts = [...blogPostsData].reverse();
  const selectedPosts = reversedPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl tracking-tight font-bold text-center mb-12 text-foreground"
        >
          What I'm Up To
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"> {/* Updated lg:grid-cols-3 */}
          {selectedPosts.map((post: BlogPost, index: number) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl transition-all duration-300 overflow-hidden flex flex-col border shadow-sm hover:shadow-lg"
            >
              <div className="relative w-full h-48 group">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-foreground">{post.title}</h3>
                <p className="text-muted-foreground font-semibold mb-3 text-sm">
                  {new Date(post.date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <p className="text-muted-foreground mb-4 text-base flex-grow leading-relaxed">
                  {post.summary}
                </p>
                {post.isExternalLink ? (
                  <a
                    href={post.slug}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-primary font-semibold hover:underline underline-offset-4 self-start"
                  >
                    Read More &rarr;
                  </a>
                ) : (
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-auto text-primary font-semibold hover:underline underline-offset-4 self-start"
                  >
                    Read More &rarr;
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              aria-label="Previous page"
              className="border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Page {currentPage + 1} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
              aria-label="Next page"
              className="border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-50"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
