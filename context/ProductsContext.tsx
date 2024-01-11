import { Product } from "@/types/types";
import React, { ReactNode, createContext, useContext, useState } from "react";

export type ProductsContextType = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

const defaultValues: ProductsContextType = {
  products: [],
  setProducts: () => {}, // Placeholder function
};

const ProductsContext = createContext<ProductsContextType>(defaultValues);

export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error(
      "useProductsContext must be used within a ProductsProvider"
    );
  }
  return context;
};

interface ProductsProviderProps {
  children: ReactNode;
}

export const ProductsProvider: React.FC<ProductsProviderProps> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);

  const productsContextValue: ProductsContextType = {
    products,
    setProducts,
  };

  return (
    <ProductsContext.Provider value={productsContextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export const setProducts = (products: Product[]) => {
  const { setProducts } = useContext<ProductsContextType>(ProductsContext);

  // Access setProducts and perform operations
  setProducts(products);
};
