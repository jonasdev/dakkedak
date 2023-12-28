"use client";
import { IconCheck, IconListCheck } from "@tabler/icons-react";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Product } from "./Product";

interface Props {
  product: Product;
  category: string;
  size: "sm" | "lg";
}

export interface FavoriteItem {
  product: Product;
  productCategory: string;
  productKey: string;
}

export default function ChecklistButton({ product, category, size }: Props) {
  const [isOnChecklist, setIsOnChecklist] = useState<boolean>(false);

  // Check if the item is in localStorage on initial render
  useEffect(() => {
    const checklist = localStorage.getItem("checklist");
    if (checklist) {
      const checklistItems = JSON.parse(checklist) as FavoriteItem[];
      if (checklistItems)
        setIsOnChecklist(
          !!checklistItems.find((item) => item.productKey === product.path)
        );
    }
  }, [product]);

  const toggleChecklist = () => {
    const checklist = localStorage.getItem("checklist");
    if (checklist) {
      let checklistItems = JSON.parse(checklist) as FavoriteItem[];
      if (isOnChecklist) {
        checklistItems = checklistItems.filter(
          (item) => item.productKey !== product.path
        );
      } else {
        checklistItems.push({
          product: product,
          productCategory: category,
          productKey: product.path || "",
        });
      }
      localStorage.setItem("checklist", JSON.stringify(checklistItems));
      setIsOnChecklist(!isOnChecklist);
    } else {
      const checklistItems: FavoriteItem[] = [
        {
          product: product,
          productCategory: category,
          productKey: product.path || "",
        },
      ];

      localStorage.setItem("checklist", JSON.stringify(checklistItems));
      setIsOnChecklist(true);
    }
  };

  return (
    <button
      onClick={() => {
        toggleChecklist();
      }}
      className={classNames(
        "flex group/checklistBtn justify-center items-center rounded-full bg-white p-2 ring-opacity-60 text-slate-900 transition duration-200 hover:bg-neutral-100 shadow-lg"
      )}
    >
      <span className="group-active/checklistBtn:scale-125 transition duration-150">
        {" "}
        {isOnChecklist ? (
          <IconCheck size={size === "lg" ? 20 : 16} />
        ) : (
          <IconListCheck size={size === "lg" ? 20 : 16} />
        )}
      </span>
    </button>
  );
}
