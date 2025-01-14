import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import "dotenv/config";

// for migrations
const migrationClient = postgres(process.env.DATABASE_URL as string, { max: 1 });
// migrate(drizzle(migrationClient),{
//     migrationsFolder: "./drizzle/migrations"
// })

async function main(){
    await migrate(drizzle(migrationClient),{
        migrationsFolder: "./drizzle/migrations",
    })
}

main()