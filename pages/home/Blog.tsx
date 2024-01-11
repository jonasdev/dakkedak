import BlogCard from "@/components/BlogCard";
import Button from "@/components/Button";
import BlogCarousel from "@/components/BlogCarousel";
import { blogPosts } from "@/config/blogPosts";
import React from "react";

export default function Blog() {
  return (
    <section className="flex flex-col items-center w-10/12 pb-10">
      <h2 className="text-4xl font-semibold mb-5">Blog</h2>
      <p className="font-medium mb-5">
        Brug for lidt inspiration eller guidning? Læs vores blogopslag om alting
        baby.
      </p>
      <div className="w-10/12 flex justify-center mb-5">
        <div className="w-full grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 hidden lg:grid">
          {blogPosts.map((blogPost) => (
            <BlogCard
              key={blogPost.title.trim().toLowerCase()}
              blogPost={blogPost}
            />
          ))}
        </div>
        <div className="w-full lg:hidden">
          <BlogCarousel blogPosts={blogPosts} />
        </div>
      </div>
      <Button href="/blog" text="Se alle opslag" className="mt-10" />
    </section>
  );
}
