export const handleDiscount = (
  newPrice?: number,
  oldPrice?: number
): number | null => {
  if (!newPrice || !oldPrice) return null;

  if (newPrice === oldPrice) return null;

  let priceToReturn = 0;

  priceToReturn = newPrice / oldPrice;

  priceToReturn = priceToReturn * 100;

  return Number(priceToReturn.toFixed());
};
