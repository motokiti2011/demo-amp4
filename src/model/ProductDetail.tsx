// import { useState } from "react";
// import Modal from "react-modal";

import { generateClient } from "aws-amplify/data";
import { useEffect, useState } from "react";
import type { Schema } from "../../amplify/data/resource";

const client = generateClient<Schema>()

// test用ID
const testid = '1111';

// // 取得
const { data: test } = await client.models.Product.get(
  { productId: testid },
  {
    selectionSet: ['productId', 'productId'],
  }
);
console.log(test);

/** 商品詳細 */
const ProductDetail = () => {

  const [products, setProduct] = useState<Schema["Product"]["type"][]>([]);

  useEffect(() => {
    // observeQuery→全件取得
    client.models.Product.observeQuery().subscribe({
      next: (data) => setProduct([...data.items]),
    });
  }, []);

  // サンブル
// same way for all CRUDL: .create, .get, .update, .delete, .list, .observeQuery
// const { data: blogWithSubsetOfData, errors } = await client.models.Blog.get(
//   { id: blog.id },
//   {
//     selectionSet: ['author.email', 'posts.*'],
//   }
// );






return (
    <div className="mx-auto my-3 w-9/12 bg-white border border-green-600 border-2 text-center p-2">
    <h1>商品詳細</h1>

    <ul>
      {products.map((product) => (
        <li key={product.productId}>{product.productName}</li>
      ))}
    </ul>

    </div>
);
};
export default ProductDetail;
