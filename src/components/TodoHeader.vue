<template>
    <header class="header">
        <h1>My Todo</h1>
        <p class="date">{{ today }}</p>
    </header>
</template>

<script>
    export default {
        name: 'TodoHeader',
        props: {
              today: String
        }

    };
</script>

<style lang="scss" scoped>
    .header {
        padding: 30px 0 40px;
        display: flex;
        justify-content: space-between;
        color: #fff;
    }
</style>