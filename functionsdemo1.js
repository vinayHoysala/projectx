function add(num1, num2) {
    return num1 + num2;
}

function areaOfCircle(radius) {
    return radius * radius * 3.142;
}

function isEven(num) {
    return num % 2 == 0;
}


function countDigits(num) {
    let count = 0;
    while (num != 0) {
        num = parseInt(num / 10);
        count++;
    }
    return count;
}

function makeTwice(num) {
    let count = countDigits(num);
    let result  = 0;
    switch(count){
        case 1:
            return num*10+num;
        case 2:
            return num*100+num;

        case 3:
            return num*1000+num;

        case 4:
            return num*10000+num;
    }
}

console.log(makeTwice(123));
console.log(makeTwice(6));
console.log(makeTwice(77));

/*

console.log(countDigits(100));
console.log(countDigits(12345));
console.log(countDigits(6));


console.log(isEven(123));
console.log(isEven(10));
console.log(isEven(11));
console.log(add(10,70));

console.log(areaOfCircle(123.123));

*/


