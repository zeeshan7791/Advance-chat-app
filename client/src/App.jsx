// eslint-disable-next-line no-unused-vars
import React,{lazy} from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ProtectedRoute from './components/auth/ProtectedRoute'
import NotFound from './pages/NotFound'
const Home=lazy(()=>import('./pages/Home'))
const Login=lazy(()=>import('./pages/Login'))
const Chat=lazy(()=>import('./pages/Chat'))
const Groups=lazy(()=>import('./pages/Groups'))
const App = () => {
  let user=true
  return (
<BrowserRouter>
<Routes>

  <Route element={<ProtectedRoute user={user}/>}>

  <Route path="/" element={<Home/>}/>
    <Route path="/chat/:chatId" element={<Chat/>}/>
    <Route path="/groups" element={<Groups/>}/>
</Route>

  <Route path="/login" 
  element={<ProtectedRoute user={!user} redirect='/'><Login/> </ProtectedRoute>}/>
 <Route path="*" element={<NotFound/>}/>
 
</Routes>
</BrowserRouter>
  )
}

export default App
