import { generateClient } from "aws-amplify/data";
import { useEffect, useState } from "react";
import type { Schema } from "../../amplify/data/resource";

const client = generateClient<Schema>()

const User = () => {

    // userName: a.string(), // fields can be arrays
    // mailAddress: a.email(),
    // userId: a.id().required(),

    const [users, setUsers] = useState<Schema["UserInfo"]["type"][]>([]);

  // リアルタイム更新を購読
  useEffect(() => {
    const sub = client.models.UserInfo.observeQuery().subscribe({
      next: ({ items }) => {
        setUsers([...items]);
      },
    });
    return () => sub.unsubscribe();
  }, []);

  useEffect(() => {
    client.models.UserInfo.observeQuery().subscribe({
      next: (data) => setUsers([...data.items]),
    });
  }, []);


  // 取得
  const fetchUsers = async () => {
    const { data: items } = await client.models.UserInfo.list();
    setUsers(items);
  };

  // 登録
  const createUsers = async () => {
    await client.models.UserInfo.create({
        userName: window.prompt("ユーザー名"),
        mailAddress: window.prompt("メールアドレス"),
        userId: 'TODO',
    });
    // 登録後データ取得
    fetchUsers();
  }



    return (
        <div>
            <h1 className="bg-teal-400">User</h1>

            <button onClick={createUsers}>+ new</button>
            <ul>
                {users.map((user) => (
                <li 
                // onClick={() => deleteTodo(user.userId)} 
                key={user.userId}>{user.userName}</li>
                ))}
            </ul>
            <div>
                <button onClick={fetchUsers}>disp user（表示）</button>
            </div>

        </div>

    )
} 
export default User;