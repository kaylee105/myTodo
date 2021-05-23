<template>
    <div class="loading">
        <div class="dot">
            <span></span>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'loading'
    }
</script>
<style lang="scss">
    $bg-color: #fff;
    $color1: #1368a7;
    $color2: #f06848;
    $color3: #fab956;
    $color4: #bf286b;
    $dimension: 14px;
    $animation-speed: 1.2s;
    @function shadow($shadow-dim, $color1, $color2) {
        @return $shadow-dim $shadow-dim $color1, $shadow-dim * -1 $shadow-dim * -1 $color2;
    }
    @function animation($name, $duration, $curve, $period) {
        @return $name $duration $curve $period;
    }
    .loading {
        position: fixed;
        top: 50%;
        left: 50%;
        z-index: 99;
    }
    .dot {
        animation: animation(spin, 1.2s, linear, infinite);
        span {
            width: $dimension;
            height: $dimension;
            transform: rotate(75deg);
            &::before, &::after {
                content: "";
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: $dimension;
                height: $dimension;
                border-radius: $dimension;
                animation: animation(load, 1.2s, linear, infinite);
            }
            &::before {
                box-shadow: shadow(18px, $color1, $color2);
            }
            &::after {
                box-shadow: shadow(18px, $color3, $color4);
                transform: translate(-50%, -50%) rotate(90deg);
            }
        }
    }
    @keyframes load {
        50% {
            height: $dimension * 3;
        }
    }
    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }
    }
</style>