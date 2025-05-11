import type { BaseBDEntity } from "../types";

export interface Product {
  name: string;
  price: number;
}

export interface DBProduct extends BaseBDEntity, Product {}
