import BlogPostDetails from "@/components/BlogPostDetails";
import { blogPosts } from "@/config/blogPosts";
import { categories } from "@/config/categories";
import { BlogPost } from "@/types/types";
import { getFeeds } from "@/utils/getFeeds";
import getRelatedProducts from "@/utils/getRelatedProducts";
import Head from "next/head";
import React from "react";

export default function BlogPostPage({ blogPost }: { blogPost: BlogPost }) {
  return (
    <>
      <Head>
        <title>{blogPost.title} - Babyhaj</title>
        <meta
          name="description"
          content={`Find hjælp og inspiration ved at læse vores blogopslag. For eksempel kan du læse dette opslag: '${blogPost.title}'.`}
        />
      </Head>

      <BlogPostDetails blogPost={blogPost} />
    </>
  );
}

export const getStaticPaths = async () => {
  const paths = blogPosts?.map((blogPost) => ({
    params: {
      blogPost: blogPost.href,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

interface Params {
  blogPost: BlogPost;
}

export const getStaticProps = async ({ params }: { params: Params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const { blogPost } = params || {};

  if (!blogPost) {
    return {
      notFound: true,
    };
  }

  const blogPostData = blogPosts.find((post) => post.href === blogPost);

  if (!blogPostData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { blogPost: { ...blogPostData } },
  };
};
