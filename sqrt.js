function SquareRoots(numbers) {
    //var total = 0;
    var arr = [];
    for (var i = 0; i < numbers.length; i++) {
        var sqrt = Math.sqrt(numbers[i]);
        //total = total + sqrt;
        arr.push(sqrt);
    }
    return arr;
}
console.log(SquareRoots([4, 9, 25]));