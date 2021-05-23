<template>
    <div class="form-item">
        <input 
            type="text"
            placeholder="Enter your task here"
            v-model="todoData"
            @keyup.enter="addList()" />
        <button @click="addList" class="btn"><i class="ico-arr"></i>확인</button>
    </div>
</template>

<script>
    export default {
        name: 'TodoInput',
        data() {
            return {
                todoData: '',
            }
        },
        methods: {
            addList() {
                if (this.todoData !== '') {
                    this.$store.dispatch('addList', { text: this.todoData })
                    this.clearInput()
                } else {
                    alert('할 일을 입력해주세요.')
                }
            },
            clearInput() {
                this.todoData = ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    .form-item {
        position: relative;
        padding-bottom: 50px;
        input {
            color: $white;
        }
        .btn {
            font-size: 0;
            width: 30px;
            height: 30px;
            border-radius: 100%;
            position: absolute;
            right: 15px;
            top: 10px;
            background: $white;
            @include displayFlex;

            .ico-arr {
                @include iconArrow(right, 16px, 14px, 1px);
            }
        }
    }
</style>