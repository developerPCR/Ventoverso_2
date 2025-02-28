import { AgregarCarro } from '../agregarCarro/AgregarCarro'
import './ImagenesProducto.css'
import { ProductoPrincipal } from '../../interfaces/ProductoPincipal'







export const ImagenesProducto= (props:{dataProductoSib:ProductoPrincipal[]}) => {

    let ima = props.dataProductoSib.map(ima => {
        return(
            ima.toString()
        )
    })

    return (
        <>

        {props.dataProductoSib.map(item => {
            return (

                <div className='containerCarroImagenes'>
               <div className='imagenesProducto'>
                <div className='imagenPrincipal'>
                    <img src={ima?.toString()} alt={item.nombre}/> 
                </div>
                <div className='imagenesSecundarias'>
                    
                    <div>
                        
                        <img src={ima?.toString()} alt={item.nombre} /> 
                    </div>

                    
                    <div>
                        <img src={ima?.toString()} alt={item.nombre}/> 
                    </div>
                    <div>
                        <img src={ima?.toString()} alt={item.nombre}/> 
                    </div>
                    <div>
                        <img src={ima?.toString()} alt={item.nombre}/> 
                    </div>
                    <div>
                        <img src={ima?.toString()} alt={item.nombre}/> 
                    </div>
                    
                    
                   
                </div>
                    
            </div>

            <div>
                <AgregarCarro precio = {item.precio}/>
            </div>
        </div>

                
            )
        })}
        

        
         




        </>
    )
}






