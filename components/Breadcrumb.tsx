import { IconChevronRight, IconHome } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { Product } from "@/types/types";
import { categories } from "@/config/categories";

type Props = {
  product: Product;
};

export default function Breadcrumb({ product }: Props) {
  const paths = usePathname();

  if (!product) return null;

  const { title, category } = product || {};
  if (!title && !category) return null;

  const pathNames = paths.split("/").filter((path) => path);
  if (pathNames.length === 0) return null;

  const seperator = <IconChevronRight size="14" className="ml-1" />;

  const categoryName = categories.find((cat) => cat.slug === category)?.name;

  return (
    <nav aria-label="breadcrumb-component">
      <ol className="flex items-center gap-1 text-sm text-gray-600">
        <li>
          <Link
            href="/"
            className="flex items-center transition hover:text-gray-700"
          >
            <IconHome />
            {seperator}
          </Link>
        </li>

        <span className="block transition hover:text-gray-700">
          <Link href={`/${category}`} className="line-clamp-1">
            {categoryName}
          </Link>
        </span>
        {seperator}
        <span className="block transition hover:text-gray-700">
          <Link
            href={`/${category}`}
            className="line-clamp-1 capitalize font-bold"
          >
            {title}
          </Link>
        </span>
        {/* {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join("/")}`;

          const itemLink = link[0].toUpperCase() + link.slice(1, link.length);

          const isActive = paths === href;
          return (
            <li key={itemLink} className="flex items-center">
              <span
                className={`block transition hover:text-gray-700 ${
                  isActive ? "font-bold" : ""
                }`}
              >
                <Link href={href} className="line-clamp-1">
                  {decodeString(itemLink)}
                </Link>
              </span>
              {pathNames.length !== index + 1 && seperator}
            </li>
          );
        })} */}
      </ol>
    </nav>
  );
}
