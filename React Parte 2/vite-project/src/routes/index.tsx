import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AlterandoOTema from '../pages/Alterando-o-Tema'
import Home from '../pages/Home'
import ListaDePresenca from '../pages/Lista-de-Presenca'


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/lista-de-presenca' element={<ListaDePresenca />} />
        <Route path='/alterando-o-tema' element={<AlterandoOTema />} />
      </Routes>
    </BrowserRouter>
  )
}