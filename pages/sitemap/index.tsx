// pages/sitemap.tsx
import fs from "fs";
import path from "path";
import { GetStaticProps } from "next";

interface SitemapProps {
  sitemapXml: string;
}

export default function SitemapPage({ sitemapXml }: SitemapProps) {
  return (
    <div>
      <pre>{sitemapXml}</pre>
    </div>
  );
}

export const getStaticProps: GetStaticProps<SitemapProps> = async () => {
  const filePath = path.join(process.cwd(), "public", "sitemap.xml");
  const sitemapXml = fs.readFileSync(filePath, "utf-8");

  return {
    props: {
      sitemapXml,
    },
  };
};
