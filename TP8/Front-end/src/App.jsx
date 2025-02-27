import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import UserForm from './UserForm.jsx'
import { ToastContainer } from 'react-toastify';


function App() {
  const [user, setUser] = useState({name: "", email: "", password: ""})

  return (
    <>
      <Header></Header>
      <div className="flex flex-col justify-center items-center h-screen">
        <UserForm setUser={setUser} user={user}></UserForm>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
