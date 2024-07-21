import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any unauthenticated user can "create", "read", "update", 
and "delete" any "Todo" records.
=========================================================================*/
// const schema = a.schema({
//   Todo: a
//     .model({
//       content: a.string(),
//     })
//     .authorization((allow) => [allow.guest()]),
//   Customer: a
//   .model({
//     customerId: a.id().required(),
//     // fields can be of various scalar types,
//     // such as string, boolean, float, integers etc.
//     name: a.string(),
//     // fields can be of custom types
//     location: a.customType({
//       // fields can be required or optional
//       lat: a.float().required(),
//       long: a.float().required(),
//     }),
//       // fields can be enums
//       engagementStage: a.enum(["PROSPECT", "INTERESTED", "PURCHASED"]),
//       collectionId: a.id(),
//       collection: a.belongsTo("Collection", "collectionId")
//       // Use custom identifiers. By default, it uses an `id: a.id()` field
//     })
//     .identifier(["customerId"]),
//   });

// export type Schema = ClientSchema<typeof schema>;

// export const data = defineData({
//   schema,
//   authorizationModes: {
//     defaultAuthorizationMode: 'iam',
//   },
// });


// import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a
  .schema({
    Todo: a
      .model({
        content: a.string(),
      })
      .authorization((allow) => [allow.guest()]),
    Customer: a
      .model({
        customerId: a.id().required(),
        // fields can be of various scalar types,
        // such as string, boolean, float, integers etc.
        name: a.string(),
        // fields can be of custom types
        location: a.customType({
          // fields can be required or optional
          lat: a.float().required(),
          long: a.float().required(),
        }),
        // fields can be enums
        engagementStage: a.enum(["PROSPECT", "INTERESTED", "PURCHASED"]),
        collectionId: a.id(),
        collection: a.belongsTo("Collection", "collectionId")
        // Use custom identifiers. By default, it uses an `id: a.id()` field
      })
      .identifier(["customerId"]),
      
    Collection: a
      .model({
        customers: a.hasMany("Customer", "collectionId"), // setup relationships between types
        tags: a.string().array(), // fields can be arrays
        representativeId: a.id().required(),
        // customize secondary indexes to optimize your query performance
      })
      .secondaryIndexes((index) => [index("representativeId")]),
    UserInfo: a
      .model({
        userName: a.string(), // fields can be arrays
        mailAddress: a.email(),
        userId: a.id().required(),
        // customize secondary indexes to optimize your query performance
      })
      // .secondaryIndexes((index) => [index("userId")]),
      .identifier(["userId"]),
    // 商品
    Product: a
      .model({
        productName: a.string(),  // 商品名
        productCategory: a.string(),  // 商品カテゴリー
        productQuantity: a.string(),  // 商品数
        productExplanation: a.string(),  // 商品説明
        productContributorId:a.string(),  // 商品登録者ID
        productContributor:a.string(),  // 商品登録者
        productImageUrl:a.string(),  // 商品画像URL
        productIda: a.id().required(), // 商品ID
      })
      .identifier(["productIda"]),

  })
  .authorization((allow) => [allow.publicApiKey()]);




export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});


/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
