// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Product } from "@/components/Product";
import { getFeeds } from "@/utils/getFeeds";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  feed: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const feed = await getFeeds(null, true);

  const queryString = (req.query.query as string).toLowerCase();

  if (queryString.length <= 2) return res.status(200).json({ feed: [] });

  const filteredProducts = (feed as Product[]).filter(
    (product) =>
      product.title?.toLowerCase()?.includes(queryString) ||
      product.category?.toLowerCase()?.includes(queryString) ||
      product.brand?.toLowerCase()?.includes(queryString) ||
      product.shop?.toLowerCase()?.includes(queryString)
  );

  res.status(200).json({ feed: filteredProducts });
}
