import { pgTable, primaryKey, text, integer, serial, boolean, timestamp } from "drizzle-orm/pg-core";
import { Relation, relations } from "drizzle-orm";

export const users = pgTable("user", {
    id: text("id").notNull().primaryKey(),
    name: text("name"),
    email: text("email").notNull(),
    emailVerified: timestamp("emailVerified", { mode: "date" }),
    // subscription: boolean("subscribed")
});

export const userRelations = relations(
    users,
    ({ many }) => ({
        products: many(products),
        orders: many(orders)
    })
)

export const products = pgTable("product", {
    id: text("id").notNull().primaryKey(),
    name: text("name"),
    price: integer("price"),
    userId: text("user_id")
});

export const productRelations = relations(
    products,
    ({ many, one }) => ({
        user: one(users, {
            fields: [products.userId],
            references: [users.id]
        }),
        orders: many(orders)
    })
);


export const orders = pgTable("orders", {
    id: text("id").notNull().primaryKey(),
    productId: text("product_id"),
    quantity: integer("quantity"),
    userId: text("user_id")
});

export const orderRelations = relations(
    orders,
    ({ many, one }) => ({
        product: one(products, {
            fields: [orders.productId],
            references: [products.id]
        }),
        user: one(users, {
            fields: [orders.userId],
            references: [users.id]
        })
    })
);