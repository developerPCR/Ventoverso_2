import './App.css'
import { Home } from './pages/Home'
import { PaginaProducto } from './pages/AñadirProducto'
import { DestacadoClarinetes } from './pages/DestacadosClarinete'
import dataDesctacadoClarinete from './components/destacadosClarinete/dataDestacadoClarinete.json'
import { PageProducto } from './pages/Producto'
import { CarroCompras } from './pages/CarroCompras'
import { PagResultadoCompra } from './pages/PagResultadoCompra'
import Sidesheet2 from './components/sidesheet/SideSheet2'
import { Footer } from './components/footer/Footer'
import { CrearUser } from './pages/CrearUsurario'
import { RegtoExitoso } from './pages/RegtoExitoso'
import { Alerta } from './components/usuario/Alerta'
import { Checkout } from './components/checkout/Checkout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProductoCarro } from './components/carro/ProductoCarro'
import { ResultadoCompra } from './components/compra/ResultadoCompraExitosa'
import { ResultadoCompraFallo } from './components/compra/ResultadoFalloCompra'
import { NotificationProvider } from './context/notification.context'
import { CentrodeAyuda } from './pages/CentrodeAyuda'
import { Agenda } from './components/Agenda/Agenda'

function App() {

  return (
    <>
      <div>
        <NotificationProvider>


          <BrowserRouter>
            <Sidesheet2 />

            <Routes>



              <Route path="/" element={<Home />}> </Route>
              <Route path="/agenda" element={<Agenda/>} ></Route>
              <Route path="/categoria" element={<PageProducto />} ></Route>
              <Route path="/d_clarinete" element={<DestacadoClarinetes />}> </Route>
              <Route path="/agregarProducto" element={<PaginaProducto />}> </Route>
              <Route path="/carro" element={<CarroCompras />}> </Route>
              <Route path="/checkout" element={<Checkout />}></Route>
              <Route path="/algoSalioMal" element={<ResultadoCompraFallo />}></Route>
              <Route path="/compraExitosa" element={<ResultadoCompra />}></Route>
              <Route path="/registro" element={<CrearUser />}></Route>
              <Route path="/registroExitoso" element={<RegtoExitoso />}></Route>
              <Route path="/centroAyuda" element={<CentrodeAyuda />}></Route>

            </Routes>

            <Footer />
          </BrowserRouter>
        </NotificationProvider>
      </div>










      {/* <Home/>  */}
      {/* <AñadirProducto/>  */}
      {/* <DestacadoClarinetes/> */}
      {/* <PageProducto/>   */}

      {/* <CarroCompras/>  */}
      {/*  <PagResultadoCompra/>  */}
      {/* <CrearUser/>  
      <Alerta /> */}
      {/* <RegtoExitoso/> */}
      {/* <Prueba /> */}


    </>
  )
}

export default App
