import type { DBProduct, Product } from "./types";

export const dbToProduct = (product: DBProduct): Product => {
  let _product = product;
  delete _product["createdAt"];
  return { ..._product };
};
