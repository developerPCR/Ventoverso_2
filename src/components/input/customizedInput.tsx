import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import "../header/Header.css";


export default function CustomizedInputBase() {
  return (
    <Box
      component="form"
      sx={{  display: 'flex', flexDirection:'row', alignItems: 'center', width: { xs:400 }, b: 'r', borderRadius: '120px', background: 'white' }}
    >
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
      className='input-search'
        placeholder="Buscar"
        inputProps={{ 'aria-label': 'Buscar', }}
      />
    </Box>
  );
}
