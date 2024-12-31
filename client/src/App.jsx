// eslint-disable-next-line no-unused-vars
import React,{lazy, Suspense} from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ProtectedRoute from './components/auth/ProtectedRoute'
import NotFound from './pages/NotFound'
import LayoutLoader from './components/layout/Loaders'
const Home=lazy(()=>import('./pages/Home'))
const Login=lazy(()=>import('./pages/Login'))
const Chat=lazy(()=>import('./pages/Chat'))
const Groups=lazy(()=>import('./pages/Groups'))
const App = () => {
  let user=true
  return (
<BrowserRouter>
<Suspense fallback={<LayoutLoader/>}>

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
</Suspense>
</BrowserRouter>
  )
}

export default App
