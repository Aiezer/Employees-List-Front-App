import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/global.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import Header from './components/Header.tsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Header />
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
