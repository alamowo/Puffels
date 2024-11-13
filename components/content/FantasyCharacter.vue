<template>
    <div class="character-card">
      <h2>{{ name }}</h2>
      <img :src="image" :alt="`Bild von ${name}`" class="character-image" />
      <p><strong>Job:</strong> {{ job }}</p>
      <p><strong>Beschreibung:</strong> {{ description }}</p>
      <p><strong>Als Haustier geeignet?</strong> {{ suitableAsPet ? 'Ja' : 'Nein' }}</p>
  
      <div class="character-attributes">
        <p><strong>Gefährlichkeit:</strong> {{ dangerLevel }} / 5</p>
        <p><strong>Schnelligkeit:</strong> {{ speed }} / 5</p>
        <p><strong>Kuscheligkeit:</strong> {{ cuddliness }} / 5</p>
      </div>
  
      <p><strong>Herkunft:</strong> {{ originRegion }}</p>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  // Definiere die erwarteten Props für die Charaktereigenschaften
  const props = defineProps({
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    job: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    suitableAsPet: {
      type: Boolean,
      required: true
    },
    dangerLevel: {
      type: Number,
      required: true,
      validator: value => value >= 0 && value <= 5
    },
    speed: {
      type: Number,
      required: true,
      validator: value => value >= 0 && value <= 5
    },
    cuddliness: {
      type: Number,
      required: true,
      validator: value => value >= 0 && value <= 5
    },
    originRegion: {
      type: String,
      required: true
    }
  })
  </script>
  
  <style scoped>
  .character-card {
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 8px;
    max-width: 400px;
    margin: auto;
  }
  
  .character-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 16px;
  }
  
  .character-attributes p {
    margin: 4px 0;
  }
  </style>
  