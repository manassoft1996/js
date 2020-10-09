var str = "manas ranjan pradhan";
function reverse(str) {
    console.log(str.split('').reverse().join(''));//nahdarp najnar sanam
}
reverse(str);

//2nd approach

function rev(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }
    console.log(reversed);//nahdarp najnar sanam
}
rev(str);

//3rd approach
function rev2(str) {
    let rev2 = '';
    for (let char of str) {
        rev2 = char + rev2;
    }
    console.log(rev2);//nahdarp najnar sanam
}
rev2(str);

//4th approach
function rev3(str) {
    console.log([...str].reduce((acc, char) => char + acc, ''));//nahdarp najnar sanam
}
rev3(str);