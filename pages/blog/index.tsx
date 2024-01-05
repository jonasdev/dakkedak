import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/config/blogPosts";
import Head from "next/head";
import React from "react";

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>
          Blog - Opslag om alting baby og det at være forældre - Babyhaj
        </title>
        <meta
          name="description"
          content={`Brug for lidt inspiration eller guidning? Læs vores blogopslag om alting baby.`}
        />
      </Head>
      <section className="w-full flex flex-col lg:w-10/12 pt-10 min-h-[70vh] pb-12">
        <h1 className="text-3xl lg:text-6xl font-semibold text-center mb-8">
          Blog
        </h1>

        <div className="flex flex-col items-center w-full p-6">
          <div className="w-5/6 grid sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 grid-cols-1 gap-8">
            {blogPosts.map((blog) => (
              <BlogCard key={blog.title.trim().toLowerCase()} blogPost={blog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
