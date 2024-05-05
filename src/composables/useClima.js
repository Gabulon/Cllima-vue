export default function useClima(){
    const obtenerClima = ({cuidad, pais}) =>{
        //importar el Api Key
        const key =import.meta.env.VITE_API_KEY
        //obtener lat y long
        const url=`http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1=&appid=${key}`
            console.log(url);

    }

    return{
        obtenerClima
    }
}