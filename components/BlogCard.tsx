import { BlogPost } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  blogPost: BlogPost;
};

export default function BlogCard({ blogPost }: Props) {
  const { content, date, img, title, href } = blogPost;

  const exampleContent = content[0].text;

  return (
    <Link
      className="group relative h-96 overflow-hidden rounded-lg shadow-xl transition hover:shadow-lg"
      href={`blog/${href}`}
    >
      <Image
        alt={title.trim().toLowerCase()}
        src={img}
        width={0}
        height={0}
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-90"
      />

      <div className="absolute inset-0 rounded-xl bg-black/40" />
      <div className="absolute right-0 bottom-0 w-fit">
        <div className="p-4 sm:p-6">
          <time className="block text-xs text-white/90">{date}</time>

          <h3 className="mt-0.5 text-lg text-white">{title}</h3>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
            {exampleContent}
          </p>
        </div>
      </div>
    </Link>
  );
}
