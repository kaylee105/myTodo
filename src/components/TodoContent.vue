<template>
    <div class="content">
        <div class="inner">
            <TodoUtil></TodoUtil>
            <TodoList></TodoList>
            <TodoFooter></TodoFooter>
        </div>
    </div>
</template>
<script>
import TodoUtil from '@/components/TodoUtil'
import TodoList from '@/components/TodoList'
import TodoFooter from '@/components/TodoFooter'

export default {
    name: 'TodoContent',
    components: {
        TodoUtil,
        TodoList,
        TodoFooter
    },
}
</script>
<style lang="scss">
    body {
        background-color: #f5f5f5;
    }
    .inner {
        max-width: 720px;
        padding: 0 1rem;
        margin: auto;
    }
</style>