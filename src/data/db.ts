import Dexie, { type EntityTable } from "dexie";
import type { DBProduct } from "./Products/types";
import { DB_VERSION } from "./const";

const db = new Dexie("MSDatabase") as Dexie & {
  products: EntityTable<DBProduct, "id">;
};

db.version(DB_VERSION).stores({
  products: "++id, name, price",
});

export { db };
