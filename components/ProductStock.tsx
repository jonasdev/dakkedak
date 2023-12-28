import { IconCircleCheck, IconCircleX, IconClock } from "@tabler/icons-react";
import classNames from "classnames";
import React from "react";

type Props = {
  inStock?: string;
  size?: "lg" | "sm";
};

export default function ProductStock({ inStock, size = "lg" }: Props) {
  if (inStock) {
    if (["in_stock", "in stock"].includes(inStock))
      return (
        <span className="flex items-center gap-x-1">
          <IconCircleCheck
            size={size === "lg" ? 24 : 16}
            className="text-green-500"
          />
          <span
            className={classNames(
              size === "lg" ? "text-base" : "text-xs",
              "font-medium"
            )}
          >
            På lager
          </span>
        </span>
      );
    if (["out_of_stock", "out_of_stock"].includes(inStock)) {
      return (
        <span className="flex items-center gap-x-1">
          <IconCircleX
            size={size === "lg" ? 24 : 16}
            className="text-red-500"
          />{" "}
          <span
            className={classNames(
              size === "lg" ? "text-base" : "text-xs",
              "font-medium"
            )}
          >
            Udsolgt
          </span>
        </span>
      );
    }
    if (["back_order", "in backorder", "backorder"].includes(inStock)) {
      return (
        <span className="flex items-center gap-x-1">
          <IconClock
            size={size === "lg" ? 24 : 16}
            className="text-yellow-500"
          />{" "}
          <span
            className={classNames(
              size === "lg" ? "text-base" : "text-xs",
              "font-medium"
            )}
          >
            Kan bestilles
          </span>
        </span>
      );
    }
  }
}
