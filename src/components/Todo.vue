<template>
    <section class="visual" v-bind:class="{ dark : displayMode }">
        <div class="inner">
            <TodoHeader/>
            <TodoIntro/>
            <TodoInput/>
        </div>
    </section>
</template>

<script>
    import TodoHeader from '@/components/TodoHeader'
    import TodoIntro from '@/components/TodoIntro'
    import TodoInput from '@/components/TodoInput'
    import NowDate from '@/components/module/NowDate.js'

    const nowDate = new NowDate()

    export default ({
        name: 'Todo',
        components: {
            TodoHeader,
            TodoIntro,
            TodoInput,
        },
        data() {
            return {
                displayMode: nowDate.getTransDisplay()
            }
        }
    })
</script>

<style lang="scss" scoped>
    .visual {
        position: relative;
        background: url('~@/assets/images/bg-morning.jpg') center no-repeat;
        background-size: cover;
        &.dark {
            background: url('~@/assets/images/bg-evening.jpg') center no-repeat;
            background-size: cover;
        }
    }
</style>