CREATE TABLE IF NOT EXISTS "orders" (
	"id" text PRIMARY KEY NOT NULL,
	"product_id" text,
	"quantity" integer,
	"user_id" text
);
