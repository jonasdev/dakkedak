import React from "react";

import { getFeeds } from "@/pages/api/getFeeds";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import ProductCard, { ProductProps } from "@/components/ProductCard";

// export async function generateStaticParams() {
//   const res = await getFeeds();

//   return {
//     products: res;
//   }
// }

export const getStaticProps = (async (context) => {
  console.log("Calling");

  const res = await getFeeds();
  return { props: { res } };
}) satisfies GetStaticProps<{
  res: ProductProps[];
}>;

export default function Products({
  res,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log("res: ", res);
  if (!res) return null;

  return (
    <div className="flex justify-center w-full items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-8 p-6 lg:w-5/6">
        {res.map((feed) => (
          <ProductCard {...feed} key={feed.productKey} />
        ))}
      </div>
    </div>
  );
}
