const arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];

const result = arr.reduce((preVal, curVal) => { 
    // preVal : 최초에는 배열의 첫번째 인자가 들어가고 그 이후부터는 return 값이 들어간다.
    // curVal : 다음 인자값
    return preVal + curVal;
});

console.log(`result : ${result}`);

let sum = 0;
arr.forEach(item => {
    sum += item;
});

console.log(`sum : ${sum}`);