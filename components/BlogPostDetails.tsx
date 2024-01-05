import { BlogPost } from "@/types/types";
import Image from "next/image";
import React from "react";

type Props = {
  blogPost: BlogPost;
};

export default function BlogPostDetails({ blogPost }: Props) {
  const { content, date, href, img, title } = blogPost;
  return (
    <section className="w-full flex flex-col justify-center lg:w-10/12 pt-10 mb-20 lg:max-w-4xl px-4">
      <h1 className="text-3xl lg:text-6xl font-semibold text-center mb-8">
        {title}
      </h1>
      <div className="flex flex-col justify-center items-center mb-10">
        <Image
          alt={title.trim().toLowerCase()}
          src={img}
          width={500}
          height={300}
          className="rounded-xl shadow-lg"
        />
        <time className="block text-xs mt-4 font-bold">{date}</time>
      </div>
      {blogPost.content.map((section, index) => (
        <div key={index} className="mb-3">
          <h2 className="font-semibold mb-2 text-xl">{section.subtitle}</h2>
          <p>{section.text}</p>
        </div>
      ))}
    </section>
  );
}
