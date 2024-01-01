import { categories } from "@/config/categories";
import { Product } from "@/types/types";
import fs from "fs";

export const generateSitemap = async (products: Product[] = []) => {
  const pages = [...products]
    .map((product) => {
      const { category, path } = product;
      console.log(category);
      console.log(path);

      if (!category || !path) return null;

      return `${category}/${path}`;
    })
    .filter((e) => e !== null);

  const routes = [...new Set(pages)];

  const rootUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : "https://babyhaj.dk/";

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <!--Base URL-->
            <url>
                <loc>${rootUrl}</loc>
            </url>
            <url>
                <loc>${rootUrl}cookies</loc>
            </url>
            <url>
                <loc>${rootUrl}diverse</loc>
            </url>
                    ${routes
                      .map((route) => {
                        return `
                        <url>
                            <loc>${`${rootUrl}${route}`}</loc>
                        </url>
                    `;
                      })
                      .join("")}
        </urlset>
    `;

  fs.writeFileSync("public/sitemap.xml", sitemap);
};
