"use client";
import { IconHeart } from "@tabler/icons-react";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import useSound from "use-sound";

interface Props {
  itemId: string;
  size: "sm" | "lg";
}

export default function FavoriteButton({ itemId, size }: Props) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [play] = useSound("/bubble.mp3");

  // Check if the item is in localStorage on initial render
  useEffect(() => {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
      const favoriteItems = JSON.parse(favorites) as string[];
      setIsFavorite(favoriteItems.includes(itemId));
    }
  }, [itemId]);

  const toggleFavorite = () => {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
      let favoriteItems = JSON.parse(favorites) as string[];
      if (isFavorite) {
        favoriteItems = favoriteItems.filter((item) => item !== itemId);
      } else {
        favoriteItems.push(itemId);
      }
      localStorage.setItem("favorites", JSON.stringify(favoriteItems));
      setIsFavorite(!isFavorite);
    } else {
      const favoriteItems = [itemId];
      localStorage.setItem("favorites", JSON.stringify(favoriteItems));
      setIsFavorite(true);
    }
  };

  return (
    <button
      onClick={() => {
        play();
        toggleFavorite();
      }}
      className={classNames(
        "flex justify-center items-center rounded-full bg-white p-2 ring-opacity-60 text-gray-900 transition hover:bg-primary hover:bg-opacity-10"
      )}
    >
      <IconHeart
        className={classNames(
          isFavorite ? "fill-primary-dark stroke-primary-dark" : "fill-blue-50"
        )}
        size={size === "lg" ? 20 : 16}
      />
    </button>
  );
}
