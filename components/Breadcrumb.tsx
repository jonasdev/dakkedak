import { IconChevronRight, IconHome } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import decodeString from "@/utils/decodeString";

export default function Breadcrumb() {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  if (pathNames.length === 0) return null;

  const seperator = <IconChevronRight size="14" className="ml-1" />;

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

        {pathNames.map((link, index) => {
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
        })}
      </ol>
    </nav>
  );
}
