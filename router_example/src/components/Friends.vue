<template>
<div>
    <h1>Friends</h1>
    {{id}}
    {{age}}
    {{type}}
</div>
</template>

<script>
export default {
    props: ['id', 'age', 'type']
}
</script>

<style scoped>

</style>
