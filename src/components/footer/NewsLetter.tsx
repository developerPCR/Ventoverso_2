import SendIcon from '@mui/icons-material/Send';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';


export default function NewsLetter() {
  return (
    <Grid sx={{display: 'flex',flexDirection:'row', alignItems:'center', background:'rgb(86, 212, 212)', justifyContent:'space-evenly', marginTop:'2rem'}}>
      <h4>¡Subscribete para recibir ofertas y novedades!</h4>
        <Paper
          component="form"
          sx={{ p: '2px 4px' , display: 'flex', flexDirection:'row' ,alignItems: 'center', width: 400, }}
        >
          <InputBase
            sx={{ ml: 1, width:'100%'}}
            placeholder="Ingresa tu e-mail"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
        </Paper>
        <Box sx={{background:'#180B26', color:'#fff', borderRadius:'50px', padding:'2px', paddingX:'10px', textAlign:'center', position:'relative',right:'80px'}}>
          <IconButton type="button"  aria-label="search">
          <SendIcon sx={{color:'rgb(86, 212, 212)'}}/>
            <Typography sx={{color:'rgb(86, 212, 212)', fontWeight:'bold', paddingLeft:'6px'}}>Enviar</Typography>
            </IconButton>
        </Box>
    </Grid>
  );
}
