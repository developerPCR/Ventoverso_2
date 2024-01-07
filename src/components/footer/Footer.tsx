import "./Footer.css";
// import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export const Footer = () => {
    return (
        <>
            <Box
            sx={{
                display: 'grid',
                gridAutoFlow:{xs:'column', md:'row'},
                gridTemplateColumns: {xs:'repeat(1, 1fr)', md:'repeat(4, 300px)'},
                gridTemplateRows: 'repeat(3, 1fr)',
                rowGap:'0px',
                justifyContent:'center',
                justifyItems:{xs:'center', md:'flex-start'}
                }}
            className="footer">
                <Grid item sx={{gridRow:{md:'1/4'}, gridColumn: {xs:'1', md:'4/4'}}} className="footer4">
                        <h3 className="linkSiguenos">Síguenos</h3>
                        <img src="/images/facebook.png" alt="enlace-facebook" className="facebook" />
                        <img src="/images/instagram.png" alt="enlace-instagram" className="instagram" />
                        <img src="/images/tik-tok.png" alt="enlace-tik-tok" className="tik-tok" />
                </Grid>
                <Grid item sx={{gridRow: {md:'1 / 4'}, gridColumn:{md:'2/4'} }} className="footer2">
                    <div><h3 className="linkTienda">Tienda</h3></div>
                    <div><span>Inicio</span></div>
                    <div><span>Nosotros</span></div>
                    <div><span>Blog</span></div>
                    <div><span>Política de privacidad</span></div>
                </Grid>
                <Grid item className="footer3" sx={{gridRow: {md:'1/ 4'}, gridColumn:{md:'3/4'} }}>
                    <div><h3 className="linkServicioCliente">Servicio al Cliente</h3></div>
                    <div><span>Centro de Ayuda</span></div>
                    <div><span>Seguimiento de Pedidos</span></div>
                    <div><span>Devoluciones y Reebolso</span></div>
                    <div><span>Términos y condiciones</span></div>
                </Grid>
                <Grid item sx={{display:{xs:'none', md:'block'},gridRow: {md:'1 / 4'}, gridColumn:{md:'1/4'} }} className="contenidoFooter">
                    <ul className="footer1">
                        <div className="logo">
                        <span>Ventoverso</span>
                        </div>
                        <li><span>Moneda 666, Santiago, Chile</span></li>
                        <li><span>+5622222222</span></li>
                        <li><span>contacto@ventoverso.cl</span></li>
                    </ul>
                </Grid>
            </Box>
        </>
    )
}

