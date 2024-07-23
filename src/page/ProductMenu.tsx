import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource";

const client = generateClient<Schema>()

export default function ProductMenu() {
  const createTodo = async () => {
    await client.models.Todo.create({
      content: window.prompt("Todo content?"),
      isDone: false
    })
  }

  return  <div>
    <h1>ProductMenu</h1>
    <button onClick={createTodo}>Add new todo</button>
  </div>
}
