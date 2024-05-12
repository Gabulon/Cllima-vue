import axios from "axios";
export default function useClima() {
  const obtenerClima =async ({ cuidad, pais }) => {
    //importar el Api Key
    const key = import.meta.env.VITE_API_KEY;

    try {
      //obtener lat y long
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1=&appid=${key}`;
      
      const {data} =await axios(url)
      const{lat,lon}=data[0]

      const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon={lon}&appid=${key}`
      const {data:resultado} =await(urlClima)
      
    } catch (error) {}
  };

  return {
    obtenerClima,
  };
}
