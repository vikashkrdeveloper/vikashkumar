import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'
import NavBar from './components/NavBar.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <NextUIProvider>
      <NavBar />
      <main className='bg-[#FFFFFF] max-w-7xl m-auto p-5  dark:bg-[#000000] text-[#000000] dark:text-[#FFFFFF]'>
        <App />
      </main>
    </NextUIProvider>
  </BrowserRouter>,
)
