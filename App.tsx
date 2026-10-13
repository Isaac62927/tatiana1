import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'
import Home from './pages/Home'
import Privacy from './pages/Privacy'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacidade" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
