import './SideSheet.css'; // Importa los estilos CSS
import { Login } from '../../interfaces/Login';
import { Link } from 'react-router-dom';
import { Box, TextField } from '@mui/material';
import { useNotification } from '../../context/notification.context';
import { LoginValidate } from '../utils/validateForm';
import { useFormik } from 'formik';


/* interface SideSheetProps {
  isOpen?: boolean;
  onClose?: () => void;
}
 */

export const SideSheet = ({ isOpen, onClose }: Login) => {
  const { getSucces } = useNotification(); //esto es un customHook

  /* //esto es para usar la alerta de error
  
  const handleclick = () => {
    getSucces('login exitoso')
  } 
  
  
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
  
    const [mostrarPassword, setMostrarPassword] = useState(false)
  
    const [loginData, setLoginData] = React.useState({
      email: "",
      contraseña: "",
    })
  
  
    const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }
  
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log(loginData)
  
      LoginValidate.validate(loginData).then(()=> {
        getSucces(JSON.stringify(loginData))
  
      }).catch((error) => {
        getError(error.message);
      })
  
  
      //logica del profesor: 
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
  
      const email = formData.get('email') as string;
      const contraseña = formData.get('userName') as string;
      //fin logica del profesor    
  
    };
  
  
  
    const passwordVisivility = () => {
      setMostrarPassword(!mostrarPassword)
    }
   */

  type LoginType = {
    email: string,
    password: string,
  }

  const formik = useFormik<LoginType>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidate,
    onSubmit: (values: LoginType) => {
      getSucces(JSON.stringify(values));
      formik.resetForm();
      console.log(values)
    },
  });


  return (
    <div className={`side-sheet ${isOpen ? 'open' : ''}`}>
      <div className="side-sheet-content">
        <button className="close-button" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
            <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F" />
          </svg>
        </button>
        <span className='loginSpan'>Bienvenid@ a Ventoverso</span>

        <Box component="form" onSubmit={formik.handleSubmit}>

          <div className="form-group">
            {/*  <label htmlFor="email">Correo Electrónico</label> */}
            <TextField
             
              id="email"
              name="email"
              label='Dirección e-mail'
              className='inputMail'   
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </div>
          <div className="form-group">
            {/*  <label htmlFor="password">Contraseña</label> */}
            <TextField
              type="password"
              id="password"
              name="password"
              className='inputPassword'
              label='Contraseña'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />



          </div>
          <div className='botonEnlaces'>
            <div>
              <button type="submit" className='botonLogin'>Iniciar Sesión</button>
              
            </div>
            <div className='enlaces'>
              <div className='recuperarContraseña'> <a href='#' className='enlace1'>Olvidé mi contraseña</a></div>
              <div><a href='#' className='enlace2' >¿No tienes cuenta?</a></div>
              <div> <button className="cierreRegistro"onClick={onClose}><Link to={"/registro"}><span className='registrate'>Regístrate</span></Link></button> </div>
            </div>

          </div>
        </Box>
      </div>
    </div>
  );
};

