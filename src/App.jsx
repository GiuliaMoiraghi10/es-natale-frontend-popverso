import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Index from './pages/Index'
import Show from './pages/Show'

import DefaultLayout from './layouts/DefaultLayout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Index />}></Route>
            <Route path=":id" element={<Show />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
