"use client";
import { IconHeart } from "@tabler/icons-react";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
// import useSound from "use-sound";
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

export default function FavoriteButton({ product, category, size }: Props) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  // const [play] = useSound("/bubble.mp3");

  // Check if the item is in localStorage on initial render
  useEffect(() => {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
      const favoriteItems = JSON.parse(favorites) as FavoriteItem[];
      if (favoriteItems)
        setIsFavorite(
          !!favoriteItems.find((item) => item.productKey === product.path)
        );
    }
  }, [product]);

  const toggleFavorite = () => {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
      let favoriteItems = JSON.parse(favorites) as FavoriteItem[];
      if (isFavorite) {
        favoriteItems = favoriteItems.filter(
          (item) => item.productKey !== product.path
        );
      } else {
        favoriteItems.push({
          product: product,
          productCategory: category,
          productKey: product.path || "",
        });
      }
      localStorage.setItem("favorites", JSON.stringify(favoriteItems));
      setIsFavorite(!isFavorite);
    } else {
      const favoriteItems: FavoriteItem[] = [
        {
          product: product,
          productCategory: category,
          productKey: product.path || "",
        },
      ];

      localStorage.setItem("favorites", JSON.stringify(favoriteItems));
      setIsFavorite(true);
    }
  };

  return (
    <button
      onClick={() => {
        // play();
        toggleFavorite();
      }}
      className={classNames(
        "flex group/favoriteBtn justify-center items-center rounded-full bg-white p-2 ring-opacity-60 text-slate-900 transition duration-200 hover:bg-neutral-100 shadow-lg"
      )}
    >
      <IconHeart
        className={classNames(
          isFavorite ? "fill-primary-dark stroke-primary-dark" : "fill-blue-50",
          "group-active/favoriteBtn:scale-125  transition duration-150"
        )}
        size={size === "lg" ? 20 : 16}
      />
    </button>
  );
}
