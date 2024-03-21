import SideBar from './components/SideBar'
import ChatContainer from './components/ChatContainer'
import Login from './components/Login'
import { useAppSelector } from './app/hooks'

function App() {
  const userId = useAppSelector((state) => state.user.userId)

  return (
    <div className="flex">
      {userId ? (
        <>
          <SideBar />
          <ChatContainer />
        </>
      ) : (
        <Login />
      )}
    </div>
  )
}

export default App
