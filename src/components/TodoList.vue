<template>
    <ul class="todo-list">
        <li v-for="(item, index) of StateItems" :key="index">
            <BaseCheck
                :name="`id-${item.created_at}`"
                :id="`id-${item.created_at}`"
                :msg="item.text"
                :itemIdx="index"
                :item="item"></BaseCheck>
            <div class="util-wrap">
                <button class="btn-del" @click="clearItem( item.id, index )"></button>
                <span class="item-date"> {{ item.created_at }} </span>
            </div>
        </li>
    </ul>
</template>
<script>
    import BaseCheck from '@/components/TodoCheck.vue'
    import { mapState } from 'vuex'

    export default {
        name: 'TodoList',
        components: {
            BaseCheck,
        },
        computed: {
            ...mapState({
                StateItems: state => state.myTodo.writeList
            })
        },
        methods: {
            clearItem(tmpId, tmpIdx) {
                this.$store.dispatch('removeList', {id: tmpId, idx: tmpIdx})
            },
        }
    }
</script>

<style lang="scss">
    .todo-list {
        li {
            @include displayFlex($valFlexBetweenStart...);
            position: relative;
            background-color: $white;
            border-radius: 5px;
            margin-bottom: 10px;
            @include box-shadow($defaultShadow2...);
            padding: 1rem;

            .util-wrap {
                color: $gray9;
                margin-left: 10px;
            }
        }
        .btn-del {
            position: relative;
            @include itemSize(15px, 15px);
            @include icon-x(14, $gray9, 1);
            @include displayFlex()
        }
        .item-date {
            position: absolute;
            bottom: 0.7rem;
            right: 1rem;
            font-size: 0.5rem;
        }
    }
</style>