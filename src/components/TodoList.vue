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
                <span class="item-date"> {{ changeFormat(item.created_at) }} </span>
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
            //axios로 변경해야해서 삭제필요
            changeFormat(t) {
                const date = new Date(t)
                const year = date.getFullYear()
                const month = '0' + (date.getMonth() + 1)
                const day = '0' + date.getDate()
                const hour = '0' + date.getHours()
                const minute = '0' + date.getMinutes()
                const second = '0' + date.getSeconds()
                return year + '-' + month.substr(-2) + '-' + day.substr(-2) + ' ' + hour.substr(-2) + ':' + minute.substr(-2) + ':' + second.substr(-2)
            }
        },
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