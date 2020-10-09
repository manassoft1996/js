var num = 1234;
var rev = 0;
while (num != 0) {
    rev = (rev * 10) + (num % 10);
    num = parseInt(num / 10);
}
console.log(rev);