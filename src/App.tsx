import { Routes } from "./routes"
import { AuthProvider } from "./contexts/AuthContext"

function App() {
  localStorage.setItem("nome", "hehe")
  console.log(localStorage.getItem("nome"));
  
  return (
    <AuthProvider>
      <Routes/>
    </AuthProvider>

  )
}

export default App
