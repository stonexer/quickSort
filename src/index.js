var data = {
    pic: [1,2,31,3,12,21,23,32,6,5,67,4,2,8,5]
};

var vm = new Vue({
    el: '#app',
    data: data
});

var arr = [1,2,31,3,12,21,23,32,6,5,67,4,2,8,5];
var results = [];

function saveState(arr, left, right) {
    var state = [];
    for(var v in arr) {
        state.push(arr[v]);
    }

    results.push([state, left, right]);
}

function swap(arr, left, right) {
    var temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    saveState(arr, left, right);
}

function quickSort(arr, head, end) {
    if(typeof head == "undefined") head = 0;
    if(typeof end == "undefined") end = arr.length - 1;

    if(head == end) return;

    var startIndex = head;
    var pivot = arr[end];

    for(var v = head; v < end; v++) {
        if(arr[v] < pivot) {
            swap(arr, startIndex++, v);
        }
    }
    swap(arr, startIndex, end);

    if(startIndex > head) quickSort(arr, head, startIndex - 1);
    if(startIndex < end) quickSort(arr, startIndex + 1, end);

    return;
}


quickSort(arr);

for(var x in results) {
    (function(x) {
        setTimeout(function() {
            data.pic = results[x];
        }, x * 500);
    })(x);
}