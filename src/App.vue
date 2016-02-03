<template>
    <div id="app">
        <button class="control" v-on:click="go">Go</button>
        <div class="item" v-for="col in arr[0]" track-by="$index">
            <div class="item-column" 
                v-bind:class="{ 'beSwapedColumn': $index == arr[1], 'swapColumn': $index == arr[2] }"
                v-bind:style="{height: col * 10 + 'px'}">
            </div>
            <div class="item-num">{{col}}</div>
        </div>
    </div>
</template>

<script>
import { quickSort } from './QuickSort'

var go = function () {
    let results = quickSort(arr);
    let ticks = setInterval(function() {
        if(results.length) {
            data.arr = results.shift();
        } else {
            clearInterval(ticks);
        }
    }, 100);
}

let arr = [1,3,12,21,19,6,17,4,2,8,5];
let data = {
    arr: [arr]
};

export default {
    data () {
      return data;
    },
    methods: {
        go: go
    }
};

go();

// for(let x in results) {
//     (function(x) {
//         setTimeout(function() {
//             data.pic = results[x];
//         }, x * 500);
//     })(x);
// }

</script>

<style>
.control {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 20px;
}
.item {
    display: inline-block;
    width: 20px;
    height: 10px;
    margin-right: 5px;
}
.item-column {
    background-color: green;
}
.item .item-num {
    text-align: center;
}
.item .beSwapedColumn {
    background-color: red;
}
.item .swapColumn {
    background-color: blue;
}
</style>