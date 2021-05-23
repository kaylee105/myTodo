<template>
    <header class="header">
        <h1>My Todo</h1>
        <p class="date">{{ today }}</p>
    </header>
</template>

<script>
    import NowDate from '@/components/module/NowDate.js'

    const nowDate = new NowDate()

    export default {
        name: 'TodoHeader',
        data() {
            return {
                today: ''
            }
        },
        mounted() {
            this.today = nowDate.getTransDate()
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