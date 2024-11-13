<template>
    <section class="character-grid">
      <h1>Charaktere Übersicht</h1>
      <div class="grid">
        <CharacterTile
          v-for="character in characters"
          :key="character._id"
          :character="character"
        />
      </div>
    </section>
  </template>
  
  <script setup>
//   import { queryContent } from '@nuxt/content'
//   import CharacterTile from '~/components/CharacterTile.vue'
  
  const characters = await queryContent('characters').find()
  </script>
  
  <style scoped>
  .character-grid {
    max-width: 1200px;
    margin: auto;
    padding: 20px;
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
  }
  </style>
  