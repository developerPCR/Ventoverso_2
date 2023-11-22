
import { Link } from "react-router-dom";
import "./Header.css"
import { useState} from "react";
import { Grid, Box } from "@mui/material";
import CustomizedInputBase from "../input/customizedInput";
import MenuListComposition from "../input/dropdownMenu";


function Header({ evento }: any) {

 

  const [cerrado, setCerrado] = useState(false);

  const toggleDropdown = () => {
    setCerrado(!cerrado);
  };



  return (

      <Grid
          container
          className="grid-container"
          sx={{
            flexGrow: 1,
            display: 'grid',
            gridAutoFlow: 'row',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(4, 1fr)',
            columnGap: {xs:0, sm:4, md:15} ,
            p:'20px 0 0 0 ',
            }}>
          <Grid xs={6} sm={4} item  sx={{p:{xs:'15px 0 0 15px', md:'15px 0 0 50px'}, gridColumn: '1', gridRow: {xs:'1/2' ,md:'1 / 3', minWidth:'300px'}}}> 
            <Link to={"/"}><span className="logo-header">Logo Ventoverso</span></Link>
          </Grid>
          <Grid item 
          xs={6}
          sm={4}
          sx={{ 
            gridColumn: {xs:'2', md:'2'}, 
            gridRow: {xs:'3/4', md:'1 / 3'}, 
            p:'5px 0 0 0', 
            width:'30px',
            mr:'50px',
            position: 'relative'
            
          
          }}>
             <CustomizedInputBase/>  {/*input para buscar */}
          </Grid>

          <Grid item className="" 
            xs={6}
            sm={4}
            sx={{
              p:'15px 0 0 0', m:{xs:'0', md:'0 0px'}, 
              gridColumn: {xs:'2',sm:2, md:'3'}, 
              gridRow: {xs:'1/4' ,md:'1 / 3'},
              display: 'flex',
              columnGap: {xs:2, sm : 4, md: 6}
              }}>{/*iconos flex  */}

            <div>
              <button type="submit" onClick={evento} className="botonUser">
                <span className="material-symbols-outlined">
                  account_circle
                </span>
              </button>
            </div>

            <div>
              <Link to= {"/Agenda"}>
                <span className="material-symbols-outlined agenda">
                  calendar_month
                </span>
              </Link>
            </div>


            <div>
              <a href="#">
                <span className="material-symbols-outlined corazon">
                  favorite
                </span>
              </a>
            </div>

            <div>
              <a href="#">
                <span className="material-symbols-outlined carro">
                  shopping_cart
                </span>
              </a>
            </div>

          </Grid>
        
        <Box sx={{ 
          display: { xs: 'block', md: 'none' },
          gridColumn: '1',
          gridRow: {xs:'3/4' ,md:'3 / 4'},
          }}>
          <Grid 
          xs={2}
          sx={{
            width: { xs: 200},
            m: 'px 0 0 0 0'
          }}>
             <MenuListComposition/>  {/*menu desplegable solo se muestra si la pantalla es pequeña */}
          </Grid>
        </Box>
        <Grid sx={{
          gridColumn: '1',
          gridRow: {xs:'3/4' ,md:'3 / 4'},
          display:{xs:'none' , md:'block'},
          pt: '15px'
        }}>
          <ul className="categories-flex ">
            <a href="#">
              <li><span className="menu">Bronces</span></li>
            </a>
            <a href="#">
              <li>
                <button className="menu" onClick={toggleDropdown}>Maderas</button>
                {cerrado && (
                  <div className="desplegableMaderas">
                    <ul className="listaDesplegableMaderas">
                     <li className="opcionClarinetes" onClick={toggleDropdown}> <Link to={"/categoria"}>Clarinetes</Link></li>
                      <li className="opcionClarinetes" onClick={toggleDropdown}><Link to={"/categoria"}>Fagotes</Link></li>
                    <li className="opcionClarinetes" onClick={toggleDropdown}>  <Link to={"/categoria"}>Flautas dulces</Link></li>
                     <li className="opcionClarinetes" onClick={toggleDropdown}> <Link to={"/categoria"}>Flautas traversas</Link></li>
                      <li className="opcionClarinetes" onClick={toggleDropdown}><Link to={"/categoria"}>Oboes</Link></li>
                    </ul>
                  </div>
                )}

              </li>

            </a>
            <a href="#">
              <li><span className="menu">Accesorios</span></li>
            </a>

          </ul>
        </Grid>
      </Grid>

  );
}

export { Header };
