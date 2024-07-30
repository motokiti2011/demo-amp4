import { generateClient } from "aws-amplify/data";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import type { Schema } from "../../amplify/data/resource";
import ProductDetail from "../model/ProductDetail";

const client = generateClient<Schema>()


function ProductMenu() {
  
  const [todos, setTodos] = useState<Schema["Todo"]["type"][]>([]);

  // 削除
  function deleteTodo(id: string) {
    client.models.Todo.delete({ id })
  }

  // 取得
  const fetchTodos = async () => {
    const { data: items } = await client.models.Todo.list();
    setTodos(items);
  };

  // リアルタイム更新を購読
  useEffect(() => {
    const sub = client.models.Todo.observeQuery().subscribe({
      next: ({ items }) => {
        setTodos([...items]);
      },
    });
    return () => sub.unsubscribe();
  }, []);

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  // 登録
  const createTodo = async () => {
    await client.models.Todo.create({
      content: window.prompt("Todo content?"),
      isDone: false,
    });
    // 登録後データ取得
    fetchTodos();
  }

  const [modal, setModal] = useState(false);

  const openModal = () => {
      setModal(true);
  };
  const closeModal = () => {
      setModal(false);
  };



  return  <div>
    <h1>商品メニュー画面</h1>

    <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li 
          onClick={() => deleteTodo(todo.id)}
          key={todo.id}>{todo.content}</li>
        ))}
      </ul>
      <div>
        <button onClick={fetchTodos}>disp todo（表示）</button>
      </div>


        <div>
          <button onClick={openModal}>商品詳細へ</button>
          <Modal isOpen={modal}>
              <button onClick={closeModal}>閉じこ</button>
            <ProductDetail></ProductDetail>
          </Modal>
        </div>

  </div>
}

export default ProductMenu;