<template>
    <div class="character-tile">
        <img :src="character.image" :alt="`Bild von ${character.name}`" class="character-image" />
        <h3>{{ character.name }}</h3>
        <p>{{ character.job }}</p>
        <p>{{ character.originRegion }}</p>
        <p><strong>Gefährlichkeit:</strong> {{ character.dangerLevel }}</p>
        <NuxtLink :to="`${character._path}`" class="details-link">Mehr erfahren</NuxtLink>
    </div>
</template>

<script setup>
defineProps({
    character: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>
.character-tile {
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 8px;
    width: 200px;
    text-align: center;
}

.character-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

.details-link {
    margin-top: 8px;
    display: inline-block;
    color: blue;
}
</style>