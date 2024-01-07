
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Grid } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";
import { DropdownUser } from "../dropdown/DropdownUser";
import CustomizedInputBase from "../input/customizedInput";
import "./Header.css";

function Header({ evento }: any) {

  const user = useSelector((state: RootState) => state.user) //usare mi user true para que muestre mi perfil en el nav

  const [cerrado, setCerrado] = useState(false);

  const toggleDropdown = () => {
    setCerrado(!cerrado);
  };

  return (

    <>


       
        <div className="grid-container">
          <header className="header-grid">
            <section className="header-flex">

              <Link to={"/"}><div className="logo-header">Ventoverso</div></Link>
              <Grid item 
                sx={{ 
                  p:'5px 0 0 0', 
                  mr:'50px',
                }}>
             <CustomizedInputBase/>  {/*input para buscar */}
          </Grid>

              <div className="icons">

                {user && user.isAuthenticate == true &&
                  <div>
                    <DropdownUser />
                  </div>}


                {user.isAuthenticate == false &&
                  <div>
                    <button type="submit" onClick={evento} className="botonUser">
                      <span className="material-symbols-outlined">
                        account_circle
                      </span>
                    </button>
                      <p>Ingresar</p>
                  </div>
                }


                <div>
                  <Link to={"/Agenda"}>
                    <span className="material-symbols-outlined agenda">
                      calendar_month
                    </span>
                  </Link>
                    <p>Agenda</p>
                </div>


                <div>
                  <a href="#">
                    <span className="material-symbols-outlined corazon">
                      favorite
                    </span>
                  </a>
                  <p>Favoritos</p>
                </div>

                <div>
                  <a href="#">
                    <span className="material-symbols-outlined carro">
                      shopping_cart
                    </span>
                  </a>
                    <p>Carrito</p>
                </div>

              </div>
            </section>

            <section>
              <ul className="categories-flex">
                <a href="#">
                  <li><span className="menu">Bronces <KeyboardArrowDownIcon style={{color:'white'}}/></span></li>
                </a>
                <a href="#">
                  <li>
                  
                    <button className="menu" onClick={toggleDropdown}>Maderas <KeyboardArrowDownIcon style={{color:'white'}}/></button>
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
                  <li><span className="menu">Accesorios <KeyboardArrowDownIcon style={{color:'white'}}/></span></li>
                </a>

              </ul>
            </section>
          </header>
        </div>

    </>
  );
}

export { Header };

