import { useState, useEffect } from 'react';
import './FetchGetMarcas.css';

interface marcas {
  id: number;
  marca: string;
  detalle: string;
}

function FetchGetMarcas() {
  const [marcas, setMarcas] = useState<marcas[]>([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3000/marcas')
          const responseData = await response.json();
          console.log(responseData)
          setMarcas(responseData);
        } catch (error) {
          console.error('Error al obtener los datos:', error);
        }
      };
    
      fetchData();
  }, []);

  return (
    <div className="marcas-container">
      <h1>Marcas de instrumentos de viento</h1>
      <ul className="marcas-list">
        {marcas.map(marca => (
          <li key={marca.id} className="marca-item">
            <h2>{marca.marca}</h2>
            <p>{marca.detalle}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchGetMarcas;
