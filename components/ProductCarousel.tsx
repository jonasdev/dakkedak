"use client";

import classNames from "classnames";
import { useState } from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/types/types";

type Props = {
  products: Product[];
};

export default function ProductCarousel({ products }: Props) {
  const [curr, setCurr] = useState(0);

  const setPreviousSlide = () =>
    setCurr((curr) => (curr === 0 ? products.length - 1 : curr - 1));

  const setNextSlide = () =>
    setCurr((curr) => (curr === products.length - 1 ? 0 : curr + 1));

  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      setNextSlide();
    }

    if (diff < -5) {
      setPreviousSlide();
    }

    setTouchPosition(null);
  };

  return (
    <div className="relative overflow-hidden max-w-full">
      <div
        className="relative flex mb-12 transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchMove={(e) => handleTouchMove(e)}
      >
        {products.map((s, i) => (
          <div className="w-full min-w-full flex flex-col items-center" key={i}>
            <div className="w-10/12 h-full items-center justify-center grid grid-cols-1 grid-flow-row-dense">
              <ProductCard product={s} key={i} />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <div className="flex h-5 items-center justify-center gap-4">
          {products.map((_, i) => (
            <div
              className={classNames(
                curr === i ? "h-4 w-4" : "h-3 w-3 bg-opacity-50",
                " cursor-pointer rounded-full bg-primary transition-all duration-300 ease-in-out"
              )}
              onClick={() => setCurr(i)}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
