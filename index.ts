import { db } from "./db.ts";
import { users, orders, products } from "./db/schema.ts";
import { eq, count} from "drizzle-orm";

//for all users
// async function many(){
//     const users = await db.query.users.findMany({});
//     console.log(users);     //in array
// }
// many();


//for only first
// async function first(){
//     const dbUsers = await db.query.users.findFirst({
//         where : eq(users.id , "1") ,
//         with:{
//             products: true,
//         }
//     });
//     console.log(dbUsers);   //in object
// }
// first();


// //for 1 user
// async function one(){
//     const dbUsers = await db.query.users.findMany({
//         where : eq(users.id , "2")  
//     });
//     console.log(dbUsers);
// }
// one();


//insert user 
// async function insert() {
//     const insertedUserId = await db.insert(users).values({
//         id: "4",
//         name: "abc",
//         email: "abc@gmail.com"
//     }).returning({
//         insertedId: users.id
//     })
//     console.log(insertedUserId)
// }
// insert();


//place/insrt order
// async function insertOrder() {
//     const insertedOrder = await db.insert(orders).values({
//         id: "2",
//         quantity: 2,
//         productId: "2",
//         userId: "4"
//     }).returning({
//         insertedId: orders.id,
//     })
//     console.log(insertedOrder)
// }
// insertOrder();


//innerjoins
async function main(){
    const numOrders = await db
    .select({values: count()})
    .from(users)
    .innerJoin(products, eq(products.userId, users.id))
    .innerJoin(orders, eq(products.id , orders.productId))
    .where(eq(users.id , "1"))

    console.log(numOrders)
}
main();