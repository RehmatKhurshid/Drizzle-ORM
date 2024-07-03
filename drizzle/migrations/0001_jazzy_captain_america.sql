CREATE TABLE IF NOT EXISTS "product" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"price" integer,
	"user_id" text
);
--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "subscribed";