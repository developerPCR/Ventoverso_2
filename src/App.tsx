import Box from '@mui/material/Box'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Agenda } from './components/Agenda/Agenda'
import { EliminarProducto } from './components/administrador/EliminarProducto'
import { Checkout } from './components/checkout/Checkout'
import { ResultadoCompra } from './components/compra/ResultadoCompraExitosa'
import { ResultadoCompraFallo } from './components/compra/ResultadoFalloCompra'
import { Footer } from './components/footer/Footer'
import NewsLetter from './components/footer/NewsLetter'
import { ProtectedComponent } from './components/protectedComponent/ProtectedComponent'
import Sidesheet2 from './components/sidesheet/SideSheet2'
import { NotificationProvider } from './context/notification.context'
import { AdminEdit } from './pages/AdminEdit'
import { AgregarProducto } from './pages/AgregarProducto'
import { PaginaProducto } from './pages/AñadirProducto'
import { CarroCompras } from './pages/CarroCompras'
import { CentrodeAyuda } from './pages/CentrodeAyuda'
import { CrearUser } from './pages/CrearUsurario'
import { DestacadoClarinetes } from './pages/DestacadosClarinete'
import { EditarProducto } from './pages/EditarProducto'
import { Home } from './pages/Home'
import { ImagenFormulario } from './pages/ImagenFormulario'
import { PageProducto } from './pages/Producto'
import { RegtoExitoso } from './pages/RegtoExitoso'
import { RootState } from './redux/store'



function App() {

  const user = useSelector((state: RootState) => state.user)

  return (
    <>
      <div>
        <NotificationProvider>
          <BrowserRouter>
            {user.roles?.[0] != "ADMINISTRADOR" &&
              <Sidesheet2 />}

            <Routes>


              <Route path='editAdmin' element={
                <ProtectedComponent>
                  <AdminEdit />
                </ProtectedComponent>
              } />

              <Route path='editarProducto' element={
                <ProtectedComponent>
                  <EditarProducto />

                </ProtectedComponent>
              } />

              <Route path='agregarProducto' element={
                <ProtectedComponent>
                  <AgregarProducto />
                </ProtectedComponent>
              } />

              <Route path='eliminarProducto' element={
                <ProtectedComponent>
                  <EliminarProducto />
                </ProtectedComponent>
              } />


              <Route path="/" element={<Home />} />
              <Route path="/agenda" element={<Agenda />} />
              <Route path="/categoria" element={<PageProducto />} />

              <Route path="/d_clarinete/" element={<DestacadoClarinetes />}>
              </Route>


              <Route path="/agregarProductoCarro/" element={<PaginaProducto />}/>

            
              <Route path="/carro" element={<CarroCompras />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/algoSalioMal" element={<ResultadoCompraFallo />} />
              <Route path="/compraExitosa" element={<ResultadoCompra />} />
              <Route path="/registro" element={<CrearUser />} />
              <Route path="/registroExitoso" element={<RegtoExitoso />} />
              <Route path="/centroAyuda" element={<CentrodeAyuda />} />
              <Route path="/imagenFormulario" element={<ImagenFormulario />} />




            </Routes>

            <Box sx={{display:'flex', flexDirection:'column'}}>
              <NewsLetter/>
              <Footer />
            </Box>
          </BrowserRouter>
        </NotificationProvider>
      </div>

    </>
  )
}

export default App
