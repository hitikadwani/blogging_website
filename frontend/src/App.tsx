import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { Blogs } from './pages/Blogs'
import { Publish } from './pages/Publish'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path = "/signup" element = {<Signup/>} />
      <Route path = "/signin" element = {<Signin/>} />
      <Route path = "/blog/:id" element = {<Blog/>} />
      <Route path = "/blogs" element = {<Blogs/>} />
      <Route path = "/publish" element = {<Publish/>} />
    </Routes>
    </BrowserRouter>

    </div>
  
  )
}

export default App
