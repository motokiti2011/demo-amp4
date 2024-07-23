import { generateClient } from "aws-amplify/data";
import { useEffect, useState } from "react";
import type { Schema } from "../../amplify/data/resource";

const client = generateClient<Schema>()

export default function ProductMenu() {

  const [todos, setTodos] = useState<Schema["Todo"]["type"][]>([]);

  // 取得
  const fetchTodos = async () => {
    const { data: items
      // , errors 
    } = await client.models.Todo.list();
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


  // 登録
  const createTodo = async () => {
    await client.models.Todo.create({
      content: window.prompt("Todo content?"),
      isDone: false,
    });
    // 登録後データ取得
    fetchTodos();
  }

  return  <div>
    <h1>ProductMenu</h1>
    <button onClick={createTodo}>Add new todo（登録）</button>

    <div>一覧表示</div>
    <ul>
        {todos.map(({ id, content }) => (
          <li key={id}>{content}</li>
        ))}
      </ul>

  </div>
}
