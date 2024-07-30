// import { useState } from "react";
// import Modal from "react-modal";

import { generateClient } from "aws-amplify/data";
import { useEffect, useState } from "react";
import type { Schema } from "../../amplify/data/resource";

const client = generateClient<Schema>()

/** 商品詳細 */
const ProductDetail = () => {

  const [product, setProduct] = useState<Schema["Product"]["type"][]>([]);

  // // 取得
  // const fetchProduct = async () => {
  //   const { data: items } = await client.models.Product.list();
  //   setProduct(items);
  // };

  useEffect(() => {
    client.models.Product.observeQuery().subscribe({
      next: (data) => setProduct([...data.items]),
    });
  }, []);



return (
    <div className="mx-auto my-3 w-9/12 bg-white border border-green-600 border-2 text-center p-2">
    <h1>商品詳細</h1>

    <ul>
        {product.map((product) => (
          <li key={product.productId}>{product.productName}</li>
        ))}
      </ul>

    </div>
);
};
export default ProductDetail;
