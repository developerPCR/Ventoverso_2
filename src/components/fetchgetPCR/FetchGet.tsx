import { useState, useEffect } from 'react';
import './FetchGet.css';

interface Subcategoria {
  id: number;
  nombre: string;
  descripcion: string;
  id_categoria: number;
  imagen: string;
}

interface Categoria {
  id: number;
  nombre: string;
  descripcion: string;
  subcategorias: Subcategoria[];
}

function FetchGet() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3001/categorias')
          const responseData = await response.json();
          console.log(responseData)
          setCategorias(responseData);
        } catch (error) {
          console.error('Error al obtener los datos:', error);
        }
      };
    
      fetchData();
  }, []);

  return (
    <div className="categorias">
      {categorias.map(categoria => (
        <div key={categoria.id} className="categoria">
          <h2>{categoria.nombre}</h2>
          <p>{categoria.descripcion}</p>
          <ul className="subcategorias">
            {categoria.subcategorias.map(subcategoria => (
              <li key={subcategoria.id} className="subcategoria">
                <h3>{subcategoria.nombre}</h3>
                <p>{subcategoria.descripcion}</p>
                <img src={subcategoria.imagen} alt={subcategoria.nombre} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );}

export default FetchGet;
