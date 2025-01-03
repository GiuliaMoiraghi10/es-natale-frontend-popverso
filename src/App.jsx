import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

import Index from './pages/Index'
import Show from './pages/Show'

import { Provider } from './contexts/GlobalContext'

import DefaultLayout from './layouts/DefaultLayout'

function App() {

  return (
    <>
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path='/' element={<Navigate to="/characters" replace />} />
              <Route path='/characters'>
                <Route index element={<Index />} />
                <Route path=':id' element={<Show />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
