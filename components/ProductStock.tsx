import { IconCircleCheck, IconCircleX, IconClock } from "@tabler/icons-react";
import React from "react";

type Props = {
  inStock?: string;
};

export default function ProductStock({ inStock }: Props) {
  if (inStock) {
    if (["in_stock", "in stock"].includes(inStock))
      return (
        <span className="flex items-center gap-x-1">
          <IconCircleCheck className="text-green-500" />{" "}
          <span className="font-medium">På lager</span>
        </span>
      );
    if (["out_of_stock", "out_of_stock"].includes(inStock)) {
      return (
        <span className="flex items-center gap-x-1">
          <IconCircleX className="text-red-500" />{" "}
          <span className="font-medium">Udsolgt</span>
        </span>
      );
    }
    if (["back_order", "in backorder", "backorder"].includes(inStock)) {
      return (
        <span className="flex items-center gap-x-1">
          <IconClock className="text-yellow-500" />{" "}
          <span className="font-medium">Kan bestilles</span>
        </span>
      );
    }
  }
}
