import { useNavigate } from "react-router-dom";

function Header() {

  const navigate = useNavigate()
  const handleUser = () => {
    navigate('/user')
  }
  const handleSignin = () => {
    navigate('/signin')
  }

  return (
    <div>
      <h1 className="bg-teal-200">ヘッド領域</h1>

      <div className="flex justify-center items-center gap-4 w-100 h-20">
        <div className="border border-blue-400">
          <button onClick={handleUser}>ユーザー画面へ</button>
        </div>

        <div className="border border-blue-400">
          <button onClick={handleSignin}>login画面へ</button>
        </div>

      </div>

    </div>
)}

export default Header
