<script setup>
import Formulario from './components/Formulario.vue'
import UseClima from './composables/useClima'
import Clima from './components/Clima.vue';

const {obtenerClima,clima,mostrarClima}= UseClima()


</script>

<template>
  <h1 class="titulo">Buscador de Clima</h1>
  <div class="contenedor buscador-clima">

    <Formulario
      @obtener-clima="obtenerClima"
    />
    <Clima
    v-if="mostrarClima"
    />
    
  </div>
 
</template>
