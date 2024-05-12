import {ref,computed} from 'vue'
import axios from "axios";
export default function useClima() {

  const clima = ref({})

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
      clima.value=resultado
      
    } catch (error) {}
  }
const mostrarClima = computed(()=>{
  return Object.values(clima.value).length>0
})
const formatearTemperatura = temperatura => ParseInt(temperatura -273.15)

  return {
    obtenerClima,
    clima,
    mostrarClima,
    formatearTemperatura
  };
}
