import { generateClient } from "aws-amplify/data";
import { useEffect, useState } from "react";
import type { Schema } from "../../amplify/data/resource";

const client = generateClient<Schema>()


function ProductMenu() {


  // const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  // useEffect(() => {
  //   client.models.Todo.observeQuery().subscribe({
  //     next: (data) => setTodos([...data.items]),
  //   });
  // }, []);

  // 削除
  function deleteTodo(id: string) {
    client.models.Todo.delete({ id })
  }


  // function createTodo() {
  //   client.models.Todo.create({ content: window.prompt("Todo content") });
  // }




  const [todos, setTodos] = useState<Schema["Todo"]["type"][]>([]);

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



  return  <div>
    <h1>ProductMenu</h1>

    <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li 
          onClick={() => deleteTodo(todo.id)}
          key={todo.id}>{todo.content}</li>
        ))}
      </ul>


    {/* <button onClick={createTodo}>Add new todo（登録）</button>
    <div>一覧表示</div>
    <ul>
        {todos.map(({ id, content }) => (
          <li key={id}>{content}</li>
        ))}
    </ul>
    <div>
      <button onClick={fetchTodos}>disp todo（表示）</button>
    </div> */}



  </div>
}

export default ProductMenu;