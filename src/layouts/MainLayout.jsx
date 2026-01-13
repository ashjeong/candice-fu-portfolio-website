import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { Outlet } from 'react-router-dom'
import './MainLayout.css'

export default function MainLayout() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}