<template>
    <div id="app">
        <div class="item" v-for="col in pic[0]" track-by="$index">
            <div class="column" 
                v-bind:class="{ 'beSwapedColumn': $index == pic[1], 'swapColumn': $index == pic[2] }"
                v-bind:style="{height: col * 10 + 'px'}">
             </div>
             <div class="num">
                {{col}}
             </div>
        </div>
    </div>
</template>

<script>
import { quickSort } from './QuickSort'

var data = {
    pic: [1,2,31,3,12,21,23,19,6,5,17,4,2,8,5]
};

export default {
    data () {
      return data;
    }
};

var results = quickSort(data.pic);

for(var x in results) {
    (function(x) {
        setTimeout(function() {
            data.pic = results[x];
        }, x * 500);
    })(x);
}

</script>

<style>
.item {
    display: inline-block;
    width: 20px;
    height: 10px;
    margin-right: 5px;
}
.column {
    background-color: green;
}
.item .num {
    text-align: center;
}
.item .beSwapedColumn {
    background-color: red;
}
.item .swapColumn {
    background-color: blue;
}
</style>