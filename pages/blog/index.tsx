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
        <div className="flex justify-center w-full">
          <div className="flex text-start flex-col w-11/12 md:w-5/6 xl:w-1/2 space-y-4 mb-8">
            <p>
              Lad dig inspirere eller læs om erfaringer i en af de mulige
              blogopslag nedenfor. Opslagene handler om alting baby. Ved forslag
              til fremtidige blogopslag, så skrive endelig til os ved at bruge
              Kontakt funtionen, nederst på siden.
            </p>
            <p>
              Vi håber at du vil finde noget af læsestoffet nyttigt, og at det
              om muligt kan hjælpe dig med at blive klar på projekt baby!
            </p>
          </div>
        </div>

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
