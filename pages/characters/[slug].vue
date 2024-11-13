<template>
    <div class="character-detail">
        <FantasyCharacter :name="character.name" :image="character.image" :job="character.job"
            :description="character.description" :suitableAsPet="character.suitableAsPet"
            :dangerLevel="character.dangerLevel" :speed="character.speed" :cuddliness="character.cuddliness"
            :originRegion="character.originRegion" />
    </div>
</template>

<script setup>
const route = useRoute()
const character = await queryContent('characters').where({ _path: `/characters/${route.params.slug}` }).findOne()
</script>

<style scoped>
.character-detail {
    max-width: 800px;
    margin: auto;
    padding: 20px;
}
</style>