<template>
    <div class="intro">
        <p class="title">{{ hello }}, {{ userDevice }}</p>
        <p class="todo-task">
            You've got
            <span class="task-count">
                <em class="focus">{{ taskCount }}</em>
                /{{ taskTotal }}
            </span>
            tasks today!
        </p>
    </div>
</template>

<script>
    import NowDate from '@/components/module/NowDate.js'
    import { mapState, mapGetters } from "vuex";

    const nowDate = new NowDate()

    export default {
        name: 'TodoIntro',
        computed: {
            ...mapState({
                userDevice: state => state.myTodo.deviceId
            }),

            ...mapGetters({
                taskTotal: "totalListCount",
                taskCount: "countOfComplete"
            }),
        },
        data() {
            return {
                hello: ''
            }
        },
        mounted() {
            this.hello = nowDate.getTransHour()
        }
    }
</script>

<style lang="scss" scoped>
    .intro {
        color: #fff;
        font-size: 1.3em;
        line-height: 1.5em;
        .todo-task {
            font-size: 1.5em;
            line-height: 1.5em;
            padding: 40px 0;
        }
        .task-count {
            display: block;
            line-height: 1.5em;
            letter-spacing: 0.2em;
            margin-top: 10px;

            .focus {
                font-weight: 600;
                font-size: 1.5em;
            }
        }
    }
</style>