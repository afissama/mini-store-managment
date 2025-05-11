import { db } from "../db";
import type { Product } from "./types";
import { dbToProduct } from "./utils";

export const createProduct = async (
  product: Product,
  onSuccess?: (data: Product) => void,
  onError?: (msg: string) => void
) => {
  try {
    const id = await db.products.add({ ...product });
    onSuccess?.(product);
  } catch (error) {
    onError?.("Failed to add :" + error);
  }
};

export const getProduct = async (id: number): Promise<Product | undefined> => {
  const data = await db.products.get(id);
  return data ? dbToProduct(data) : data;
};

export const getProducts = async ({
  from,
  to,
}: {
  from?: number;
  to?: number;
}) => {
  try {
    return db.products
      .orderBy("createdAt")
      .offset(from ?? 0)
      .limit(to ?? 100)
      .toArray();
  } catch (error) {
    throw new Error("An error occurred" + error);
  }
};

export const updateProduct = async (
  id: number,
  product: Product,
  onSuccess?: (data: Product) => void,
  onError?: (msg: string) => void
) => {
  try {
    await db.products.update(id, { ...product });
    onSuccess?.(product);
  } catch (error) {
    onError?.("Failed to update :" + error);
  }
};

export const deleteProduct = async (
  id: number,
  onSuccess?: () => void,
  onError?: (msg: string) => void
) => {
  try {
    await db.products.delete(id);
    onSuccess?.();
  } catch (error) {
    onError?.("Failed to delete :" + error);
  }
};
