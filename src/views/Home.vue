<template>
  <default-layout>
    <Todo />
    <TodoContent />
    <Loading v-if="isShowbeforeLoading"/>
  </default-layout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout'
import Todo from '@/components/Todo'
import TodoContent from '@/components/TodoContent'
import Loading from '@/components/Loading'
import { mapState } from 'vuex'

export default {
    name: 'App',
    components: {
        DefaultLayout,
        Todo,
        TodoContent,
        Loading,
    },
    computed : {
           ...mapState({
                isShowbeforeLoading: state => state.myTodo.isShowbeforeLoading
            }),
    },
};
</script>